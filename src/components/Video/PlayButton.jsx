import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const PlayBtn = ({ movie, handleOpenModal }) => {
  return (
    <div>
      {movie.videos.results.length > 0 && (
        <StyledButton
          onClick={() =>
            handleOpenModal(
              `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
            )
          }
          className="border-none"
        >
          Play Trailer
        </StyledButton>
      )}
    </div>
  );
};

export default PlayBtn;

const StyledButton = styled(Button)`
  cursor: pointer;
  font-size: 50px;
`;
