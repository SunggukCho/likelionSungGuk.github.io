import React, { useState } from 'react'
import { Post } from "@src/types/post.type";
import SearchInput from "./SearchInput"
import SearchList from "./SearchList"

export default function Search() {
  const [searchList, setSearchList] = useState<Post[]>([])
  console.log('searchList', searchList)

  return (
    <>
      <SearchInput setSearchList={setSearchList} />
      <SearchList searchedList={searchList} />
    </>
  )
}