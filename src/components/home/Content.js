import React from 'react';
import ImgComp from "./ImgComp";
import i6 from "../pics/6.png";
import i7 from "../pics/7.jpg";
import './Home.css';

class Content extends React.Component {
    render(){
        return(
            <main>
                <div className="Presentation">
                    <div className="Presentation-title">
                        <h1>Le réseau entre footeux</h1>
                    </div>
                    <div className="Presentation-app">
                    <div className="Text-one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante lorem, vitae porttitor mi vehicula a. Praesent ut ornare urna. Sed urna erat, lacinia non vestibulum et, suscipit non diam. Curabitur libero ipsum, varius nec mauris nec, tempor interdum nisi. Ut at lacus scelerisque, vestibulum augue in, semper risus. Sed in porttitor eros. Donec laoreet dignissim risus a maximus. Donec nec eros quis neque consequat sollicitudin viverra vitae enim. Cras dolor libero, pretium eget condimentum nec, feugiat nec turpis. Pellentesque dictum nunc a molestie rutrum. Mauris quam mi, elementum vel viverra a, vehicula sit amet lectus. Cras facilisis lorem non enim convallis mollis. Suspendisse eget placerat elit. Aliquam erat volutpat.
                    <div className="Download">
                    <button className="Btn-download"><a href="/">Télécharger</a></button>
                    </div>
                    </div>
                    <div className="Img-app">
                    <ImgComp src={i6}/>
                    </div>
                    <div className="Text-two">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante lorem, vitae porttitor mi vehicula a. Praesent ut ornare urna. Sed urna erat, lacinia non vestibulum et, suscipit non diam. Curabitur libero ipsum, varius nec mauris nec, tempor interdum nisi. Ut at lacus scelerisque, vestibulum augue in, semper risus. Sed in porttitor eros. Donec laoreet dignissim risus a maximus. Donec nec eros quis neque consequat sollicitudin viverra vitae enim. Cras dolor libero, pretium eget condimentum nec, feugiat nec turpis. Pellentesque dictum nunc a molestie rutrum. Mauris quam mi, elementum vel viverra a, vehicula sit amet lectus. Cras facilisis lorem non enim convallis mollis. Suspendisse eget placerat elit. Aliquam erat volutpat.
                    </div>
                    </div>

                </div>
                <br></br>
                <br></br>
                <div className="Feedback">
                    <div className="Fb-title">
                        <h1>Des personnes nous ont laissé leurs avis</h1>
                    </div>
                    <div className="Feedback-content">
                        <div className="User-icon">
                        <ImgComp src={i7}/>
                        </div>
                        <div className="Name">
                            <p>Nom : </p>
                            <p>Prénom : </p>
                        </div>
                        <div className="Feeback-user">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante lorem, vitae porttitor mi vehicula a. Praesent ut ornare urna. Sed urna erat, lacinia non vestibulum et, suscipit non diam.</p>
                        </div>
                        
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Feedback-content">
                        <div className="User-icon">
                        <ImgComp src={i7}/>
                        </div>
                        <div className="Name">
                            <p>Nom : </p>
                            <p>Prénom : </p>
                        </div>
                        <div className="Feeback-user">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante lorem, vitae porttitor mi vehicula a. Praesent ut ornare urna. Sed urna erat, lacinia non vestibulum et, suscipit non diam.</p>
                        </div>
                        
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Feedback-content">
                        <div className="User-icon">
                        <ImgComp src={i7}/>
                        </div>
                        <div className="Name">
                            <p>Nom : </p>
                            <p>Prénom : </p>
                        </div>
                        <div className="Feeback-user">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante lorem, vitae porttitor mi vehicula a. Praesent ut ornare urna. Sed urna erat, lacinia non vestibulum et, suscipit non diam.</p>
                        </div>
                        
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Feedback-content">
                        <div className="User-icon">
                        <ImgComp src={i7}/>
                        </div>
                        <div className="Name">
                            <p>Nom : </p>
                            <p>Prénom : </p>
                        </div>
                        <div className="Feeback-user">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante lorem, vitae porttitor mi vehicula a. Praesent ut ornare urna. Sed urna erat, lacinia non vestibulum et, suscipit non diam.</p>
                        </div>
                        
                    </div>
                </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                
            </main>

        );
    }
}

export default Content;