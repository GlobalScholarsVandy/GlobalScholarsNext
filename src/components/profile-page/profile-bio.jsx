import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutAction } from "../../redux/user/user-slice";
// import { useNavigate } from "react-router-dom";
import { signIn, signOut, useSession } from "next-auth/react";

const ProfileBio = () => {
  // const { userInfo, loggedIn, success, loading } = useSelector(
  //   (state) => state.user
  // );
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // const handleLogOut = () => dispatch(logoutAction({}));

  return (
    <div
      className={`flex h-full w-screen justify-center overflow-hidden bg-[url('https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat sm:w-full`}
    >
      <div
        className="relative top-8 flex h-[75%]  w-[90%] flex-col rounded-full bg-[rgba(39,74,104,0.5)] sm:flex-row"
        id="border"
      >
        <div className="flex justify-center " id="header-contents">
          <div className="flex sm:m-2 ">
            {/* <img
              src={userInfo.avatar_url}
              alt="avatar"
              className=" h-[36px] w-[36px] rounded-full sm:h-[105px] sm:w-[105px]  "
            /> */}
          </div>
        </div>

        <div
          className="absolute flex h-full w-full flex-col justify-center align-middle  text-sm  sm:static"
          id="profile-body "
        >
          <div className="relative left-8 flex text-left text-xs leading-4  md:text-base">
            <p className=" w-[60px] font-bold text-slate-200 md:w-[80px]">
              Username:
            </p>
            {/* <p className="pl-2 text-slate-200">{userInfo.username}</p> */}
          </div>
          <div className="relative left-8 flex text-left text-xs leading-4  md:text-base ">
            <p className=" w-[60px] font-bold text-slate-200 md:w-[80px]">
              Name:
            </p>
            <p className="pl-2 text-slate-200">
              {/* {capitalizeFirstLetter(userInfo.first_name)}{" "}
              {capitalizeFirstLetter(userInfo.last_name)} */}
            </p>
          </div>
          <div className="relative left-8 flex text-left text-xs leading-4  md:text-base ">
            <p className=" w-[60px] font-bold text-slate-200 md:w-[80px]">
              Majors:{" "}
            </p>
            <p className="pl-2 text-slate-200">
              {/* {userInfo.majors ? userInfo.majors.join(" & ") : ""} */}
            </p>
          </div>
          <div className="relative left-8 flex text-left text-xs leading-4  md:text-base ">
            <p className=" w-[60px] font-bold text-slate-200 md:w-[80px]">
              Minors:{" "}
            </p>
            <p className="pl-2 text-slate-200">
              {/* {userInfo.minors ? userInfo.minors.join(" & ") : ""} */}
            </p>
          </div>
          <div className="relative left-8 flex text-left  text-xs leading-4  md:text-base">
            <p className=" w-[60px] font-bold text-slate-200 md:w-[80px]">
              Bio:{" "}
            </p>
            {/* <p className=" pl-2 text-slate-200">{userInfo.bio}</p> */}
          </div>
        </div>
        <div className="absolute right-10 top-2">
          <p
            className="cursor-pointer text-xs text-slate-200 hover:font-bold hover:underline md:text-base"
            // onClick={handleLogOut}
          >
            Logout
          </p>
          <p
            className="cursor-pointer text-xs text-slate-200 hover:font-bold hover:underline md:text-base"
            // onClick={() => navigate(`/profile/${userInfo.username}/edit`)}
          >
            Edit
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBio;
