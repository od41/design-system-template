import React from 'react';
import { ThemeProvider } from 'styled-components'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Container from './ui/atoms/container'
import Box from './ui/atoms/box'
import Flex from './ui/atoms/flex'
import Card from './ui/atoms/card'
import Button from './ui/atoms/button'
import Heading from './ui/atoms/heading'
import Paragraph from './ui/atoms/paragraph'
import Label from './ui/atoms/label'
import Link from './ui/atoms/link'
import theme from './ui/theme'

import Header from './ui/molecules/header'
import Footer from './ui/molecules/footer'
import SideBar from './ui/molecules/sidebar'

function App() {
  return (
    <ThemeProvider theme={theme} >
      {/* <Container> */}
      <Box width="25vw" minWidth="280px" height="100vh" position="fixed" top={0} left={0}>
        <SideBar />
      </Box>

      <Box ml="300px" width="75vw">
        <Header />
        <Box bg="lytBloo" paddingY="32px" width="100%">
          <Box marginX="1.4em" mb="1.4em">
            <Link fontSize="1.4em" color="greyOne">My Health</Link>
            <Link fontSize="1.4em" color="bloo" textDecoration="underline">Medical File</Link>
          </Box>
          <Flex>
            <Box marginX="1.4em" width="27%">
              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Medical Information</Heading>
                <Paragraph color="#171935"><Label color="greyOne">Gender:</Label> Male</Paragraph>
                <Paragraph color="#171935"><Label color="greyOne">Blood Type:</Label> A+</Paragraph>
                <Paragraph color="#171935"><Label color="greyOne">Social Security:</Label> 1313 3131 1313 5353</Paragraph>
                {/* <Button paddingX="12px" paddingY="8px">Click Me!</Button> */}
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Medical Team</Heading>
                <Paragraph color="#171935"><Paragraph color="blak">Seuse Strange</Paragraph> Time Doctor</Paragraph>
                <Paragraph color="#171935"><Paragraph color="blak">Bruce Banner</Paragraph> Green Muscle Doctor</Paragraph>
                <Button >Schedule a call <Label pl="8px"><FontAwesomeIcon icon={faChevronRight} size="xs" /></Label></Button>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">My Address</Heading>
                <Paragraph color="#171935"><Label pr="8px"><FontAwesomeIcon icon={faMapMarkerAlt} size="xs" /></Label>88 Faubourg Saint Honore, 75019 Paris FR</Paragraph>
                <Box>`Insert Image`</Box>
              </Card>
            </Box>

            <Box marginX="1.4em" width="27%">
              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Supported</Heading>
                <Heading fontSize="1.8em" fontWeight="bold" color="blak">86%</Heading>
                <Box>Progress bar @86%</Box>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Disease (2)</Heading>
                <Paragraph color="#171935">Asthma</Paragraph>
                <Paragraph color="#171935">Crohn's Disease</Paragraph>
                <Button >My Diagnosis <Label pl="8px"><FontAwesomeIcon icon={faChevronRight} size="xs" /></Label></Button>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Treatment (3)</Heading>
                <Paragraph color="#171935">Seretide 120mg</Paragraph>
                <Paragraph color="#171935">Melarth 250mg</Paragraph>
                <Paragraph color="#171935">Flixotide 60mg</Paragraph>
                <Button >My Calendar <Label pl="8px"><FontAwesomeIcon icon={faChevronRight} size="xs" /></Label></Button>
              </Card>
            </Box>

            <Box marginX="1.4em" width="27%">
              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Medical Information</Heading>
                <Paragraph color="#171935"><Label color="greyOne">Gender:</Label> Male</Paragraph>
                <Paragraph color="#171935"><Label color="greyOne">Blood Type:</Label> A+</Paragraph>
                <Paragraph color="#171935"><Label color="greyOne">Social Security:</Label> 1313 3131 1313 5353</Paragraph>
                {/* <Button paddingX="12px" paddingY="8px">Click Me!</Button> */}
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Medical Team</Heading>
                <Paragraph color="#171935"><Paragraph color="blak">Seuse Strange</Paragraph> Time Doctor</Paragraph>
                <Paragraph color="#171935"><Paragraph color="blak">Bruce Banner</Paragraph> Green Muscle Doctor</Paragraph>

                <Button >Schedule a call <Label pl="8px"><FontAwesomeIcon icon={faChevronRight} size="xs" /></Label></Button>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">My Address</Heading>
                <Paragraph color="#171935"><Label pr="8px"><FontAwesomeIcon icon={faMapMarkerAlt} size="xs" /></Label>88 Faubourg Saint Honore, 75019 Paris FR</Paragraph>
                <Box>`Insert Image`</Box>
              </Card>
            </Box>
          </Flex>

        </Box>

      </Box>
      {/* </Container> */}
      <Footer />
    </ThemeProvider >
  );
}

export default App;
