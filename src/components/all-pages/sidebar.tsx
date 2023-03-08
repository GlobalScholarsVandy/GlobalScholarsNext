
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { ImSearch } from "react-icons/im";
import { MdOutlineForum, MdOutlineAddBox } from "react-icons/md";
import { BsCalculatorFill, BsPersonCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

const NavigationContainer = tw.div`
  text-white
  font-bold 
  sm:flex 
  hover:cursor-pointer
`;

const SidebarNavigationLinkTitle = tw.div`
  hidden 
  sm:block 
  text-sm 
  sm:text-xl 
  text-right 
  p-2 hover:text-blue-300 
  hover:underline 
  underline-offset-4
`;

const SideBar = () => {
  // const { userInfo, loggedIn, userToken, loading, success } = useSelector(
  //   (state) => state.user
  // );
  // const dispatch = useDispatch();
  // const currentPath = window.location.pathname;
  const router = useRouter();
  // useEffect(() => {
  //   if (success && !loggedIn) {
  //     router.push("/login");
  //   }
  //   if (loggedIn === false && userInfo.username !== "") {
  //     dispatch(getUserAsyncAction(userInfo.username));
  //   }
  // }, [success, loggedIn, userInfo]);
  const { data: session } = useSession()
  
  const handleNavigation = (path:string) => {
    router.push(path).catch((err) => console.log(err));
  };
  console.log(session);

  return (
    <div className="flex flex-row sm:flex-col p-6 h-24 sm:h-full sm:w-64 w-full fixed sm:sticky   bottom-0 gap-4 bg-sky-800 z-10">
      {/* logo  */}
      <div
        className="w-full sm:flex justify-center mb-5  text-white text-lg indent-1 hidden sm:visible"
       
      >
        <img
          src="/GlobalScholars.svg"
          alt="logo"
          className="flex mr-3.5"
          width={150}
          height={150}
        ></img>
      </div>

      {/* links */}
      <div className="w-full flex sm:grid items-center justify-between m-4  sm:gap-8">
        <NavigationContainer onClick={()=>handleNavigation("/landing")}>
          {/* <img src={searchIcon} width={40} height={100}/> */}
          <ImSearch size={36} />
          <SidebarNavigationLinkTitle>Search</SidebarNavigationLinkTitle>
        </NavigationContainer>
        <NavigationContainer onClick={() => handleNavigation("/forum")}>
          <MdOutlineForum size={36} />
          <SidebarNavigationLinkTitle>Forum</SidebarNavigationLinkTitle>
        </NavigationContainer>
        <NavigationContainer onClick={() => handleNavigation("/newpost")}>
          <MdOutlineAddBox size={36} />
          <SidebarNavigationLinkTitle>Make Post</SidebarNavigationLinkTitle>
        </NavigationContainer>
        <NavigationContainer onClick={() => handleNavigation("/price-estimator")}>
          <BsCalculatorFill size={36} />
          <SidebarNavigationLinkTitle>Calculator</SidebarNavigationLinkTitle>
        </NavigationContainer>
        <NavigationContainer
          onClick={() => handleNavigation(`/profile`)}
        >
          {session && session.user !== undefined ? (
            <img
              src={session.user.image}
              alt="profile"
              className="rounded-full h-[36px] w-[36px]"
            />
          ) : (
            <BsPersonCircle size={36} />
          )}
          <SidebarNavigationLinkTitle>Profile</SidebarNavigationLinkTitle>
        </NavigationContainer>
      </div>
    </div>
  );
};

export default SideBar;
