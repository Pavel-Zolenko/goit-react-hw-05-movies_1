import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetalis'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));


export const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
         <Route index element={<Home />} />
         <Route path="movies" element={<Movies />} />
         
         <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
};
