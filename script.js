

const sounds = ['soundsample-1', 'soundsample-2', 'soundsample-3', 'soundsample-4', 'soundsample-5', 'soundsample-6',];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}