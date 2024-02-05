
import { Carousel } from "antd";
import ReactPlayer from "react-player";
import fox from "../../assets/video/fox.mp4";

const VideoCarousel = () => {
  return (
    <div className="container mx-auto pt-20">
      <Carousel autoplay >
        <div className="h-[40rem]">
          <ReactPlayer url={fox} controls width="100%" height="100%" />
        </div>
        <div className="h-[40rem]">
          <ReactPlayer url={fox} controls width="100%" height="100%" />
        </div>
        <div className="h-[40rem]">
          <ReactPlayer url={fox} controls width="100%" height="100%" />
        </div>
        <div className="h-[40rem]">
          <ReactPlayer url={fox} controls width="100%" height="100%" />
        </div>
        <div className="h-[40rem]">
          <ReactPlayer url={fox} controls width="100%" height="100%" />
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
