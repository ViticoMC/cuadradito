export const maximos = () => {
    let MaxX = 97
    let MaxY = 95

    if (window.innerWidth <= 460) {
      MaxX = 92
    } else if (window.innerWidth <= 768) {
      MaxX = 96
    }

    return { MaxX, MaxY }
}