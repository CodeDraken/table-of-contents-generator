
// events to send to the background script
const createToc = () => {
  chrome.runtime.sendMessage({ action: 'create' })
}

const toggleToc = () => {
  chrome.runtime.sendMessage({ action: 'toggle' })
}

const loadCSS = () => {
  chrome.runtime.sendMessage({ action: 'loadcss' })
}

document.addEventListener('DOMContentLoaded', function () {
  const createBtn = document.getElementById('createToc')
  const toggleBtn = document.getElementById('toggleToc')

  // button events on the popup
  createBtn.addEventListener('click', createToc)
  toggleBtn.addEventListener('click', toggleToc)

  // page css
  loadCSS()
})
