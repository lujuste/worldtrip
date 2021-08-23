import {Flex} from '@chakra-ui/react'
import ContinentsBanner from '../../components/ContinentsBanner.tsx'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Cities from '../../components/Cities'
export default function Continents() {
    return (
        <Flex direction="column">
            <Header />
            <ContinentsBanner />
            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
                <Content />
                <Cities />
            </Flex>
        </Flex>
    )
}