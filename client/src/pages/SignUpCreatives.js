import { useState } from 'react'
import { Input, Center, Heading, Text, Flex, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import axios from 'axios'
import { SERVER_URL, CLIENT_URL } from '../clientVariables'

function SignUpCreatives() {

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>

    const redirectToHome = () => {
        window.location.href = `${CLIENT_URL}/`
    }

    const redirectToMap = () => {
        window.location.href = `${CLIENT_URL}/map`

    }

    const [status, setStatus] = useState('signUp')

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [discription, setDiscription] = useState('')
    const [type, setType] = useState('')
    const [links, setLinks] = useState([])
    const [contactInfo, setContactInfo] = useState([])


    const [websiteName, setWebsiteName] = useState('')
    const [websiteLink, setWebsiteLink] = useState('')
    const addWebsiteLink = () => {
        const websitePair = [websiteName, websiteLink]
        setLinks([...links, websitePair])
        setWebsiteName('')
        setWebsiteLink('')
    }

    const [contactType, setContactType] = useState('')
    const [contact, setContact] = useState('')
    const addContact = () => {
        const contactPair = [contactType, contact]
        setContactInfo([...contactInfo, contactPair])
        setContactType('')
        setContact('')
    }


    const createCreativeSignUp = () => {
        if (name !== '' && location !== '') {
            setStatus('signedUp')
            const requestBody = { name, location, discription, type, links, contactInfo }
            axios.post(`${SERVER_URL}/dataBase/signUpCreative`, requestBody)
        }
    }

    if (status === 'signUp') {
        return (
            <div>
                <Center
                    onClick={() => redirectToHome()}
                    w='7.5vw'
                    h='7.5vw'
                    pos='absolute'
                    top='2vw'
                    ml='2vw'
                    backgroundColor='#fff'
                    borderRadius='50%'
                >
                    {arrowLeftIcon}
                </Center>

                <Center
                    flexDir='column'
                >
                    <Heading
                        fontSize='15vw'
                        color='brand.200'
                    >
                        sign up
                    </Heading>

                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                        mt='7.5vh'
                    >
                        name
                    </Heading>

                    <Text
                        mt='3.5vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        your aka, trapmap user name
                    </Text>

                    <Input
                        id='signUpInputName'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />


                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                        mt='7.5vh'
                    >
                        location
                    </Heading>
                    <Text
                        mt='3.5vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        your position on the trapmap. describe the position (postal-code, adress, place, park)
                    </Text>

                    <Input
                        id='signUpInputName'
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        errorBorderColor='brand.200'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />


                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                        mt='7.5vh'
                    >
                        category
                    </Heading>
                    <Text
                        mt='3.5vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        what type of creative are you?
                    </Text>

                    <UnorderedList>
                        <ListItem
                            fontSize='5vw'
                            color='brand.200'
                        >
                            designer
                        </ListItem>

                        <ListItem
                            fontSize='5vw'
                            color='brand.200'
                        >
                            videograph
                        </ListItem>

                        <ListItem
                            fontSize='5vw'
                            color='brand.200'
                        >
                            producer
                        </ListItem>

                        <ListItem
                            fontSize='5vw'
                            color='brand.200'
                        >
                            studio owner
                        </ListItem>
                    </UnorderedList>

                    <Text
                        mt='10vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        enter your category below. multiple choices are allowed
                    </Text>

                    <Input
                        id='signUpInputName'
                        value={type}
                        onChange={e => setType(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        errorBorderColor='brand.200'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />


                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                        mt='7.5vh'
                    >
                        discription
                    </Heading>
                    <Text
                        mt='3.5vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        what do people need to know about you if they want to work with you
                    </Text>

                    <Input
                        id='signUpInputName'
                        value={discription}
                        onChange={e => setDiscription(e.target.value)}
                        focusBorderColor='brand.200'
                        placeholder='required'
                        size='md'
                        width='90vw'
                        mb='2vh'
                    />

                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                        mt='5vh'
                    >
                        links
                    </Heading>
                    <UnorderedList>
                        {links.map(link => {
                            return (
                                <ListItem
                                    fontSize='5vw'
                                    color='#fff'
                                >
                                    {link[0]}
                                </ListItem>
                            )
                        })}
                    </UnorderedList>


                    <Text
                        mt='3.5vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        do you want to add links to showcase prior work?
                        enter tem below
                    </Text>

                    <Flex
                        flexDir='column'
                        alignItems='center'
                    >
                        <Input
                            id='nameOfWebsiteInput'
                            placeholder='name of website'
                            value={websiteName}
                            onChange={e => setWebsiteName(e.target.value)}
                            focusBorderColor='brand.200'
                            size='md'
                            width='90vw'
                            mb='2vh'
                        />

                        <Input
                            id='linkToWebsiteInput'
                            placeholder='link to this website'
                            value={websiteLink}
                            onChange={e => setWebsiteLink(e.target.value)}
                            focusBorderColor='brand.200'
                            size='md'
                            width='90vw'
                            mb='2vh'
                        />

                        <Button
                            onClick={() => { addWebsiteLink() }}
                            mt='2.5vh'
                            w='50vw'
                        >
                            add link
                        </Button>
                    </Flex>


                    <Heading
                        fontSize='10vw'
                        color='brand.200'
                        mt='7.5vh'
                    >
                        contacts
                    </Heading>
                    <UnorderedList>
                        {contactInfo.map(contact => {
                            return (
                                <ListItem
                                    fontSize='5vw'
                                    color='#fff'
                                >
                                    {contact[0]}
                                </ListItem>
                            )
                        })}
                    </UnorderedList>
                    <Text
                        mt='3.5vh'
                        fontSize='4.2vw'
                        ml='5vw'
                        mr='5vw'
                        mb='5vh'
                        align='center'
                    >
                        do you want to add contact information?
                        enter them below
                    </Text>

                    <Flex
                        flexDir='column'
                        alignItems='center'
                        w='90vw'
                    >
                        <Input
                            id='channelOfContactInput'
                            placeholder='channel (e-mail, insta, phone...)'
                            value={contactType}
                            onChange={e => setContactType(e.target.value)}
                            focusBorderColor='brand.200'
                            size='md'
                            width='90vw'
                            mb='2vh'
                        />

                        <Input
                            id='contactInfoInput'
                            placeholder='contact info'
                            value={contact}
                            onChange={e => setContact(e.target.value)}
                            focusBorderColor='brand.200'
                            size='md'
                            width='90vw'
                            mb='2vh'
                        />

                        <Button
                            onClick={() => { addContact() }}
                            mt='2.5vh'
                            w='50vw'
                        >
                            add contact
                        </Button>
                    </Flex>

                    <Button
                        onClick={() => { createCreativeSignUp() }}
                        w='75vw'
                        h='10vh'
                        mt='5vh'
                        mb='5vh'
                        backgroundColor='brand.200'
                    >
                        <Text
                            fontSize='10vw'
                            color='#fff'
                        >
                            sign up
                        </Text>
                    </Button>
                </Center>
            </div>
        )
    } else if (status === 'signedUp') {
        return (
            <div>
                <Flex
                    mt='2vh'
                    flexDir='column'
                    alignItems='center'
                    ml='5vw'
                    mr='5vw'
                    mb='7.5vh'
                >
                    <Heading
                        color='brand.200'
                        letterSpacing='wider'
                        fontSize='17.5vw'
                        align='center'
                        mb='5vh'
                    >
                        thank you
                    </Heading>

                    <Heading
                        color='#fff'
                        fontSize='10vw'
                        textDecorationLine='underline'
                        textDecorationColor='brand.200'
                    >
                        authentification
                    </Heading>

                    <Text
                        fontSize='4.2vw'
                        mt='5vh'
                        ml='5vw'
                        mr='5vw'
                        align='center'
                    >
                        we don't want anyone to sign you up without your permission.
                        so please dm us on insta, we'll take care of the rest
                    </Text>

                    <a href='https://www.instagram.com/trapmap.eu/'>
                        <Heading
                            aling='center'
                            fontSize='12.5vw'
                            color='brand.200'
                            textDecorationLine='underline'
                            textDecorationColor='#fff'

                        >
                            INSTA
                        </Heading>
                    </a>
                </Flex>

                <Flex
                    flexDir='column'
                >
                    <Center>
                        <Button
                            onClick={() => { redirectToMap() }}
                            bg='brand.200'
                            rounded='md'
                            w='50vw'
                            h='15vw'
                            mb='5vh'
                        >
                            <Heading
                                fontSize='10vw'
                                color='#fff'
                                letterSpacing='wider'
                            >
                                map
                            </Heading>
                        </Button>
                    </Center>

                    <Center>
                        <Button
                            onClick={() => { redirectToHome() }}
                            bg='#fff'
                            rounded='md'
                            w='50vw'
                            h='15vw'
                            mb='5vh'
                        >
                            <Heading
                                fontSize='10vw'
                                color='brand.200'
                                letterSpacing='wider'
                            >
                                home
                            </Heading>
                        </Button>
                    </Center>
                </Flex>
            </div>
        )
    }
}

export default SignUpCreatives


