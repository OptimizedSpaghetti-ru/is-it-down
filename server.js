const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// List of services to check
const SERVICES = [
  { id: "gcash", name: "GCash", url: "https://www.gcash.com/" },
  { id: "maya", name: "Maya", url: "https://www.maya.ph/" },
  { id: "bpi", name: "BPI", url: "https://www.bpi.com.ph/" },
  { id: "bdo", name: "BDO", url: "https://www.bdo.com.ph/" },
  { id: "unionbank", name: "UnionBank", url: "https://www.unionbankph.com/" },
  { id: "shopee", name: "Shopee PH", url: "https://shopee.ph/" },
  { id: "lazada", name: "Lazada PH", url: "https://www.lazada.com.ph/" },
  { id: "pldt", name: "PLDT", url: "https://pldthome.com/" },
  { id: "globe", name: "Globe", url: "https://www.globe.com.ph/" },
  { id: "converge", name: "Converge", url: "https://convergeict.com/" },
];

/**
 * Check the status of a single service
 */
async function checkService(service) {
  const startTime = Date.now();

  try {
    const response = await axios.get(service.url, {
      timeout: 8000,
      validateStatus: (status) => status < 500, // Accept any status < 500 as "up"
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    const duration = Date.now() - startTime;
    const status = duration > 2500 ? "SLOW" : "UP";

    return {
      service,
      status,
      duration,
      statusCode: response.status,
    };
  } catch (error) {
    const duration = Date.now() - startTime;

    return {
      service,
      status: "DOWN",
      duration,
      error: error.message,
    };
  }
}

/**
 * API endpoint to check a single service
 */
app.get("/api/check/:serviceId", async (req, res) => {
  const service = SERVICES.find((s) => s.id === req.params.serviceId);

  if (!service) {
    return res.status(404).json({ error: "Service not found" });
  }

  const result = await checkService(service);
  res.json(result);
});

/**
 * API endpoint to check all services
 */
app.get("/api/check-all", async (req, res) => {
  const promises = SERVICES.map((service) => checkService(service));
  const results = await Promise.allSettled(promises);

  const formattedResults = results.map((result) => {
    if (result.status === "fulfilled") {
      return result.value;
    } else {
      return {
        service: { id: "unknown", name: "Unknown", url: "" },
        status: "DOWN",
        duration: 0,
        error: result.reason.message,
      };
    }
  });

  res.json(formattedResults);
});

/**
 * API endpoint to get list of services
 */
app.get("/api/services", (req, res) => {
  res.json(SERVICES);
});

/**
 * Health check endpoint
 */
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ PH Service Status API running on http://localhost:${PORT}`);
  console.log(`📊 API Endpoints:`);
  console.log(`   - GET /api/services - List all services`);
  console.log(`   - GET /api/check/:serviceId - Check single service`);
  console.log(`   - GET /api/check-all - Check all services`);
  console.log(`   - GET /health - Health check`);
});
