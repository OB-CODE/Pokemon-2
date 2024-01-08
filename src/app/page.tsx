"use client";

// import Image from "next/image";
import StartButtons from "./component/StartButtons";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeLoggedStatus } from "@/features/user/userLogged";
import { RootState } from "./store"
// once the user is logged in, display the main page. 
import GameMainPage from "./component/GameMainPage";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const userLogged = useSelector((state: RootState) => state.changeLoggedState.value);

  return (
    <main className="flex min-h-screen h-full flex-col items-center w-full">
      <div className="min-h-screen h-full w-full">
        <div
          className="w-full h-full absolute bg-repeat"
          style={{
            backgroundImage: "url(/tiled.png)",
            backgroundSize: "auto 30%",
            // height: '800px',
            // width: '800px' // Set the desired width and height for the background image
          }}
        ></div>
        <div className="w-full h-full absolute ">
          <div className="holderForBannerBubbles m-auto pt-7 max-w-5xl w-full px-5 sm:px-1  flex flex-col sm:flex-row items-center justify-between font-mono text-sm ">
            <div className="m-1 p-1  flex w-auto justify-center border-b border-blue-300 bg-gradient-to-b from-blue-200 pb-4 pt-4 backdrop-blur-2xl  rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              {/* if dark d=mode use above: dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit */}
              Pokemon 2 - Remade with Next.JS
            </div>
            <div className="m-1 p-1 flex w-auto justify-center border-b border-red-300 bg-gradient-to-b from-red-200 pb-4 pt-4 backdrop-blur-2xl  rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
             {/* if dark d=mode use above:  dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit */}
              Hosted with
              <img src="/vercel.svg" alt="" width={100}
                height={24} />
              {/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
              /> */}
            </div>
          </div>
          {/* wrap div to show change of game screen once the user is logged in */}
          {userLogged ? <GameMainPage /> : <div
            className="flex m-auto mt-[2%] w-[90%] h-[80%] "
            style={{
              backgroundImage: "url(/kanto_map.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "85%",
            }}
          >

            <div
              className="w-[100%] flex flex-col items-center justify-center gap-20"
            // style={{
            //   backgroundImage: "url(/PokeBattles.png",
            // }}
            >
              <div>
              <img src="/PokeBattles.png" alt=""                   width={500}
                  height={500}/>
                {/* <Image
                  src="/PokeBattles.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                /> */}
              </div>
              <StartButtons />
            </div>
          </div>}

        </div>
      </div>
    </main>
  );
}
