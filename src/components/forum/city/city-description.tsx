import Tag from "~/components/forum/all-forums/tag";
import Rating from "~/components/forum/all-forums/rating";
import ProgramLink from "~/components/forum/all-forums/program-link";
import Reviews from "~/components/profile-page/reviews";
import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   getPostsByLocationAsyncAction,
//   getAllPostsAsyncAction,
// } from "../../../redux/post/post-slice.js";
// import { useDispatch, useSelector } from "react-redux";
interface CityDescriptionProps {
  city: string;
  country: string;
  description: string;
  top_tags: string[];
  overall_rating: number;
  safety_rating: number;
  affordability_rating: number;
  sightseeing_rating: number;
  image_link: string;
  like_cnt: number;
}

const CityDescription = ({
  city,
  country,
  description,
  top_tags,
  overall_rating,
  safety_rating,
  affordability_rating,
  sightseeing_rating,
  image_link,
  like_cnt,
}: CityDescriptionProps) => {
  const [posts, setPosts] = useState({});
  // const dispatch = useDispatch();
  // const { postInfo } = useSelector((state) => state.post);

  // useEffect(() => {
  //   if (city && city !== "City") {
  //     // Fetch posts by city name passed through
  //     dispatch(getPostsByLocationAsyncAction(city));
  //   } else {
  //     dispatch(getAllPostsAsyncAction());
  //   }
  // }, [city]);

  // useEffect(() => {
  //   setPosts(postInfo);
  // }, [postInfo]);

  return (
    <div className="mx-20 grid h-full grid-cols-3 overflow-y-scroll rounded-lg bg-gray-400 bg-opacity-50 px-4 pt-2 pb-6 text-left   sm:grid-cols-1">
      <grid-cols-1>
        <span className="text-[30px]">
          <span className="row content-start ">
            Travel To:
            <span className="font-bold">
              {" "}
              {city}, {country}
            </span>
          </span>
        </span>
        <p>{description}</p>
        <p className="py-4 text-[24px] font-bold">Top Tags</p>
        <div className="grid grid-cols-3 justify-around justify-items-center sm:grid-cols-5">
          {top_tags &&
            top_tags.map((tag, index) => (
              <Tag color={"bg-red-400"} content={tag} key={index} />
            ))}
        </div>
        <p className="py-4 text-[24px] font-bold">Ratings</p>
        <div className="grid grid-cols-1 justify-around justify-items-center text-center sm:grid-cols-4">
          <Rating rating={overall_rating} type={"Overall"} />
          <Rating rating={safety_rating} type={"Safety"} />
          <Rating rating={affordability_rating} type={"Affordability"} />
          <Rating rating={sightseeing_rating} type={"Sightseeing"} />
        </div>
        <p className="py-4 text-[24px] font-bold">
          Like what you see? Study Here!
        </p>
        <div className="grid grid-cols-1 justify-around justify-items-center text-center sm:grid-cols-3">
          {/*<div className="snap-proximity snap-x overflow-x-auto w-[85vw] flex flex-row p-8">*/}
          {/*  {images.map(({ name, src }) => (*/}
          {/*    <div className="snap-center" key={name}>*/}
          {/*      <div className="scroll-snap-align-start h-64 w-64">*/}
          {/*        <img*/}
          {/*          src={src}*/}
          {/*          alt={name}*/}
          {/*          className="h-52 w-52 rounded-full object-cover border-4 border-white inline-block mx-3 transform transition hover:scale-125 hover:outline"*/}
          {/*          data-name={name}*/}
          {/*          onLoad={event => onForumLoad(event, name)}*/}
          {/*        />*/}
          {/*        <p className="text-base font-bold p-6 text-gray-900" data-name={name}>*/}
          {/*          {name}*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
        {posts && posts.length > 0 ? (
          <div className=" h-[60%] overflow-scroll sm:h-[70%] ">
            {posts.map((post, index) => (
              <Reviews
                key={index}
                id={post._id}
                username={post.owner}
                program={post.program}
                content={post.content}
                likes={post.likes}
                saves={post.saves}
                tags={post.tags}
                dislikes={post.dislikes}
                location={post.location}
                comments={post.comments}
                date={post.timestamp}
              />
            ))}
          </div>
        ) : null}
      </grid-cols-1>
    </div>
  );
};

export default CityDescription;
