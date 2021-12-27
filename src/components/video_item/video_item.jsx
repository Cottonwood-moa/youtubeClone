import React from "react";
const Video_item = (props) => {
  console.log(props);

  return <div>{props.video.snippet.title}</div>;
};

export default Video_item;
