// import Image from 'next/image'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div
        className="w-full h-full absolute bg-repeat"
        style={{ 
          backgroundImage: "url(/tiled.png)",
          backgroundSize: 'auto 30%',
          // height: '800px',
          // width: '800px' // Set the desired width and height for the background image
        }}
      ></div>

      <div className="pt-7 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-auto justify-center border-b border-blue-300 bg-gradient-to-b from-blue-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Pokemon 2 - By Tina and Mitch
        </div>
        <div className="fixed left-0 top-0 flex w-auto justify-center border-b border-red-300 bg-gradient-to-b from-red-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted with{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
