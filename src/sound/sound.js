import { Howl } from "howler";

export const backgroundMusic = new Howl({
    src: ['/sound/backgroundMusic.mp3'],
    loop: true,
    autoplay: true,
    volume: 0.3,
});

export const eatSound = new Howl({
    src: ['/sound/eat.mp3'],
    loop: false,
    autoplay: false,
    volume: 0.8,
});

export const choqueSound = new Howl({
    src: ['/sound/choque.mp3'],
    loop: false,
    autoplay: false,
    volume: 0.8,
});