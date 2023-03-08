import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
interface Props {
  images: { src: string; name: string }[];
  rounded?: boolean;
}

const ScrollingImages = ({ images, rounded }: Props) => {
  const [shape, setShape] = useState(
    "h-52 w-52 object-cover border-4 border-white inline-block mx-3 transform transition hover:scale-125 hover:outline"
  );
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { locationInfo } = useSelector((state) => state.geo);
  const [programs, setPrograms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (rounded) {
      setShape(
        "h-52 w-52 rounded-full object-cover border-4 border-white inline-block mx-3 transform transition hover:scale-125 hover:outline"
      );
    }
  }, []);

  const onClick = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(`Clicking on ${ev.target.name}`);
    // Navigate to forum page for location / program clicked
    router.push(`/forum/${ev.target.name.split(",")[0].toLowerCase()}`).catch((err) => console.log(err));
  };

  const onHover = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(`Hovering over ${ev.target.name}`);
    if (rounded) {
      // Call  to API to fetch all programs under : ev.target.name.split(",")[0].toLowerCase()
      // dispatch(
      //   getLocationByNameAsyncAction(ev.target.name.split(",")[0].toLowerCase())
      // );
    }
  };

  // useEffect(() => {
  //   // set programs to the array of program ids associated with the location
  //   if (locationInfo && locationInfo !== []) {
  //     setPrograms(locationInfo.programs);
  //   }
  // }, [locationInfo]);

  //params: images is the array to be passed in (with src photo and name)
  //        shape is the shape in which the photo will be displayed (rounded or square)
  return (
    <div style={{ display: "flex" }}>
      {images.map((image, id) => (
        <div className="scroll-snap-align-start h-64 w-64" key={id}>
          <img
            src={image.src}
            name={image.name}
            alt={image.name}
            className={shape}
            onClick={onClick}
            onMouseOver={onHover}
          />
          <p className="p-6 text-base font-bold text-gray-900">{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollingImages;
