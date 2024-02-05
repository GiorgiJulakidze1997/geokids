// import React from 'react'

import VideoCarousel from "../classPage/VideoCarousel";
import NavImg from "../navImg/NavImg";
import ClassPhotos from "../photos/ClassPhotos";

export default function ClassPage() {
  return (
    <div>
      <VideoCarousel />
      <NavImg title="class" />
      <ClassPhotos />
    </div>
  );
}
