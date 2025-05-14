import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#ffffff",
      originX: 0,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div 
      className="mt-5 footermainheading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="footermainheading1">
        <motion.div className="footerheading" variants={containerVariants}>
          <motion.div className="head1" variants={itemVariants}>
            <div className="head">
              <motion.img 
                src="/images/msp-logo.png" 
                alt="" 
                className="footerlogo" 
                whileHover={{ scale: 1.05 }}
              />
              <p className="headp">
                © 2025 Makkal Sinthani Peravai, Inc. <br /> All rights reserved.
              </p>
            </div>
            <p className="headp1">
              All trademarks, logos, and brand names are the property of their
              respective owners.
            </p>
          </motion.div>
          <motion.div className="followmore" variants={itemVariants}>
            <div>
              <h2>Follow More</h2>
            </div>
            <div className="socialmedia">
              <motion.div variants={socialIconVariants} whileHover="hover" whileTap="tap">
                <img src="/images/ig.png" alt="" />
              </motion.div>
              <motion.div variants={socialIconVariants} whileHover="hover" whileTap="tap">
                <img src="/images/fb.png" alt="" />
              </motion.div>
              <motion.div variants={socialIconVariants} whileHover="hover" whileTap="tap">
                <img src="/images/yt.png" alt="" />
              </motion.div>
              <motion.div variants={socialIconVariants} whileHover="hover" whileTap="tap">
                <img src="/images/web.png" alt="" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="footersecheading" variants={itemVariants}>
          <div>
            <h2>Quick links</h2>
          </div>
          <ul className="custom-list">
            <motion.li variants={itemVariants}>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link to="/">Home</Link>
              </motion.div>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link to="/about">About</Link>
              </motion.div>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link to="/contact">Contact</Link>
              </motion.div>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.img
            src="/images/footerbarathi.png"
            alt=""
            className="footerbarathi"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;