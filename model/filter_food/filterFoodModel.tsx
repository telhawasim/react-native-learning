export interface FilterFoodModel {
  id: string;
  name: string;
}

export const filterOffers = [
  {
    id: "1",
    name: "Delivery",
  },
  {
    id: "2",
    name: "Pick Up",
  },
  {
    id: "3",
    name: "Offer",
  },
  {
    id: "4",
    name: "Online payment available",
  },
];

export const deliveryTimes = [
  {
    id: "1",
    name: "10-15 min",
  },
  {
    id: "2",
    name: "20 min",
  },
  {
    id: "3",
    name: "30 min",
  },
];

export const priceRanges = [
  {
    id: "1",
    name: "$",
  },
  {
    id: "2",
    name: "$$",
  },
  {
    id: "3",
    name: "$$$",
  },
];
