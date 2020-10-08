import React from 'react'
import{Container} from "react-bootstrap"
import ica from "../images/ica.png";
import kommun from "../images/kommun.png";
import peab from "../images/peab.jpg";
import bostaden from "../images/bostaden.jpg";
import UE from "../images/UE.png";
import coop from "../images/coop.png";

const Sponsors = () => {
    return (
        <>
             <div className="text-center">
        <i
          className="fa fa-bullseye mb-2 mt-4 bg-danger"
          style={{ fontSize: "3rem", padding: "15px", borderRadius: "50%", color:"white" }}
        ></i>
        <h1 className="sponsors">Our Prospective Sponsors</h1>
      </div>
      <Container className="mb-3">
        <div className="sponsor d-flex justify-content-between align-content-lg-center mb-3">
          <img src={ica} alt="" className="sponsor_img" />
          <img src={kommun} alt="" className="sponsor_img" />
          <img src={peab} alt="" className="sponsor_img" />
          <img src={bostaden} alt="" className="sponsor_img" />
          <img src={UE} alt="" className="sponsor_img" />
          <img src={coop} alt="" className="sponsor_img" />
        </div>
      </Container>
        </>
    )
}

export default Sponsors
