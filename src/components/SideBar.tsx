import { useState, useEffect } from 'react';
import '../styles/global.scss';
import '../styles/sidebar.scss';
import { Button } from './Button';
import { api } from '../services/api'
import { GenreResponseProps } from '../App'

interface SideBarProps {
    setSelectedGenreId: (id: number) => void,
    selectedGenreId: number
}

export default function SideBar({ setSelectedGenreId, selectedGenreId}:SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}