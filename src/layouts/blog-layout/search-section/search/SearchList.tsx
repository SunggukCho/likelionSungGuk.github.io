import React from 'react'
import SearchListItem from './SearchListItem';
import { Post } from "@src/types/post.type";
import { useAppContext } from "@src/contexts/app";

interface SearchListProps {
  searchedList: Post[];
}

const SearchList = ({ searchedList }: SearchListProps) => {
  const {
    action: { selectPost, closePost },
  } = useAppContext();

  return (
    <ul style={{ whiteSpace: "nowrap" }}>
      {searchedList.map(({ id, meta }) => (
        <SearchListItem
          key={id}
          title={meta.title}
          onClick={() => selectPost(id)}
        />
      ))}
    </ul>
  )
}

export default SearchList