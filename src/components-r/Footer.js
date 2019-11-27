import React from 'react';
import "./Footer.css";

class Footer extends React.Component {
    render(){
        return(

            <div className="Main-footer">

            <div className="Container">

                <div className="Logo">

                    <a href="/">CHANSEE</a>

                </div>

                <div className="Footer-nav">

                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/">Règles</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>

                </div>

            </div>

            <div className="Copyright">

                <p>&copy; 2019 Chansee</p>

            </div>
            
        </div>

            );
        }
    }

export default Footer;