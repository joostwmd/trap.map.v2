import { Center, Heading, Text, Flex } from '@chakra-ui/react'
import { CLIENT_URL } from '../clientVariables'

function Datenschutz() {

    const redirectToHome = () => {
        window.location.href = `${CLIENT_URL}/home`
    }

    const arrowLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)" /></svg>


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

            <Center>
                <Heading
                    fontSize='7.5vw'
                    color='#fff'
                    letterSpacing='wider'
                >
                    datenschutz
                </Heading>
            </Center>

            <Flex
                flexDir='column'
                ml='7.5vw'
                mr='7.5vw'
            >
                <Text
                    mt='10vh'
                    fontSize='3.5vw'
                >
                    1. Verantwortliche: Siehe Impressum
                </Text>

                <Text
                    mt='5vh'
                    fontSize='3.5vw'
                >
                    2. Zwecke der Verarbeitung von gesammelten Daten
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='3vw'
                >
                    - Informatorische Nutzung unserer Website
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Es werden Informationen über die aktuelle Position der Karte im Session-Storage gespeichert. Diese Informationen sind nicht personenbezogenen und werden bei Ende der Session gespeichert. Die Informationen werden für eine userfreundliche Performance der Website benötigt.
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Es werden Interaktionen mit Trapmap-Profilen gemessen. Die für uns relevanten Interaktionen sind: Profilaufruf, Absprünge zu Spotify, Instagram, AppleMusic, YouTube und das Abspielen von Snippets. Diese Informationen sind nicht personenbezogenen und werden regelmäßig aus unserer Datenbank gelöscht. Diese Informationen werden genutzt, um Artists Auskunft über unseren Service zu geben.
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='3vw'
                >
                    - Bei Registrierung als Artist
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Bei Registrierung seitens der Verantwortlichen werden folgende Informationen über den Artist in die Datenbank übertragen: Artistname, Links zu Spotify & Instagram, ID des Spotify Accounts des Artist und Position des Artistmarkers auf der Karte. Außerdem wird automatisch eine Datenbank-ID generiert. Diese Informationen sind essentiell, damit die Website der trapmap GbR funktional ist.
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Außerdem können Links zu YouTube-Profilen und AppleMusic-Profilen hinzugefügt werde, um mehr potentielle Absprünge für den Artist generieren.
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Wichtig anzumerken ist, dass bei einem SignUp über die Website lediglich eine Anfrage an die trapmap GbR gesendet wird, diesen Artists aufzunehmen. Die Informationen dieser Anfrage sind neben den oben genannten verpflichtenden und optionalen Informationen auch die Antowort auf eine Sicherheitsfrage. Diese ist essentiell, um unfreiwillige Anmeldungen eines Artists und damit einhergehender Urheberrechtsmissbrauch seitens der trapmap GbR zu verhindern.
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Nach erfolgreicher Authentifizierung des Artists mithilfe der Sicherheitsfrage über die App: 'Instagram', wird die trapmap GbR ein Profil im Auftrag des Artist für diesen erstellen und die vorhergehende Anfrage sofort aus der Datenbank löschen.
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='3vw'
                >
                    - Bei Anmeldungen für einen Beta-Key
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Bei einer Anmeldungen für einen Beta-Key, wird die angegebene E-Mail Adresse in unserer Datenbank übertragen. Diese E-Mail Adresse wird solange gespeichert, bis der Zweck der Anmeldung erfüllt ist. Außerdem werden potentiellen Partnern und Investoren mit berechitgtem Interesse Auskunft über die Anzahl der Anmeldungen gegeben, jedoch niemals die personenbezogenen Daten selbst.
                </Text>

                <Text
                    mt='5vh'
                    fontSize='3.5vw'
                >
                    3. Cookies
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Wir geben Ihre personenbezogenen Daten grundsätzlich nicht an eigenverantwortliche Dritte weiter, sofern dies nicht im Rahmen der Nutzung unserer Webseite erforderlich ist und/oder wir gesetzlich dazu verpflichtet sind.
                </Text>

                <Text
                    mt='5vh'
                    fontSize='3.5vw'
                >
                    4. Empfänger der Daten
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Wir geben Ihre personenbezogenen Daten grundsätzlich nicht an eigenverantwortliche Dritte weiter,
                    sofern dies nicht im Rahmen der Nutzung unserer Webseite erforderlich ist und/oder wir gesetzlich dazu
                    verpflichtet sind.
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Der Zugang zur Datenbank ist Passwort geschützt, das wiederum in einer nicht öffentlich Zugänglichen Datei in unserm Backende hinterlegt ist. Außerdem blockiert unser Backende Datenbank Calls von dritten Servern, sodass nur die trapmap GbR und die Website auf die Daten zugreifen kann.
                </Text>

                <Text
                    mt='5vh'
                    fontSize='3.5vw'
                >
                    5. Speicherung der Daten
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Die Löschung der Daten erfolgt grundsätzlich, sofern Sie für die Zwecke, für die wir sie erheben, nicht mehr benötigen. Daten von Personen,
                    die die Website zu rein informatorischen Zwecken nutzen, werden nicht gespeichert. Eine Speicherung erfolgt darüber  hinaus ggfs.
                    bis zum Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten; ferner gelten die gesetzlichen Aufbewahrungspflichten.
                </Text>


                <Text
                    mt='5vh'
                    fontSize='3.5vw'
                >
                    6. Widerspruchsrecht
                </Text>

                <Text
                    mt='2.5vh'
                    fontSize='2vw'
                >
                    + Sie haben das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen,
                    die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen allgemeine oder auf Sie zugeschnittene Direktwerbung richtet.
                    Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.
                </Text>
            </Flex>
        </div>
    )
}

export default Datenschutz

