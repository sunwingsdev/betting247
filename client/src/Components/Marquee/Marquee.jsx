import { useGetHomeControlsQuery } from "../../redux/features/allApis/homeControlApi/homeControlApi";

const Marquee = () => {
  const { data: homeControls } = useGetHomeControlsQuery();

  const notice = homeControls?.find(
    (control) => control.category === "notice" && control.isSelected
  );
  return (
    <div className="relative border-y border-x-customWhite flex items-center bg-inPlayTabColor overflow-hidden py-1">
      {/* News Label */}
      <div className="absolute left-1 flex items-center border-r-2 border-sliderButtonMediumGray rounded-full text-customWhite px-2 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="mr-1"
        >
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm6.29-3c-.52 0-1.02-.2-1.41-.59-.78-.78-.78-2.05 0-2.83.39-.39.89-.59 1.41-.59s1.02.2 1.41.59c.78.78.78 2.05 0 2.83-.39.39-.89.59-1.41.59zM12 16c-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2c0 2.76-2.24 5-5 5zm5.3-4.71c-.39-.39-.39-1.02 0-1.41 1.17-1.17 1.17-3.07 0-4.24-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0 1.95 1.95 1.95 5.12 0 7.07-.39.39-1.02.39-1.41-.01z" />
        </svg>
        <p className="text-sm font-bold">News</p>
      </div>

      {/* Marquee Container */}
      <div className="w-full overflow-hidden ml-20">
        <div className="marquee-wrapper">
          <div className="marquee text-marqueeTextColor text-sm font-medium">
            {/* Actual Content */}
            <div className="flex">
              <span className="mx-6 inline-block">
                <span className="bg-marqueeTextColor text-customBlack px-2 mx-2 rounded">
                  {notice?.title}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
