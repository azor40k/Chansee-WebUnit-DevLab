import React from 'react';
import './BannerContact.css';
import ImgComp from "../home/ImgComp";
import i8 from "../pics/8.jpg";

class HeadForm extends React.Component {
    render(){
        return(

            <div class="BannerContact"><ImgComp src={i8}/></div>

        );
    }
}


export default HeadForm;