// Node Modules
import React from "react";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
import { QUERY_USERS } from "../utils/queries";
// Components
import UserList from "../components/UserList";

import marketing from "../assets/images/MKT.png";
import sales from "../assets/images/SLS.png";
import time from "../assets/images/TMG.png";
import schedule from "../assets/images/SCHED.png";


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
    <main className="homepage">
      <section className="images align-items-center">
            <img
              width="250"
              alt="marketing"
              style={{ marginRight: "20px" }}
              src={marketing}
            />
            <img
              width="250"
              alt="sales"
              style={{ marginRight: "20px" }}
              src={sales}
            />
            <img
              width="250"
              alt="time"
              style={{ marginRight: "20px" }}
              src={time}
            />
            <img
              width="250"
              alt="time"
              style={{ marginRight: "20px" }}
              src={schedule}
            />
      </section>
      <div>{renderUsername()}</div>
      <div>{renderUserList()}</div>
    </main>
  );
};

export default Home;
