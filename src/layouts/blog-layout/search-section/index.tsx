import styled from "styled-components";
import Search from "./search"

export default function SearchSection() {
  return (
    <Wrapper>
      <h1>SearchSection</h1>
      <Search />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
