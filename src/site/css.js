let cleanCSS = require('clean-css')

let CSS = `
/* Global styles */

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 1.25;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  margin: 0;
  font-size: 1.125rem;
  overflow: hidden;
  color: #333333;
}

a {
  color: #0cd;
  text-decoration: none;
}

.flex {
  display: flex;
}


/* ------------------------- */

/* Everything - i.e. the viewport container */

.everything {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 101%;
  height: 101vh;
  min-width: 20rem;
}


/* ------------------------- */

/* Contents - i.e. the stuff on the page */

.contents {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  max-width: 40rem;
  padding: 0 1rem 0 1rem;
}


/* ------------------------- */

/* All the styles and such */

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 1.25rem;
}


/* ------------------------- */

/* Mobile */

@media (max-width: 48rem) {
  .contents {
    margin-top: 1rem;
  }
}
`

let output = new cleanCSS().minify(CSS)

module.exports = output.styles