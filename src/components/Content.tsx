import { useState } from 'react';
import { GenreResponseProps } from '../App';
import { api } from '../services/api';
import { Header } from './Header';
import { MovieCard } from './MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
}
export function Content(props: ContentProps) {
  const { selectedGenre, selectedGenreId } = props;

  const [movies, setMovies] = useState<MovieProps[]>([]);

  api
    .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
    .then((response) => {
      setMovies(response.data);
    });

  return (
    <div className='container'>
      <Header selectedGenre={selectedGenre} />
      <main>
        <div className='movies-list'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
