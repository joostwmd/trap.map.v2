import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Montserrat',
        body : 'Montserrat',
    },

    styles: {
        global: {
            body: {
                bg: '#000'
            },

            h1: {
                fontFamily : 'Montserrat',
                color: '#fff'
            },
    
            p: {
                fontFamily : 'Montserrat',
                color : '#fff'
            }
        }    
    },

    colors: {
        brand: {
            100: '#000', //black
            200: '#9381FF' //purple

        }
    },

    shadows : {
        outline : '0 0 0 3px var(--chakra-ui-focus-ring-color)'
    }
})

export default theme