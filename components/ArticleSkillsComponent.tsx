import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { articleSkills } from "@/models/typesIndex";

const ArticleSkillsComponent = ({
  title,
  image,
  text,
  mobilVersion,
}: articleSkills) => {
  const refText = useRef<HTMLInputElement>(null);
  const isInViewText = useInView(refText, { once: true });

  const refImage = useRef<HTMLInputElement>(null);
  const isInViewImage = useInView(refImage, { once: true });

  const refbottomLine = useRef<HTMLInputElement>(null);
  const isInViewBottomLine = useInView(refbottomLine, { once: true });

  const [offsetY, setoffsetY] = useState<number>(250);
  const [offsetX, setoffsetX] = useState<number>(205);

  let indiceRotationX = (offsetY - 250) / -25;
  let indiceRotationY = (offsetX - 210) / -20.75;

  return (
    <article className="group relative flex flex-col w-full justify-evenly text-1xl 2xl:text-2xl  xl:flex-row xl:justify-between">
      <main
        ref={refText}
        className=" flex flex-col justify-center mt-6 xl:mt-0 "
        style={{
          transform: isInViewText ? "none" : "translateX(-200px)",
          opacity: isInViewText ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h3 className=" relative  mb-8 ml-4 tracking-widest text-4xl uppercase">
          {title}:
          {/* <div className="absolute h-px w-full bottom-0 left-0 bg-slate-400 z-50"></div> */}
        </h3>
        {text?.map((text, index) => {
          return (
            <React.Fragment key={index}>
              <h4 className=" leading-6 pl-2 md:leading-10 m-2">{text}</h4>
            </React.Fragment>
          );
        })}
      </main>

      <div
        ref={refImage}
        style={{
          transform: isInViewImage ? "none" : "translateX(200px)",
          opacity: isInViewImage ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="m-auto  p-14  md:p-0"
      >
        {!mobilVersion ? (
          <div
            ref={refImage}
            className=" relative m-14"
            style={{
              perspective: "1000px",
              perspectiveOrigin: "50% 50%",
              transform: "rotate3d(0, 0.8, 0, 34deg)",
              width: "500px",
              height: "500px",
            }}
            onMouseMove={(event) => {
              setoffsetY(event.nativeEvent.offsetY);
              setoffsetX(event.nativeEvent.offsetX);
            }}
            onMouseLeave={() => {
              setoffsetY(250);
              setoffsetX(205);
            }}
          >
            {image ? (
              <img
                src={image}
                alt="my_image"
                style={{
                  borderRadius: "10px",
                  transform: `rotateX(${indiceRotationX}deg) rotateY(${indiceRotationY}deg)`,
                  transition: "all 0.3s ease",
                }}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          <img
            src={image}
            alt="my_image"
            style={{
              borderRadius: "10px",
              transition: "all 0.5s ease",
              width: "100%",
            }}
          />
        )}
      </div>
      <div
        ref={refbottomLine}
        className="absolute h-px w-full bottom-0 left-0 bg-slate-400 z-50 scale-0"
        style={{
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          transformOrigin: "center",
          transform: isInViewBottomLine ? "scaleX(1)" : "scaleX(0)",
        }}
      ></div>
    </article>
  );
};

export default ArticleSkillsComponent;
