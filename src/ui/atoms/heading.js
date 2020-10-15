import styled from 'styled-components'
import { compose, color, fontSize, fontWeight } from 'styled-system'

const composedHelpers = compose(
    color,
    fontSize,
    fontWeight
)

const Heading = styled.h1`
    ${composedHelpers}
`

export default Heading;