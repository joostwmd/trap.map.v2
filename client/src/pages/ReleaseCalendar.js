import { useState, useEffect } from 'react'
import { Flex, Center, Heading, Button, Text } from '@chakra-ui/react'
import { CLIENT_URL, SERVER_URL } from '../clientVariables'
import axios from 'axios'
import ReleaseCard from '../components/ReleaseCard'


function ReleaseCalendar() {

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(255,255,255,1)" /></svg>
    const arrowRightIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(255,255,255,1)" /></svg>
    const arrowLeftIconPurple = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>

    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const [dates, setDates] = useState([])
    const [selectedDate, setSelectedDate] = useState(0)
    const [allReleases, setAllReleases] = useState([])

    const redirectToHome = () => {
        window.location.href = `${CLIENT_URL}/`
    }

    const createDateArray = () => {
        let arr = []
        for (let i = 0; i < 7; i++) {
            let date = new Date(new Date().setDate(new Date().getDate() + i));
            arr.push(`${date.getDate()} ${months[date.getMonth()]}`)
        }
        return arr
    }

    const toggleDayIndicators = (index) => {
        for (let i = 0; i < 7; i++) {
            if (i !== index) {
                document.getElementById(`day${i}`).style.backgroundColor = '#FFF'
            } else if (i === index) {
                document.getElementById(`day${i}`).style.backgroundColor = '#9381FF'
            }
        }
    }

    const nextDay = () => {
        if (selectedDate < 6) {
            setSelectedDate(selectedDate + 1)
            toggleDayIndicators(selectedDate + 1)
        }
    }

    const pastDay = () => {
        if (selectedDate > 0) {
            setSelectedDate(selectedDate - 1)
            toggleDayIndicators(selectedDate - 1)
        }
    }


    useEffect(() => {
        setDates(createDateArray())
        toggleDayIndicators(0)
        axios.get(`${SERVER_URL}/dataBase/getReleases`)
            .then(res => {
                console.log(months[Number(res.data[0].releaseDate.split('.')[1] - 1)])
                setAllReleases(res.data)
            })
    }, [])

    return (
        <div>
            <Center
                mt='1vh'
            >
                <Center
                    onClick={() => redirectToHome()}
                    w='7.5vw'
                    h='7.5vw'
                    pos='absolute'
                    top='1vw'
                    mr='85vw'

                    backgroundColor='#fff'
                    borderRadius='50%'
                >
                    {arrowLeftIconPurple}
                </Center>

                <Heading
                    fontSize='7.5vw'
                    color='#fff'
                >
                    releases
                </Heading>

            </Center>
            <Center>
                <Heading
                    fontSize='12.5vw'
                    color='brand.200'
                >
                    {dates[selectedDate]}
                </Heading>
            </Center>

            <Flex
                alignItems='center'
                justifyContent='space-around'
                paddingBottom='2.5vh'
                
            >
                <Button
                    id='pastDayButton'
                    onClick={() => { pastDay() }}
                    backgroundColor='brand.200'
                    rounded='md'
                    w='15vw'
                    h='7.5vw'
                >
                    <Text
                        id='pastDayButtonText'
                        color='#fff'
                    >
                        {arrowLeftIcon}
                    </Text>
                </Button>

                <Flex
                    alignItems='center'
                >

                    <div className='selectedDayIndicator' id='day0' />
                    <div className='selectedDayIndicator' id='day1' />
                    <div className='selectedDayIndicator' id='day2' />
                    <div className='selectedDayIndicator' id='day3' />
                    <div className='selectedDayIndicator' id='day4' />
                    <div className='selectedDayIndicator' id='day5' />
                    <div className='selectedDayIndicator' id='day6' />
                </Flex>

                <Button
                    id='nextDayButton'
                    onClick={() => { nextDay() }}
                    backgroundColor='brand.200'
                    rounded='md'
                    w='15vw'
                    h='7.5vw'
                >
                    <Text
                        id='nextDayButtonText'
                        color='#fff'
                    >
                        {arrowRightIcon}
                    </Text>
                </Button>
            </Flex>
            <Flex
                flexDir='column'
                alignItems='center'
                mt='2.5vh'
            >
                {allReleases.map(release => {
                    if (dates[selectedDate] === `${release.releaseDate.split('.')[0]} ${months[Number(release.releaseDate.split('.')[1] - 1)]}`){
                        return (
                           <ReleaseCard key={release.title} release={release} />
                        )
                    }
                })}
            </Flex>


        </div>
    )
}

export default ReleaseCalendar
