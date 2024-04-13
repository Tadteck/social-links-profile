import { Box } from "@mui/material";
import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "hsl(0, 0%, 8%)",
        width: "100%",
        height: "100vh",
        display:'flex',
        justifyContent: "center",
        alignItems:'center',
      }}
    >
      <Card />
    </Box>
  );
};

export default Home;
