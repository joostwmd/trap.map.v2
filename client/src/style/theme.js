import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'



const breakpoints = createBreakpoints({
    sm: '45em',
    md: '55em',
    lg: '65em',
    xl: '75em',
})


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
    
    breakpoints
})

export default theme