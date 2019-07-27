import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Box, Flex } from "rebass"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Hi, I'm Ellis, an illustrator based in Folkestone.</p>
    <p>
      I'm always happy to discuss commisions and other opportunities - drop me a
      line!
    </p>

    <Flex flexWrap="wrap" my={4}>
      <Box p={3} width={[1, 1 / 2, 1 / 3]} color="black" bg="yellow">
        Flex
      </Box>
      <Box p={3} width={[1, 1 / 2, 2 / 3]} color="white" bg="magenta">
        Box
      </Box>
    </Flex>
  </Layout>
)

export default SecondPage
