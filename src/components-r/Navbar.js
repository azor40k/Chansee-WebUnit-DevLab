import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return(
            
            <header className="Toolbar">
                <nav className="Toolbar_navigation">
                    <div className="Toolbar_logo"><a href="/">CHANSEE</a></div>
                    <div className="Toolbar_navigation-items">
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/">Règles</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="spacer" />
                    <div className="Toolbar_login">
                        <ul>
                         <li><a href="/">Connexion /</a></li>
                         <li><a href="/">Inscription</a></li>
                     </ul>
                     </div>
                 </nav>
             </header>

        );
    }
}


export default Navbar;