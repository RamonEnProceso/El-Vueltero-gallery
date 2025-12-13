import Gallery from "./components/section/gallery/gallery";
import Landing from "./components/section/landing/landing";
import Separator from "./components/section/separator";

export default function Home() {
  return (
    <div >
      <main>
        <Landing></Landing>
        <Separator></Separator>
        <Gallery></Gallery>
      </main>
    </div>
  );
}
