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

const Link = styled.a`
    ${composedHelpers}
    font-weight: 500;
    :hover {
        cursor: pointer;
        background: #E5F1FF;
        color: #126Aff;
    }
`

export default Link;

Link.defaultProps = {
    borderRadius: '8px',
    background: 'none',
    border: 'none',
    color: '#171935',
    padding: '12px 24px',
}