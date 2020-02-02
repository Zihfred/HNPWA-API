import React from "react";
import styled from "styled-components";
import { toDateTime } from "../../../helpers";
import useSort from "../../../Hooks/useSort";
import { Link } from 'react-router-dom'

const NewsList = ({ news }) => {
  const { onSort, List } = useSort(news);

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTd onClick={() => onSort("title")}>
            <span onClick={() => onSort("time")}>
              Name
            </span>
          </StyledTd>
          <StyledTd onClick={() => onSort("domain", e)}>
            <span  onClick={() => onSort("time")}>
              Domain
            </span>
          </StyledTd>
          <StyledTd>
            <span  onClick={() => onSort("time")}>
              Time
            </span>
          </StyledTd>
        </tr>
      </thead>
      <tbody>
      {List.map(oneNews => (
            <tr key={oneNews.id}>
              <StyledTd>
                <StyledLink to={`comments/${oneNews.id}`} >
                  {oneNews.title}
                </StyledLink>
              </StyledTd>
              <StyledTd>{oneNews.domain}</StyledTd>
              <StyledTd>{toDateTime(oneNews.time)}</StyledTd>
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  margin: 0 auto;
  border: 1px solid black;
  
`;

const StyledTd = styled.td`
  padding: 3px;
   border-bottom: 1px solid #ddd;
     a:hover {
    background-color: darkseagreen;
  }
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

`;

export default NewsList;
