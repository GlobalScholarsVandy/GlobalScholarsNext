// import { useLocation, useParams, useNavigate } from "react-router-dom";

const ProgramLink = () => {
  // const navigate = useNavigate();
  return (
    <a href="https://disabroad.org/copenhagen/">
      <img
        className="scale-[70%] rounded-full "
        src="DIS-Copenhagen-Link.png"
      />
      <div className="align-text-top text-lg text-black">program name</div>
    </a>
  );
};

export default ProgramLink;
