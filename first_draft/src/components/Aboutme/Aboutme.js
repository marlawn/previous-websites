import { Spacer, useColorMode, Image, useMediaQuery, Text, VStack, Stack, Box } from "@chakra-ui/react"
import "./Aboutme.scss"
import "@fontsource/montserrat"

const Aboutme = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:821px)");


    return (
        <div>
            <VStack paddingBottom={isNotSmallerScreen ? "115px" : "0px"}>
                <Stack
                    direction={isNotSmallerScreen ? "row" : "column"}
                    alignItems='center'
                    mx={isNotSmallerScreen ? "7%" : ""}
                >
                    <Box 
                    w={isNotSmallerScreen ? "500px" : "300px"}
                    h={isNotSmallerScreen ? "500px" : "190px"}
                    >
                        <Image 
                        position="absolute"
                            mt={isNotSmallerScreen ? "" : "-60px"} 
                            mb={isNotSmallerScreen ? "" : "-40px"}
                            src={isDark ? "https://i.ibb.co/SmL08HQ/melight.png" : "https://i.ibb.co/4S0MnPx/medark.png"}
                            w={isNotSmallerScreen ? "450px" : "300px"}

                        />
                    </Box>
                    <Spacer></Spacer>
                    <Box pt={isNotSmallerScreen ? '' : ''} className="aboutme" px="10%">
                        <VStack align={isNotSmallerScreen ? "initial" : "center"}>
                            <Text className="headerFont" align={isNotSmallerScreen ? "initial" : "center"}>About Me</Text>
                            <Text className="bodyFont" align={isNotSmallerScreen ? "initial" : "center"}>
                                I am currently a student at Rutgers University - New Brunswick majoring in Computer Engineering and minoring in Computer Science!
                                I have always had a passion for coding because of the creative freedom it holds.
                                My scope of interest varies from game development to frontend development.
                                My goal is to develop my coding skills to the point where I can create anything I want to.
                            </Text>
                        </VStack>
                    </Box>
                </Stack>
            </VStack>
        </div>
    )

}

export default Aboutme