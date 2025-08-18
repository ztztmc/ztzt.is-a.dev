"use client";

import Link from "next/link";
import Image from "next/image";

import Header from "./components/Header";

import Lens from "./components/magicui/lens";

import { ArrowUpRight } from "lucide-react";

import { Noto_Sans_Mono } from "next/font/google";

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="p-2">
      <div className="px-4 mx-auto max-w-2xl">
        <Header />

        <div className={notoSansMono.className}>
          <p className="text-neutral-400 text-sm">ABOUT ME</p>
        </div>
        <p className="text-neutral-200 mt-2 mb-6">
          Hi, I'm ztzt. I am a self-taught developer currently in high school. I
          love programming, playing Minecraft and watching anime. This is my
          personal website to showcase my projects and skills. I hope you enjoy
          your visit!
        </p>

        <div className={notoSansMono.className}>
          <p className="text-neutral-400 text-sm">FEATURED PROJECTS</p>
        </div>
        <div className="text-neutral-200 bg-neutral-900 px-3.5 py-3 mt-2 rounded-t-2xl rounded-b-lg">
          <Image
            className="rounded-xl"
            src="/assets/kuromainmenu.png"
            alt="Kuro Client Main Menu"
            width={620}
            height={1}
            quality={100}
          ></Image>
          <div className="flex items-center justify-between">
            <h1 className="font-medium mt-2">Kuro Client</h1>
            <Link
              target="_blank"
              href={"https://github.com/ztztmc/kuro-client"}
              className="cursor-pointer text-[15px] bg-neutral-800 px-2 rounded-full transition-colors hover:bg-neutral-700 ml-2 mt-2"
            >
              Github
              <ArrowUpRight className="inline ml-1 mb-0.5 -mr-1" size={16} />
            </Link>
          </div>
          <p className="text-neutral-400 text-sm -mt-0.5">
            Free, minimal and open-source modpack for Minecraft 1.8.9
          </p>
          <div className="flex mt-1">
            <Link
              target="_blank"
              href={"https://java.com/"}
              className="cursor-pointer text-[15px] bg-neutral-800 px-2 rounded-full transition-colors hover:bg-neutral-700"
            >
              Java
            </Link>
            <Link
              target="_blank"
              href={"https://legacyfabric.net/"}
              className="cursor-pointer text-[15px] bg-neutral-800 px-2 rounded-full transition-colors hover:bg-neutral-700 ml-1.5"
            >
              Legacy Fabric
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/SpongePowered/Mixin"}
              className="cursor-pointer text-[15px] bg-neutral-800 px-2 rounded-full transition-colors hover:bg-neutral-700 ml-1.5"
            >
              Mixins
            </Link>
          </div>
        </div>

        <div className="text-neutral-200 bg-neutral-900 px-3.5 py-3 mt-1 rounded-t-lg rounded-b-2xl">
          <Image
            className="rounded-xl"
            src="/assets/bedwarsupgradesdisplay.png"
            alt="Kuro Client Main Menu"
            width={620}
            height={1}
            quality={100}
          ></Image>
          <div className="flex items-center justify-between">
            <h1 className="font-medium mt-2">Bedwars Upgrades Display</h1>
            <Link
              target="_blank"
              href={"https://github.com/ztztmc/BedwarsUpgradesDisplay"}
              className="cursor-pointer text-[15px] bg-neutral-800 px-2 rounded-full transition-colors hover:bg-neutral-700 ml-2 mt-2"
            >
              Github
              <ArrowUpRight className="inline ml-1 mb-0.5 -mr-1" size={16} />
            </Link>
          </div>
          <p className="text-neutral-400 text-sm -mt-0.5">
            Displays team upgrades & traps purchased in bedwars on the HUD
          </p>
          <div className="flex mt-1">
            <Link
              target="_blank"
              href={"https://java.com/"}
              className="cursor-pointer text-[15px] bg-neutral-800 px-2 rounded-full transition-colors hover:bg-neutral-700"
            >
              Java
            </Link>
            <Link
              target="_blank"
              href={"https://legacyfabric.net/"}
              className="cursor-pointer text-[15px] bg-neutral-800 px-2 rounded-full transition-colors hover:bg-neutral-700 ml-1.5"
            >
              Forge
            </Link>
          </div>
        </div>

        <div className={notoSansMono.className}>
          <p className="text-neutral-400 text-sm mt-6">FIND / CONTACT ME</p>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-1.5">
            <Image
              className="mt-2"
              src="/assets/discord.png"
              alt="discord icon"
              width={22}
              height={1}
              quality={100}
            ></Image>
            <div className={notoSansMono.className}>
              <p className="text-neutral-200 mt-2">discord</p>
            </div>
            <p className="text-neutral-400 mt-[9px]">ztzt</p>
          </div>
          <Link
            target="_blank"
            href={"https://github.com/ztztmc"}
            className="flex items-center gap-1.5 w-fit"
          >
            <Image
              className="mt-2 rounded-full"
              src="/assets/github.png"
              alt="github icon"
              width={21}
              height={1}
              quality={100}
            ></Image>
            <div className={notoSansMono.className}>
              <p className="text-neutral-200 mt-2">github</p>
            </div>
            <p className="text-neutral-400 mt-[9px]">ztztmc</p>
            <ArrowUpRight
              className="text-neutral-200 inline -ml-0.5 mt-2.5"
              size={16}
            />
          </Link>
        </div>

        <footer className="text-neutral-400 mt-6 mb-4">© 2025 ztzt</footer>
      </div>
    </main>
  );
}
