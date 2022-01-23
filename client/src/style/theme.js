import { extendTheme } from '@chakra-ui/react'




const theme = extendTheme({
    fonts: {
        heading: 'PhillySans',
        body : 'Montserrat',
    },

    styles: {
        global: {
            body: {
                bg: '#000'
            },

            h1: {
                fontFamily : 'PhillySans',
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
})

export default theme