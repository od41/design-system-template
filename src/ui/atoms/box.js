import styled from 'styled-components'
import {
    background,
    border,
    bottom,
    boxShadow,
    color,
    compose,
    layout,
    left,
    position,
    right,
    space,
    top,
    typography,
} from 'styled-system'

export const composedHelpers = compose(
    background,
    border,
    bottom,
    boxShadow,
    color,
    layout,
    left,
    position,
    right,
    space,
    top,
    typography,
)

const Box = styled.div`
    ${composedHelpers}
`

export default Box;