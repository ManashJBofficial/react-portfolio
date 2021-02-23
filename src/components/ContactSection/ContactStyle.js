import styled from 'styled-components'
import bannerImg from '../../images/emaillogo.svg'
import '../../Variables.css'

export const ContactContainer =styled.div`
    background: var(--bgColor);
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 100vh;
    position:relative;
    z-index: 1;
    overflow:hidden;
`
export const ContactWrapper =styled.div`
   color:#fff;
    
`
export const TextWrapper =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
        .contact-link{
        color:var(--headtextColor);
        text-decoration:none;
            
        }
    
    
`
export const HeadText =styled.div`
    font-size:2rem;
    margin:2rem;
    font-family:var(--headFont);
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
    font-size:1rem;
    margin-bottom:1rem;
    padding: 0 2rem;
    font-family: var(--subFont);
    color:var(--subTextColor);
`
export const FormWrapper =styled.div`
    
    background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);  /* This will produce the blur */
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);

    display:flex;
    flex-direction:row;
    width:800px;
    height:400px;
    border-radius:10px;
    margin:2rem;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 1200px) {
        width:80vw;
        height:400px;
    }
    @media screen and (max-width: 768px) {
        width:80vw;
        height:400px;
    }
    @media screen and (max-width: 480px){
        width:80vw;
        height:400px;
    }
    
`
export const LeftSide =styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 768px){
        display:none;
    }
    @media screen and (max-width: 480px){
    display:none;
    }
`
export const RightSide =styled.div`
    width:50%;
    height:100%;
    font-size:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:#000;
    @media screen and (max-width: 480px){
        width:100%;
        height:100%;
    }
`



export const BannerImg =styled.div`
    background-image: url(${bannerImg});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    height:200px;
    width:200px;
    
`