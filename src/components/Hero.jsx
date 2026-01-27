import './Hero.css';
import Navbar from './Navbar';
import heroVideo from '../assets/Output_converted(3).mp4';

function Hero() {
    return (
        <div className="hero">
            <video 
                className="hero-video"
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
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
