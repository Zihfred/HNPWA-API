import React, { useCallback } from "react";
import useFetch from "../../Hooks/useFetch";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSelectedPost } from "./actionsCreators";
import { Container, Paper } from "@material-ui/core";
import ReactHTMLParser from "react-html-parser";
import styled from "styled-components";

const SelectedPost = () => {
  const { id } = useParams();
  const fetch = useCallback(() => fetchSelectedPost(id), [id]);

  useFetch(fetch);
  const { title, comments } = useSelector(
    state => state.selectedPostReducer.post
  );
  return (
    <Container maxWidth={"xl"}>
      <StyledPaper>
        <h1>{title}</h1>
      </StyledPaper>
      {comments &&
        comments.map(comment => {
          return (
            <StyledPaper key={comment.id}>
              {ReactHTMLParser(comment.content)}
            </StyledPaper>
          );
        })}
    </Container>
  );
};

const StyledPaper = styled(Paper)`
  padding: 10px;
  margin: 10px 0;
`;

export default SelectedPost;
