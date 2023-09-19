import React, { ReactNode } from "react";
import Typography from "@/components/atoms/Typography";
import CourseMiniCard, {
  CourseMiniCardType,
} from "@/components/molecules/CourseMiniCard";

export type ProductCategorySectionType = {
  title: string;
  items: CourseMiniCardType[];
  seeMoreButton?: ReactNode;
};
const ProductCategorySection = ({
  title,
  items,
  seeMoreButton,
}: ProductCategorySectionType) => {
  return (
    <section className={"py-6 px-4 md:px-24  space-y-8"}>
      <div className={"flex justify-between items-center "}>
        <Typography size={"heading1"} thick={"bold"}>
          {title}
        </Typography>
        {seeMoreButton}
      </div>

      <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
        {items.slice(0, 4).map((props, index) => (
          <CourseMiniCard {...props} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategorySection;
