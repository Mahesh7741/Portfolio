import React from 'react';
import ProjectBox from './ProjectBox';
import CricketMatchPredictionImage from '../images/CricketMatchPredictionImage.png'; // Add the appropriate image for the project
import MovieHubImage from '../images/MovieHubImage.png'; // Add the appropriate image for the project
import CryptoWalletImage from '../images/CryptoWalletImage.png'; // Add the appropriate image for the project
import RustFileCompressorImage from '../images/RustFileCompressorImage.png'; // Add the appropriate image for the project
import TODOListImage from '../images/TODOListImage.png'; // Add the appropriate image for the project
import YouTubeVideoFetchImage from '../images/YouTubeVideoFetchImage.png'; // Add the appropriate image for the project

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">My <b>Projects</b></h1>
      <div className="project">
        <ProjectBox projectPhoto={CricketMatchPredictionImage} projectName="CricketMatchPrediction" />
        <ProjectBox projectPhoto={MovieHubImage} projectName="MovieHub" />
        <ProjectBox projectPhoto={CryptoWalletImage} projectName="CryptoWalletExtension" />
        <ProjectBox projectPhoto={RustFileCompressorImage} projectName="RustFileCompressor" />
        <ProjectBox projectPhoto={TODOListImage} projectName="TODOList" />
        <ProjectBox projectPhoto={YouTubeVideoFetchImage} projectName="YouTubeVideoFetch" />
      </div>
    </div>
  );
};

export default Projects;
