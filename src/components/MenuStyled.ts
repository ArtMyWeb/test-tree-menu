import styled from "styled-components";

export const Link = styled.a`
    text-decoration: none;
    
    li{
      transition: 1s all;
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      padding: 15px;
      margin-left: -40px;
      margin-top: 0px;
      color: #fff;
      list-style: none;
      display: block;
      border-top-right-radius: 10px 10px;
      border-bottom-right-radius: 10px 10px;
      
      &:hover {
          transition: 1s all;
          color: #2f89fc;
          background-color: rgba(42, 56, 65, 0.82);
          border-top-right-radius: 10px 10px;
          border-bottom-right-radius: 10px 10px;
          cursor: pointer;
      }
    }
`;

export const MenuWrapper = styled.ul`
    background-color: #1E2B32;
    max-width: 30vw;
    height: 100vh;
    margin:0;
    padding-top: 100px;
    list-style-type:none;
    
    li {
        border-bottom: none
    }
`;