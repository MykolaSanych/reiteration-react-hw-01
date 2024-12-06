import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"
export default function FriendList({ friends }) { 
    return(
    <ul className={css.list}>    
        {friends.map((friende) => (
        <li key={friende.id}>
          <FriendListItem friend={friende} />
        </li>
      ))}
    </ul>)
}
