import styled from 'styled-components'

export const SkillConatiner =styled.div`
    background: var(--bgColor);
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 100vh;
    position:relative;
    z-index: 1;

`
export const SkillWrapper =styled.div`
    color:#fff;
    
    
`
export const SkillHead =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
   
`
export const SkillH =styled.div`
font-size:2rem;
padding:2rem;
font-family: var(--headFont);
color:var(--headtextColor);
    span{
        height: 0.5rem;
        width: 0.5rem;
        background-color: #FF500A;
        border-radius: 50%;
        display: inline-block;
    }
    @media screen and (max-width: 480px) {
        font-size:1.5rem;
    }
`

export const SkillPgrp =styled.div`
padding-bottom:4rem;
padding-top:2rem;
text-align:center;
color: var(--subTextColor);
`
export const SkillP =styled.div`
font-size:1rem;
line-height:30px;
font-family: var(--subFont);
@media screen and (max-width: 480px) {
        font-size:0.875em;
    }
    span{
        a{
            text-decoration:none;
            color:var(--headtextColor);
            &:hover{
                text-decoration:underline;
                text-decoration-color:yellow;
                
            }
        }
    }
    &:last-child{
        margin-top:2rem;
    }
`

export const SkillGrid =styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px 10px;
    grid-template-areas:
    "html css sass js react"
    "node php mysql git bash .";
    justify-items:center;
    
`
export const SkillGroup =styled.div`

`
export const SkillText =styled.div`
    font-size:0.8rem;
    font-family: var(--subFont);
`
export const SkillIcon =styled.div`
    font-size:3rem;
    color:#00ffbd;

    @media screen and (max-width: 480px) {
        font-size:1.5rem;
    }
    
`
export const AiFillHtml5 =styled.div`
    grid-area: html;

`
export const IoLogoCss3 =styled.div`
    grid-area: css;
`
export const FaSass =styled.div`
    grid-area: sass;
`
export const DiJavascript1 =styled.div`
    grid-area: js;
`

export const FaReact =styled.div`
    grid-area: react;
`

export const DiNodejs =styled.div`
    grid-area: node;
`

export const DiPhp =styled.div`
    grid-area:php;
`

export const SiMysql =styled.div`
grid-area: mysql;
`

export const ImGit =styled.div`
grid-area: git;
`

export const FaGithub =styled.div`
grid-area: github;
`

export const SiGnubash =styled.div`
grid-area: bash;
`

