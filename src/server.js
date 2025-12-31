import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const url = process.env.AWS_CHAT_URL;

    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const response = await axios.post(
      url,
      { message },
      { headers: { "Content-Type": "application/json" } }
    );

    return res.json(response.data);
  } catch (error) {
    console.log(error?.response?.data || error.message);
    return res.status(500).json({ error: "Request failed" });
  }
});

// --- Serve React in production ---
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
