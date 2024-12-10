import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    CricketMatchPredictionDesc: "A machine learning model that predicts the outcome of cricket matches using various data features. Built using Python with Flask for the backend and TensorFlow/Keras for AI models.",
    CricketMatchPredictionGithub: "https://github.com/Mahesh7741/Cricket-Match-Winning-Prediction-",
    CricketMatchPredictionWebsite: "#",

    MovieHubDesc: "A movie search and recommendations platform built using ReactJS and various public APIs to fetch and display movie information dynamically.",
    MovieHubGithub: "https://github.com/Mahesh7741/MoviesHub.git",
    MovieHubWebsite: "#",

    CryptoWalletExtensionDesc: "A browser extension that allows users to manage their cryptocurrency wallets. Built using ReactJS for frontend and NodeJS for the backend with EthersJS for interacting with blockchain networks.",
    CryptoWalletExtensionGithub: "https://github.com/Mahesh7741/Crypto-Wallet-.git",
    CryptoWalletExtensionWebsite: "#",

    RustFileCompressorDesc: "A file compression tool written in Rust that enables the efficient compression of files. Requires Rust and Cargo package manager for running.",
    RustFileCompressorGithub: "https://github.com/Mahesh7741/Compress-File.git",
    RustFileCompressorWebsite: "#",

    TODOListDesc: "A full-stack To-Do List app built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to manage their tasks effectively with CRUD operations.",
    TODOListGithub: "https://github.com/Mahesh7741/MovereFac-TODO.git",
    TODOListWebsite: "#",

    YouTubeVideoFetchDesc: "A web app that fetches YouTube video data using YouTube Data API. Built with Node.js for the backend and MongoDB for storing video data.",
    YouTubeVideoFetchGithub: "https://github.com/Mahesh7741/YouTube-Data-Fatch.git",
    YouTubeVideoFetchWebsite: "#",
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target="_blank" rel="noreferrer">
          <button className="projectbtn"><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target="_blank" rel="noreferrer">
          <button className="projectbtn"><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
