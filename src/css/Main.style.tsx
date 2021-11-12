import styled from "styled-components";

export const FormDiv = styled.div`
  padding-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormBox = styled.form``;
export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 240px;
`;
export const SearchButton = styled.button`
  color: white;
  z-index: 999;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #007bff !important;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;
