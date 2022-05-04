import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
  	title: string,

  	colors: {
  	  primary: string,
  	  secoundry: string,

  	  background: string,
  	  text: string,

      themeBtn: string,
      cvBtn: string,
  	}
  }
}