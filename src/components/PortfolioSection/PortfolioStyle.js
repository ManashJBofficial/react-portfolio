import styled from 'styled-components'
import img1 from "../../images/img1.png"
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

export const PortfolioContainer =styled.div`
    background: var(--bgColor);
    display: flex;
    justify-content:center;
    align-items:flex-start;
    padding: 0 30px;
    height:100vh;
    position:relative;
    z-index: 1;
    width:100%;
    overflow:hidden;

    @media screen and (max-width: 1200px){
        height: 160vh;
    }
    @media screen and (max-width: 1025px){
        height: 160vh;
    }
    @media screen and (max-width: 760px){
        height: 220vh;
    }
    @media screen and (max-width: 480px){
        height: 220vh;
    }
`
export const PortfolioWrapper =styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction:column;
    align-items:center;
    top:4rem;
`
export const TextWrapper =styled.div`
    color:var(--subTextColor);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   
`
export const HeadText =styled.div` 
    font-size: 2rem;
    text-align:center;
    margin:2rem;
    z-index:5;
    font-family: var(--headFont);
    color:var(--headtextColor);
    span{
        height: 0.5rem;
        width: 0.5rem;
        background-color: #FF500A;
        border-radius: 50%;
        display: inline-block;
    }
`
export const Subtitle =styled.div`
    font-size: 16px;
    text-align:center;
    margin-top:2rem;
    margin-bottom:4rem;
    font-family: var(--subFont);
`
export const ProjectGrid =styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 0em 2em;
    grid-template-areas:
        "item1 item2 item3";
        max-width:90vw;
    @media screen and (max-width: 1200px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1em 1em;
        grid-template-areas:
        "item1 item2"
        "item3 .";
    }

    @media screen and (max-width: 768px){
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        gap: 3em 0em;
        grid-template-areas:
            "item1"
            "item2"
            "item3";
            
            
    }
    @media screen and (max-width: 480px){
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        gap: 3em 0em;
        grid-template-areas:
            "item1"
            "item2"
            "item3";  
    }
    
`
export const Item1 =styled.div`
    
    grid-area: item1;
    width:23rem;  
    height: 23rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    background-color:var(--cardBg); 
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 376px){
        width:21rem;
        height:21rem;
    }

`
export const Item2 =styled.div`
    
    grid-area: item2;
    width:23rem;  
    height: 23rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    background-color:var(--cardBg); 
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 376px){
        width:21rem;
        height:21rem;
    }
    
`
export const Item3 =styled.div`
    
    grid-area: item3;
    width:23rem;  
    height: 23rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    background-color:var(--cardBg); 
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 376px){
        width:21rem;
        height:21rem;
    }
`
export const Img1 =styled.div`

    background-image: url(${img1});
    background-position:center;
    background-size:cover;
    width:100%;
    height:100%;
    box-shadow: inset 0 0 0 125rem rgba(0, 0, 0, 0.4);
    border-radius:5px 5px 0 0;
    
`
export const Img2 =styled.div`
    background-image: url(${img2});
    background-position:center;
    background-size:cover;
    width:100%;
    height:100%;
    box-shadow: inset 0 0 0 125rem rgba(0, 0, 0, 0.4);
    border-radius:5px 5px 0 0;
`
export const Img3 =styled.div`
    background-image: url(${img3});
    background-position:center;
    background-size:cover;
    width:100%;
    height:100%;
    box-shadow: inset 0 0 0 125rem rgba(0, 0, 0, 0.4);
    border-radius:5px 5px 0 0;
`
// export const Img4 =styled.div`
    
// `
export const Description =styled.div`
    color:#fff;
    
    /* position:absolute;
    display:inline-block;
    margin-top:3rem; */

`
export const Title =styled.div`

    font-size:20px;
    padding-top:1rem;
    padding-bottom:1rem;
    font-family: var(--headFont);
    /* position:absolute;
    display:inline-block;

    margin-bottom:3rem; */
`
export const Tag =styled.div`
    background-color:#00ffbd;
    display:inline-block;
    margin:0.2rem;
    margin-bottom:1rem;
    color:#000;
    padding:.2rem;
    font-size:10px;
    box-shadow: 5px 5px 12px 0px rgba(0,255,189,0.75);
-webkit-box-shadow: 5px 5px 12px 0px rgba(0,255,189,0.75);
-moz-box-shadow: 5px 5px 12px 0px rgba(0,255,189,0.75);
font-family: var(--subFont);
`
export const ButtonGrp =styled.div`
    display:flex;
    flex-direction:row;
    gap:0.8rem;
`