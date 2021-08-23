import {Flex, Heading, Popover, PopoverBody, PopoverTrigger, Text, Icon, PopoverContent, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react'
import { RiInformationLine,  } from 'react-icons/ri'


export default function Infos() {
    return (
        <Flex align="center" justify="space-between">
            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500" >50</Heading>
                <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700" >Países</Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500" >60</Heading>
                <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700" >Línguas</Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500" >27</Heading>
                <Text
                  fontWeight="600"
                  fontSize={["md",
                  "xl"]}
                  color="gray.700"
                  >Cidade
                  +100

                  <Popover>
                      <PopoverTrigger>
                          <span>
                              <Icon cursor="pointer" ml="1" as={RiInformationLine} color="gray.400" w={["10px", "16px"]} />
                          </span>
                      </PopoverTrigger>
                      <PopoverContent bg="gray.700" color="yellow.400">
                          <PopoverArrow bg="gray.700" />
                          <PopoverCloseButton />
                          <PopoverBody fontWidth="400" fontSize="sm">
                                Paris, Europa, Chile, Canadá, China, EUA...
                          </PopoverBody>
                      </PopoverContent>
                  </Popover>
                  
                  </Text>
            </Flex>
        </Flex>
        
    )
}