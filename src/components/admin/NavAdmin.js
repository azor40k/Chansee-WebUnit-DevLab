import React from 'react';
import './NavAdmin.css';

class MenuAdmin extends React.Component {
    render(){
        return(

            <div class="menu-container">

                <div class="menu-tdb">
                    <h1 class="menu-tdb-title">Tableau de bord</h1>
                </div>

                <div class="menu-lm" onClick={()=>this.operation()}>
                    <h1 class="menu-lm-title">Liste Membre</h1>
                </div>

                <div class="menu-a">
                    <h1 class="menu-a-title">Article</h1>
                </div>

                <div class="menu-f">
                    <h1 class="menu-a-title">Feedback</h1>
                </div>

                <div class="menu-s">

                <input type="search"></input>

                </div>



                


            </div>

        );
    }
}


export default MenuAdmin;