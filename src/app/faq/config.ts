import { Config } from "@/types/faq.type";

export const config: Config = {
  tabs: [
    {
      id: "CONSULT",
      title: "서비스 도입",
    },
    {
      id: "USAGE",
      title: "서비스 이용",
    },
  ],
  categorys: {
    CONSULT: [
      {
        categoryID: "ALL",
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
    USAGE: [
      {
        categoryID: "ALL",
        name: "전체",
      },
      {
        categoryID: "SIGN_UP",
        name: "가입문의",
      },
      {
        categoryID: "BUSINESS",
        name: "비즈니스(업무용)",
      },
      {
        categoryID: "ACCIDENT",
        name: "사고/보험",
      },
      {
        categoryID: "RESERVATION",
        name: "예약/결제",
      },
      {
        categoryID: "VEHICLE",
        name: "차량문의",
      },
      {
        categoryID: "REFUEL",
        name: "충전",
      },
      {
        categoryID: "COUPON",
        name: "쿠폰/기타",
      },
    ],
  },
};
