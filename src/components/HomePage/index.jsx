import React from "react";
import styled from "styled-components";
import bookimg from "../../assets/books.jpg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
   height: auto;
   width: 480px; 
`;

const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Message = styled.p`
    font-size: 16px;
    font-family: Oswald,sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #838B92;
    line-height: 1.5;
    max-width: 35%;
`;

const Title = styled.h1`
    margin-top: 30px;
    font-family: Righteous,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size:36px;
    line-height: 1.2;
    overflow-wrap: break-word;
    word-wrap: break-word;
    color: #3d4246;
    text-align: center;
`;

const HomePage = () => {
    return(
        <Wrapper>
            <Title>Welcome to Gary's Library Catalog</Title>
            <Image src={bookimg}></Image>
            <MessageWrapper>
                <Message>
                Thanks for visiting Gary's Library Catalog! Please make yourself comfortable and 
                go to our catalog page to see a list of the books we currently have for you to read!
                Feel free to add new books and also like any of the books you enjoy!
                </Message>
            </MessageWrapper>
        </Wrapper>
    );
}

export default HomePage