import Continer from "../layouts/Continer";

const ContactForm = () => {
  return (
    <section className=" bg-primary md:py-16 py-10  text-white">
      <Continer>
        <div className="">
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            נפגעתם בתאונה, חליתם או נפצעתם ואיבדתם את כושר ההשתכרות? לא קיבלתם
            את מלוא זכויותיכם? השאירו פרטים כדי להתחיל בתהליך:
          </h1>

          <div className="mt-8">
            <form className="max-w-[800px] mx-auto">
              <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-4 ">
                <div className=" col-span-1">
                  <label htmlFor="name" className="block mb-1.5 font-semibold">
                    שם מלא
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="px-3 py-2 rounded-[4px] w-full text-primary"
                  />
                </div>

                <div className=" col-span-1">
                  <label htmlFor="phone" className="block mb-1.5 font-semibold">
                    טלפון נייד
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="px-3 py-2 rounded-[4px] w-full  text-primary"
                  />
                </div>
                <div className=" col-span-1">
                  <label htmlFor="email" className="block mb-1.5 font-semibold">
                    שם מלא
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="px-3 py-2 rounded-[4px] w-full  text-primary"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block mb-1.5 font-semibold">
                  איך נוכל לעזור?
                </label>
                <textarea
                  id="message"
                  type="text"
                  className="px-3 py-2 rounded-[4px] w-full  text-primary"
                  rows="6"
                ></textarea>
              </div>

              <div className="mt-4  text-center ">
                <button className="py-2 font-bold px-4 w-full md:w-[200px] rounded-[4px] bg-white text-primary">
                  שלח
                </button>
              </div>
            </form>
          </div>
        </div>
      </Continer>
    </section>
  );
};

export default ContactForm;
