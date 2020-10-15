import styled from 'styled-components'
import { compose, color, fontSize, fontWeight, space } from 'styled-system'

const composedHelpers = compose(
    color,
    fontSize,
    fontWeight,
    space
)

const Label = styled.span`
    ${composedHelpers}
`

export default Label;

Label.defaultProps = {
    display: 'inline-block',
}