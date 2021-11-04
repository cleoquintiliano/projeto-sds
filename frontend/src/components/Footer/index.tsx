const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            className="link-decoration"
            href="https://github.com/cleoquintiliano"
            target="_blank"
            rel="noreferrer"
          >
            Cléo Quintiliano
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              className="link-decoration"
              href="https://www.linkedin.com/in/cleoquintiliano/"
              target="_blank"
              rel="noreferrer"
            >
              @cleoquintiliano
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
