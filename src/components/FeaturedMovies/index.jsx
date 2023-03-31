import Button from "@mui/material/Button";

import styled from "styled-components";
//item rename to movie add proptypes
// rename folder name + name of the component
function Featured({ item }) {
  const genres = item.genres?.map((genre) => genre.name);

  console.log(item);
  return (
    <FeaturedMovie
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <FeaturedVertical>
        <FeaturedHorizontal>
          <FeaturedName>{item.original_title}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} Rating</FeaturedPoints>

            {item.number_of_seasons && (
              <FeaturedSeasons>
                {item.number_of_seasons} Season
                {item.number_of_seasons !== 1 ? "s" : ""}
              </FeaturedSeasons>
            )}
          </FeaturedInfo>

          <FeaturedGenres>
            <strong>Genres:</strong> {genres.join(", ")}
          </FeaturedGenres>
          <FeaturedDescription>{item.overview}</FeaturedDescription>
          <WatchButton>
            <WatchButtonLink href={`/watch/${item.id}`}>
              <Button sx={{ color: "black", border: "50px" }}>Watch now</Button>
            </WatchButtonLink>
          </WatchButton>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </FeaturedMovie>
  );
}
export default Featured;

const FeaturedMovie = styled.section`
  height: 100vh;
  @media (max-width: 760px) {
    height: 95vh;
  }
`;
const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;
const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 190px;
  padding-top: 70px;
`;
const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
  @media (max-width: 760px) {
    font-size: 30px;
  }
`;
const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;
const FeaturedSeasons = styled.div``;
const FeaturedPoints = styled.div`
  margin-right: 15px;
  display: inline-block;
  ${FeaturedSeasons}
`;
const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 17px;
  color: #999;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;
const WatchButton = styled.div`
  margin-top: 15px;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;
const WatchButtonLink = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
  background-color: #fff;
  color: #000;
  :hover {
    opacity: 0.7;
  }
`;
