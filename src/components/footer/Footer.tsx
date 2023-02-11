// jshint esversion:6
import "./footer.scss";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="menu-container">
                        <ul className="footer-menu" id="footer-brand">
                            <li><h3><a href="#" className="footerBrand">finteK</a></h3></li>
                        </ul>

                        <ul className="footer-menu" id="menu-1">
                            <li className="menu-title"><strong>Products</strong></li>
                            <li className="menu-item footer-text">Piggybank</li>
                            <li className="menu-item footer-text">Invest</li>
                            <li className="menu-item footer-text">Safelock</li>
                            <li className="menu-item footer-text">Target Savings</li>
                            <li className="menu-item footer-text">Flex Naira</li>
                        </ul>

                        <ul className="footer-menu" id="menu-2">
                            <li className="menu-title"> <strong>Company</strong></li>
                            <li className="menu-item footer-text">About</li>
                            <li className="menu-item footer-text">FAQ's</li>
                            <li className="menu-item footer-text">Blog</li>
                        </ul>

                        <ul className="footer-menu" id="menu-3">
                            <li className="menu-title"> <strong>Legal</strong></li>
                            <li className="menu-item footer-text">Terms</li>
                            <li className="menu-item footer-text">Privacy</li>
                            <li className="menu-item footer-text">Security</li>
                        </ul>

                        <ul className="footer-menu" id="menu-4">
                            <li className="menu-icons mb-2.5">
                                <FaFacebookSquare size='1.5rem' />
                                <FaTwitterSquare size='1.5rem' />
                                <FaInstagramSquare size='1.5rem' />
                            </li>
                            <li className="menu-item leading-relaxed footer-text">Tesmot house, Abdulrahman Okene close, Victoria Island Lagos, Nigeria</li>
                            <li className="menu-item menu-link footer-text"><a href="mailto:contact@finteK.com">contact@finteK.com</a></li>
                            <li className="menu-item menu-link text-sm">
                                <a href="tel:+234700933933933">+234700933933933</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-content mt-11">
                        <div className="note leading-relaxed footer-text text-center ">
                            finteK is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.
                        </div>
                        <div className="copyright text-sm text-blue text-center mt-7">
                            2016 - 2022 PiggyTech Global Limited - RC 1405222
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export { Footer };