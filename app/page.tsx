import { Button } from "@/components/ui/button";
import HeroSVG from "@/components/ui/HeroSVG";
import LogoText from "@/components/ui/LogoText";
import { after } from "node:test";
import FBButton from "@/components/AuthButtons";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <HeroSVG />
      <Nav />
      <section className="flex flex-col justify-center items-center py-56 mx-[25vw] text-center w-1/2">
        <h1 className="text-clip text-8xl font-extrabold text-white">
          Publish <span className="block">Content Here</span>
        </h1>
        <h2 className="text-white m-5 px-11">
          Experience effortless content publishing with our comprehensive,
          all-in-one platform.
        </h2>
        <Button className="text-white bg-zinc-900 shadow-md">
          <svg
            width="18"
            height="25"
            viewBox="0 0 18 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3"
          >
            <path
              d="M17.7829 12.2381L6.32704 24.7365C6.20564 24.8684 6.04539 24.9566 5.87048 24.9876C5.69557 25.0187 5.51549 24.9909 5.35741 24.9086C5.19933 24.8263 5.07182 24.6939 4.99414 24.5313C4.91646 24.3688 4.89281 24.1849 4.92676 24.0074L6.42625 16.3698L0.531594 14.1159C0.404998 14.0677 0.292104 13.9883 0.202997 13.8848C0.113891 13.7813 0.0513476 13.657 0.020955 13.5229C-0.00943754 13.3888 -0.00673267 13.2491 0.0288278 13.1163C0.0643883 12.9835 0.131697 12.8618 0.22474 12.7619L11.6806 0.263501C11.802 0.131576 11.9623 0.0434362 12.1372 0.0123835C12.3121 -0.0186692 12.4922 0.00904977 12.6502 0.0913575C12.8083 0.173665 12.9358 0.306096 13.0135 0.468665C13.0912 0.631234 13.1148 0.815121 13.0809 0.992577L11.5773 8.6385L17.472 10.8893C17.5976 10.9378 17.7096 11.0171 17.798 11.1202C17.8864 11.2233 17.9486 11.3469 17.9789 11.4803C18.0092 11.6136 18.0068 11.7525 17.9719 11.8846C17.937 12.0168 17.8707 12.1382 17.7788 12.2381H17.7829Z"
              fill="white"
            />
          </svg>
          Start now
        </Button>
      </section>
    </main>
  );
}
