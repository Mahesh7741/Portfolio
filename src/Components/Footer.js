import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mahesh Savant</h4>
      <h4>Copyright &copy; 2023 MS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Mahesh7741" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mahesh-savant" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:maheshsavant8799@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/MaheshSavant/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer