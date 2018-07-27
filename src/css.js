import { injectGlobal } from 'styled-components'

injectGlobal`

  body {
    margin: 0;
    padding: 0;
    /* set system font for optimized performance and design  ~ gotta build trust with the users */
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`
