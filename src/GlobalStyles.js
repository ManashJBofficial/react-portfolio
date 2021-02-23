import { createGlobalStyle } from "styled-components";
import dearjoe from './fonts/dear_joe/DJ5CTRIAL.ttf'
import bitter_pro from './fonts/bitter_pro/BitterPro-Regular.ttf';
import aqum from './fonts/Aqum/Aqum.ttf'
import randrake from './fonts/randrake/Randrake.ttf'
import blackpast from './fonts/blackpast/Blackpast.otf'



const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: 'dearjoe';
    src: url(${dearjoe}) format('truetype');
    }
    @font-face {
    font-family: 'bitter_pro';
    src: url(${bitter_pro}) format('truetype');
    }
    @font-face {
    font-family: 'aqum';
    src: url(${aqum}) format('truetype');
    }
    @font-face {
    font-family: 'randrake';
    src: url(${randrake}) format('truetype');
    }
    @font-face {
    font-family: 'blackpast';
    src: url(${blackpast}) format('opentype');
    }
    
    body {
        font-family: 'dearjoe','Roboto';
    }
    
`

export default GlobalStyles;