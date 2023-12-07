import css from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const statusClassName = isOnline ? css.online : css.offline;
  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${statusClassName}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export { FriendListItem };
