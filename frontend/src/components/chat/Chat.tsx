import { useState } from "react";
import "./Chat.css";

interface Message {
  id: number;
  user: string;
  message: string;
  is_response: boolean;
  created_at: string;
}

interface ChatProps {
  activeUser: "A" | "B";
}

function Chat({ activeUser }: ChatProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!message.trim()) {
      setError("Por favor, digite uma mensagem");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/chat/send/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: activeUser,
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      const data = await response.json();

      // Adiciona tanto a mensagem do usuário quanto a resposta
      setMessages((prev) => [...prev, data.user_message, data.bot_response]);
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat - Usuário {activeUser}</h2>
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <p>Nenhuma mensagem ainda. Comece a conversar!</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${
                msg.is_response ? "response" : "user-message"
              }`}
            >
              <div className="message-content">
                <strong>{msg.is_response ? "Sistema:" : `Você:`}</strong>
                <p>{msg.message}</p>
              </div>
              <span className="message-time">
                {new Date(msg.created_at).toLocaleTimeString("pt-BR")}
              </span>
            </div>
          ))
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="input-container">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          disabled={loading}
          rows={3}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="send-button"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}

export default Chat;
