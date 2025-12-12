import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-permanent-marker",
})

type Props = {
    text?: string
    src?: string;
    videoRef: React.RefObject<HTMLVideoElement | null>;
};

const VideoHover = ({src, videoRef} : Props) => {
  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      style={{
        width: "300px",
        height: "auto",
        cursor: "pointer",
      }}
      className="overlay_tape"
    />
  );
}

const Overlay = ({text, videoRef} : Props) => {
    return <div className="overlay">
        <div className={`overlay_name ${permanentMarker.variable}`}>
          <p>{text}</p>
        </div>
        <VideoHover 
          src={"/assets/gallery/tape.webm"}
          videoRef={videoRef}
        ></VideoHover>
        </div>
}

export default Overlay
