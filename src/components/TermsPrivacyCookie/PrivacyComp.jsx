import React from 'react';
import Title from "../ui/Title/Title";

const PrivacyComp = () => {
    return (
        <div className="tandcs">
            <Title>Privacy Policy</Title>

            <section className="terms__group">
                <h1>Effective Date: April 16th 2023</h1>
                <p>Artallai ("we", "us", "our") is committed to protecting the privacy of our users ("you", "your"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website artallai.com (the "Website"). Please read this Privacy Policy carefully. By using the Website, you consent to the data practices described in this policy.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Information We Collect</Title>
                <p>We collect information that you provide to us, such as your email address, when you sign up for our newsletter or register an account on our Website. We also collect information automatically when you visit our Website, such as your IP address and data about your usage, through the use of cookies and other tracking technologies like Google Analytics.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Use of Your Information</Title>
                <p>We use your email address to send you notifications and to alert you of new product features. We may occasionally use your IP address to ensure the safety and security of our Website and users. We use Google Analytics to analyze and improve our Website's performance and user experience.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Third-Party Service Providers</Title>
                <p>We partner with payment providers, a third-party payment processors, to process payments made through our Website. When you make a purchase, you may be redirected to payment processor website to complete the transaction. Payment processors may collect your payment information, such as your credit card number, in accordance with their privacy policy. We do not store your payment information on our systems.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Sharing of Your Information</Title>
                <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties for marketing purposes. We may share your information with third-party service providers, such as Google Analytics and payment providers, to provide services on our behalf and to improve our Website's functionality. We may also disclose your information as required by law, such as to comply with a subpoena, or when we believe that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Changes to This Privacy Policy</Title>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Contact Us</Title>
                <p>If you have any questions about this Privacy Policy, please contact us at info@artallai.com.</p>
            </section>
        </div>
    );
};

export default PrivacyComp;