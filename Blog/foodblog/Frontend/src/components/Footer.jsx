import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';


function Footer() {
    const date = new Date();
    return (
        <>
            <div className="theFooter">
                <div className="quick">
                    <h3>Quick Links</h3>

                    <div>
                        <p className="footerP">Vegetarian</p>
                        <p className="footerP">International</p>
                        <p className="footerP">Junk Food</p>
                        <p className="footerP">Soups</p>
                        <p className="footerP">Dessert</p>
                        <p className="footerP">Recipes</p>
                        <p className="footerP">Other</p>
                    </div>
                </div>

                <div className="socials">
                    <h3>Our Socials</h3>
                    <div className="socialIcons">
                        <a href="https://www.instagram.com" target="_blank">
                            <CIcon icon={icon.cibInstagram} size="sm" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                            <CIcon icon={icon.cibTwitter} size="sm" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank">
                            <CIcon icon={icon.cibFacebook} size="sm" />
                        </a>
                    </div>
                </div>

                <div className="contact">
                    <h3>Contact Us</h3>
                    <p className="footerP">
                        <a href="https://mail.google.com/mail/?view=cm&to=ihawki534@west-mec.org" target="_blank" ><CIcon icon={icon.cibGmail} size="sm" /> Nova</a>
                    </p>
                    <p className="footerP">
                        <a href="https://mail.google.com/mail/?view=cm&to=bmeza900@west-mec.org" target="_blank" ><CIcon icon={icon.cibGmail} size="sm" /> Brenda</a>
                    </p>
                    <p className="footerP">
                        <a href="https://mail.google.com/mail/?view=cm&to=lrubio668@west-mec.org" target="_blank" ><CIcon icon={icon.cibGmail} size="sm" /> Luisa</a>
                    </p>
                </div>

                <div className="copyright">
                    <p>Copyright © {date.getFullYear()}</p>
                </div>
            </div>


        </>
    )
}



export default Footer
