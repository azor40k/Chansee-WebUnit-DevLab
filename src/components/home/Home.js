import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';

export default class Accueil extends Component {

   
  render() {
  	return(
		<div className="main">
            <Header></Header>
            <Content></Content>
        </div>
	)
  }
}