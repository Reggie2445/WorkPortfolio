import express from "express";
import axios from "axios";
import env from "../env.json" with { type: "json" };

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const url = env.VITE_CHAT_API;
    const { message } = req.body;

    const response = await axios.post(url, { message }, {
      headers: { "Content-Type": "application/json" },
    });

    return res.json(response.data);
  } catch (error) {
    console.log(error?.response?.data || error);
    return res.status(500).json({ error: "Request failed" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
