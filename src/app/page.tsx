// import Image from 'next/image'
import Image from "next/image";

export default function Home() {
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
            <div className="m-1 p-1  flex w-auto justify-center border-b border-blue-300 bg-gradient-to-b from-blue-200 pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Pokemon 2 - By Tina and Mitch
            </div>
            <div className="m-1 p-1 flex w-auto justify-center border-b border-red-300 bg-gradient-to-b from-red-200 pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Hosted with{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
              />
            </div>
          </div>
          <div className="flex m-auto mt-[2%] w-[90%] h-[80%] bg-black"></div>
        </div>

      </div>
    </main>
  );
}
