import { useState } from 'react';
import SideBar from './components/SideBar';
import Content from './components/Content';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenreId={setSelectedGenreId} selectedGenreId={selectedGenreId}/>
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}