import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { useAppContext } from "@src/contexts/app";

const SearchInput = () => {
  const {
    state: { posts },
  } = useAppContext();

  const searchKeyword = useRef("")

  const searchPosting = () => {
    const search = searchKeyword.current.value
    console.log('search', search, posts)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.code === "Enter" || e.target.name === "searchBtn") {
      searchPosting()
    }
  }

  return (
    <Wrapper>
      <StyledInput 
        type="text"
        name="searchKeyword"
        ref={searchKeyword}
        onKeyDown={handleSubmit}
      />
      <StyledSubmit
        name="searchBtn"
        onClick={handleSubmit}
      >검색</StyledSubmit>
    </Wrapper>
  )
}

export default SearchInput

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 15rem;
`

const StyledSubmit = styled.button`
  
`