import styled from "styled-components";
import { FooterProps, Props } from "../helper/interface";

export const CardMain = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  flex-flow: row wrap;
  justify-content: center;
`;
export const Small = styled.small`
  color: #5487d4;
`;
export const CardFooter = styled.footer`
  padding: 10px 0 10px 0;
  small {
    color: #5487d4;
  }
`;
export const CardOwner = styled.div`
  a {
    text-decoration: none;
    font-weight: bold;
    color: #5487d4;
  }
`;
export const CardDescription = styled.div`
  word-break: break-all;
  padding: 5px;
`;
export const Card = styled.div`
  padding: 5px;
  max-width: 350px;
  min-height: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin: 10px 15px 10px 15px;
  margin: 0 px auto;
  width: 100%;
  max-width: 448 px;
  background: white;
  border-radius: 4 px;
  box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px,
    rgb(0 0 0 / 12%) 0px 3px 6px 0px;
  transition: all 0.5s;
  &:hover {
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
      rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px,
      rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
      rgb(0 0 0 / 0%) 0px 0px 0px 0px;
  }
`;
export const Section = styled.section`
  max-width: 1140px;
  margin: auto;
`;
export const SectionDiv = styled.div`
  border-bottom: 1px solid #6658d3;
  padding: 20px;
  max-width: 500px;
  margin: auto;
  font-weight: bold;
  text-transform: uppercase;
  color: #6658d3;
  text-align: center;
`;
export const Footer = styled.footer<FooterProps>`
  display: flex;
  algin-items: center;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;
  transition: all 0.5s;
  height: 50px;
`;
export const Label = styled.label`
  font-weight: bold;
  text-transform: uppercase;
  color: red;
`;
export const CheckBox = styled.article`
  padding: 5px 5px;
  label {
    padding: 0 20px;
  }
`;
export const BoxSpacer = styled.div<Props>`
  margin: 15px 0 15px 0;
  transition: all 0.5s;
  overflow: hidden;
  height: ${(props) => (props.move ? "100px" : "25px")};
`;
export const Form = styled.form`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgb(153 153 153 / 25%);
  padding: 0.75rem;
`;
export const InputSpacer = styled.div`
  padding: 20px 0 20px 0;
  transition: all 1s;
`;
export const Input = styled.input`
  border: none;
  z-index: 1;
  width: 100%;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
  border-wdith: 10px;
  transition: all 0.5s;

  &:focus {
    border-top: 1px solid red;
    outline: none !important;
  }
`;
export const FormButton = styled.input`
  margin-top: 20px;
  cursor: pointer;
  font: inherit;
  font-size: 1.25rem;
  padding: 0.25em;
  width: 100%;
  font-weight: 500;
  background-color: #6658d3;
  border-radius: 6px;
  color: #fff;
  border: 0;
`;
