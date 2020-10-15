import styled from 'styled-components'
import {
    background,
    border,
    borderRadius,
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
} from 'styled-system';

const composedHelpers = compose(
    background,
    border,
    borderRadius,
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

const Button = styled.button`
    ${composedHelpers}
    font-weight: bold;
    :hover {
        cursor: pointer;
        background: #126AFF;
        color: white;
    }
`

export default Button;

Button.defaultProps = {
    borderRadius: '8px',
    background: '#E5F1FF',
    border: 'none',
    color: '#126AFF',
    padding: '12px 24px'
}