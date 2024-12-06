import './App.css'
import Profile from "../Profile/Profile"
import userData from "../../UserData.json"
import friends from "../../Friends.json"
import transactions from '../../transactions.json'
import FriendList from '../FriendList/FriendList'
import TransactionHistory  from '../TransactionHistory/TransactionHistory'

export default function App(){
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

