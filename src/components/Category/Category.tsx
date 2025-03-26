"use client";

import { categoryCss } from "./Category.styles";
import { CategoryItem } from "@/types/qna.type";
export const Category = ({
  categorys,
  selectedCategory,
  setSelectedCategory,
}: {
  categorys: CategoryItem[];
  selectedCategory: CategoryItem;
  setSelectedCategory: (category: CategoryItem) => void;
}) => {
  return (
    <div css={categoryCss.container}>
      {categorys.map((category) => (
        <button
          key={category.categoryID}
          css={[
            categoryCss.button,
            selectedCategory.categoryID === category.categoryID &&
              categoryCss.selected,
          ]}
          onClick={() => setSelectedCategory(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
