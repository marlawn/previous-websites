import { VStack, Flex, Image, Spacer, Link, IconButton, useColorMode } from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <VStack p={5} bg={isDark ? 'primary' : 'danger'}>
            <Flex w='100%'>
                <Image src={isDark ? 'https://i.ibb.co/rMb5P1T/logo.png' : 'https://i.ibb.co/j39r58C/logo-Light.png'} boxSize='40px' alt="logo" />
                <Spacer></Spacer>
                <Link href="https://www.linkedin.com/in/marlon-vergara/">
                    <IconButton ml={2} icon={<FaLinkedin />} isRound="true" bg={isDark ? "danger" : "primary"} color={isDark ? "primary" : "danger"}></IconButton>
                </Link>
                <Link href="https://github.com/marlawn">
                    <IconButton ml={2} icon={<FaGithub />} isRound="true" bg={isDark ? "danger" : "primary"} color={isDark ? "primary" : "danger"}></IconButton>
                </Link>
                <IconButton ml={8} size="md" icon={isDark ? <FaMoon /> : <FaSun />} isRound="true" onClick={toggleColorMode} bg={isDark ? "danger" : "primary"} color={isDark ? "primary" : "danger"}></IconButton>
            </Flex>
        </VStack>
    )
}

export default Navbar