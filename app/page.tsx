"use client"
import Gallery from "./components/section/gallery/gallery";
import Landing from "./components/section/landing/landing";
import Separator from "./components/separator";
import { LanguageProvider } from "./i18n/LanguageContext";
import { useRef } from "react";

export default function Home() {

  const aboutRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement| null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div >
      <main>
        <LanguageProvider>
          <Landing onGallery={()=>scrollTo(galleryRef)}></Landing>
          <Separator></Separator>
          <Gallery galleryRef={galleryRef}></Gallery>
          <Separator></Separator>
        </LanguageProvider>
      </main>
    </div>
  );
}
