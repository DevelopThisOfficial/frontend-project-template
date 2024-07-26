"use client";

import styled from "styled-components";

const StyledMain = styled.main`
  border: 2px solid lime;
`;

const TestComponent = () => {
  return <StyledMain data-testid="test-id">I am the test component</StyledMain>;
};

export default TestComponent;
