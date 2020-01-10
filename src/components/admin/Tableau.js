import React from 'react';
import './Tableau.css';

class Tableau extends React.Component {
    render(){
        return(

            <div class="tdb-main">

                <div class="menu"></div>

                <div class="tdb-container">

                    <h1 class="tdb-container-title">Tableau de bord</h1>

                    <div class="tdb-box">

                        <div class="tdb-content">

                            <h2 class="tdb-content-title">Activitées Récentes</h2>
                            <div class="tdb-block">contenu avec scroll</div>

                        </div>

                        <div class="tdb-content">

                            <h2 class="tdb-content-title">Derniers Arcticles</h2>
                            <div class="tdb-block">contenu avec scroll</div>

                        </div>


                    </div>



                </div>



            </div>
            

        );
    }
}


export default Tableau;