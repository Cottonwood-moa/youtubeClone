import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  // 두번째 인자로 빈 배열을 주면 마운트 되었을때만 호출.
  // name이라는 state를 넣으면 name이 바뀔때 마다 호출.
  // 아무것도 전달하지 않으면 state나 prop이 바뀔때마다 호출.
  useEffect(() => {
    // fetch 사용시 옵션
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
