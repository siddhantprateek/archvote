import './badge.styles.css';
export const Badge = () => (

    <div className="badge-container">
        {/* <div className="badge"> */}
            {/* <div className="vote-count">
                <div className="vote-value"></div>
            </div>
            <div className="content">
                <h2>ICU-BED</h2>
                <br />
                <div className="content-reviews">
                    
                </div>
            </div> */}
        {/* </div> */}
        <div className="badge-content">
            <div className="counter-div">
                <img src={`https://img.icons8.com/fluency-systems-filled/48/000000/triangle.png`} className="triangle" alt="triangle" />
                <h3>456</h3>
            </div>
            <div className="badge-props-content">
                <h2>ICU-BED</h2>
                {/* <br /> */}
                <hr />
                <h4>Status</h4>
            </div>
        </div>
    </div>
    
    
);