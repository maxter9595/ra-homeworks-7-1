import { useState } from 'react';
import { VideoList } from './components/VideoList';
import videoData from './data/videos.json';

export default function App() {
  const [list] = useState(videoData);

  return (
    <VideoList list={list} />
  );
}
