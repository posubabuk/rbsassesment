/** @format */

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import "./Cardinfo.css";

function Carddetails({ CharactorsInfo }) {
  console.log("charInfo array destructured -->", CharactorsInfo);
  return (
    <>
      {CharactorsInfo.map((CharInfo, index) => (
        <div key={index} style={{ padding: "7px" }}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              image={CharInfo.image}
              alt={CharInfo.name}
            />
            <CardContent className="cardInfoBgv">
              <div>
                <Typography component="div">
                  <div className="charTitle"> {CharInfo.name}</div>
                </Typography>
                <Typography>
                  <div className="charCreated">id:{CharInfo.id}</div>
                </Typography>
                <div>
                  <Typography
                    style={{ fontSize: "11px" }}
                    className="typeTitle"
                  >
                    STATUS{" "}
                    <div className="typeTitleinfo">{CharInfo.status}</div>
                  </Typography>
                  <Typography
                    style={{ fontSize: "11px" }}
                    className="typeTitle"
                  >
                    SPECIES
                    <div className="typeTitleinfo">{CharInfo.species}</div>
                  </Typography>
                  <Typography
                    style={{ fontSize: "11px" }}
                    className="typeTitle"
                  >
                    GENDER<div className="typeTitleinfo">{CharInfo.gender}</div>
                  </Typography>
                  <Typography
                    style={{ fontSize: "11px" }}
                    className="typeTitle"
                  >
                    ORIGIN
                    <div className="typeTitleinfo">{CharInfo.origin.name}</div>
                  </Typography>
                  <Typography
                    style={{ fontSize: "10px" }}
                    className="typeTitle"
                  >
                    LAST LOCATION
                    <div className="typeTitleinfo">
                      {CharInfo.location.name}
                    </div>
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Carddetails;
