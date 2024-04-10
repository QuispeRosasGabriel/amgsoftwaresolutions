import React, { useState } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, position: "relative" }}>
      <Box
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleBack}
          disabled={maxSteps <= 1}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "#fff",
          }}
          size="large"
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <img
          src={images[activeStep]}
          alt={`Slide ${activeStep}`}
          style={{ width: "100%", height: "auto" }}
        />

        <IconButton
          onClick={handleNext}
          disabled={maxSteps <= 1}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "#fff",
          }}
          size="large"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
