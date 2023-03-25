import image from "../../shimmer.png";
const ShimmerUI = ({}) => {
  return (
    <div className="grid grid-cols-4 gap-2 place-items-center m-2 p-5">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div
            className="w-full bg-white drop-shadow-md rounded-lg p-2 m-3"
            key={index}
          >
            <div className="animate-pulse w-full h-48 bg-slate-200"></div>
            <div className="p-3 space-y-4">
              <div className="animate-pulse w-2/3 h-6 bg-slate-200"></div>
              <div className="flex space-x-4">
                <div className="animate-pulse w-1/3 h-3 bg-orange-200"></div>
                <div className="animate-pulse w-1/3 h-3 bg-orange-200"></div>
                <div className="animate-pulse w-1/3 h-3 bg-orange-200"></div>
              </div>
              <div className="space-y-2">
                <div className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                <div className="animate-pulse w-full h-3 bg-slate-200"></div>
                <div className="animate-pulse w-2/3 h-3 bg-slate-200"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
