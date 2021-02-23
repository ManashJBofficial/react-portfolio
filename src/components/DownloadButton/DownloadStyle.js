import styled from 'styled-components'

export const Abtn =styled.div`
    height: 80px;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    
    .download-btn{
    border-radius:50px;
    background:transparent;
    white-space:nowrap;
    padding: 10px 22px;
    color: var(--headtextColor);
    font-size:16px;
    cursor:pointer;
    outline:none;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    border:1px solid #00ffbd;
    border-radius:4px;
    font-family: var(--subFont);
    &:hover{
        transition:  all 0.2s ease-in-out;
        background: #00ffbd;
        color: var(--bgColor);
    }

    

}
`;