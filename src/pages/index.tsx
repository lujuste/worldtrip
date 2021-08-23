import React from "react";
import {Flex, Heading} from "@chakra-ui/react"
import Header from "../components/Header";
import Banner from '../components/Banner'
import ContentCard from "../components/ContentCard";
import SpacingSeparator from "../components/SpacingSeparator";
import Slider from '../components/Slider'

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <ContentCard />
      <SpacingSeparator />
      <Heading textAlign="center" fontWeight="500" mb={["5", "14"]} fontSize={["lg", "3xl", "4xl"]}>
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
