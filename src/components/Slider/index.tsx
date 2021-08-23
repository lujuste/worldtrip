import {Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
    return (
        <Flex w="100%" maxW="1240" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
            <Swiper
             slidesPerView={1}
             navigation
             pagination={{clickable: true}}
             autoplay= {{
                 delay: 4000,
             }}
             style={{width: '100%', flex:'1'}}
             >
                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/europe.png)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="center"
                     >
                         <Link href="/continent/europe">
                             <a>
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"
                                 
                                   >
                                     Europa
                                 </Heading>
                                <Text
                                   fontWeight="bold"
                                   color="gray.300"
                                   fontSize={["0.8rem", "1xl", "2xl"]}
                                   mt={["2","4"]}
                                   alignItems="center"
                                   justifyContent="center"
                                   >
                                     O Continente mais antigo
                                 </Text>
                             </a>
                         </Link>
                     </Flex>
                 </SwiperSlide>

                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/europe.png)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="center"
                     >
                         <Link href="/continent/europe">
                             <a>
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"
                                 
                                   >
                                     Europa
                                 </Heading>
                                <Text
                                   fontWeight="bold"
                                   color="gray.300"
                                   fontSize={["0.8rem", "1xl", "2xl"]}
                                   mt={["2","4"]}
                                   alignItems="center"
                                   justifyContent="center"
                                   >
                                     O Continente mais antigo
                                 </Text>
                             </a>
                         </Link>
                     </Flex>
                 </SwiperSlide>

            </Swiper>
        </Flex>
    )
} 