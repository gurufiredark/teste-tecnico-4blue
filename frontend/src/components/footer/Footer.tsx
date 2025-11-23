import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <p>Desenvolvido para 4Blue • {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
