import { useEffect, useState } from "react";
import "./History.css";

interface Message {
  id: number;
  user: string;
  message: string;
  is_response: boolean;
  created_at: string;
}

interface HistoryProps {
  activeUser: "A" | "B";
}

function History({ activeUser }: HistoryProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHistory();
  }, [activeUser]);

  const fetchHistory = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:8000/api/chat/history/${activeUser}/`
      );

      if (!response.ok) {
        throw new Error("Erro ao carregar histórico");
      }

      const data = await response.json();
      setMessages(data.messages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="history-container">
        <div className="loading">Carregando histórico...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="history-container">
        <div className="error-message">{error}</div>
        <button onClick={fetchHistory} className="retry-button">
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <h2>Histórico - Usuário {activeUser}</h2>
        <button onClick={fetchHistory} className="refresh-button">
          Atualizar
        </button>
      </div>

      {messages.length === 0 ? (
        <div className="empty-state">
          <p>Nenhuma mensagem no histórico</p>
        </div>
      ) : (
        <div className="history-list">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`history-item ${
                msg.is_response ? "response" : "user-message"
              } `}
            >
              <div className="history-item-header">
                <strong>
                  {msg.is_response ? "Sistema" : `Usuário ${msg.user} `}
                </strong>
                <span className="history-time">
                  {new Date(msg.created_at).toLocaleString("pt-BR")}
                </span>
              </div>
              <p className="history-message">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
