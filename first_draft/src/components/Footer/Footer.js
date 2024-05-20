import { Button, useColorMode, HStack, Box, Spacer, Stack, useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack className='foots' w="100%" direction={isNotSmallerScreen ? "row" : "column"} alignItems={isNotSmallerScreen ? "" : "center"}>
            <HStack>
                <Link to="/marlawn">
                    <Box className="box">
                        <Button bg={isDark ? "danger" : "primary"} color={isDark ? "primary" : "danger"}>HOME</Button>
                    </Box>
                </Link>
                <Link to="/portfolio">
                    <Box className="box">
                        <Button bg={isDark ? "danger" : "primary"} color={isDark ? "primary" : "danger"}>PORTFOLIO</Button>
                    </Box>
                </Link>
                <Link to="/resume">
                    <Box className="box">
                        <Button bg={isDark ? "danger" : "primary"} color={isDark ? "primary" : "danger"}>RESUME</Button>
                    </Box>
                </Link>
            </HStack>
            <Spacer />
            <Box alignSelf={isNotSmallerScreen ? "start" : "center"}>Made with React and Chakra UI</Box>
        </Stack>
    )
}

export default Footer