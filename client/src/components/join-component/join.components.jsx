import './join.styles.css';
// import { JoinForm } from '../join-form/joinform.component';
import { GetPhone } from '../phone/phone.component';

export const SignUp = () => (
        <div className="join-container">
            <div className="joining">
                <div className="join-form">
                    {/* <JoinForm/>  */}
                    <GetPhone />
                </div>
            </div>
        </div>
    
);