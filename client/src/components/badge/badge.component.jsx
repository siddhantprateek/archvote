import './badge.styles.css';
import { Tags } from '../tag/tag.component';
import { useState } from 'react';


export const Badge = (props) => {
    const previousCountState = props.votes;

    const [vote, setVote] = useState(false);

    const handleVoteClick = () => {
        setVote(!vote);
    }
    

    return(<div className="badge-container">
        <div className="badge-content">
            <div className="counter-div" onClick={handleVoteClick}>
                <img src={`https://img.icons8.com/fluency-systems-filled/48/000000/triangle.png`} className="triangle" alt="triangle" />
                <h3>{vote ? previousCountState + 1 : previousCountState }</h3>
            </div>
            <div className="badge-props-content">
                <h2>{props.title}</h2>
                <hr />
                <h4>Status</h4>
                <div className="tag-container">
                    <Tags tag="urgent" />
                    <Tags tag="immediately"/>
                    <Tags tag="important"/>
                </div>

            {/* Dropdown */}
            <div className="dropdown">
                <div className="donate-btn">
                    <button>Donate</button>
                </div>
                <div className="review-section">
                     <input type="text" placeholder="Give your valuable review"/>
                    <button>Submit</button>
                </div>
            </div>
            </div>
        </div>
    </div>)
    
    
};