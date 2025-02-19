import './style.css'
import { getRandomContent, getRandomColor } from './content.js'

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="container">
    <div id="content" class="content"></div>
    <button id="changeButton">Click Me!</button>
  </div>
`

const button = document.querySelector('#changeButton')
const contentDiv = document.querySelector('#content')

function updatePage() {
  // Generate new colors
  const color1 = getRandomColor()
  const color2 = getRandomColor()
  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`
  
  // Change button color
  button.style.background = getRandomColor()
  
  // Update content with animation
  contentDiv.classList.remove('visible')
  setTimeout(() => {
    contentDiv.textContent = getRandomContent()
    contentDiv.classList.add('visible')
  }, 300)
}

button.addEventListener('click', updatePage)

// Initial update
updatePage()