export const Footer = () => {
  return (
    <footer id="footer" className="mt-auto">
      <div className="px-3">
        <div className="d-flex justify-content-center align-items-center">
          <img src="/assets/img/logo.png" className="img-fluid logo-dev me-3" />
          <div>
            <p className="mb-0">
              <strong className="mb-0">Anderson </strong>
            </p>
            <p className="mb-0">
              <strong className="mb-0">Romero ©</strong>
            </p>
          </div>
        </div>
        {/* <div className="copyright">
          © Copyright
          <strong>
            <span>{new Date().getFullYear()}</span>
          </strong>
        </div> */}
        <hr />
        <div className="technologies-used">
          <div className="d-flex justify-content-center align-items-center">
            <p className="mb-0 me-2 text-decoration-underline">Technologies Used</p>
            <img
              src="/assets/img/skills/react-logo.png"
              className="img-fluid rounded"
              width={28}
              height={30}
            />
            <img
              src="/assets/img/skills/bootstrap.png"
              className="img-fluid mx-1"
              width={28}
              height={30}
            />
            <img src="/assets/img/skills/vite.png" className="img-fluid" width={28} height={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};
