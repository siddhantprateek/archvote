import './phone.style.css';
export const GetPhone = () => (
    <div className="phone">
        <form action="">
            <input type="tel" className="phone-num" placeholder="Phone Number"/>
            <div className="continue">
                <button className="continue-btn">{`>`}</button>
            </div>
        </form>
    </div>
);