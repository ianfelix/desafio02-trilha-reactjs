import { GenreResponseProps } from '../App';

interface HeaderProps {
  selectedGenre: GenreResponseProps;
}

export const Header = (props: HeaderProps) => {
  const { selectedGenre } = props;

  return (
    <header>
      <span className='category'>
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};
