


import SideBar from "~/components/all-pages/sidebar";
// import CityDescription from "~/components/forum/city/city-description";
import CityPost from "~/components/forum/city/city-post";
import React, {useState, useEffect} from "react";
import ProgramPost from "~/components/forum/program/program-post";

export default function NewPost() {

    const [postType, setPostType] = useState("city");

    return (
        <div className="w-screen h-screen flex flex-row bg-[url('/landing-background.avif')] bg-blue-200">
            <SideBar />
            <div className="overflow-y-scroll h-full">
                <div id="type-selector" className="">
                    <div id="selector-container" className="">
                        <div className="flex w-auto bg-white mx-20 text-left p-4 rounded-lg m-4 justify-around">
                            <div className="font-bold text-[32px]">
                               Select the type of post
                            </div>
                            <div className="flex justify-center align-middle items-center">
                                <select name="post-type" id="post-type" onChange={(e=>setPostType(e.target.value))} className="bg-white border-2 border-black rounded-lg m-2 p-2">
                                    <option value={"city"}>City</option>
                                    <option value={"program"}>Program</option>
                                </select>
                            </div>
                            {postType}
                        </div>
                    </div>
                </div>
                {postType === "city" ? <CityPost /> : <ProgramPost /> }
            </div>
        </div>
    );
}