import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

function Login() {
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    localStorage.setItem("user", true);
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Login</h1>
        <Form onSubmit={onSubmit}>
          <Label>
            아이디
            <input type="text" placeholder="email" />
          </Label>
          <Label>
            비밀번호
            <input type="password" placeholder="password" />
          </Label>
          <Button type="submit">로그인</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 400px;
  padding: 40px 20px 60px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 8px;

  h1 {
    margin-bottom: 32px;
    font-size: ${({ theme }) => theme.fontSizes.Headline2};
    line-height: ${({ theme }) => theme.lineHeights.lineHeight};
    letter-spacing: ${({ theme }) => theme.letterSpacings.letterSpacing};
    font-weight: 400;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSizes.footnote2};
  line-height: ${({ theme }) => theme.lineHeights.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.letterSpacing};
  font-weight: 400;

  input {
    display: block;
    width: 320px;
    height: 48px;
    padding: 0 14px;
    border: 1px solid ${({ theme }) => theme.colors.gray3};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSizes.body1};
  }

  & ~ & {
    margin-bottom: 32px;
  }
`;

const Button = styled.button`
  width: 320px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.body1};
  line-height: ${({ theme }) => theme.lineHeights.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.letterSpacing};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;
