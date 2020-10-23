import React from 'react'
import profile from './profile.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCalendar, faThLarge, faCheckSquare, faTint, faCommentAlt, faQuestionCircle, faStethoscope, faUser, faCross, faQuestion } from '@fortawesome/free-solid-svg-icons'

import Flex from '../atoms/flex'
import Box from '../atoms/box'
import Card from '../atoms/card'
import Heading from '../atoms/heading'
import Paragraph from '../atoms/paragraph'
import Button from '../atoms/button'
import Link from '../atoms/link'
import Label from '../atoms/label'

// styling

const listStyling = {
    margin: '28px 0',
    listStyle: 'none',
    width: '100%'
}

const SideBar = () => {
    return (
        <Box height="100%" alignItems="center" borderBottom={1}>
            <Box textAlign="center" marginY="36px">
                <Box backgroundImage={`url(${profile})`} width="54px" height="54px" borderRadius="40px" margin="0 auto"></Box>
                <Button background="none" color="blak">Schedule a call <Label pl="8px"><FontAwesomeIcon icon={faChevronDown} size="xs" /></Label></Button>
            </Box>
            <Box>
                <ul>
                    <li style={listStyling}><Link width="100%"><Label mr="16px"><FontAwesomeIcon icon={faThLarge} size="xs" /></Label>Home </Link></li>
                    <li style={listStyling}><Link ><Label mr="16px"><FontAwesomeIcon icon={faTint} size="xs" /></Label>My Scores </Link></li>
                    <li style={listStyling}><Link ><Label mr="16px"><FontAwesomeIcon icon={faCheckSquare} size="xs" /></Label>Self Evaluation </Link></li>
                    <li style={listStyling}><Link ><Label mr="16px"><FontAwesomeIcon icon={faCalendar} size="xs" /></Label>Calendar </Link></li>
                    <li style={listStyling}><Link ><Label mr="16px"><FontAwesomeIcon icon={faCommentAlt} size="xs" /></Label>Messaging </Link></li>
                </ul>
            </Box>

            <Box>
                <ul><Paragraph fontSize='12px' color="greyOne">Community</Paragraph>
                    <li style={listStyling}><Link ><Label mr="16px"><FontAwesomeIcon icon={faQuestion} size="xs" /></Label>Counsellor's Advice </Link></li>
                    <li style={listStyling}><Link ><Label mr="16px"><FontAwesomeIcon icon={faUser} size="xs" /></Label>Profile </Link></li>
                </ ul>
            </Box>

            <Box marginX="40px" position="absolute" bottom="36px" width="80%">
                <Flex justifyContent="space-between">
                    <Box color="perpl">
                        <Label mr="16px"><FontAwesomeIcon icon={faCross} size="xs" /></Label> Learna
                    </Box>
                    <Label mr="16px" color="greyOne"><FontAwesomeIcon icon={faQuestionCircle} size="md" /></Label>
                </Flex>

            </Box>

        </Box >

    )
}

export default SideBar
