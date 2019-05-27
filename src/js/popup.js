
const createToc = () => {
  chrome.runtime.sendMessage({ action: 'create' })

  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, { action: 'create' })
  // })
}

const toggleToc = () => {
  chrome.runtime.sendMessage({ action: 'toggle' })
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle' })
  // })
}

const loadCSS = () => {
  chrome.runtime.sendMessage({ action: 'loadcss' })
}

document.addEventListener('DOMContentLoaded', function () {
  const createBtn = document.getElementById('createToc')
  const toggleBtn = document.getElementById('toggleToc')

  createBtn.addEventListener('click', createToc)
  toggleBtn.addEventListener('click', toggleToc)
  loadCSS()
})
