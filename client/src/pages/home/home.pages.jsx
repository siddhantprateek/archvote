
import React from "react";
import BgImage from '../../assets/images/home-page-bg-image.png';
import './home.styles.css';
class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="bg-image">
                    <img className='home-image' src={BgImage} alt="" />
                </div>
                <div className="home-content">
                    <h1>Lets, Create a better</h1>
                    <h1>World</h1>
                </div>
            </div>
        );
    }
};

export default Home;