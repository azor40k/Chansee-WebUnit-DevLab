import React from 'react';
import './Tableau.css';

class Tableau extends React.Component {
    render(){
        return(

            <div class="tdb-membre-all">

                <div class="menu"></div>

                <div class="tdb-container">

                    <h1 class="tdb-container-title">Liste des Membres</h1>

                    <div class="tdb-box">

                        <div class="tdb-content-membre-main">

                            <h2 class="tdb-content-membre">Membres</h2>
                            <div class="tdb-block">contenu avec scroll</div>

                        </div>



                    </div>



                </div>



            </div>
            

        );
    }
}


export default Tableau;