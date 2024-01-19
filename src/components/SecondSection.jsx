import Continer from "../layouts/Continer";
import { SliderData } from "../data/SliderData";
import SingleSlider from "./SingleSlider/SingleSlider";
import bg from "../assets/images/slider-bg.svg";
const SecondSection = () => {
  return (
    <section className="md:py-24 py-12 min-h-screen hidden md:block">
      <Continer>
        <div className="flex justify-center items-start relative z-50">
          <div>
            <div className="text-center  relative z-50">
              <h3 className="font-semibold md:text-2xl text-xl">
                עו&quot;ד שרי דביר
              </h3>
              <h1 className="font-semibold md:text-5xl text-3xl mt-4">
                עו&quot;ד שרי דביר וצוות משרדה מתמחים במיצוי זכויות ופיצויים
                במגוון מקרים:
              </h1>
            </div>
            {/* render slider contents start */}
            <div className="md:py-8 py-4 w-full mx-auto h-full relative z-50 mt-6 md:mt-0">
              <div className=" flex-wrap justify-center items-start -mx-5  flex">
                {SliderData.map((item, index) => (
                  <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2.5 mb-5 ${
                      index % 2 === 0 ? "lading_even_item" : "lading_odd_item"
                    }`}
                    key={item.id}
                  >
                    <SingleSlider
                      title={item.title}
                      description={item.description}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center pb-8 ">
              <h4 className="max-w-md text-center font-semibold md:text-2xl text-xl">
                עו&quot;ד שרי דביר ייצגה מאות לקוחות משנת 2015 באחוזי הצלחה
                גבוהים.
              </h4>
            </div>
            <img
              className="absolute w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              src={bg}
              alt="bg"
            />
          </div>
        </div>
      </Continer>
    </section>
  );
};

export default SecondSection;
