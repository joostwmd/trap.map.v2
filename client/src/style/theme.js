import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    fonts: {
        heading: 'PhillySans',
        body : 'PhillySans',
    },

    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    }
})

export default theme