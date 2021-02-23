import styled from 'styled-components'
import { MdKeyboardArrowRight,MdArrowForward } from 'react-icons/md'
import img from '../../images/bg.jpg'




export const HeroContainer =styled.div`
    background: var(--bgColor);
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 100vh;
    position:relative;
    z-index: 1;
    overflow:hidden;
`;

export const HeroBg =styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom: 0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    /* background-image:url(${img}); */
    background-color:var(--bgColor);
    /* box-shadow: inset 0 0 0 125rem rgba(0, 0, 0, 0.6); */
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
`;



export const VideoBg =styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit:cover;
    background: #232a34;
    opacity: 0.5;
`;


export const HeroContent =styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction:column;
    align-items:center;

`
export const HeroH1 =styled.h1`
    color:#00ffbd;
    font-size: 70px;
    text-align:center;
    font-family: 'dearjoe';

    @media screen and (max-width: 768px){
        font-size:48px;
    }

    @media screen and (max-width: 480px){
        font-size:32px;
    }
`
export const HeroP =styled.p`
    margin-top:24px;
    color: var(--subTextColor);
    font-size:20px;
    text-align:center;
    max-width:600px;
    font-family: var(--subFont);
    @media screen and (max-width: 768px){
        font-size:24px;
    }

    @media screen and (max-width: 480px){
        font-size:18px;
    }
`



export const HeroBtnWrapper =styled.div`
    margin-top:25rem;
    display: flex;
    flex-direction:column;
    align-items:center;
`

export const ArrowForward =styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight =styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
