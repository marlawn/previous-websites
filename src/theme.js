import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/oswald'

const styles = {
    global: props => ({
      body: {
        color: mode('#8a7a67', '#2a1f13')(props),
        bg: mode('#2a1f13', '#8a7a67')(props),
      },
    }),
  };

const theme = extendTheme({
    colors: {
        primary: "#8a7a67",
        secondary: "#ebeded",
        highlight: "#dee1e1",
        warning: "#52412e",
        danger: "#2a1f13"
    },
    fonts: {
        heading: 'Oswald',
        body: 'Oswald'
    },
    styles,
});

export default theme
