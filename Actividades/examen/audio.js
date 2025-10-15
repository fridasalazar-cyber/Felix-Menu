const Audios = document.querySelectorAll('audio[data-key]');

document.addEventListener('keydown', (event) => 
{
  const newAudio = document.querySelector(`audio[data-key="${event.key}"]`);

  if (!newAudio) return;

  stopAllAudios(newAudio);

  newAudio.currentTime = 0;
  newAudio.play();
});

function stopAllAudios(currentAudio) {
  Audios.forEach(audio => {
    if (audio !== currentAudio && !audio.paused) 
	{
      audio.pause();
      audio.currentTime = 0; 
    }
  });
}