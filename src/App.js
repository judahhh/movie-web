import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/movies/:id" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
/*
필요 페이지:홈페이지, movie페이지, movieDetail페이지
1.홈페이지에서 배너를 볼 수 있음
2.3가지 섹션의 영화를 볼 수 있음 (popular,top rated,upcoming)
3.hover됐을 때 각 영화의 제목, 장르, 점수, 인기도, 청불여부를 볼 수 있음
4.영화를 슬라이드 하면서 볼 수 있음

5.영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있음
(포스터, 제목, 줄거리, 점수, 인기도, 시간, 청불, 예산, 이익)
6.예고편을 누르면 예고편 볼 수 있음
7. 영화 리뷰 확인 가능
8. 관련 영화 볼 수 있음

9. 영화 검색 
10. 영화 정렬할 수 있음
11. 영화 필터링 할 수 있음

*/
