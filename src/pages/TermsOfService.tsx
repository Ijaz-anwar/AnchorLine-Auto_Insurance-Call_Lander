import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-6 text-foreground">
                    <h1 className="text-3xl font-bold text-primary mb-4">Terms of Service</h1>

                    <p className="text-muted-foreground text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AnchorLine Insurance ("we," "us" or "our"), concerning your access to and use of our website. You agree that by accessing the website, you have read, understood, and agree to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">2. Intellectual Property Rights</h2>
                        <p className="text-muted-foreground">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">3. User Representations</h2>
                        <p className="text-muted-foreground">
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you differ from a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">4. TCPA Consent</h2>
                        <p className="text-muted-foreground">
                            By submitting your information on this website, you grant AnchorLine Insurance and its partners express written consent to contact you via phone call, text message, or email, including through the use of autodialed, AI, or prerecorded messages, for marketing purposes. You understand that consent is not a condition of purchase and you may opt-out at any time. Message and data rates may apply.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">5. Prohibited Activities</h2>
                        <p className="text-muted-foreground">
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">6. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">7. Contact Us</h2>
                        <p className="text-muted-foreground">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <div className="mt-2 text-primary font-semibold">
                            <p>AnchorLine Insurance</p>
                            <p>Phone: <a href="tel:+19412496799" className="text-primary hover:underline">9412496799</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
