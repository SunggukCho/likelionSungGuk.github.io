import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { useAppContext } from "@src/contexts/app";
import { Post } from "@src/types/post.type";

interface SearchInputProps {
  setSearchList: (list: Post[]) => void;
}

const SearchInput = ({ setSearchList }: SearchInputProps) => {
  const {
    state: { posts },
  } = useAppContext();

  const [searchKeyword, setSearchKeyword] = useState<string>("")

  const searchPosting = () => {
    const lowerCaseofSearchKeyWord = searchKeyword.toLowerCase()
    const searchList = posts.filter((post: Post) => {
      return (
        post.meta.title.toLowerCase().includes(lowerCaseofSearchKeyWord) ||
        post.meta.description.toLowerCase().includes(lowerCaseofSearchKeyWord)
      )
    })
    setSearchList([...searchList])
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
        value={searchKeyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearchKeyword(e.target.value)}
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