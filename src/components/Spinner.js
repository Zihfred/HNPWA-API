import React from "react";
import styled from "styled-components";
import Loader from "../img/Loader.svg";

const Spinner = () => <StyledImg src={Loader}/>;

const StyledImg = styled.img`
  margin: 0 auto;
  display: block;
`;

export default Spinner;
