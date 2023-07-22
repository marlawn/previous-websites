import { VStack, Flex, Spacer } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect'

const header = () => {
    return (
        <VStack mb={10}>
            <Flex fontSize={40}>
                <Typewriter
                    options={{
                        cursor: ""
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Nice to meet you!')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('I am <span style="color:#ebeded;"><strong>Marlon Vergara</strong></span>.')
                            .pauseFor(7100)
                            .start()
                    }}
                />
            </Flex>
            <Spacer></Spacer>
            <Flex fontSize={25}>
                <Typewriter
                    options={{
                        cursor: ""
                    }}
                    onInit={(typewriter) => {
                        typewriter.pauseFor(11000)
                            .typeString('<span style="color:#ebeded;"><strong>STUDENT / PROGREMM</strong></span>')
                            .pauseFor(1000)
                            .deleteChars(3)
                            .typeString('<span style="color:#ebeded;"><strong>AMMER</strong></span>')
                            .pauseFor(3000)
                            .start()
                    }}
                />
            </Flex>
        </VStack>
    )
}

export default header