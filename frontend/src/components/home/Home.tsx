import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "../chat/Chat";
import History from "../history/History";
import "./Home.css";

type User = "A" | "B" | null;

function Home({ activeUser }: { activeUser: User }) {
  return (
    <main className="app-main">
      {!activeUser ? (
        <div className="welcome-screen">
          <div className="welcome-card">
            <div className="welcome-icon">👋</div>
            <h2>Bem-vindo ao Sistema de Chat</h2>
            <p>Para começar, selecione um usuário no menu acima</p>
            <div className="features">
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <span>Envie mensagens instantâneas</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🤖</span>
                <span>Receba respostas automáticas</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📋</span>
                <span>Acesse seu histórico completo</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/chat" replace />} />
          <Route path="/chat" element={<Chat activeUser={activeUser} />} />
          <Route
            path="/historico"
            element={<History activeUser={activeUser} />}
          />
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
      )}
    </main>
  );
}

export default Home;
