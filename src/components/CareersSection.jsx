import './CareersSection.css';
import Navbar from './Navbar';

function CareersSection() {
    return (
        <div className="careers-page">
            {/* Background Elements */}
            <div className="careers-background">
                <div className="careers-grid-pattern"></div>
                <div className="careers-gradient-blob"></div>
            </div>

            <Navbar />

            <main className="careers-main">
                {/* Hero Section */}
                <section className="careers-hero">
                    <div className="careers-hero-container">
                        {/* Main Headline */}
                        <div className="careers-hero-content">
                            <h1 className="careers-hero-title">
                                Real World AI <br />
                                Needs Real World Thinking.
                            </h1>

                            {/* Subtitle */}
                            <div className="careers-hero-subtitle-wrapper">
                                <p className="careers-hero-subtitle">
                                    At Chartered Vectorial, AI agents are teammates, not just tools. We're building a new kind of firm for people who want to shape what's next.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statement Section */}
                <section className="careers-statement">
                    {/* Decorative gradient behind text */}
                    <div className="careers-statement-gradient"></div>

                    <div className="careers-statement-container">
                        <div className="careers-statement-content">
                            <p className="careers-statement-text">
                                Most companies talk about AI. <span className="text-white">We run on it.</span> Our agents validate hypotheses, debate architecture, review code, and flag risks—before humans make the call. Fewer meetings. More shipping. <span className="text-white">Real accountability.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Who Thrives Here Section */}
                <section className="careers-who-thrives">
                    <h2 className="careers-who-thrives-title">
                        Who thrives here
                    </h2>

                    <div className="careers-who-thrives-grid">
                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Visionaries</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    You see where AI is heading, not just where it is. You think in systems, not tasks.
                                </p>
                            </div>
                        </div>

                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Orchestrators</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    You don't just execute. You direct AI agents, connect the dots, and know when to step in.
                                </p>
                            </div>
                        </div>

                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Builders</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    You ship. Prototypes, production systems, client demos — you'd rather show than tell.
                                </p>
                            </div>
                        </div>

                        <div className="careers-who-thrives-card">
                            <div className="careers-who-thrives-card-inner">
                                <div className="careers-who-thrives-card-content">
                                    <h3 className="careers-who-thrives-card-title">Learners</h3>
                                    <div className="careers-who-thrives-card-divider"></div>
                                </div>
                                <p className="careers-who-thrives-card-text">
                                    AI moves fast. You move faster. You're curious, adaptable, and energised by change.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Roles Section */}
                <section className="careers-roles">
                    <div className="careers-roles-header">
                        <div className="careers-roles-header-left">
                            <h2 className="careers-roles-title">
                                Types of Roles
                            </h2>
                        </div>
                        <div className="careers-roles-header-right">
                            <p className="careers-roles-description">
                                Three roles. One mission. <br className="hidden md:block" />
                                <span className="text-brand-lime font-semibold">Vectors deploy.</span> <span className="text-white font-semibold">Forgers build.</span> <span className="text-white font-semibold">Pathfinders discover.</span> 
                                <span className="block mt-2 text-neutral-400 font-light text-lg md:text-xl">Together, they move clients from vision to production.</span>
                            </p>
                        </div>
                    </div>

                    <div className="careers-roles-list">
                        <div className="careers-role-item active">
                            <div className="careers-role-item-left">
                                <span className="careers-role-name">Vectors</span>
                                <span className="iconify text-brand-lime lg:hidden" data-icon="lucide:arrow-down" data-width="20"></span>
                            </div>
                            <div className="careers-role-item-right">
                                <div className="careers-role-content">
                                    <div className="careers-role-header">
                                        <h3 className="careers-role-heading">Vectors deploy</h3>
                                        <span className="iconify text-brand-lime hidden lg:block" data-icon="lucide:arrow-right" data-width="20"></span>
                                    </div>
                                    <p className="careers-role-text">
                                        You embed with clients, ship AI to production, and stay until adoption is complete. In a world of prototypes and pilots, you deliver outcomes. Vectors are adaptable, client-facing, and own the last mile.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="careers-role-divider"></div>

                        <div className="careers-role-item">
                            <div className="careers-role-item-left">
                                <span className="careers-role-name inactive">Forgers</span>
                            </div>
                            <div className="careers-role-item-right hidden lg:block"></div>
                        </div>

                        <div className="careers-role-divider"></div>

                        <div className="careers-role-item">
                            <div className="careers-role-item-left">
                                <span className="careers-role-name inactive">Pathfinders</span>
                            </div>
                            <div className="careers-role-item-right hidden lg:block"></div>
                        </div>

                        <div className="careers-role-divider"></div>
                    </div>
                </section>
            </main>

            {/* CTA Section */}
            <section className="careers-cta">
                <div className="careers-cta-container">
                    <h2 className="careers-cta-title">What comes next is worth building together.</h2>
                    <a href="#" className="careers-cta-button">
                        <span className="careers-cta-button-text">BOOK A DISCOVERY CALL</span>
                        <span className="iconify careers-cta-button-icon" data-icon="lucide:arrow-right"></span>
                    </a>
                </div>
            </section>

            {/* Footer decorative line */}
            <div className="careers-footer-divider"></div>

            {/* Footer Simple */}
            <footer className="careers-footer">
                <div className="careers-footer-container">
                    <span className="careers-footer-copyright">© 2026 Chartered Vectorial</span>
                    <div className="careers-footer-social">
                        <span className="iconify careers-footer-icon" data-icon="lucide:twitter"></span>
                        <span className="iconify careers-footer-icon" data-icon="lucide:linkedin"></span>
                        <span className="iconify careers-footer-icon" data-icon="lucide:github"></span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default CareersSection;

