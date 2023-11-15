import React, {useEffect, useState} from 'react';
import {Movie} from "../../types";
import Button from "../UI-lib/button";
import Typography from "../UI-lib/typography";

import styles from './featured-video.module.scss'
import {secondsToReadableDuration} from "../../utils";

interface FeaturedVideoProps {
  video: Movie;
}

const FeaturedVideo = ({
   video:
     {
       TitleImage,
       Category,
       Title,
       ReleaseYear,
       MpaRating,
       Duration,
       Description,
       CoverImage,
       VideoUrl
     }
 }: FeaturedVideoProps) => {
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined)

  const duration = secondsToReadableDuration(Duration)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setVideoUrl(VideoUrl)
    }, 2000)
    return () => clearTimeout(timeOut)
  }, [VideoUrl])

  return (
    <div className={styles.main} style={{backgroundImage: `url("assets/${CoverImage}")`}}>
      {videoUrl && (
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src={videoUrl}/>
        </video>
      )}
      <div className={styles.infoWrapper}>
        <Typography className={styles.category} variant="body2">{Category}</Typography>
        <img className={styles.titleImage} src={`assets/${TitleImage}`} alt={Title}/>
        <div className={styles.info}>
          <Typography variant="paragraph4">{ReleaseYear}</Typography>
          <Typography variant="paragraph4">{MpaRating}</Typography>
          <Typography variant="paragraph4">{duration}</Typography>
        </div>
        <Typography className={styles.description} variant="paragraph1">{Description}</Typography>
        <div className={styles.ctaSection}>
          <Button variant="secondary" prefixIcon="play">Play</Button>
          <Button>More</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
