import Gallery from "./components/gallery/gallery";
import Landing from "./components/section/landing/landing";

export default function Home() {
  return (
    <div >
      <main>
        <Landing></Landing>
        <Gallery></Gallery>
      </main>
    </div>
  );
}
