// import React from 'react'

import TeamCalendar from "../classPage/TeamCalendar";
import VideoCarousel from "../classPage/VideoCarousel";
import NavImg from "../navImg/NavImg";
import ClassPhotos from "../photos/ClassPhotos";

export default function ClassPage() {
  return (
    <div>
      <NavImg title="class" />
      <TeamCalendar />
      <VideoCarousel />
      <ClassPhotos />
    </div>
  );
}
