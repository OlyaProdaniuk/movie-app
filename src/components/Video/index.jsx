import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API_KEY, API_BASE } from "../../api";
import VideoModal from "./Modal";
import ScorePlayBtn from "./PlayButton";
import styled from "styled-components";

const Video = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const movieFetch = async (url) => {
    const req = await fetch(
      `${API_BASE}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    const data = await req.json();
    setMovie(data);
  };

  useEffect(() => {
    movieFetch();
  });

  const handleOpenModal = (url) => {
    setVideoUrl(url);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
    setVideoUrl(null);
  };

  return (
    <DivStyled>
      {movie && (
        <div>
          <ScorePlayBtn movie={movie} handleOpenModal={handleOpenModal} />
        </div>
      )}

      <VideoModal
        isPlaying={isPlaying}
        handleCloseModal={handleCloseModal}
        videoUrl={videoUrl}
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </DivStyled>
  );
};

export default Video;

const DivStyled = styled.div`
  display: flex;

  width: 1200px;
  height: 1200px;
`;
