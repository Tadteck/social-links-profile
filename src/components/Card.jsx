import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import avatarImg from "../images/tadteck.jpg";
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
        Tadiwanashe Chipolopolo
      </Typography>

      <Typography sx={{ color: "hsl(75, 94%, 57%)", fontSize: "0.9rem" }}>
        Harare, Zimbabwe
      </Typography>

      <Typography
        sx={{ color: "hsl(0, 0%, 100%)", fontSize: "0.7rem", mt: 2.5 }}
      >
        "Front-end developer and avid reader."
      </Typography>

      <Stack direction={"column"} gap={1} mt={2.5} mb={3}>
        {[
          { name: "Github", link: "https://github.com/Tadteck" },
          { name: "Frontend Mentor", link: "https://www.frontendmentor.io/profile/Tadteck" },
          { name: "LinkedIn", link: "https://www.linkedin.com/in/tadiwanashe-chipolopolo-9a4190304/" },
          { name: "Twitter", link: "" },
          { name: "Instagram", link: "" },
        ].map((item, index) => (
          <Button
            onClick={() => {
              window.open(item.link);
            }}
            sx={{
              textTransform: "initial",
              color: "hsl(0, 0%, 100%)",
              bgcolor: "hsl(0, 0%, 20%)",
              width: 250,

              "&:hover": {
                bgcolor: "hsl(75, 94%, 57%)",
                color: "hsl(0, 0%, 8%)",
              },
            }}
            key={index}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Card;
