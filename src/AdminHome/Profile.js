import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";// npm i axios 
import "./Profile.css";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const Pricing = () => {
  const [profileName, setProfileName] = useState("Name:  Kumar");

  const [profileCell, setProfileCell] = useState("Contact:  9393939399");
  const [profileImage, setProfileImage] = useState(
    "https://newcastlebeach.org/images/person-images.jpg"
  );
  const [profileEmail, setProfileEmail] = useState("Email:  Kumar@gmail.com");
  const [profileAddress, setProfileAddress] = useState("address: Bangalore");
  const [profileOccupation, setProfileOccupation] = useState("Occupation: SoftwareDeveloper");
  const profileData = async () => {
    try {
      const res = await axios.get("http://randomuser.me/api/");
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
      setProfileAddress(res.data.results[0].address);
      setProfileOccupation(res.data.results[0].Occcupation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);
  return (
    <div>
      <Toolbar>
        <Typography variant="h4" color="green">
          Profile
      </Typography>
      </Toolbar>
      <div className="card">

        <img src={profileImage} style={{ width: "30%" }} />
        <h1>{profileName}</h1>
        <p className="title">{profileEmail}</p>
        <p>{profileCell}</p>
        <p>{profileAddress}</p>
        <p>{profileOccupation}</p>
        <p>
          <button>Edit</button>
        </p>
      </div>
    </div>
  );
};
export default Pricing;
