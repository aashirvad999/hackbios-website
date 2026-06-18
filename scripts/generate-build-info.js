const fs = require("fs");
const path = require("path");

// Resolve path to components/build-info.json
const buildInfoPath = path.join(__dirname, "../components/build-info.json");

const buildInfo = {
  timestamp: new Date().toISOString(),
};

// Write build-info JSON file
fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));
console.log("Build deployment timestamp generated:", buildInfo.timestamp);
