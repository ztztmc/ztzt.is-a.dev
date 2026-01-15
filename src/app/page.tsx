import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main className="mx-auto max-w-[690px] py-10 px-4 text-lg">
      <header className="flex flex-row items-center justify-between mb-8">
        <div className="flex gap-2 font-medium items-center">
          <Image
            src="/pfp.png"
            alt="Profile picture"
            width={35}
            height={35}
            className="rounded-full"
          />
          <p>ztzt</p>
          <p className="font-bold text-[#999999]">•</p>
          <p className="text-[#999999]">web dev</p>
        </div>
        <a
          href="https://github.com/ztztmc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 relative after:bg-[#ccc6c2] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            Github
            <ExternalLink width={18} />
          </div>
        </a>
      </header>
      <section className="flex flex-col justify-between bg-neutral-900 h-40 rounded-3xl px-6 py-4 mb-8">
        <p>
          17 <span className="text-[#999999]">yo</span>
        </p>
        <p className="text-[#999999]">
          Hello! I'm ztzt, a{" "}
          <span className="text-[#ccc6c2]">front-end web developer</span>{" "}
          creating cool stuff. I mainly work with{" "}
          <span className="text-[#ccc6c2]">Next.js</span> and{" "}
          <span className="text-[#ccc6c2]">Tailwind</span> but I'm always eager
          to learn new technologies.
        </p>
      </section>

      <section
        className="cursor-none bg-neutral-900 rounded-3xl px-6 mb-8"
        data-cursor-link="bedwar.xyz"
        data-cursor-url="https://bedwar.xyz"
      >
        <div className="flex justify-between py-4">
          <p className="font-medium w-100">Bedwar</p>
          <p className="text-[#999999] text-[15px] leading-5 w-260">
            Hypixel Bedwars hub with stats viewing, latest map rotations,
            sessions & more.
          </p>
        </div>
        <Image
          src="/projects/bedwar.png"
          alt="Bedwar project preview image"
          width={660}
          height={330}
          className="rounded-t-2xl"
        />
      </section>
      <section
        className="cursor-none bg-neutral-900 rounded-3xl px-6 mb-8"
        data-cursor-link="guess.bedwar.xyz"
        data-cursor-url="https://guess.bedwar.xyz"
      >
        <div className="flex justify-between py-4">
          <p className="font-medium w-100">Guesswars</p>
          <p className="text-[#999999] text-[15px] leading-5 w-260">
            Guess where you are in Hypixel Bedwars by looking at a single image
            at a random location in a random map.
          </p>
        </div>
        <Image
          src="/projects/guesswars.png"
          alt="Guesswars project preview image"
          width={660}
          height={330}
          className="rounded-t-2xl"
        />
      </section>
      <section
        className="cursor-none bg-neutral-900 rounded-3xl px-6 mb-8"
        data-cursor-link="minestats.xyz"
        data-cursor-url="https://minestats.xyz"
      >
        <div className="flex justify-between py-4">
          <p className="font-medium w-100">Minestats</p>
          <p className="text-[#999999] text-[15px] leading-5 w-260">
            View minemen.club player stats, historical player stats and
            leaderboards through the website or disord bot.
          </p>
        </div>
        <Image
          src="/projects/minestats.png"
          alt="Minestats project preview image"
          width={660}
          height={330}
          className="rounded-t-2xl"
        />
      </section>
      <section
        className="cursor-none bg-neutral-900 rounded-3xl px-6 mb-8"
        data-cursor-link="re-mp3.vercel.app"
        data-cursor-url="https://re-mp3.vercel.app"
      >
        <div className="flex justify-between pt-4 pb-2">
          <p className="font-medium w-100">remp3</p>
          <p className="text-[#999999] text-[15px] leading-5 w-260">
            Web-based local music player. Add audio files, play them, create
            playlists and manage your music. No files are uploaded to any
            server, everything stays on your device.
          </p>
        </div>
        <Image
          src="/projects/remp3.png"
          alt="remp3 project preview image"
          width={660}
          height={330}
          className="rounded-t-2xl"
        />
      </section>

      <Cursor />

      <section className="bg-neutral-900 rounded-3xl px-6 py-4 mb-8">
        <p className="text-[#999999]">
          You can send me an email at{" "}
          <span className="text-[#ccc6c2]">ztztalt@gmail.com</span> or if you
          want a quicker response, message me on discord —{" "}
          <span className="text-[#ccc6c2]">ztzt</span>
        </p>
      </section>

      <footer className="text-[#999999] text-[16px] text-center">
        Made with ♥ by ztzt
      </footer>
    </main>
  );
}
