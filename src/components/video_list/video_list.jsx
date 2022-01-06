import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";
const Video_list = (props) => {
  console.log(props);
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.etag} video={video} />
      ))}
    </ul>
  );
};
export default Video_list;
