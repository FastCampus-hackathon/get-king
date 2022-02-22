import React from "react";
import styled from "styled-components";

const Scrap = () => {
  return (
    <Container>
      <div className="a"></div>
      <div>어쩔라미</div>
    </Container>
  );
};

export default Scrap;

const Container = styled.div`
  padding: 0 60px 60px;

  .a {
    height: 76px;
  }
`;
