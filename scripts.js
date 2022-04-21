const hoursHand = document.querySelector('.hand.hours')
const minutesHand = document.querySelector('.hand.minutes')
const secondsHand = document.querySelector('.hand.seconds')

// função para manipular a rotation criada no css
const setRotation = (element, rotationPercentage) => {
  element.style.setProperty('--rotation', rotationPercentage * 360)
}

// função para definiri horas, minutos e secundos
const setClock = () => {
  const currentDate = new Date()

  const secondsPercentage = currentDate.getSeconds() / 60
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12

  setRotation(secondsHand, secondsPercentage)
  setRotation(minutesHand, minutesPercentage)
  setRotation(hoursHand, hoursPercentage)
}

setClock()

setInterval(setClock, 1000)
