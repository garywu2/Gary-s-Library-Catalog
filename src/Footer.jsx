import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Credits = styled.p`
    font-size: 12px;
    font-family: Oswald,sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #3d4246;
    line-height: 1.5;
`;

const Footer = () => {
    return(
        <Wrapper>
            <Credits>© 2020, Gary's Library Catalog Website by Gary Wu</Credits>
        </Wrapper>
    );
}

export default Footer