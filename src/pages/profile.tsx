import SideBar from "~/components/all-pages/sidebar";
import ProfileBio from "~/components/profile-page/profile-bio";
export default function ProfilePage() {
    return (
        <div id="forum-page" className="flex flex-row h-screen w-screen ">
          <SideBar />
          <div className="w-full bg-slate-400">
            <div
              id="header"
              className="flex w-full h-[20%] justify-center text-4xl "
            >
              <ProfileBio/>
            </div>
            <div
              id="contents"
              className="flex flex-col  justify-center text-4xl bg-white"
            >
              <div className="flex w-full justify-between p-4 bg-slate-400">
                <p className="text-sm sm:text-2xl ">Reviews</p>
                <p className="text-sm sm:text-base">1370 total likes</p>
              </div>
            </div>
            {/* {object.posts && object.posts.length > 0 ? (
              <div className=" overflow-scroll h-[60%] sm:h-[65%] md:h-[70%] ">
                {object.posts.map((post, key) => (
                  <div key={key}>
                    <Reviews
                      key={key}
                      id={post.id}
                      username={post.username}
                      program={"Computer Science"}
                      content={post.content}
                      likes={post.likes}
                      saves={post.saves}
                      tags={post.tags}
                      dislikes={post.dislikes}
                      location={post.location}
                      comments={post.comments}
                      date={"2021-05-05"}
                      type={"review"}
                    />
                  </div>
                ))}
              </div>
            ) : null} */}
          </div>
    
          {/* {modalOpen ? (
            <ProfileModal modal={modalOpen} setModal={setModalOpen} />
          ) : null} */}
        </div>
    
        /*<div id="parent" className="bg-[rgba(39,74,104,0.5)] w-screen h-screen">
          {!loading ? (
            <ProfileBio
              username={user.username}
              email={user.primary_email}
              first_name={user.first_name}
              last_name={user.last_name}
              city={user.city}
            />
          ) : (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-4xl text-slate-600">Loading...</h1>
            </div>
          )}
        </div>*/
      );
}