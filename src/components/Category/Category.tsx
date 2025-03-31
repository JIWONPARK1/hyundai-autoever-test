"use client";

import { memo } from "react";
import { categoryCss } from "./Category.styles";
import { CategoryItem } from "@/types/faq.type";

export const Category = memo(
  ({
    categorys,
    selectedCategory,
    onChangeCategory,
  }: {
    categorys: CategoryItem[];
    selectedCategory: CategoryItem;
    onChangeCategory: (category: CategoryItem) => void;
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
            onClick={() => onChangeCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
);

Category.displayName = "Category";
