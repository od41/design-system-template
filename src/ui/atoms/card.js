import styled from 'styled-components'
import Box from './box'

const Card = styled(Box)`
    // margin: 0 auto;
    width: 60%;
`

export default Card;

Card.defaultProps = {
    minWidth: 200,
    maxWidth: 600,
    py: '32px',
    px: '24px',
    mx: '12px',
    marginBottom: '16px',
    background: '#ffffff',
    borderRadius: '8px'
}                