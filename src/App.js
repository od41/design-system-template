import React from 'react';
import { ThemeProvider } from 'styled-components'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk, faChevronRight, faEdit, faFile, faMapMarkerAlt, faPhoneAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

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

import mapview from './map-view.jpg'

const overflowStyling = {
  overflowWrap: "break-word",
  wordWrap: "break-word",
  overflow: "hidden"
}

const mapImage = {
  // height: "inherit",
  width: '100%',
  objectFit: "cover"
}

const progressBar = {
  // webkitAppearance: "none",
  // appearance: "none",
  // borderRadius: "2px",
  // backgroundSize: "35px 20px, 100% 100%, 100% 100%"
  width: "100%"
}

// hide default checkbox
const oldCheckbox = {
  position: "absolute",
  opacity: "0",
  cursor: "pointer",
  height: "0",
  width: "0",
}

const newCheckbox = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "25px",
  width: "25px",
  backgroundColor: "#eee"
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      {/* <Container> */}
      <Box width="25vw" minWidth="280px" maxWidth="300px" height="100vh" position="fixed" top={0} left={0}>
        <SideBar />
      </Box>

      <Box ml="300px" width="75vw">
        <Header />
        <Box bg="lytBloo" paddingY="32px" width="100%">
          <Box marginX="1.4em" mb="1.4em">
            <Link fontSize="1.4em" color="greyOne">History</Link>
            <Link fontSize="1.4em" color="bloo" textDecoration="underline">My Scores</Link>
          </Box>
          <Flex>
            <Box marginX="1.4em" width="27%">
              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak" mb="8px">
                  <Flex justifyContent="space-between" alignItems="center">
                    General Information
                    <Label mb="3px" color="greyOne"><FontAwesomeIcon icon={faEdit} size="xs" /></Label>

                  </Flex>
                </Heading>
                <Flex color="#171935" mb="8px"><Label color="greyOne">First name:</Label> Ryan</Flex>
                <Flex color="#171935" mb="8px"><Label color="greyOne">Last name:</Label> Reynolds</Flex>
                <Flex color="#171935" mb="8px"><Label color="greyOne">Age:</Label> 27years, 2 months (DOB: 29/09/1993)</Flex>
                <hr style={{ margin: "24px 0" }} />
                <Flex color="#171935" mb="8px"><Label color="greyOne" mr="8px">@</Label> piro@ggmail.com</Flex>
                <Flex color="#171935" mb="8px"><Label color="greyOne" mr="8px"><FontAwesomeIcon icon={faPhoneAlt} size="xs" /></Label> 234 314 8989 432</Flex>

                {/* <Button paddingX="12px" paddingY="8px">Click Me!</Button> */}
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">
                  <Flex justifyContent="space-between" alignItems="center">
                    My Address
                    <Label mb="3px" color="greyOne"><FontAwesomeIcon icon={faEdit} size="xs" /></Label>

                  </Flex>
                </Heading>
                <Flex color="#171935"><Label color="greyOne" mr="8px"><FontAwesomeIcon icon={faMapMarkerAlt} size="md" /></Label> 88 Faubourg, Hollywood, CA, USA</Flex>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak" mb="8px">Records</Heading>
                <Flex mb="8px" alignItems="baseline">
                  <Flex justifyContent="center" alignItems="center" bg="lytBloo" padding="8px" borderRadius="8px" color="greyOne">
                    <Flex justifyContent="center" alignItems="center" padding="2px 3.5px" borderRadius="8px"><FontAwesomeIcon icon={faFile} size="xs" /></Flex>
                  </Flex>
                  <Box ml="8px" color="blak" style={overflowStyling} >First Year Transcript.pdf<Box fontSize="10px" color="greyOne">07/04/2020</Box></Box>
                </Flex>

                <Flex mb="8px" alignItems="baseline">
                  <Flex justifyContent="center" alignItems="center" bg="lytBloo" padding="8px" borderRadius="8px" color="greyOne">
                    <Flex justifyContent="center" alignItems="center" padding="2px 3.5px" borderRadius="8px"><FontAwesomeIcon icon={faFile} size="xs" /></Flex>
                  </Flex>
                  <Box ml="8px" color="blak" style={overflowStyling} >Second Year Transcript.pdf<Box fontSize="10px" color="greyOne">21/12/2019</Box></Box>
                </Flex>
              </Card>

              <Card background="none" border="2px dashed" borderColor="greyTwo" >
                <Flex justifyContent="center" alignItems="center">
                  <Box color="greyOne">
                    <Flex justifyContent="center" alignItems="center" bg="greyTwo" padding="12px" borderRadius="8px"><FontAwesomeIcon icon={faPlus} size="md" /></Flex>
                  </Box>
                </Flex>
              </Card>
            </Box>


            <Box marginX="1.4em" width="27%">
              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Semester Summary</Heading>
                <Paragraph color="#171935"><Label color="greyOne">GPA:</Label> 4.2</Paragraph>
                <Paragraph color="#171935"><Label color="greyOne">Year:</Label> Third</Paragraph>
                <Paragraph color="#171935"><Label color="greyOne">Admission no:</Label> 2020-3141432GG</Paragraph>
                {/* <Button paddingX="12px" paddingY="8px">Click Me!</Button> */}
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Teachers</Heading>
                <Flex mb="8px" alignItems="baseline">
                  <Flex justifyContent="center" alignItems="center" bg="yellah" padding="8px" borderRadius="8px" color="blak">
                    <Flex justifyContent="center" alignItems="center" padding="2px 3.5px" borderRadius="8px" fontWeight="bold">SS</Flex>
                  </Flex>
                  <Box ml="8px" color="blak" style={overflowStyling} ><Label fontWeight="bold">Seuss Strange</Label><Box fontSize="10px" color="greyOne">Faculty of Engineering</Box></Box>
                </Flex>
                <Flex mb="16px" alignItems="baseline">
                  <Flex justifyContent="center" alignItems="center" bg="veges" padding="8px" borderRadius="8px" color="blak">
                    <Flex justifyContent="center" alignItems="center" padding="2px 3.5px" borderRadius="8px" fontWeight="bold">BB</Flex>
                  </Flex>
                  <Box ml="8px" color="blak" style={overflowStyling} ><Label fontWeight="bold">Bruce Banner</Label><Box fontSize="10px" color="greyOne">Faculty of Science</Box></Box>
                </Flex>

                <Button >Schedule a call <Label pl="8px"><FontAwesomeIcon icon={faChevronRight} size="xs" /></Label></Button>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">
                  <Flex justifyContent="space-between" alignItems="center">
                    Classroom Address
                    <Label mb="3px" color="greyOne"><FontAwesomeIcon icon={faEdit} size="xs" /></Label>

                  </Flex>
                </Heading>
                <Flex color="#171935"><Label color="greyOne" mr="8px"><FontAwesomeIcon icon={faMapMarkerAlt} size="md" /></Label> Hall C, Faubourg, Hollywood, CA, USA</Flex>
                <Box mt="16px" height="110px" overflow="hidden" borderRadius="8px">
                  <img src={mapview} alt="map" style={mapImage} />
                </Box>
              </Card>
            </Box>

            <Box marginX="1.4em" width="27%">
              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Supported</Heading>
                <Heading fontSize="1.8em" fontWeight="bold" color="blak">86%</Heading>
                <Box><progress value="86" max="100" style={progressBar} /></Box>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Current Semester</Heading>
                <Flex mb="8px" alignItems="baseline">
                  <Flex justifyContent="center" alignItems="center" bg="yellah" padding="8px" borderRadius="8px" color="blak">
                    <Flex justifyContent="center" alignItems="center" padding="2px 3.5px" borderRadius="8px" fontWeight="bold"><FontAwesomeIcon icon={faAsterisk} size="xs" /></Flex>
                  </Flex>
                  <Box ml="8px" color="blak" style={overflowStyling} ><Label fontWeight="bold">Advanced Materials</Label><Box fontSize="10px" color="greyOne">Faculty of Engineering</Box></Box>
                </Flex>
                <Flex mb="16px" alignItems="baseline">
                  <Flex justifyContent="center" alignItems="center" bg="veges" padding="8px" borderRadius="8px" color="blak">
                    <Flex justifyContent="center" alignItems="center" padding="2px 3.5px" borderRadius="8px" fontWeight="bold">
                      <FontAwesomeIcon icon={faAsterisk} size="xs" />
                    </Flex>
                  </Flex>
                  <Box ml="8px" color="blak" style={overflowStyling} ><Label fontWeight="bold">Closed Loop Systems</Label><Box fontSize="10px" color="greyOne">Faculty of Engineering</Box></Box>
                </Flex>
                <Button >All Courses <Label pl="8px"><FontAwesomeIcon icon={faChevronRight} size="xs" /></Label></Button>
              </Card>

              <Card>
                <Heading fontSize="1em" fontWeight="bold" color="blak">Extra Credit</Heading>
                <Flex mb="16px" alignItems="baseline" position="relative">
                  <Flex justifyContent="center" alignItems="center" bg="veges" padding="8px" borderRadius="8px" color="blak" >
                    {/* <Flex justifyContent="center" alignItems="center" padding="2px 3.5px" borderRadius="8px" fontWeight="bold">
                      <FontAwesomeIcon icon={faAsterisk} size="xs" />
                    </Flex> */}
                    <input type="checkbox" checked="checked" style={oldCheckbox} />
                    <span style={newCheckbox}></span>
                  </Flex>
                  <Box ml="8px" color="blak" style={overflowStyling} ><Label fontWeight="bold">Library Volunteer</Label><Box fontSize="10px" color="greyOne">Librarian's Office</Box></Box>
                </Flex>
                <Button >All Credits <Label pl="8px"><FontAwesomeIcon icon={faChevronRight} size="xs" /></Label></Button>
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
