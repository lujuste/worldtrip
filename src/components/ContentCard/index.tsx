import { Grid, GridItem } from '@chakra-ui/react'
import ContentItem from './ContentItem'

export default function ContentCard() {
  
    return (
        <Grid
        templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
        w="100%"
        justify="space-between"
        align="center"
        mt={["10","32"]}
        mx="auto"
        maxW="1160px"
        flexWrap="wrap"
        gap={[1,5]}
      >

           <GridItem>
                <ContentItem icon="cocktail" text="vida noturna" />
           </GridItem>
           <GridItem>
                <ContentItem icon="surf" text="praia" />
           </GridItem>
           <GridItem>
                <ContentItem icon="building" text="moderno" />
           </GridItem>
           <GridItem>
                <ContentItem icon="museum" text="classico" />
           </GridItem>

           <GridItem colSpan={[2, 2, 2, 1]}>
                <ContentItem icon="earth" text="e mais" />
           </GridItem>
           
       </Grid>
    )
}