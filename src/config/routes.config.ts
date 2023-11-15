import {lazy} from "react";
import {GENRES, HOME, MOVIES, TV_SHOWS, WATCH_LATER} from "contstants/routes";

const routes = [
  {
    key: 'home',
    path: HOME,
    component: lazy(() => import('pages/home')),
    meta: {
      title: 'Home',
      icon: 'home.png'
    }
  },
  {
    key: 'tv-shows',
    path: TV_SHOWS,
    component: lazy(() => import('pages/tv-shows')),
    meta: {
      title: 'TV Shows',
      icon: 'tv-shows.png'
    }
  },
  {
    key: 'movies',
    path: MOVIES,
    component: lazy(() => import('pages/movies')),
    meta: {
      title: 'Movies',
      icon: 'movies.png'
    }
  },
  {
    key: 'genres',
    path: GENRES,
    component: lazy(() => import('pages/genres')),
    meta: {
      title: 'Genres',
      icon: 'genres.png'
    }
  },
  {
    key: 'watch-later',
    path: WATCH_LATER,
    component: lazy(() => import('pages/watch-later')),
    meta: {
      title: 'Watch Later',
      icon: 'watch-later.png'
    }
  },
]

export const links = [
  {
    title: 'Language',
    path: '/language'
  },
  {
    title: 'Get help',
    path: '/get-help'
  },
  {
    title: 'Exit',
    path: '/exit'
  }
]

export default routes
