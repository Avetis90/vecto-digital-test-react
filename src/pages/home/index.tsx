import React, {useMemo, useState} from 'react';
import FeaturedVideo from "../../components/featured-video";
import data from 'data/data.json'
import TrendingNow from "../../components/trending-now";

const {Featured: featured, TendingNow: trending} = data

const Home = () => {
  const [activeMovieId, setActiveMovieId] = useState<string | null>(null)

  const video = useMemo(() => {
    if (!activeMovieId) {
      return featured
    }else {
      return trending.find((movie) =>  movie.Id === activeMovieId) || featured
    }
  }, [activeMovieId])

  const onMovieClick = (id: string) => {
    setActiveMovieId(id)
    const viewedMovies = localStorage.getItem('viewedMovies')
    let ids: string[] = []
    if (viewedMovies) {
      ids = JSON.parse(viewedMovies)
      ids = [id, ...ids]
      const uniqueIds = Array.from(new Set(ids))
      localStorage.setItem('viewedMovies',JSON.stringify(uniqueIds))
    }else {
      localStorage.setItem('viewedMovies',JSON.stringify([id]))
    }
  }

  return (
    <div>
      <FeaturedVideo video={video}/>
      <TrendingNow onMovieClick={onMovieClick}/>
    </div>
  );
};

export default Home;
