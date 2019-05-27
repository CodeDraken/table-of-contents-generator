// for listening any message which comes from runtime
chrome.runtime.onMessage.addListener(messageReceived)

function messageReceived (request) {
  if (!request.action) return

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // the active tab id
    const { id: activeTabId } = tabs[0]

    switch (request.action) {
      case 'create':
        chrome.tabs.executeScript(activeTabId, { file: 'js/createToc.js' })
        break

      case 'toggle':
        chrome.tabs.executeScript(activeTabId, { file: 'js/toggleToc.js' })
        break

      case 'loadcss':
        chrome.tabs.insertCSS(activeTabId, { file: 'css/content.css' })
        break
    }
  })
}
