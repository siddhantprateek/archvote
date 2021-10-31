import './joinform.styles.css';
// import { GetPhone } from '../phone/phone.component';
export const JoinForm = () => (

        <div className="user-pass-div">            
            <h2>User Login</h2>
            <form action="">
                <div className="username-input-div">
                    <input className="username" type="username" placeholder="username"/>
                </div>
                <div className="password-input-div">
                    <input className="password" type="password" placeholder="password"/>
                </div>
                
                <button className="join-btn">join</button>
                <div className="options">
                    <hr/>
                    <h4>or </h4>
                    <hr/>
                </div>
                <button className="google-btn">Sign in with Google</button>
                {/* <button className="twitter-btn">Sign in with Twitter</button> */}

            </form>
        </div>
);

