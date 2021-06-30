import React from "react";
import styles from "./Client.module.scss";

const Client = (props) => {
  const { person } = props;
  return (
    <>
      {person && (
        <div>
          <p>
            {person.firstName} {person.lastName}
          </p>
          <p>Age: {person.age}</p>
          <p>{person.location}</p>
          <p>
            Hobbies: <br />
            {person.interests}
          </p>
        </div>
      )}
    </>
  );
};

export default Client;
