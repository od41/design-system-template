import React from 'react'

import Container from '../atoms/container'
import Box from '../atoms/box'
import Flex from '../atoms/flex'
import Label from '../atoms/label'

import logo from '../../bukky-school-logo.png'

const logoStyle = {
    width: '24px',
    height: '24px',
}

const Header = () => {
    return (
        <Flex height={74} alignItems="center" bg="whyt" borderBottom={1} justifyContent="space-between" paddingX="2em">
            <Box>
                <Flex height={24} alignItems="center" color="greyOne"><img src={logo} alt="Bukky School" style={logoStyle} /> <Label ml="8px">Bukky School of The Parts</Label></Flex>
            </Box>
            <Box>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="12" fill="#171935" /><circle cx="11" cy="11" r="3" fill="#F1D45C" /><circle cx="11" cy="21" r="3" fill="#86E2F1" /><circle cx="21" cy="11" r="3" fill="#86E2F1" /><circle cx="21" cy="21" r="3" fill="#F1D45C" /></svg>
            </Box>
        </Flex>
    )
}

export default Header
