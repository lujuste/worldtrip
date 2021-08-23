/* eslint-disable import/no-anonymous-default-export */
import {Heading, Grid} from '@chakra-ui/react'
import City from './City'

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default function() {
    return (
        <>
         <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb='10'>Cidades +100</Heading>
         <Grid
           templateColumns={["1fr",
           "1fr 1fr",
           "repeat(3, 1fr)",
           "repeat(4, 1fr)"
           ]}
           gap={["20px", "45px"]}
           alignItems="center"
           justifyContent="center"
           px={["30px", "0"]}>
             <City />
             <City />
             <City />
             <City />
             <City />
             <City />
             <City />
             <City />
         </Grid>
        </>
    )
}