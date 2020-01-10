import React from 'react';
import Rule from'./Rule.js';
import Banner from './Banner.js';


class Rules extends React.Component {
    render(){
        
        return(

            <div className="main">
                
            <Banner></Banner>
            <Rule></Rule>

            </div>

            
        )
    }
}


export default Rules;