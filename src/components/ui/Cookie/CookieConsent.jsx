import React from 'react';
import { CookieNotice } from 'react-cookienotice';
import 'react-cookienotice/dist/style.css';
import './CookieConsent.css';

const CookieConsent = () => {
    const cookieLink = `${window.location.origin}/cookie`;

    return (
        <div>
            <CookieNotice
                readMoreInNewTab
                expireDays={30}
                readMoreLabel="Read more"
                readMoreLink={cookieLink}
                services={[
                    {
                        alwaysActive: true,
                        code: 'NECESSARY',
                        description: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
                        name: 'Necessary Cookies'
                    },
                    {
                        code: 'FUNCTIONAL',
                        description: 'Functional cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.',
                        name: 'Functional Cookies'
                    },
                    {
                        code: 'PERFORMANCE',
                        description: 'Performance cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
                        name: 'Performance Cookies'
                    },
                    {
                        code: 'MARKETING',
                        description: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                        name: 'Marketing Cookies'
                    }
                ]}
            />
        </div>
    );
};

export default CookieConsent;
