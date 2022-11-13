import styled from "styled-components";

import TagsSection from "./tags";

export default function TagSection() {
  return (
    <Wrapper>
      <TagsSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
