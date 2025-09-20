import Image from "next/image";

import Header from '@/components/Header';
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import Center from "@/components/Center";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/* <div id='background'></div> */}
      < Header />
      < Hero />
      < Divider />
      < Center />
    </main>

  );
}
