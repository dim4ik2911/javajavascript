import React, { useState } from "react";
import styles from "./Clients.module.scss";
import { Link } from "react-router-dom";
const Clients = (props) => {
  const { clients, setPerson } = props;

  return (
    <>
      <div className={styles.clients}>
        {clients.map((client) => {
          return (
            <div className={styles.client}>
              <p>
                {client.firstName} {client.lastName}
              </p>
              <p>Age: {client.age}</p>
              <p>{client.location}</p>
              <p>
                Hobbies <br />
                {client.interests[0]}, {client.interests[1]}
              </p>

              <Link to="/client">
                <button onClick={() => setPerson(client)}>View</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Clients;
