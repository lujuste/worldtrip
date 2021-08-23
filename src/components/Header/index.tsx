import {Flex, Grid, Icon, Image} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router' 
import Link from 'next/link'
import { RiArrowLeftSLine} from 'react-icons/ri'

export default function Header() {
    const { asPath } = useRouter()
    const notHome = asPath !== "/"

    return (
       <Flex
         bg="white"
         w="100%"
         as="header"
         mx="auto"
         px="1rem"
         h={["50px",
         "100px"]}
         align="center"
         justify="center"
         >

            <Grid
              h="100%"
              mx="auto"
              w="100%"
              maxW="1160px"
              alignItems="center"
              templateColumns="repeat(3, 1fr)"
              justifyContent="center"
              >   

              {notHome && (
                <Link href="/">
                  <a>
                    <Icon as={RiArrowLeftSLine} fontSize={[28, 40]} justifySelf="start" />
                  </a>
                </Link>
              )}       
            

            <Image
              w={["81px", "184px"]}  
              src="/logo.svg"
              alt="Um aviao voando sobre a homepage"
              justifySelf="center"
              gridColumn="2"
              />

            </Grid>  
       </Flex>
    )
}