import React from "react";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log("home", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []); //렌더를 하고 호출이 되기 때문에 popularMovies를 모름

  //로딩이 true면 로딩스피너 보여주고 로딩이 false면 데이터 보여줌
  if (loading) {
    return <ClipLoader color="#ffffff" loading={loading} size={150} />;
  }
  return (
    <div>
      {/* 이부분에서 조건부 렌더링 필요 */}

      <Banner movie={popularMovies.results[1]} />

      <h1>Popular Movies</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movies</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movies</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
