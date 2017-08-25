import React from 'react';
import styled from 'styled-components';

const Welcome = styled.h2`
 text-align:center;
 font-family: 'Open Sans', sans-serif;
`

const Wrapper = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
`

const Heading = styled.h1`
   
    font-family: 'Open Sans', sans-serif;
    margin-top: 22%;
    text-align:center;
`


const Author = styled.h3`
 text-align:center;
 font-family: 'Open Sans', sans-serif;

`


const App = () => {
    return(
        <Wrapper>
            <Heading>Hello World!</Heading>
            <Welcome>Welcome to Electron React Redux boilerplate</Welcome>
            <Author>created by Mateusz Perlak</Author>
        </Wrapper>
    );
}

export default App;