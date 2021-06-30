import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Clients from "../Clients/Clients";
import AddClient from "../AddClient/AddClient";
import Client from "../Client/Client";
const Navigation = () => {
  const [clients, setClients] = useState([]);
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/clients")
      .then((response) => response.json())
      .then((data) => {
        setClients(data);
      });
  });

  return (
    <>
      <Router>
        <>
          <div>
            <div className={styles.navigation}>
              <Link className={styles.link} to="/form">
                Form
              </Link>
              <Link className={styles.link} to="/clients">
                Clients
              </Link>
              <Link className={styles.link} to="/client">
                Client
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/form">
              <AddClient />
            </Route>
            <Route exact path="/clients">
              <Clients setPerson={setPerson} clients={clients} />
            </Route>
            <Route exact path="/client">
              <Client person={person} />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
};

export default Navigation;
