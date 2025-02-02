import { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    
    const playAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          // Remove listener after successful play
          document.removeEventListener('click', playAudio);
        })
        .catch(error => {
          console.log("Playback failed:", error);
        });
    };

    // Add click listener to start audio
    document.addEventListener('click', playAudio);

    return () => {
      audio.pause();
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      src="/lets-all-love-lain.mp3"
      style={{ display: 'none' }}
    />
  );
};

export default AudioPlayer;