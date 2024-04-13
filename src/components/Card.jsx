import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import avatarImg from "../images/avatar-jessica.jpeg";
import { PhotoSizeSelectActual } from "@mui/icons-material";

const Card = () => {
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "hsl(0, 0%, 12%)",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        borderRadius: 3,
      }}
    >
      <Avatar src={avatarImg} sx={{ width: 60, height: 60, mt: 2 }} />
      <Typography
        sx={{
          color: "hsl(0, 0%, 100%)",
          fontSize: "1.3rem",
          mt: 3,
          fontWeight: 600,
        }}
      >
        Jessica Randall
      </Typography>

      <Typography sx={{ color: "hsl(75, 94%, 57%)", fontSize: "0.9rem" }}>
        London, United Kingdom
      </Typography>

      <Typography
        sx={{ color: "hsl(0, 0%, 100%)", fontSize: "0.7rem", mt: 2.5 }}
      >
        "Front-end developer and avid reader."
      </Typography>

      <Stack direction={"column"} gap={1} mt={2.5} mb={3}>
        {["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"].map(
          (item, index) => (
            <Button
              sx={{
                textTransform: "initial",
                color: "hsl(0, 0%, 100%)",
                bgcolor: "hsl(0, 0%, 20%)",
                width: 250,

                "&:hover" :{
                    bgcolor:"hsl(75, 94%, 57%)",
                    color:"hsl(0, 0%, 8%)"
                }
              }}
              key={index}
            >
              {item}
            </Button>
          )
        )}
      </Stack>
    </Box>
  );
};

export default Card;
