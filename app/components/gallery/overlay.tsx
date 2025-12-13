import styles from "./gallery.module.css"

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
        width: "290px",
        height: "auto",
        cursor: "pointer",
      }}
      className={styles.overlay_tape}
    />
  );
}

const Overlay = ({text, videoRef} : Props) => {
    return <div className={styles.overlay}>
        <div className={styles.overlay_name}>
          <p>{text}</p>
        </div>
        <VideoHover 
          src={"/assets/gallery/tape.webm"}
          videoRef={videoRef}
        ></VideoHover>
        </div>
}

export default Overlay
