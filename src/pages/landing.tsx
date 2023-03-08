import { type NextPage } from "next";
import SideBar from "~/components/all-pages/sidebar";
import SearchBar from "~/components/landing-page/search-bar";
import ScrollingImages from "~/components/all-pages/scrolling-images"
import images from "images";


const Landing: NextPage = () => {
    return (
        <div id="forum-page" className="flex h-screen ">
          <SideBar />
          <div className="overflow-y-scroll">
            <div className="flex flex-col h-1/2 bg-[url('/landing-background.avif')] bg-no-repeat bg-cover justify-end">
              <div className="grid  m-10 p-10 gap-2">
                <div className="flex h-2/3 justify-center text-4xl font-bold font-mono text-white mb-3">
                  Study Abroad Search
                </div>
                <div className="flex h-1/2 justify-center items-bottom text-4xl">
                  <SearchBar />
                </div>
              </div>
            </div>
    
            <div className="grid bg-white w-[85vw] ">
              <div className="flex flex-row h-2 p-5 w-[85vw] text-2xl">
                Programs By Location:
              </div>
    
              {/* displayed locations  */}
              <div className="snap-proximity snap-x overflow-x-auto flex flex-row p-8">
                <ScrollingImages rounded={true} images={images} />
              </div>
    
              {/* programs popout  */}
              <div className="snap-proximity snap-x overflow-x-auto flex flex-row p-8">
                <ScrollingImages rounded={false} images={images} />
              </div>
            </div>
          </div>
    
          {/* {loggedIn ? (
            <div className="absolute right-1 top-2">
              <button onClick={() => logOutHandle()}>Log Out</button>
            </div>
          ) : (
            <div className="absolute right-1 top-2">
              <button onClick={() => navigate("/login")}>Log In</button>
            </div>
          )} */}
        </div>
      );
}

export default Landing