import styled from 'styled-components'

export const NameInput =styled.div`
    display:flex;
    flex-direction:column;
    margin-top:4rem;
    margin-bottom:1rem;
    
    input{
        width:16.25rem;
        height: 1.875rem;
        border: none;
        border-bottom: 1px solid var(--subTextColor);
        background: none;
        font-family: var(--subFont);
        &:focus{
            color: var(--subTextColor);
            outline: none;
            border-bottom: 1px solid var(--headtextColor);
            @media screen and (max-width: 768px){
                width:300px;
            }
        }  
        @media screen and (max-width: 376px){
            width:13rem;
            height: 1.8rem;
        } 
    }
    label{
        margin-bottom:0.5rem;
        font-family: var(--headFont);
        color: var(--headtextColor);
        font-weight:bold;
    }
`
export const EmailInput =styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:1rem;
    input{
        width:260px;
        height: 30px;
        border: none;
        border-bottom: 1px solid var(--subTextColor);
        background: none;
        font-family: var(--subFont);
        &:focus{
            color: var(--subTextColor);
            border-bottom: 1px solid var(--headtextColor);
            outline: none;
            
            @media screen and (max-width: 768px){
                width:300px;
            }
        }
        @media screen and (max-width: 376px){
            width:13rem;
            height: 1.8rem;
        } 
    }
    label{
        margin-bottom:0.5rem;
        font-family: var(--headFont);
        color: var(--headtextColor);
        font-weight:bold;
    }
`
export const MessageInput =styled.div`
    display:flex;
    flex-direction:column;
    textarea{
        resize: none;
        width:260px;
        height:60px;
        margin-bottom:2.5rem;
        border: none;
        border-bottom: 1px solid var(--subTextColor);
        background: none;
        font-family: var(--subFont);
        &:focus{
            color: var(--subTextColor);
            outline: none;
            border-bottom: 1px solid var(--headtextColor);
        }
        @media screen and (max-width: 376px){
            width:13rem;
            height: 1.8rem;
        } 
    }
    label{
        margin-bottom:0.5rem;
        font-family: var(--headFont);
        color: var(--headtextColor);
        font-weight:bold;
    }
`