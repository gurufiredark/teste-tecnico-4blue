import { useState } from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import History from "./components/history/History";

type User = "A" | "B" | null;

function App() {
  const [activeUser, setActiveUser] = useState<User>(null);
  const [currentView, setCurrentView] = useState<"chat" | "history">("chat");

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as User;
    setActiveUser(value);
    setCurrentView("chat"); // Volta para chat ao trocar de usuário
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>Sistema de Chat - 4Blue</h1>
          <p className="subtitle">Teste Técnico - Chatbot de Atendimento</p>
        </div>

        <div className="user-selector-container">
          <label htmlFor="user-select" className="user-label">
            Selecione o Usuário:
          </label>
          <select
            id="user-select"
            className="user-select"
            value={activeUser || ""}
            onChange={handleUserChange}
          >
            <option value="" disabled>
              Escolha um usuário
            </option>
            <option value="A">Usuário A</option>
            <option value="B">Usuário B</option>
          </select>
        </div>

        {activeUser && (
          <nav className="navigation">
            <button
              className={`nav-button ${currentView === "chat" ? "active" : ""}`}
              onClick={() => setCurrentView("chat")}
            >
              💬 Chat
            </button>
            <button
              className={`nav-button ${
                currentView === "history" ? "active" : ""
              }`}
              onClick={() => setCurrentView("history")}
            >
              📋 Histórico
            </button>
          </nav>
        )}
      </header>

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
          <>
            {currentView === "chat" ? (
              <Chat activeUser={activeUser} />
            ) : (
              <History activeUser={activeUser} />
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Desenvolvido para 4Blue • {new Date().getFullYear()} • by Gabriel
          Rodrigues
        </p>
      </footer>
    </div>
  );
}

export default App;
