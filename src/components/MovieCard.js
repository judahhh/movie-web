import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
        height: 200,
      }}
    >
      <div className="overlay">
        <h4>{item.title}</h4>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adults ? "청불" : "Under18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
