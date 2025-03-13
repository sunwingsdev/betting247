import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useGetGamesQuery } from "../../../redux/features/allApis/gameApi/gameApi";

const CarouselLargeDevice = () => {
  const { data: games } = useGetGamesQuery();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const activatedGames = games?.filter((game) => game.isActive);

  const handlePlay = (id, link) => {
    if (link) {
      navigate(`/games/demo/${id}`);
    } else if (user) {
      toast.error("Please connect the API to play the game");
    } else {
      toast.error("Please login to play the game");
    }
  };

  // Split games into sections
  const sections = [];
  if (activatedGames?.length) {
    sections.push({
      title: "first row",
      gridClass: "smgrid-cols-1 md:grid-cols-2 lg:grid-cols-2",
      items: activatedGames.slice(0, 2),
    });

    for (let i = 2; i < activatedGames.length; i += 4) {
      sections.push({
        title: `row ${i / 4 + 1}`,
        gridClass: "grid-cols-2 md:grid-cols-4 lg:grid-cols-4",
        items: activatedGames.slice(i, i + 4),
      });
    }
  }

  return (
    <div className=" relative">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`grid ${section.gridClass} px-2 lg:px-0 gap-2 pt-3`}
        >
          {section.items.map((item, i) => (
            <Link
              to={index === 0 ? "/inplay" : "#"}
              key={i}
              className="relative"
            >
              <img
                src={`${import.meta.env.VITE_BASE_API_URL}${item.image}`}
                alt={item.title}
                className="w-full h-full border-b-8 border-loginColor"
              />
              <h3 className="absolute bottom-2 w-full text-customWhite text-left py-1 capitalize lg:px-2 px-2 md:px-4 font-bold bg-customBlack70 lg:text-sm text-xs">
                {item.title}
              </h3>
              <button
                className="absolute bottom-2 right-0 border border-loginColor bg-loginColor px-5 md:px-7 py-0.5 transform text-xs lg:text-sm text-customBlack font-medium"
                style={{
                  clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
                onClick={() => handlePlay(item?._id, item?.link)}
              >
                Play Now
              </button>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarouselLargeDevice;
