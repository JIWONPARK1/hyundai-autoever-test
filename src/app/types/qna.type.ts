export type CategoryItem = {
  categoryID: string;
  name: string;
};

export type TabItem = {
  id: string;
  title: string;
};

export type Config = {
  tabs: TabItem[];
  categorys: {
    [key: string]: CategoryItem[];
  };
};

export type QnaItem = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
};
