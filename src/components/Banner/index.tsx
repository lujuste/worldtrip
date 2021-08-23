/* eslint-disable jsx-a11y/alt-text */
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex
          w="100%"
          h={["163px", "250px", "250px", "335px"]}
          bgImage="url('/banner.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
          >

            <Flex
              justify={['center', 'space-between']}
              align="center"
              w="100%"
              mx="auto"
              px={["4", "10", "15", "20", "36"]}
              >

                <div>
                  <Heading color="gray.100" fontWeight="500" fontSize={["xl", "2l", "2xl", "4xl" ]}>
                    5 continentes, <br/>infinitas possibilidades.
                  </Heading>
                  <Text color="gray.300" mt="5" fontSize={["0.8rem", "xl"]} maxW={["100%", "100%", "100%", "550px"]}>
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                  </Text>
                </div>

                <Image
                  src="/airplane.svg"
                  w={["300px", "300px", "300px", "430px"]}
                  display={["none", "none", 'block']}
                  alt="Avião amarelo voando pela homescreen"
                  transform="translateY(48px)"
                  ml="8"
                  />

            </Flex>
            
        </Flex>
    )
}