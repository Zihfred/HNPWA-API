import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { fetchNews } from "./actionsCreators";
import NewsList from "./components/NewsList";
import useFetch from "../../Hooks/useFetch";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import Pager from "react-pager-component";
import Spinner from "../../components/Spinner";

const News = () => {
  const { news, error, loading } = useNewsState();
  const { page } = useParams();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(page ? +page : 1);
  const fetch = useCallback(() => fetchNews(currentPage), [currentPage]);
  useFetch(fetch);
  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;
  return (
    <>
      <StyledPager
        length={10}
        current={currentPage}
        expansion={3}
        onChange={page => {
          setCurrentPage(page);
          history.push(`/${page}`);
        }}
      />
      <NewsList news={news} />
    </>
  );
};

const useNewsState = () => {
  const news = useSelector(state => state.newsReducer.news);
  const error = useSelector(state => state.newsReducer.error);
  const loading = useSelector(state => state.newsReducer.loading);
  return {
    news,
    error,
    loading
  };
};

const StyledPager = styled(Pager)`
  justify-content: center;
  margin: 10px;
  .PagerButton {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
  }

  .is-active {
    background-color: #4caf50;
    color: white;
  }
  .PagerButton--Go:hover {
    background-color: rgba(240, 232, 71, 0.22);
  }
`;

export default News;
