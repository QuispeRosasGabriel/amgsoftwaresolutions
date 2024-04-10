export interface Brand {
  id: number;
  name: string;
  value: string;
}

export const brandConversor = (value: string) => {
  const brand = BrandsList.find((item) => item.value === value);
  if (brand) {
    return brand.name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  return null;
};

export const BrandsList: Brand[] = [
  {
    id: 1,
    name: "Aston Martin",
    value: "aston-martin",
  },
  {
    id: 2,
    name: "Volkswagen",
    value: "volkswagen",
  },
  {
    id: 3,
    name: "Mercedes-Benz",
    value: "mercedes-benz",
  },
  {
    id: 4,
    name: "BMW",
    value: "bmw",
  },
  {
    id: 6,
    name: "Ford",
    value: "ford",
  },
  {
    id: 7,
    name: "Audi",
    value: "audi",
  },
  {
    id: 8,
    name: "Porsche",
    value: "porsche",
  },
  {
    id: 10,
    name: "Jeep",
    value: "jeep",
  },
  {
    id: 11,
    name: "Lamborghini",
    value: "lamborghini",
  },
  {
    id: 12,
    name: "Mclaren",
    value: "mclaren",
  },
];
