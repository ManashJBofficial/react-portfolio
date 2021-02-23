import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ?  'var(--bgColor)' : 'transparent')};
    height:80px;  
    margin-top:-80px; 
    display:flex;
    align-items:center;
    justify-content: center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    transition: 0.3s ease-in-out;
    @media screen and (max-width: 960px){
        transition:0.8s all ease;
    }


`;

export const NavbarContainer =styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding: 0 24px;
    max-width:1100px;
    overflow-x:hidden;
`;

export const NavLogo =styled(LinkR)`
    color:#00ffbd;
    justify-self:flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    display: flex;
    align-items:center;
    margin-left:24px;
    
    text-decoration:none; 
    font-family: var(--logoFont);
`;

export const MobileIcon =styled.div`
    display:none;

    @media screen and (max-width:760px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
export const NavMenu =styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right: -22px;


@media screen and (max-width: 760px){
    display:none;
}
    .socialMenus{
        
        @media screen and (max-width: 1025px){
            display:none;
    }
    @media screen and (max-width: 760px){
        display:none;
    } 
    }
`;

export const NavItem =styled.li`
    height: 80px;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;

    
`;



export const NavLinks =styled(LinkS)`
    color: var(--navColor);
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    font-family: var(--subFont);
    &:hover{
        color: #00ffbd;
    }

    &.active{
        border-bottom: 3px solid #00ffbd;
    }
    @media screen and (max-width: 1025px){
        padding:0 0;
        
    }
    @media screen and (max-width: 760px){
        padding:0 0;
    }
`;

export const NavBtn =styled.nav`
    display:flex;
    align-items:center;


    @media screen and (max-width: 768px) {
        display:none;
    }
`;

export const NavBtnLink =styled(LinkR)`
    border-radius:50px;
    background:transparent;
    white-space:nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size:16px;
    cursor:pointer;
    outline:none;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    border:1px solid #00ffbd;
    border-radius:4px;
    &:hover{
        transition:  all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;













