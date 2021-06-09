import React from "react";
import Profile from "./profile/Profile";
import user from "../data/user.json";
import Statistics from "./statistical/Statistics";
import stats from "../data/statistical-data.json";
import friends from "../data/friends.json";
import FriendList from "./friend/FriendList";
import transacton from "../data/transactions.json";
import TransactionHistory from "./transaction-history/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory trans={transacton} />
    </div>
  );
};

export default App;
