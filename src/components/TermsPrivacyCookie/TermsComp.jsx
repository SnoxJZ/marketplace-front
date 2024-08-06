import React from 'react';
import Title from "../ui/Title/Title";
import "./TermsAndPrivacy.css"

const TermsComp = () => {
    return (
        <div className="tandcs">
            <Title>Terms and Conditions</Title>

            <section className="terms__group">
                <h1>Last Updated: August 5, 2024</h1>
                <p>Welcome to Artallai.com, a website operated by Artallai s.r.o., a company registered in the Czech
                    Republic ("we," "us," "our," or "Artallai"). By accessing or using our website and services
                    (collectively, the "Services"), you agree to be bound by these Terms and Conditions (the "Terms").
                    Please read them carefully. If you do not agree to these Terms, please do not use the Services.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>1. General</Title>
                <p>1.1 These Terms apply to all visitors, users, and others who access or use the Services.</p>
                <p>1.2 We reserve the right to modify these Terms at any time. We will notify you of any changes by
                    posting the new Terms on this page. Your continued use of the Services after such modifications will
                    constitute your acknowledgment of the modified Terms and your agreement to abide and be bound by
                    them.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>2. Use of Services</Title>
                <p>2.1 You must be at least 18 years old to use our Services. By using our Services, you represent and
                    warrant that you are at least 18 years old.</p>
                <p>2.2 You agree to use the Services only for lawful purposes and in accordance with these Terms.</p>
                <p>2.3 You are responsible for maintaining the confidentiality of your account and password and for
                    restricting access to your computer or device. You agree to accept responsibility for all activities
                    that occur under your account or password.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>3. Purchases and Payment</Title>
                <p>3.1 If you wish to purchase any products or services through the Services ("Purchase"), you may be
                    asked to supply certain information relevant to your Purchase, including but not limited to your
                    credit card number, the expiration date of your credit card, your billing address, and your shipping
                    information.</p>
                <p>3.2 You represent and warrant that: (i) you have the legal right to use any credit card(s) or other
                    payment method(s) in connection with any Purchase; and (ii) the information you supply to us is
                    true, correct, and complete.</p>
                <p>3.3 We reserve the right to refuse or cancel your order at any time for reasons including but not
                    limited to product or service availability, errors in the description or price of the product or
                    service, error in your order, or other reasons.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>4. Intellectual Property</Title>
                <p>4.1 The Services and all content and materials included on the Services, including but not limited to
                    text, graphics, images, designs, and software, are the property of Artallai or its licensors and are
                    protected by Czech and international copyright, trademark, and other intellectual property laws.</p>
                <p>4.2 You are granted a limited, non-exclusive, non-transferable, non-sublicensable license to access
                    and use the Services and the content and materials included on the Services for your personal,
                    non-commercial use.</p>
                <p>4.3 You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services
                    without the express written permission of Artallai.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>5. User Content</Title>
                <p>5.1 By posting, uploading, or otherwise submitting any content to the Services ("User Content"), you
                    grant Artallai a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to
                    use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in
                    connection with the Services and Artallai's business.</p>
                <p>5.2 You represent and warrant that you own or have the necessary rights and permissions to grant the
                    license described above.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'} id='disclaimers'>6. Disclaimers and Limitation of
                    Liability</Title>
                <p>6.1 The Services are provided on an "as is" and "as available" basis without any warranties of any
                    kind, either express or implied, including but not limited to implied warranties of merchantability,
                    fitness for a particular purpose, and non-infringement.</p>
                <p>6.2 Artallai does not warrant that the Services will be uninterrupted or error-free, that defects
                    will be corrected, or that the Services are free of viruses or other harmful components.</p>
                <p>6.3 To the fullest extent permitted by law, Artallai shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                    incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses,
                    resulting from (i) your use or inability to use the Services; (ii) any unauthorized access to or use
                    of our servers and/or any personal information stored therein; (iii) any interruption or cessation
                    of transmission to or from the Services; (iv) any bugs, viruses, trojan horses, or the like that may
                    be transmitted to or through the Services by any third party; or (v) any errors or omissions in any
                    content or for any loss or damage incurred as a result of the use of any content posted, emailed,
                    transmitted, or otherwise made available through the Services.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>7. Indemnification</Title>
                <p>You agree to defend, indemnify, and hold harmless Artallai and its affiliates, officers, directors,
                    employees, agents, and licensors from and against any and all claims, damages, obligations, losses,
                    liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising
                    from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms;
                    (iii) your violation of any third party right, including without limitation any copyright, property,
                    or privacy right; or (iv) any claim that your User Content caused damage to a third party.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>8. Governing Law and Jurisdiction</Title>
                <p>8.1 These Terms shall be governed by and construed in accordance with the laws of the Czech Republic,
                    without regard to its conflict of law provisions.</p>
                <p>8.2 Any dispute arising out of or in connection with these Terms, including any disputes regarding
                    the existence, validity, or termination thereof, shall be resolved by the competent courts located
                    in the Czech Republic.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>9. Miscellaneous</Title>
                <p>9.1 If any provision of these Terms is found to be invalid or unenforceable by a court of competent
                    jurisdiction, the remaining provisions shall remain in full force and effect.</p>
                <p>9.2 These Terms constitute the entire agreement between you and Artallai regarding the use of the
                    Services and supersede any prior agreements between you and Artallai relating to your use of the
                    Services.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Usage Policy</Title>
                <p>When you purchase a prompt from our marketplace, you are granted a non-exclusive, worldwide, and
                    perpetual license to use the prompt for any purpose, with the following exceptions:</p>
                <ul className='terms__list'>
                    <li>You may not use the prompt for any harmful, illegal, or malicious activities.</li>
                    <li>You may not directly resell, redistribute, or transfer the prompt without the written consent of
                        the prompt's creator.
                    </li>
                </ul>
                <p>We reserve the right to terminate your license to use a prompt if you violate these usage
                    restrictions.</p>
            </section>

            <section className="terms__group">
                <Title fontSize="24px" color={'#ED43DC'}>Contact Information</Title>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="terms__contacts">
                    <span>Artallai s.r.o.</span>
                    <span>U Křížku 2235, Rakovník 269 01,Czech Republic.</span>
                    <span>Email: info@artallai.com</span>
                </div>
            </section>

        </div>
    );
};

export default TermsComp;