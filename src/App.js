import "./styles.css";
import Row from "./Row.js";
import requests from "./request";
import Banner from "./Banner";

export default function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
