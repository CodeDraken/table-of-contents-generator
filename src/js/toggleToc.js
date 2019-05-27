void (function toggleToc () {
  const toc = document.getElementById('tableOfContentsDiv')

  if (!toc) return

  if (toc.style.display === 'none') {
    toc.style.display = 'block'
  } else {
    toc.style.display = 'none'
  }
})()
