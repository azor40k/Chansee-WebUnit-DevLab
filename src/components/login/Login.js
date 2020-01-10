import React from 'react';
import fire from './fire';
import './Login.css';

class Login extends React.Component {

    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Vous êtes bien connecté");

        })
        .catch((err) => {
            console.log("Error: " + err.toString());

        })

    }

    signUp(){

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Vous êtes bien inscrit");

        })
        .catch((err) => {
            console.log("Error: " + err.toString());

        })
    }
    render(){
        return (

<div class="login-page">
  <div class="form">
  <form class="login-form">    
      <input id="email" type="email" placeholder="Email"/>
      <input id="password" type="password" placeholder="password"/>

      <button style={{margin: '10px'}} onClick={this.login}>Connexion</button>
      <button style={{margin: '10px'}} onClick={this.signUp}>Inscription</button>
      
    </form>
  </div>
</div>
        )

    }
}

export default Login;