import { useState } from "react";
import styles from "./ChatWithReggie.module.css";

const API_URL = import.meta.env.VITE_CHAT_API;

export default function ChatWithReggie() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderMessageText = (text) => {
  return text.split(/\n+/).map((line, idx) => (
    <p key={idx} style={{ margin: "4px 0" }}>
      {line}
    </p>
  ));
};


  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: "you", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage = {
        from: "bot",
        text: data.reply || data.error || "No response",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error talking to API" },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Chat with Reggie's Portfolio AI</h2>

      <div className={styles.chatBox}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`${styles.message} ${
              m.from === "you" ? styles.you : styles.bot
            }`}
          >
            {renderMessageText(m.text)}
          </div>
        ))}

        {loading && <div className={styles.thinking}>Thinking…</div>}
      </div>

      <form onSubmit={sendMessage} className={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my experience…"
          className={styles.input}
        />
        <button type="submit" disabled={loading} className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}
