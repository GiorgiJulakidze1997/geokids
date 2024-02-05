import { Carousel } from "antd";
import fox from "../../assets/video/fox.mp4";

const VideoCarousel = () => {
  return (
    <div className="container mx-auto">
      <Carousel autoplay>
        <div className="h-[40rem]">
          <video src={fox} controls className="w-full"/>
        </div>
        <div className="h-[40rem]">
          <video src={fox} controls className="w-full"/>
        </div>
        <div className="h-[40rem]">
          <video src={fox} controls className="w-full"/>
        </div>
        <div className="h-[40rem]">
          <video src={fox} controls className="w-full"/>
        </div>
        <div className="h-[40rem]">
          <video src={fox} controls className="w-full"/>
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
