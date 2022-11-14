import { useState, MouseEvent } from "react";
import styled from "styled-components";

export const SEARCH_LIST_ITEM_HEIGHT = "2rem";

export type SearchListItemProps = {
  emoji?: string;
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function SearchListItem({
  emoji = "📝",
  title,
  isSelected = false,
  onClick = () => null,
}: SearchListItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      height={SEARCH_LIST_ITEM_HEIGHT}
      isSelected={isSelected}
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Title>
        {emoji} {title}
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.li<{ isSelected: boolean; height: string }>`
  ${({ height, isSelected, theme }) => `
    display: flex;
    flex-direction: Row;
    align-items: center;
    height: ${height};
    padding: 0 1.2rem;
    ${
      isSelected
        ? `background-color: ${theme.colors.scheme.$gray200};`
        : `&:hover { 
              background-color: ${theme.colors.scheme.$gray300};
          }`
    }
  `}
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.p`
  padding-left: 0.4rem;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
