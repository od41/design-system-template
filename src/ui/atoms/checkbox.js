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
} from 'styled-system';

const composedHelpers = compose(
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
)

const Checkbox = styled.input.attrs(props => ({
    type: 'checkbox',
}))`
    ${composedHelpers}
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 32px;  
    width: 32px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid #DCE3EB;
    background: #fff;
    transition: backround .3s, border-color .3s, box-shadow .2s;
    border-radius: 7px;
    
    :after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform .3s ease, opacity .2s;
        width: 5px;
        height: 9px;
        border: 3px solid #171935;
        border-top: 0;
        border-left: 0;
        left: 11px;
        top: 7px;
        transform: rotate(var(--r, 20deg));
        opacity: var(--o, 0);
    }

    :checked {
        background: #DCE3EB;
        border: 1px solid #DCE3EB;
        transition: transform .6s cubic-bezier(.2, .85, .32, 1.2), .3s;
        --o: 1;
        --r: 43deg;
    }
`

export default Checkbox;

Checkbox.defaultProps = {

}