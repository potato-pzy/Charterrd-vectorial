import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <img 
          src="https://www.figma.com/api/mcp/asset/8e520679-ef44-44fb-be1d-f5d69bab3c49" 
          alt="Footer background" 
          className="footer-bg-image"
        />
      </div>
      
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="41" viewBox="0 0 65 41" fill="none">
                <g clipPath="url(#clip0_0_242)">
                  <path d="M36.165 0L32.7882 9.26001H9.2915V0H36.165Z" fill="#F9F9FB" />
                  <path d="M38.6219 31.74L35.0731 41H0V16.4141L3.24545 11.6884H9.29149V31.74H38.6219Z" fill="#F9F9FB" />
                  <path d="M64.9999 0L50.0769 41H39.3093L54.3233 0H64.9999Z" fill="#F9F9FB" />
                </g>
                <defs>
                  <clipPath id="clip0_0_242">
                    <rect width="65" height="41" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="footer-company-name">Chartered Vectorial</p>
          </div>
          <p className="footer-copyright">© 2025 Chartered Vectorial. All rights reserved.</p>
        </div>

        <div className="footer-center">
          <p className="footer-section-title">Chartered Vectorial</p>
          <nav className="footer-nav">
            <a href="#about" className="footer-link">About</a>
            <a href="#products" className="footer-link">Products & Solutions</a>
            <a href="#careers" className="footer-link">Careers</a>
            <a href="#terms" className="footer-link">Terms of Use</a>
            <a href="#privacy" className="footer-link">Privacy Policy</a>
          </nav>
        </div>

        <div className="footer-right">
          <p className="footer-section-title">Get Connected</p>
          <nav className="footer-nav">
            <a href="#blog" className="footer-link footer-link-underline">Blog</a>
            <a href="#newsletter" className="footer-link footer-link-underline">Newsletter</a>
          </nav>
          <div className="footer-social">
            <a href="#" className="footer-social-link">
              <img 
                src="https://www.figma.com/api/mcp/asset/945a039f-a9fd-4009-9669-f6a943f603fd" 
                alt="Social icon 1" 
              />
            </a>
            <a href="#" className="footer-social-link">
              <img 
                src="https://www.figma.com/api/mcp/asset/65e0eb4b-343a-49cb-a070-b0f65e0386e4" 
                alt="Social icon 2" 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





