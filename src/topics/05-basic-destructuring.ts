
interface AudioPlayer {
    audioVolume: number;
    soundDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soundDuration: 30,
    song: "Killing me softly",
    details: {
        author: "Beggies",
        year: 1979
    }
}

const song = 'New Song';

const { song:anotherSong, soundDuration:duration, details } = audioPlayer;
const { author } = details;

//console.log('Song: ', song);
//console.log('Duration: ', audioPlayer.soundDuration);
//console.log('Author: ', audioPlayer.details.author);

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);


const [ , , trunks = 'Not found' ]: string[] = ['Goku', 'Vegeta'];

console.error('Personaje 3:', trunks);




export {};