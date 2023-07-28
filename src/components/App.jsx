
import { Profile } from './Profile/Profile';
import userJson from '../user.json';
import { Statistics } from './Statistics/Statistics';
import dataJson from '../data.json';
import { FriendList } from './FriendList/FriendList';
import friendsJson from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionJson from '../transactions.json'

export const App = () => {
 
    return  <div>
    
        <Profile
            id= {userJson.username}
            username={userJson.username}
            tag={userJson.tag}
            location={userJson.location}
            avatar={userJson.avatar}
            stats={userJson.stats} />
        
         <Statistics
            title="Upload stats"
            stats={dataJson} /> 
        
        <FriendList friends={friendsJson} />;
        <TransactionHistory items={transactionJson} />;

    </div>

};
