 function colorAleatorio() {
    let color = ''
    const hexagesimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']


    for (let i = 0; i < 6; i++) {
        const aleatorio = hexagesimal[Math.floor(Math.random() * 16)]
        color += '' + aleatorio
    }

    return color
}

export function asignarColor() {
    const cubo = document.querySelector('.cubo')
    cubo.style.background = `#${colorAleatorio()}`
}