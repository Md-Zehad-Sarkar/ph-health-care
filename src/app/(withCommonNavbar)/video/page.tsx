import VideoCall from "@/components/UI/VideoCall/VideoCall";

type TProps = {
  searchParams: {
    videoCallingId: string;
  };
};

const VideoCallingPage = ({ searchParams }: TProps) => {
  const videoCallingId = searchParams?.videoCallingId;
  return <VideoCall videoCallingId={videoCallingId} />;
};

export default VideoCallingPage;
