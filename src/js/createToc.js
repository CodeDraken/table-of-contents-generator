(function createToc () {
  try {
    const existingToc = document.getElementById('tableOfContentsDiv')

    // replace old ToC and generate new
    if (existingToc) document.body.removeChild(existingToc)

    const headings = [...document.body.querySelectorAll('h1, h2, h3, h4, h5, h6')]

    // Medium article id
    // const articleId = /\/p\/(.+)(?=\/edit)/.exec(location.pathname)
    // articleId = articleId && articleId[1] || location.pathname.slice(location.pathname.lastIndexOf('-') + 1)

    // ToC String
    const toc = '<br/><h3>Table of Contents</h3><br/>' +
    headings.map((el, i) => {
      const tag = el.tagName
      const text = el.textContent

      // name/id used for linking, use the text as an id if none provided
      const name = el.getAttribute('name') || el.id || el.textContent.split(' ').join``

      // assign an id so it can be linked to
      if (!el.id) {
        el.id = name
      }

      // use just the name/id for reading a list of ToC
      // use the full url without # for copy/pasting when in edit mode(?)
      // `https://medium.com/p/${articleId}#${name}`
      const link = `#${name}`

      // basic hierarchy bold h1-h3 and indent others more
      switch (tag) {
        case 'H1':
        case 'H2':
        case 'H3':
          return `--<a href='${link}'><strong>${text}</strong></a><br/>`
        default:
          return `----<a href='${link}'>${text}</a><br/>`
      }
    })
      .filter(l => l.length > 0)
      .join('\n')

    // modal/sidebar
    const div = document.createElement('div')
    div.innerHTML = toc
    div.id = 'tableOfContentsDiv'

    document.body.insertBefore(div, document.body.children[1])
    console.info('Generated ToC without errors')
  } catch (e) {
    console.error('something went wrong while generating a ToC', e)
  }
})()
