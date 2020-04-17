import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";

export default function CompanyLogoComponent(props) {
  const [logo, setLogo] = useState(null);

  //TODO: fetch image/ from backend for company
  const getCompanyLogo = async () => {
    try {
      const logo = props.logo; //logo from Company table in db. Spørr Even hvis uklart
      const response = await axios.get("");
      setLogo(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CardMedia
      component="img"
      height="140"
      //TODO: replace with company logo
      image="https://www.bindeleddet.no/uploads/companies/1082/logo/medium_LOGO-BEKKlogo.png"
      title="Bekk"
    />
  );
}
