const fs = require("fs");
const path = require("path");

const buildInfoPath = path.join(__dirname, "../components/build-info.json");
const packageJsonPath = path.join(__dirname, "../package.json");

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const version = packageJson.version || "1.0.0";

const buildInfo = {
  version: version,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));
console.log("Build info generated. Version:", version, "Timestamp:", buildInfo.timestamp);
