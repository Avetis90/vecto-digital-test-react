import React, {useMemo} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import Typography from "components/UI-lib/typography";

import data from 'data/data.json'

import styles from './trending-now.module.scss'
import 'swiper/css';
import {sortMovies} from "../../utils";

interface TrendingNowProps {
  onMovieClick: (id: string) => void;
}

const items = data.TendingNow

const TrendingNow = ({onMovieClick}: TrendingNowProps) => {

  const sortedByDate = useMemo(() => {
    return sortMovies(items)
  },[])


  return (
    <div className={styles.main}>
      <Typography className={styles.title} variant={"paragraph2"}>Trending Now</Typography>
      <Swiper
        spaceBetween={16}
        slidesPerView={8}
      >
        {sortedByDate.map(({CoverImage, Title, Id}, index) => (
            <SwiperSlide key={Title + index} onClick={() => {
              onMovieClick(Id)
            }}>
              <img className={styles.galleryItem} src={`assets/${CoverImage}`} alt={Title}/>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default TrendingNow;
