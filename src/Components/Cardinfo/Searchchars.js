/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Cardinfo.css";
import Carddetails from "./Carddetails";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

Searchchars.propTypes = {
  txtsearchChar: PropTypes.string,
};

function Searchchars({ CharactorData, ApiError }) {
  const [searchString, setSearchString] = useState("");
  const [Gender, setGender] = useState("");
  const handleChangegender = (e) => {
    e.preventDefault();
    let gender = e.target.value;
    setGender(gender);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    let keyword = e.target.value;
    setSearchString(keyword);
  };
  // const handleInputClick = () => {
  const CharactorsInfo = CharactorData.filter((data) => {
    if (searchString == null) return data;
    if (Gender == "Male") {
      return data.gender.includes(Gender);
    } else if (Gender == "Female") {
      return data.gender.includes(Gender);
    } else {
      return data.name.toLowerCase().includes(searchString.toLowerCase());
    }
  });
  function renderCardInfomation() {
    return <Carddetails CharactorsInfo={CharactorsInfo} />;
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="searchBarHeader">Rick And Morty App</div>
        <div className="Filterarea">
          <TextField
            id="outlined-search"
            label="Characters Name"
            type="search"
            onChange={handleInputChange}
            // disabled={ApiError && undefined}
          />
          <InputLabel id="demo-simple-select-autowidth-label">
            Gender
          </InputLabel>
          <Select
            sx={{ m: 2, minWidth: 180 }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={1}
            onChange={handleChangegender}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </div>
      </Box>
      <div className="searchBar">
        {ApiError == "undefined" ? (
          undefined &&
          " Server Busy / Service not responding currently,unable to fetch Characters information"
        ) : (
          <div className="CardContent"> {renderCardInfomation()}</div>
        )}
      </div>
    </>
  );
}

export default Searchchars;
