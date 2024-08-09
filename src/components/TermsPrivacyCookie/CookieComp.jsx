import React from 'react';
import Title from "../ui/Title/Title";
import "./TermsAndPrivacy.css"

const TermsComp = () => {
    return (
        <div className="tandcs">
            <Title>Cookies Notice</Title>

            <section className="terms__group">
                <h1>Last Updated: August 5, 2024</h1>
                <p>This Cookies Notice explains how Artallai s.r.o. ("we," "us," "our," or "Artallai") uses cookies and similar technologies on our website, Artallai.com (the "Website"). By using the Website, you consent to the use of cookies as described in this notice.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>1. What are Cookies?</Title>
                <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>2. How We Use Cookies</Title>
                <p>We use cookies to:</p>
                <ul className='terms__list'>
                    <li>Ensure the proper functioning of the Website</li>
                    <li>Enhance the performance and functionality of the Website</li>
                    <li>Analyze how you use the Website to improve user experience</li>
                    <li>Enable advertising and marketing tailored to your interests</li>
                </ul>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>3. Types of Cookies We Use</Title>
                <p>3.1 <strong>Necessary Cookies</strong>: These cookies are essential for the operation of the Website and enable you to use its features, such as accessing secure areas. Without these cookies, some services cannot be provided.</p>
                <p>3.2 <strong>Performance Cookies</strong>: These cookies collect information about how visitors use the Website, such as which pages are visited most often. This information is used to improve how the Website works.</p>
                <p>3.3 <strong>Functionality Cookies</strong>: These cookies allow the Website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.</p>
                <p>3.4 <strong>Targeting/Advertising Cookies</strong>: These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>4. Third-Party Cookies</Title>
                <p>We may allow third parties to place cookies on your device through the Website for the same purposes identified above, including collecting information about your online activities over time and across different websites. These third parties may include analytics services, advertising networks, and social media platforms.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>5. Managing Cookies</Title>
                <p>You can manage and control cookies in several ways:</p>
                <ul className='terms__list'>
                    <li><strong>Browser Settings</strong>: Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, delete cookies, or alert you when a cookie is being sent. Please note that if you disable cookies, some features of the Website may not function properly.</li>
                    <li><strong>Third-Party Tools</strong>: Some third parties provide tools for managing cookies, such as opt-out mechanisms for interest-based advertising. For example, you can visit the Network Advertising Initiative (NAI) or the Digital Advertising Alliance (DAA) websites to learn more about how to opt-out of receiving personalized advertisements.</li>
                </ul>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'} id='disclaimers'>6. Changes to This Cookies Notice</Title>
                <p>We may update this Cookies Notice from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated effective date.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>7. Contact Us</Title>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="terms__contacts">
                    <span>Artallai s.r.o.</span>
                    <span>Rybná 716/24, Staré Město, 110 00 Praha 1, Czech Republic.</span>
                    <span>Email: info@artallai.com</span>
                </div>
            </section>

        </div>
    );
};

export default TermsComp;