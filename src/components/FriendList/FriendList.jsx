 import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (<ul className={css.friendList}> 
        {friends.map(({id, name, avatar, isOnline }) =>
            <FriendListItem
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline} />)}    

    </ul>)
}


FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
}