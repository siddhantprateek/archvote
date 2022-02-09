import React from 'react';
import { BadgeList } from '../../components/badge-list/badge-list.component';
import './dashboard.styles.css';
class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard-page'>
                <div className="post-req">
                    <img src={`https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-basic-ui-elements-flatart-icons-outline-flatarticons.png`} alt="" />
                </div>
                <BadgeList />
            </div>
        )
    }
}

export default Dashboard;