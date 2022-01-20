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
                fontSize: '35px',
                color: '#fff'
            },
    
            p: {
                fontFamily : 'Montserrat',
                fontSize : '15px',
                color : '#fff'
            }
        }    
    },

    colors: {
        brand: {
            100: '#000', //black
            200: '#9381FF' //purple

        }
    }
})

export default theme