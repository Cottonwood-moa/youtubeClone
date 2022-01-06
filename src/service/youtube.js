class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}&Key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }
  mostPopular() {
    return (
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&key=${this.key}&Key=${this.key}`,
        this.getRequestOptions
      )
        .then((response) => response.json())
        // object 를 return 할 때는 소괄호로 묶어야 한다.
        .then((result) =>
          result.items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    );
  }
}

export default Youtube;
