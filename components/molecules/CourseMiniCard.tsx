import { Card, CardContent } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { formatRupiah } from "@/lib/formatter";
import Image from "next/image";
import { IconStarFill, IconStarFillPrimary } from "../atoms/icon";

export type CourseMiniCardType = {
  imageUrl: string;
  title: string;
  discountPrice: number;
  price: number;
  rating: number;
  reviewCount: number;
};

const MAX_STAR_REVIEW = 5

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
      <div className={"relative w-full h-[180px]"}>
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
  totalReview,
  star,
}: Pick<CourseMiniCardType, "totalReview" | "star">) => {
  const minStar = Math.min(star,MAX_STAR_REVIEW)
  return(
  <div className={"flex flex-row gap-3 items-center"}>
    {/*STAR*/}
    <div className={"flex flex-row gap-2"}>
      {Array.from({ length: Math.max(0, (MAX_STAR_REVIEW - minStar)) }, (_,i) => (
        <IconStarFill width={9} height={9} key={i}/>
      ))}
      {Array.from({ length: minStar }, (_,i) => (
        <IconStarFillPrimary width={9} height={9} key={i}/>
      ))}
    </div>
    <Typography size={"textXS"}>({reviewCount})</Typography>
  </div>
)};

const Price = ({
  discountPrice,
  price,
}: Pick<CourseMiniCardType, "discountPrice" | "price">) => (
  <div className={"flex flex-row gap-2"}>
    <Typography size={"textS"} className={"line-through"}>
      {formatRupiah(discountPrice)}
    </Typography>
    <Typography size={"textS"} thick={"bold"} color={"primary"}>
      {formatRupiah(price)}
    </Typography>
  </div>
);

export default CourseMiniCard;
