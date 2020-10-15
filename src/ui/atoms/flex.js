import styled from 'styled-components'
import Box from './box'

import { compose, flex, flexbox } from 'styled-system'

const composedHelpers = compose(flexbox)

const Flex = styled(Box)`
    display: flex;
    ${composedHelpers}`


export default Flex;

Flex.defaultProps = {};