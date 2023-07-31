
import { Profile } from './Profile/Profile';
import userJson from '../json/user.json';
import { Statistics } from './Statistics/Statistics';
import dataJson from '../json/data.json';
import { FriendList } from './FriendList/FriendList';
import friendsJson from '../json/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionJson from '../json/transactions.json'

export const App = () => {
 
    return  <div>
    
        <Profile
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
