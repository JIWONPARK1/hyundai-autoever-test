import { Config } from "../types/qna.type";

export const config: Config = {
  tabs: [
    {
      id: "service-introduction",
      title: "서비스 도입",
    },
    {
      id: "service-usage",
      title: "서비스 이용",
    },
  ],
  categorys: {
    "service-introduction": [
      {
        categoryID: "all",
        name: "전체",
      },
      {
        categoryID: "PRODUCT",
        name: "서비스 상품",
      },
      {
        categoryID: "COUNSELING",
        name: "도입 상담",
      },
      {
        categoryID: "CONTRACT",
        name: "계약",
      },
    ],
    "service-usage": [
      {
        categoryID: "all",
        name: "전체",
      },
      {
        categoryID: "join-inquiry",
        name: "가입문의",
      },
      {
        categoryID: "business",
        name: "비즈니스(업무용)",
      },
      {
        categoryID: "accident",
        name: "사고/보험",
      },
      {
        categoryID: "reservation",
        name: "예약/결제",
      },
      {
        categoryID: "vehicle-inquiry",
        name: "차량문의",
      },
      {
        categoryID: "charging",
        name: "충전",
      },
      {
        categoryID: "coupon-etc",
        name: "쿠폰/기타",
      },
    ],
  },
};
