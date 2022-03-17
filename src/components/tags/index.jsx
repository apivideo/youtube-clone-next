import React from "react";
import { Wrapper, Chip } from "./styles";
import { capitalizeFirstLetter } from "../../utils/functions/index";

function Tags({ tags, activeTag, handleActiveTag }) {
  return (
    <Wrapper>
      <Chip
        isActive={activeTag === "All"}
        onClick={() => handleActiveTag("All")}
      >
        All
      </Chip>
      {tags.map((tag) => {
        return (
          <Chip
            key={tag}
            isActive={activeTag === tag}
            onClick={() => handleActiveTag(tag)}
          >
            {capitalizeFirstLetter(tag)}
          </Chip>
        );
      })}
    </Wrapper>
  );
}

export default Tags;
