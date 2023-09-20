import { Card, CardContent } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { formatRupiah } from "@/lib/formatter";
import Image from "next/image";

export type CourseMiniCardType = {
  imageUrl: string;
  title: string;
  discountPrice: number;
  price: number;
  rating: number;
  reviewCount: number;
};

const CourseMiniCard = ({
  imageUrl,
  title,
  rating,
  reviewCount,
  price,
  discountPrice,
}: CourseMiniCardType) => {
  return (
    <Card>
      <div className={"relative w-full h-[150px]"}>
        <Image
          fill={true}
          src={imageUrl}
          alt={title}
          className={"w-full h-auto rounded-xl"}
        />
      </div>

      <CardContent className={"space-y-2 min-w-[280px] py-6 "}>
        <Typography
          size={"textL"}
          thick={"bold"}
          color={"default"}
          className={"capitalize"}
          as={"h4"}
        >
          {title}
        </Typography>
        <Review reviewCount={reviewCount} rating={rating} />
        <Price price={price} discountPrice={discountPrice} />
      </CardContent>
    </Card>
  );
};

const Review = ({
  reviewCount,
  rating,
}: Pick<CourseMiniCardType, "reviewCount" | "rating">) => (
  <div className={"flex flex-row gap-3 items-center"}>
    {/*STAR*/}
    <div className={"flex flex-row gap-2"}>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
    </div>
    <Typography size={"textXS"}>({reviewCount})</Typography>
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
