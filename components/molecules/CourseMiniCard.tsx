import { Card, CardContent } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { formatRupiah } from "@/lib/formatter";
import Image from "next/image";

export type CourseMiniCardType = {
  imageUrl: string;
  title: string;
  discountPrice: number;
  price: number;
  star: number;
  totalReview: number;
};

const CourseMiniCard = ({
  imageUrl,
  title,
  star,
  totalReview,
  price,
  discountPrice,
}: CourseMiniCardType) => {
  return (
    <Card>
      <Image
        width={280}
        height={280}
        src={imageUrl}
        alt={title}
        className={"rounded-xl"}
      />

      <CardContent className={"space-y-2 min-w-[280px] py-6 "}>
        <Typography
          size={"textM"}
          thick={"bold"}
          color={"default"}
          className={"max-w-[230px] capitalize"}
          as={"h4"}
        >
          {title}
        </Typography>
        <Review totalReview={totalReview} star={star} />
        <Price price={price} discountPrice={discountPrice} />
      </CardContent>
    </Card>
  );
};

const Review = ({
  totalReview,
  star,
}: Pick<CourseMiniCardType, "totalReview" | "star">) => (
  <div className={"flex flex-row gap-3 items-center"}>
    {/*STAR*/}
    <div className={"flex flex-row gap-2"}>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
    </div>
    <Typography size={"textXS"}>({totalReview})</Typography>
  </div>
);

const Price = ({
  discountPrice,
  price,
}: Pick<CourseMiniCardType, "discountPrice" | "price">) => (
  <div className={"flex flex-row gap-2"}>
    <Typography size={"textS"} thick={"bold"} className={"line-through"}>
      {formatRupiah(discountPrice)}
    </Typography>
    <Typography size={"textS"} thick={"bold"} color={"primary"}>
      {formatRupiah(price)}
    </Typography>
  </div>
);

export default CourseMiniCard;
