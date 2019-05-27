// for listening any message which comes from runtime
chrome.runtime.onMessage.addListener(messageReceived)

function messageReceived (request) {
  switch (request.action) {
    case 'create':
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: 'js/createToc.js' })
      })
      break

    case 'toggle':
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: 'js/toggleToc.js' })
      })
      break

    case 'loadcss':
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.insertCSS(tabs[0].id, { file: 'css/content.css' })
      })
      break
  }
}
