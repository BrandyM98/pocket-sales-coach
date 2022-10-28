// Node Modules
import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
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
      <p className="pt-5 mt-5 text-center">
        "People who succeed have momentum. The more they succeed, the more they
        want to succeed, and the more they find a way to succeed. Similarly,
        when someone is failing, the tendency is to get on a downward spiral
        that can even become a self-fulfilling prophecy." -- Tony Robbins
      </p>
      <section className="images align-items-center pt-5">
        <Link to="/course/635a6f921c253cacc94f1d4c">
          <img
            width="300"
            alt="marketing"
            style={{ marginRight: "20px" }}
            src={marketing}
          />
        </Link>
        <Link to="/course/635a6f921c253cacc94f1d4d">
          <img
            width="300"
            alt="sales"
            style={{ marginRight: "20px" }}
            src={sales}
          />
        </Link>
        <Link to="/course/635a6f921c253cacc94f1d4e">
          <img
            width="300"
            alt="time"
            style={{ marginRight: "20px" }}
            src={time}
          />
        </Link>
        <img
          width="300"
          alt="time"
          style={{ marginRight: "20px" }}
          src={schedule}
        />
      </section>
      {/* <div>
          <Quotes />
        </div> */}
      <div>{renderUsername()}</div>
      <div>{renderUserList()}</div>
    </main>
  );
};

export default Home;
