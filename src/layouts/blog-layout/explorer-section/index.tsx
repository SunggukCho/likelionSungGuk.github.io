import styled from "styled-components";

import AccordionSection from "@src/components/common/accordion-section";
import { useAppContext } from "@src/contexts/app";

import { OPEN_POST_LIST_ITEM_HEIGHT } from "./open-post-list/open-post-list-item";
import OpenPostList from "./open-post-list";
import FileTree from "./file-tree";

const MAX_VISIBLE_ITEM = 4;

export default function ExplorerSection() {
  const {
    state: { posts, openPosts, currentPostId },
    action: { selectPost, closePost },
  } = useAppContext();

  return (
    <Wrapper>
      <AccordionSection
        title="OPEN POSTS"
        height={`calc(${OPEN_POST_LIST_ITEM_HEIGHT} * ${openPosts.length})`}
        maxHeight={`calc(${OPEN_POST_LIST_ITEM_HEIGHT} * ${MAX_VISIBLE_ITEM})`}
        defaultExpanded
      >
        <OpenPostList
          openPosts={openPosts}
          currentPostId={currentPostId}
          selectPost={selectPost}
          closePost={closePost}
        />
      </AccordionSection>
      <AccordionSection title="BLOG POSTS" defaultExpanded>
        <FileTree
          posts={posts}
          currentPostId={currentPostId}
          selectPost={selectPost}
        />
      </AccordionSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
