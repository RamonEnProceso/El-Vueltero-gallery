import Gallery from "./components/gallery/gallery";
import JudithCanvas from "./components/models/judith";

export default function Home() {
  return (
    <div >
      <main >
        <h1>El vueltero Galería</h1>
        <JudithCanvas></JudithCanvas>
        <Gallery></Gallery>
      </main>
    </div>
  );
}
