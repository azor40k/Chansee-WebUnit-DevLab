import React, { Component } from 'react';
import NavAdmin from './NavAdmin.js';
import Tableau from './Tableau.js';
import TableauMembre from './TableauMembre.js';

export default class Accueil extends Component {

  // changement de statement non fonctionnel
  /*constructor(){
    super()
    this.state={
      showMe:true
    }
  }
  operation(){
    this.setState({
      showMe:!this.showMe
    })

    {this.state.showMe? <Tableau></Tableau> :null}
  }*/
   
  render() {
  	return(
		<div className="main">

      <NavAdmin></NavAdmin>
      <Tableau></Tableau>
      <TableauMembre></TableauMembre>

    </div>
	)
  }
}