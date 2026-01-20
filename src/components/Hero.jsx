import './Hero.css';
import Navbar from './Navbar';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <Navbar />

                {/* Main Content */}
                <div className="hero-main">
                    <h1 className="hero-title">
                        Engineering Intelligence. Creating Value.
                    </h1>
                    <p className="hero-subtitle blauer-neue">
                        AI-NATIVE. EMBEDDED. STRATEGY TO PRODUCTION
                    </p>
                    <button className="btn-primary">
                        <div className="btn-primary-text">BOOK A DISCOVERY CALL</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
