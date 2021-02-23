import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';

export const FooterContainer =styled.div`
    background: var(--footerBg);
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 30vh;
    position:relative;
    z-index: 1;
`
export const FooterWrapper =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`
export const Logo =styled.div`
    font-size:2rem;
    font-family: var(--logoFont);
    color: var(--headtextColor);
`
export const FooterGrid =styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
`
export const SocialIcons =styled.div`
    display:flex;
    flex-direction:row;
    gap:4rem;
    justify-content:center;
    align-items:center;
    margin-top:2rem;
`
export const Sitemap =styled.div`
    display:flex;
    flex-direction:row;
    gap:3rem;
    justify-content:center;
    align-items:center;
`
export const SiteLink =styled(LinkS)`
    cursor: pointer;
    font-family: var(--subFont);
    color: var(--subTextColor);
`
export const CopyRight =styled.div`
    background-color:#000;
    color:var(--navColor);
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:0;
    width:100%;
    height: 3rem;
    font-family: var(--headFont);
`