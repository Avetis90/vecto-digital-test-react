import {Movie} from "../types";

export const secondsToReadableDuration = (value: string) => {
  let output = ''
  const seconds = Number(value);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);

  if (hours) {
    output += `${hours}h `
  }

  if (minutes) {
    output += `${minutes}m`
  }

  return output;
}

export const sortMovies = (list: Movie[]) => {
  const viewedMovies = localStorage.getItem('viewedMovies')
  let sortedByDate =  list.sort((a: Movie, b: Movie) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime();
  })
  if (!viewedMovies) {
    return sortedByDate;
  }else {
    const ids: string[] = JSON.parse(viewedMovies)
    return sortedByDate.sort((a, b) => {
      const indexA = ids.indexOf(a.Id);
      const indexB = ids.indexOf(b.Id);

      if (indexA === -1 && indexB === -1) {
        return 0;
      } else if (indexA === -1) {
        return 1;
      } else if (indexB === -1) {
        return -1;
      }

      return indexA - indexB;
    });
  }
}
