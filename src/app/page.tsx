import Navbar from "@/components/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <div className="p-5 min-h-screen">
      <BackgroundBeamsWithCollision>
        {/* Navbar placed at the top inside the background UI */}
        <div className="w-full fixed top-4 left-0 z-50">
          <Navbar />
        </div>

        {/* Spacer so content doesn't go under fixed navbar */}
        <div className="pt-20">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Where Fabric Dreams Become{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Flawless Reality.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>Flawless Reality.</span>
              </div>
            </div>
          </h2>
        </div>

        <div>
      <Button
        borderRadius="1.75rem"
        className="bg-zinc-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
