import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  // 두번째 인자로 빈 배열을 주면 마운트 되었을때만 호출.
  // name이라는 state를 넣으면 name이 바뀔때 마다 호출.
  // 아무것도 전달하지 않으면 state나 prop이 바뀔때마다 호출.
  useEffect(() => {
    // fetch 사용시 옵션
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBsH4YcLw_mq4cqC4913e05LdhnibUbPxw&Key=AIzaSyBsH4YcLw_mq4cqC4913e05LdhnibUbPxw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
