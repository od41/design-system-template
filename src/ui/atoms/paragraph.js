import styled from 'styled-components'
import { compose, color, fontSize, fontWeight } from 'styled-system'

const composedHelpers = compose(
    color,
    fontSize,
    fontWeight
)

const Paragraph = styled.p`
    ${composedHelpers}
`

export default Paragraph;

Paragraph.defaultProps = {
    fontSize: '14px',
    color: '#171935'
}