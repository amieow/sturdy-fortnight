import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StudentTestimonyCard, {
  StudenTestimonyCardType,
} from "@/components/molecules/StudentTestimonyCard";
import Typography from "@/components/atoms/Typography";

const LandingTestimonySection = () => {
  return (
    <section>
      <div className={"container  mx-8 md:mx-24"}>
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
  },
];
const TestimonySlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    speed: 500,
    nextArrow: <div>*</div>,
    prevArrow: <div>*</div>,
  };
  return (
    <Slider {...settings}>
      {studentTestimonies.map((props, index) => (
        <StudentTestimonyCard {...props} key={index} />
      ))}
    </Slider>
  );
};

export default LandingTestimonySection;
