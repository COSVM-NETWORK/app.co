import * as React from 'react'
import { Heading, Section } from '@pages/mining/shared'
import { Box, Img, Flex } from '@components/mining'
import { Card } from '@components/mining/card'
import { Type } from 'blockstack-ui'
import { CheckMark } from '@components/svg'

const CardItem = (props) => (
  <Card
    alignItems="center"
    justifyContent="space-between"
    width={['80%', 'calc(50% - 20px)']}
    flexDirection="column"
    px={[3, 4]}
    py={4}
    mb={[6, 0]}
    mx={['auto', 0]}
    {...props}
  />
)

const RankedBy = ({ by, bg, ...rest }) => (
  <Flex pt={4} alignItems="center" justifyContent="center" {...rest} flexWrap="wrap">
    <Box mr={2} pb={2}>
      <Type>Ranks&nbsp;by:</Type>
    </Box>
    <Box bg={bg} px={3} mb={2} py={1}>
      <Type color="white">{by}</Type>
    </Box>
  </Flex>
)

const Reviewers = (props) => (
  <Flex justifyContent="space-between" flexDirection={['column', 'row']} pb={[0, 5]} width={1} maxWidth="700px">
    <CardItem>
      <Box is="img" maxWidth="100%" src="https://file-jrmzurtxvq.now.sh/" alt="Product Hunt" />
      <RankedBy by="Hunter Ratings" bg="#11A9BC" />
    </CardItem>
    <CardItem>
      <Box is="img" maxWidth="100%" src="https://file-mqtzgelfak.now.sh/" alt="Democracy Earth" />
      <RankedBy by="Community Votes" bg="#EF6F6F" />
    </CardItem>
  </Flex>
)

const ListCheckItem = ({ children, ...props }) => (
  <Flex pb={4} alignItems="center" {...props}>
    <Box mr={3} style={{ transform: 'translateY(3px)' }}>
      <CheckMark />
    </Box>
    <Type color="white" lineHeight={1.5}>
      {children}
    </Type>
  </Flex>
)

const How = ({ ...props }) => (
  <>
    <Section minHeight="40vh" justifyContent="flex-end" mt={5} flexDirection="column" {...props}>
      <Box p={4}>
        <Img
          src="https://file-ewemlsnqnv.now.sh/"
          alt="How much can you earn?"
          maxWidth={['80%', '460px']}
          mx="auto"
          display="block"
        />
      </Box>
      <Heading mb={5} maxWidth={['100%', '800px']}>
        Apps are ranked by reviewers and rewards distributed every 30 days
      </Heading>

      <Reviewers />

      <Box pt={3}>
        <ListCheckItem>
          We are currently partnered with{' '}
          <a href="https://producthunt.com" target="_blank">
            Product Hunt
          </a>{' '}
          and{' '}
          <a href="https://www.democracy.earth/" target="_blank">
            Democracy Earth
          </a>{' '}
          as our app reviewers.
        </ListCheckItem>
        <ListCheckItem>Any user-ready app on App.co with Blockstack authentication or storage.</ListCheckItem>
        <ListCheckItem>
          Reviewers use their proprietary data to rank App.co apps. <a href="/mining/september-2018">View rankings.</a>
        </ListCheckItem>
        <ListCheckItem>Reviewers, criteria, and rankings are made public each month.</ListCheckItem>
      </Box>
    </Section>
  </>
)
export { How }
