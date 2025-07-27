
const fs = require("fs");
const path = require("path");

exports.handler = async function () {
  const filePath = path.join(__dirname, "../../public/whitelist.json");
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not read whitelist.json" }),
    };
  }
};
