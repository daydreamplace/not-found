import { createGlobalStyle } from 'styled-components';
// import font from './assets/fonts/';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype')}

@font-face {
  font-family: 'PPRigntSans';
  src:url('./assets/fonts/PPRightSans.ttf') format("opentype");
}

body {
    overflow: auto;
    overflow-y: scroll;
    letter-spacing: 0;
    line-height: 1.5;
    font-family: "NanumBarunGothic";
    font-size: 15px;
    color: #fff;
  }

  * {
    box-sizing: border-box;
    background: url('https://hyper-cloud.kr/static/images/background.jpg');
    cursor: url('https://hyper-cloud.kr/static/images/cursor.png'),auto!important;
    user-select: auto;
    scroll-behavior: smooth!important;
    -webkit-tap-highlight-color: transparent;
  }

  h1{
    font-family: "PPRightSans";
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
