export const formatThousand = (input: number): string => {
  const options = {
    style: "decimal",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  };
  return input.toLocaleString("id-ID", options);
};

export const formatRupiah = (input: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(input);
};
