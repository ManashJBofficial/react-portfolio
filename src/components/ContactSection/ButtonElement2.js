import styled from 'styled-components'
// import { Link } from 'react-scroll'

export const Button =styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#00ffbd' : 'var(--bgColor)') };
    /* background:transparent; */
    white-space:nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#01606' : 'var(--headtextColor)')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    margin-bottom:1rem;
    font-family: var(--subFont);
    bottom:1.5rem;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#00ffbd') };
        color:#1C2541;
    }
`

