import React from "react";
import Panting from "./profile/Panting.js";
import user from "../data/user.json";
import Statistical from "./statistical/Statstical";
import stats from "../data/statistical-data.json";
import friends from "../data/friends.json";
import Friend from "./friend/Friends";
import transacton from "../data/transactions.json";
import Transact from "./transaction-history/Transaction";

const App = () => {
  return (
    <div>
      <Panting user={user} />
      <Statistical stats={stats} />
      <Friend friends={friends} />
      <Transact trans={transacton} />
    </div>
  );
};

export default App;
