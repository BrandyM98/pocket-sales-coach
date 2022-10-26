// Node Modules
import React from "react";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
import { QUERY_USERS } from "../utils/queries";
// Components
import UserList from "../components/UserList";

import marketing from "../assets/images/Marketing.png";
import sales from "../assets/images/Sales.png";
import time from "../assets/images/Time.png";

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    } else {
      return <UserList users={users} title="List of Users" />;
    }
  };

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  };

  return (
    <main>
      <img alt='marketing' src={marketing}></img>
      <img alt='sales' src={sales}></img>
      <img alt='time' src={time}></img>
      <div>{renderUsername()}</div>
      <div>{renderUserList()}</div>
    </main>
  );
};

export default Home;
