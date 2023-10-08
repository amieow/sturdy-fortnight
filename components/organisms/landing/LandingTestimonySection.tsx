import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StudentTestimonyCard, {
  StudenTestimonyCardType,
} from "@/components/molecules/StudentTestimonyCard";
import Typography from "@/components/atoms/Typography";
import {IconChevronCircleLeft, IconChevronCircleRight} from "@/components/atoms/icon";

const LandingTestimonySection = () => {
  return (
    <section className={"pb-12"}>
      <div className={"container"}>
        <div className={"py-12 text-black text-center space-y-8"}>
          <Typography size={"heading2"} as={"h2"} thick={"bold"}>
            Hear from our Successful{" "}
            <span className={"text-primary"}>Students</span>
          </Typography>
        </div>
        <TestimonySlider />
      </div>
    </section>
  );
};

const studentTestimonies: StudenTestimonyCardType[] = [
  {
    name: "Kathryn Murphy",
    testimony:
      "This course has greatly improved my career as a UI/UX designer. Highly recommended!",
    imageUrl: "/student-testimony/student1.png",
  },
  {
    name: "Wade Warren",
    testimony:
      "This course has changed my life! I can see a vast improvement in my work. Highly recommended!",
    imageUrl: "/student-testimony/student2.png",
  },
  {
    name: "Brooklyn Simmons",
    testimony:
      "The practical approach and experienced guidance has been invaluable. A must-have for anyone serious about web design!",
    imageUrl: "/student-testimony/student3.png",
  }
];

const TestimonySlider = () => {
  return  <div className={"relative lg:px-12 overflow-x-scroll"}>
    <div className={"flex flex-col lg:flex-row gap-4 lg:px-4"}>
      {studentTestimonies.map((props, index) => (
          <StudentTestimonyCard {...props} key={index} />
      ))}
    </div>
    <IconChevronCircleRight className={"hidden lg:block lg:absolute lg:right-0 lg:top-[38%]"} />
    <IconChevronCircleLeft className={"hidden lg:block lg:absolute left-0 top-[38%]"} />



  </div>
}
// const TestimonySlider = () => {
//   const settings = {
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//     // vertical: true,
//     nextArrow: <IconChevronCircleRight className={"text-primary !w-[50px] !h-[50px]"} />,
//       prevArrow: <IconChevronCircleLeft className={"text-primary !w-[50px] !h-[50px]"} />,
//   };
//   return (
//       <div className={"relative lg:px-12"}>
//         <Slider {...settings}>
//           {studentTestimonies.map((props, index) => (
//               <StudentTestimonyCard {...props} key={index} />
//           ))}
//         </Slider>
//       </div>
//
//   );
// };

export default LandingTestimonySection;
