import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff !important;
  @media screen and (min-width: 400px) {
    padding: 20px 50px 20px 50px;
  }
  @media screen and (max-width: 400px) {
    padding: 20px 0;
  }
`;
export const Ul = styled.ul`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  list-style: none;
`;
export const Header = styled.div`
  display: inline-block;
  padding-top: 0.3125 rem;
  padding-bottom: 0.3125 rem;
  margin-right: 1 rem;
  line-height: inherit;
  white-space: nowrap;
`;

export const ButtonLi = styled.li`
  border-radius: 20px;
  padding: 10px 30px 10px 30px;
  background: none;
  color: #fff;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: #f8f9fa;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  border: 1px solid #007bff;
  cursor: pointer;
  &:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;
