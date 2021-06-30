import React from "react";
import styles from "./AddClient.module.scss";

const AddClient = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      age: e.target[2].value,
      location: e.target[3].value,
      interests: [],
    };
    console.log(requestBody);
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(requestBody),
    };
    fetch("http://localhost:8080/client", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // 4. Show some indication that it's been sent/successful
        alert("Created a new user, yay!!");
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Add a client </h1>
      <label>
        <b>First Name:</b>
      </label>
      <input
        type="text"
        placeholder="Enter first name..."
        name="firstName"
        id="firstName"
        required
      />
      <label>
        <b>Last Name:</b>
      </label>
      <input
        type="text"
        placeholder="Enter last name..."
        name="lastName"
        id="lastName"
        required
      />
      <label>
        <b>Age:</b>
      </label>
      <input
        type="text"
        placeholder="Enter age..."
        name="age"
        id="age"
        required
      />
      <label>
        <b>Location:</b>
      </label>
      <input
        type="text"
        placeholder="Enter location..."
        name="location"
        id="location"
        required
      />
      <label>
        <b>Interests:</b>
      </label>
      <input
        type="text"
        placeholder="Enter interests..."
        name="interests"
        id="interests"
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddClient;
