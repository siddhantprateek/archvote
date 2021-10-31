import './badge.styles.css';
import { Tags } from '../tag/tag.component';

export const Badge = () => (

    <div className="badge-container">
        <div className="badge-content">
            <div className="counter-div">
                <img src={`https://img.icons8.com/fluency-systems-filled/48/000000/triangle.png`} className="triangle" alt="triangle" />
                <h3>456</h3>
            </div>
            <div className="badge-props-content">
                <h2>ICU-BED</h2>
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
    </div>
    
    
);