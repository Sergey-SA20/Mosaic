const board = document.querySelector('#board'),
      SQUARES_NUMBER = 497,
      colors = ['rgb(214, 64, 64)', 'blue', 'rgb(128, 201, 86)', 'purple',
      'rgb(182, 211, 164)','white', 'rgb(236, 75, 115)', 'rgb(75, 191, 236)' ];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        console.log(1)
        removeColor(square)
    })
    

    board.append(square)
}

function setColor(element) {
   let color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 4px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
