"use client";

import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VideoCall = ({ videoCallingId }: { videoCallingId: string }) => {
  const [startVideoCall, setStartVideoCall] = useState(false);
  const router = useRouter();
  const rtcProps = {
    appId: process.env.NEXT_PUBLIC_VIDEO_CALL_APP_ID || "test",
    channel: videoCallingId, // your agora channel
    token: null, // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => {
      setStartVideoCall(false);
      router.push("/dashboard");
    },
  };
  return startVideoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    // <h3 onClick={() => setStartVideoCall(true)}>Start Call</h3>
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{
        width: "100%",
        maxWidth: "500px",
        mx: "auto",
        mt: { xs: 2, md: 10 },
      }}
    >
      <Button
        onClick={() => setStartVideoCall(true)}
        endIcon={<VideoCallIcon />}
      >
        Start Call
      </Button>
      <Image
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb25jMWk1b3VxYWtjYTdpZXlnNGcwZHVqcGppejM3bDUybTl3aXQ0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PnHX3RAVHsjHXTO4qv/giphy.gif"
        width={500}
        height={500}
        alt="video call gif"
      />
    </Stack>
  );
};

export default VideoCall;
