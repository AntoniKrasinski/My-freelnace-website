import React from "react";

const Tags = ({
  tags,
  color = "primary",
}: {
  tags: string[];
  color?: "primary" | "surface" | "background";
}) => {
  return (
    <div className="flex flex-row gap-2">
      {tags.map((tag) => (
        <b className={`bg-${color} theme-border-rounded p-1 px-2 flex items-center`} key={tag}>
          {tag}
        </b>
      ))}
    </div>
  );
};

export default Tags;
