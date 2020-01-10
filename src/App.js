import React from 'react';
import Home from './components/home/Home.js';
import Rules from './components/rules/Rules.js';
import Contact from './components/contact/Contact.js';
import Login from './components/login/Login';
import Admin from './components/admin/Admin.js';
import fire from './components/login/fire';
import LoggedIn from './components/login/LoggedIn';




import './App.css';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
        };

        this.authListener = this.authListener.bind(this);

    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ user });
            }
            else {
                this.setState({ user: null });
            }
        })
    }

    render(){

  return (
    <Router>

    <div className="App">
       <header className="Toolbar">
                <nav className="Toolbar_navigation">
                    <div className="Toolbar_logo"><a href="/">CHANSEE</a></div>
                    <div className="Toolbar_navigation-items">
                        <ul>
                            <li><NavLink to="/">Accueil</NavLink></li>
                            <li><NavLink to="/regles">Règles</NavLink></li>
                            <li><NavLink to="/admin">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="spacer" />
                    <div className="Toolbar_login">
                        <ul>
                         <li><NavLink to="/login">Connexion /</NavLink></li>
                         <li><NavLink to="/login">Inscription</NavLink></li>
                     </ul>
                     </div>
                 </nav>
        </header>

        
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/regles" component={Rules}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/login" component={Login}></Route>
        </main>
        <div className="Main-footer">
            <div className="Container">
                <div className="Logo">
                    <a href="/">CHANSEE</a>
                </div>
                <div className="Footer-nav">
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/regles">Règles</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="Copyright">
                <p>&copy; 2019 Chansee</p>
            </div>
        </div>
    </div>
    </Router>
  );
}
}
export default App;