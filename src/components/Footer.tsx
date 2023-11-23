export const Footer = () => {
  return (
    <footer id="footer" className="mt-auto">
      <div className="container">
        <div className="text-center">
          <img src="assets/img/logo.png" className="img-fluid logo-dev" />
        </div>
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>{new Date().getFullYear()}</span>
          </strong>
        </div>
        <div className="credits">
          Designed by{" "}
          <a className="fw-bold" href="https://github.com/andersonar12" target="_blank">
            Anderson Romero
          </a>
        </div>
      </div>
    </footer>
  );
};
