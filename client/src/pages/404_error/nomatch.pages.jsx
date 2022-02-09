import React from 'react';
import SadImage from '../../assets/egg.png';
import './nomatch.style.css';
class Nomatch extends React.Component {
    render(){
        return(
            <div className='no-match'>
                <div className="no-match-content">
                    <img src={SadImage} alt="" />
                    <div className="match-content">
                        <h1>404 Error</h1>
                        <h3>Looks like Page Not Found</h3>
                    </div>
                </div>
            </div>
        );
    }

}
export default Nomatch;