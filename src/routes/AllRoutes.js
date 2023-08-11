import { Route, Routes } from 'react-router-dom';
import { MoviesList, MoviesDetail, Search, PageNotFound} from '../pages';

export const AllRoutes = () => {
  return (
    <div className='dark:bg-slate-800'>
    <Routes>
        <Route path="" element={<MoviesList apiPath="movie/now_playing" title="home" />}/>
        <Route path="movie/:id" element={<MoviesDetail />}/>
        <Route path="movies/popular" element={<MoviesList apiPath="movie/popular" title="popular"/>}/>
        <Route path="movies/top" element={<MoviesList apiPath="movie/top_rated" title="top_rated" />}/>
        <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming" title="upcoming" />}/>
        <Route path="search" element={<Search apiPath="search/movie" />}/>
        <Route path="*" element={<PageNotFound />}/>
    </Routes>
    </div>
  )
}


