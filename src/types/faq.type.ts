export type CategoryItem = {
  categoryID: string;
  name: string;
};
export type Tab = "CONSULT" | "USAGE";

export type Category =
  | "PRODUCT"
  | "COUNSELING"
  | "CONTRACT"
  | "SIGN_UP"
  | "BUSINESS"
  | "ACCIDENT"
  | "RESERVATION"
  | "VEHICLE"
  | "REFUEL"
  | "CHARGING"
  | "ALL";

export type TabItem = {
  id: Tab;
  title: string;
};

export type Config = {
  tabs: TabItem[];
  categorys: {
    [key in Tab]: CategoryItem[];
  };
};

export type FaqData = {
  [key in Tab]: {
    [key in Category]: {
      pageInfo: {
        totalRecord: number;
        offset: number;
        limit: number;
        prevOffset: number;
        nextOffset: number;
      };
      items: FaqItem[];
    };
  };
};

export type FaqItem = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
};
