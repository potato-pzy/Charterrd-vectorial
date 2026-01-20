import './WhoAreWeSection.css';
import CTASection from './CTASection';
import Footer from './Footer';
import Navbar from './Navbar';
import { TextGradientScroll } from './ui/text-gradient-scroll';

function WhoAreWeSection() {
    return (
        <div className="whoarewe-page">
            {/* Ambient Background Effects */}
            <div className="whoarewe-background-effects">
                <div className="tech-grid"></div>
                <div className="gradient-radial"></div>
            </div>

            <Navbar />

            <main className="whoarewe-main">
                {/* Hero Section */}
                <section className="whoarewe-hero">
                    <h1 className="whoarewe-hero-title">
                        AI changes the <br className="whoarewe-hero-break" />
                        equation in how value is created
                    </h1>

                    <p className="whoarewe-hero-subtitle">
                        Chartered Vectorial is an AI-native, applied AI firm. We use AI to accelerate how we consult and how we engineer, so clients get to production faster.
                    </p>

                    <a href="#" className="whoarewe-hero-btn">Book a discovery call</a>
                </section>

                {/* Content Section */}
                <section className="whoarewe-content">
                    <div className="whoarewe-content-text">
                        <TextGradientScroll 
                            text="The traditional model separates thinking from doing. Consultants advise. Engineers build. Handoffs create gaps. Pilots stall."
                            type="letter"
                            textOpacity="soft"
                            className="whoarewe-para"
                        />

                        <TextGradientScroll 
                            text="We built Chartered Vectorial to close that gap, and we did it with AI."
                            type="letter"
                            textOpacity="soft"
                            className="whoarewe-para"
                        />

                        <TextGradientScroll 
                            text="Our AI agents validate transformation hypotheses with consulting-grade rigor. Our AI agents debate approaches, write code, and review each other's work before anything ships. Humans stay in control at every gate."
                            type="letter"
                            textOpacity="soft"
                            className="whoarewe-para"
                        />

                        <TextGradientScroll 
                            text="We're an AI-native consulting firm focused on AI transformation. We don't just advise on AI, we use it to deliver."
                            type="letter"
                            textOpacity="soft"
                            className="whoarewe-para whoarewe-highlight"
                        />
                    </div>
                </section>

                {/* Continuation Section */}
                <section className="whoarewe-continuation">
                    {/* Top Section: Grid Layout */}
                    <div className="whoarewe-continuation-grid">
                        {/* Left Column: Main Headline */}
                        <div className="whoarewe-continuation-left">
                            <div className="whoarewe-continuation-sticky">
                                <h1 className="whoarewe-continuation-headline">
                                    Small by design.<br />
                                    Fast by conviction.<br />
                                    Built for companies ready to move.
                                </h1>
                            </div>
                        </div>

                        {/* Right Column: Content Grid */}
                        <div className="whoarewe-continuation-right">
                            {/* 2x2 Feature Grid */}
                            <div className="whoarewe-features-grid">
                                {/* Feature 1 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">Leverage over headcount</h3>
                                    <p className="whoarewe-feature-text">
                                        A small team with the right systems can out-deliver large teams. Our AI agents multiply what each person can move.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">Strategy that ships</h3>
                                    <p className="whoarewe-feature-text">
                                        Slide decks don't create value. AI systems in production do. We stay until the work delivers.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">
                                        Built by agents, <br className="whoarewe-feature-break" />governed by humans
                                    </h3>
                                    <p className="whoarewe-feature-text">
                                        A small team with the right systems can out-deliver large teams. Our AI agents multiply what each person can move.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="whoarewe-feature-item">
                                    <h3 className="whoarewe-feature-title">
                                        Access, not <br className="whoarewe-feature-break" />exclusivity
                                    </h3>
                                    <p className="whoarewe-feature-text">
                                        A small team with the right systems can out-deliver large teams. Our AI agents multiply what each person can move.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Wide Text */}
                            <div className="whoarewe-continuation-bottom">
                                <p className="whoarewe-continuation-bottom-text">
                                    We embed with client teams from strategy through production. No handoffs. No abandoned pilots. No reports that gather dust. We think with you. We build with you. We stay until it works.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: The Cards */}
                    <div className="whoarewe-cards-grid">
                        {/* Card 1: We Think */}
                        <div className="whoarewe-card">
                            <div className="whoarewe-card-image whoarewe-card-think">
                                <div className="whoarewe-card-overlay"></div>
                                <div className="whoarewe-card-gradient"></div>
                                <div className="whoarewe-card-icon">
                                    <span className="iconify" data-icon="lucide:brain-circuit" data-width="64" data-height="64" style={{strokeWidth: 1}}></span>
                                </div>
                            </div>
                            <h2 className="whoarewe-card-title">We Think</h2>
                        </div>

                        {/* Card 2: We Build */}
                        <div className="whoarewe-card">
                            <div className="whoarewe-card-image whoarewe-card-build">
                                <div className="whoarewe-card-build-gradient"></div>
                                <div className="whoarewe-card-build-glow"></div>
                                <div className="whoarewe-card-icon">
                                    <span className="iconify" data-icon="lucide:hammer" data-width="64" data-height="64" style={{strokeWidth: 1}}></span>
                                </div>
                            </div>
                            <h2 className="whoarewe-card-title">We Build</h2>
                        </div>

                        {/* Card 3: We Stay */}
                        <div className="whoarewe-card">
                            <div className="whoarewe-card-image whoarewe-card-stay">
                                <div className="whoarewe-card-stay-overlay"></div>
                                <div className="whoarewe-card-stay-gradient"></div>
                                <div className="whoarewe-card-icon">
                                    <span className="iconify" data-icon="lucide:infinity" data-width="64" data-height="64" style={{strokeWidth: 1}}></span>
                                </div>
                            </div>
                            <h2 className="whoarewe-card-title">We Stay</h2>
                        </div>
                    </div>
                </section>
            </main>

            {/* Background texture/gradients */}
            <div className="whoarewe-continuation-bg">
                <div className="whoarewe-continuation-bg-circle whoarewe-continuation-bg-circle-1"></div>
                <div className="whoarewe-continuation-bg-circle whoarewe-continuation-bg-circle-2"></div>
            </div>

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default WhoAreWeSection;
