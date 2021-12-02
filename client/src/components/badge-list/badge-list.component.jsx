import './badge-list.styles.css';
import {Badge} from '../badge/badge.component';
import Data from './badge-content.json';

export const BadgeList = () => (
    <div className="badge-list">
        {/* <div className="badge-row"> */}
        {Data.map( data => <Badge 
            title={data.title} 
            tags={data.tags} 
            votes={data.votes}/>)
        }

        {/* </div> */}


    </div>
);