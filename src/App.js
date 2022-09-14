/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Cardcontainer from "./Components/Cardinfo/Cardcontainer";
import Errboundary from "./Components/Errorboundary/Errboundary";

const bull = (
  <Box
    component="span"
    sx={{ display: "flex", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard() {
  return (
    <div>
      <Errboundary>
        <Cardcontainer />
      </Errboundary>
    </div>
  );
}
