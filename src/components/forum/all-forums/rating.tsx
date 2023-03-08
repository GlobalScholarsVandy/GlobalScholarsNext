// import { useLocation, useParams, useNavigate } from "react-router-dom";

const Rating = ({ rating, type }) => {
  return (
    <div>
      <div className="flex h-24 w-32 justify-center bg-yellow-200 bg-opacity-100 text-center align-middle text-lg font-extrabold">
        <div className="m-auto text-[32px]">{rating}</div>
      </div>
      <div className="flex justify-center align-middle">
        <div className="m-1">{type}</div>
      </div>
    </div>
  );
};

export default Rating;
