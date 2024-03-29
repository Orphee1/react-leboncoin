import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,700&display=swap');

:root {
  /* Leboncoin color set */
  --clr-orange: hsl(23, 100%, 54%);
  /* #FF6E13 */
  --clr-blue: hsl(214, 65%, 55%);
  /* #4183D7 */
  --clr-grey-1: hsl(0, 0%, 28%); /* footer */
  --clr-grey-2: hsl(210, 11%, 62%); /* grey icons */
  /* 	#939ea9 */
  --clr-grey-3: hsl(200, 10%, 79%);
  /* 		#c4cbcf */
  --clr-grey-4: hsl(200, 16%, 96%); /* input */
  --clr-white: #ffffff; /* header */
  --clr-white-2: hsl(0, 100%, 100%); /* body */
  --clr-black: #1a1a1a;

  --transition: all 0.3s linear;
  --spacing: 0.05rem;
  --radius: 0.35rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
  --tabl-width: 970px,
  /* --smar-width: 479px, */
 

}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  color: var(--clr-black);
  line-height: 1.2rem;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3 {
  /* letter-spacing: var(--spacing); */
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 1.75rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 1rem;
}
span {
  font-size: 0.875rem;
}

@media screen and (min-width: 1064px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }

  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

/*  global classes */
.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.s-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* Gotcha ! à corriger*/
.s-b-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* ! */
.fl-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.fl-col-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
}

.full-width {
  width: 100%;
}

/* section */
.section {
  width: 95vw;
  margin: 0 auto;
}

@media screen and (min-width: 1064px) {
  .section {
    width: 80vw;
  }
  .sign-in-section {
    height: auto;
    padding-bottom: 3rem;
    /* background: url('./icons/login-illustration.png'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
.btn {
  background: transparent;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  border-color: transparent;
  cursor: pointer;
  font-size: 1rem;
}

/* loader */
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: black;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
}

/*
=============== 
Debug
===============
*/

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

.orange {
  background-color: #f56b2b;
  color: #f56b2b;
}


`
