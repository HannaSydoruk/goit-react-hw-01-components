import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export { FriendList };
