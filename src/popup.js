
const createToc = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'create' })
  })
}

const toggleToc = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle' })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const createBtn = document.getElementById('createToc')
  const toggleBtn = document.getElementById('toggleToc')

  createBtn.addEventListener('click', createToc)
  toggleBtn.addEventListener('click', toggleToc)
})
