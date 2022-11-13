import React from 'react'

import AccordionSection from "@src/components/common/accordion-section";
import Tag from "@src/components/common/tag";
import { useAppContext } from "@src/contexts/app";
import SearchInput from "./SearchInput"

export default function Search() {
  const {
    state: { posts },
  } = useAppContext();

  return (
    <SearchInput />
  )
}