// Example Bollywood trending songs (demo links, not actual copyrighted music)
// Replace the URLs with your own audio files if you have the rights

const songs = [
  {
    title: "Desi Kalakaar - Yo Yo Honey Singh",
    url: "https://pagalworld.com.se/files/download/id/6462" // demo link
  },
  {
    title: "Brown Rang - Yo Yo Honey Singh",
    url: "https://pagalworld.com.se/files/download/id/6463" // demo link
  },
  {
    title: "Lungi Dance - Yo Yo Honey Singh",
    url: "https://pagalworld.com.se/files/download/id/6464" // demo link
  },
  {
    title: "Kala Chashma - Baar Baar Dekho",
    url: "https://pagalworld.com.se/files/download/id/6465" // demo link
  },
  {
    title: "Apna Bana Le - Bhediya",
    url: "https://pagalworld.com.se/files/download/id/6466" // demo link
  },
  {
    title: "Tum Hi Ho - Aashiqui 2",
    url: "https://pagalworld.com.se/files/download/id/6467" // demo link
  },
  {
    title: "Tareefan - Veere Di Wedding",
    url: "https://pagalworld.com.se/files/download/id/6468" // demo link
  },
  {
    title: "Ghungroo - War",
    url: "https://pagalworld.com.se/files/download/id/6469" // demo link
  },
  {
    title: "Malang Title Track",
    url: "https://pagalworld.com.se/files/download/id/6470" // demo link
  }
];

// Example function to play a song (for integration)
function playSong(index) {
  const audio = document.getElementById("audioPlayer");
  audio.src = songs[index].url;
  audio.play();
}