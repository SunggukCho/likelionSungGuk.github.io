import styled from "styled-components";
import Search from "./search"

export default function SearchSection() {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
