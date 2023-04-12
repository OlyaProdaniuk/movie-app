import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_BASE } from "../../api/index";

import MovieRow from "../MovieRow/index";

import styled from "styled-components";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const movieFetch = async (url) => {
    const req = await fetch(
      `${API_BASE}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = await req.json();
    setMovie(data);
  };

  useEffect(() => {
    movieFetch();
  });

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Main>
      {movie && (
        <>
          <MovieContainer
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/original/${movie.poster_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <TextBlock>
              <MovieInfo>
                <div>
                  <MovieTitle>{movie.title}</MovieTitle>
                </div>
                <TitleH3>
                  <MovieRow movie={movie} showLink={false} />
                  <StyledParagr>{movie.tagline}</StyledParagr>
                </TitleH3>

                <TitleH3>
                  <CategorySpan>Budget:</CategorySpan>{" "}
                  {formatCurrency(movie.budget)}
                </TitleH3>

                <TitleH3>
                  <CategorySpan>Revenue:</CategorySpan>{" "}
                  {formatCurrency(movie.revenue)}
                </TitleH3>

                <TitleH3>
                  <CategorySpan>Runtime:</CategorySpan> {movie.runtime} Minutes
                </TitleH3>

                <Synopsis>
                  <CategorySpan>Synopsis:</CategorySpan>
                  {movie.overview}
                </Synopsis>
              </MovieInfo>
            </TextBlock>
          </MovieContainer>
        </>
      )}
    </Main>
  );
};

export default SingleMovie;

const Main = styled.div`
  overflow: hidden;
`;
const MovieContainer = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 200px;
  height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-bottom: 2.5rem;
  align-items: flex-start;
  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
    color: white;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(to right, #111 20%, transparent 98%);
  margin-top: 100px;
  position: absolute;
  background-color: none;
  color: white;
`;

const MovieTitle = styled.h2`
  font-size: 70px;
  font-weight: 700;
  margin-top: 20;
  color: #b1983c;
`;
const MovieInfo = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const TitleH3 = styled.h3`
  font-weight: 300;
  margin-top: 15px;
  font-size: 20px;
  color: white;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    opacity: 0;
  }
  @media (max-width: 440px) {
    color: white;
  }
`;
const CategorySpan = styled.span`
  font-weight: 700;
`;
const Synopsis = styled.h3`
  color: white;
  display: flex;

  @media (max-width: 440px) {
    color: white;
  }
`;
const StyledParagr = styled.p`
  font-weight: 400;
`;
