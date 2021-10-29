import './join.styles.css';

export const SignUp = () => (
    <div className="join">
        <div className="container">
            <div className="joining">

            <div className="join-form">
            <h2>User Login</h2>
            <form action="">
                <input className="username" type="username" placeholder="username"/>
                <input className="password" type="password" placeholder="password"/>
                <button className="join-btn">join</button>
                <h4>or</h4>
                <button className="google-btn">Sign in with Google</button>
            </form>
            </div>
        </div>
            </div>
    </div>
);