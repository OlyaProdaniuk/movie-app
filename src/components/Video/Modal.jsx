import React from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoModal = ({ isPlaying, handleCloseModal, videoUrl }) => {
  return (
    <StyledModal
      isOpen={isPlaying}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <ReactPlayer
        url={videoUrl}
        controls={true}
        playing={true}
        width="65%"
        height="80%"
      />
    </StyledModal>
  );
};

export default VideoModal;

const StyledModal = styled(ReactModal)`
  width: 100%;
  height: 100vh;
  margin-top: 40px;
  margin-left: 250px;
  @media (max-width: 760) {
  }
`;
