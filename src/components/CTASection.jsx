import './CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <img 
          src="https://www.figma.com/api/mcp/asset/1d146db6-0b7a-41f5-bada-8d361b9ff2a3" 
          alt="Background pattern" 
          className="cta-bg-image"
        />
      </div>
      <div className="cta-content">
        <h2 className="cta-title">What comes next is worth building together.</h2>
        <button className="cta-button">BOOK A DISCOVERY CALL</button>
      </div>
    </section>
  );
}

export default CTASection;





