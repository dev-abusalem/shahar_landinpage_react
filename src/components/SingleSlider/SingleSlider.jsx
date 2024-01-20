// import imageUrl from "../../assets/icons/1.svg";
// eslint-disable-next-line react/prop-types
const SingleSlider = ({ title, description, imageUrl }) => {
  return (
    <>
      <div className=" min-h-[250px] item text-right p-6 px-10 md:px-6 rounded-xl mb-2 md:mb-0 ">
        <div className="w-12 h-12 img_wrapper relative mb-2">
          <img
            src={imageUrl}
            alt=""
            className="w-8 h-8 md:p-0 p-[8px] mb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">{title}</h5>
        <p className="mb-3 font-normal ">{description}</p>
      </div>
    </>
  );
};

export default SingleSlider;
