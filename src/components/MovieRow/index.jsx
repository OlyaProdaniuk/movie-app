import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import styled from "styled-components";

function MovieRow({ title, movies }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = (movies?.length || 0) * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  //fix Movies / Movie
  //styles to components
  return (
    <MoviesRow>
      <MovieRowh2>{title}</MovieRowh2>
      <MoviesRowLeft onClick={handleLeftArrow}>
        <FaAngleLeft style={{ fontSize: 50 }} />
      </MoviesRowLeft>
      <MoviesRowRight>
        <FaAngleRight style={{ fontSize: 50 }} onClick={handleRightArrow} />
      </MoviesRowRight>
      <ListArea>
        <MovieRowList
          style={{
            marginLeft: scrollX,
            width: (movies?.length || 0) * 150,
          }}
        >
          {movies?.length > 0 &&
            movies.map((item, id) => (
              <RowItem key={`${item.original_title}${id}`}>
                <RowItemImage
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </RowItem>
            ))}
        </MovieRowList>
      </ListArea>
    </MoviesRow>
  );
}

export default MovieRow;
const MovieRowh2 = styled.h2``;
const MoviesRow = styled.div`
  margin-bottom: 30px;
  ${MovieRowh2} {
    margin: 0px 0px 0px 30px;
  }
`;

const MoviesRowLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  left: 0;
  :hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    opacity: 1;
  }
`;
const MoviesRowRight = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  right: 0;
  :hover {
    opacity: 1;
  }
  @media (max-width: 760px) {
    opacity: 1;
  }
`;
const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;
const MovieRowList = styled.div`
  width: 99999999px;
  transition: all ease 0.5s;
`;
const RowItemImage = styled.img``;
const RowItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
  ${RowItemImage} {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    :hover {
      transform: scale(1);
    }
  }
`;
