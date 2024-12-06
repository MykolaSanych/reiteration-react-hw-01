import css from './FriendListItem.module.css'
export default function FriendListItem({ friend: { avatar, name, isOnline, } })

{

    return (
 <div className={css.item} >
     <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
   {isOnline ? <p style={{ color: "green" }}>Online</p> : <p style={{ color: "red" }}>Ofline</p>}
            </div>)
}