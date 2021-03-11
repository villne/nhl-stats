import React from 'react';
import './Footer.scss';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <div className='footer-container'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis, ut
                    ipsum quasi facilis ipsam ad, deleniti, delectus earum adipisci deserunt?
                    Commodi reiciendis illum dignissimos nihil modi? A, iure sequi! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Est nostrum cumque et unde placeat,
                    eligendi quisquam sequi iusto quasi. Nihil blanditiis corrupti asperiores
                    exercitationem beatae eos alias deserunt dignissimos vitae!
                </p>
            </div>
        </footer>
    );
};
