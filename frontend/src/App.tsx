import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

type User = "A" | "B" | null;

function App() {
  const [activeUser, setActiveUser] = useState<User>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!activeUser && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [activeUser, location, navigate]);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as User;
    setActiveUser(value);
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
            <Link to="/chat" className="nav-link">
              <button className="nav-button">💬 Chat</button>
            </Link>
            <Link to="/historico" className="nav-link">
              <button className="nav-button">📋 Histórico</button>
            </Link>
          </nav>
        )}
      </header>
      <Home activeUser={activeUser} />
      <Footer />
    </div>
  );
}

export default App;
