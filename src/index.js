import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { render } from "react-dom";
import styles from "./Styles.module.css";
import videoURL from "./vid.mp4";

const Example = () => {
  const [visibility, setVisibility] = useState("visible");
  const handleClick = () =>
    setVisibility(visibility === "visible" ? "hidden" : "visible");
  return (
    <>
      <div className={styles.scroller}>
        <Helmet>
          <title>Chrome Subpixel Font Rendering Bug</title>
        </Helmet>
        <p>
          This content is contained within an `overflow: auto` container with
          enough content to force a scroll. There is also a video element that
          autoplays a muted video. When that video is `visibility: visible`, all
          content within this scroll region loses subpixel-antialias. If you
          toggle the video to `visibility: hidden` then the subpixel-antialias
          returns
        </p>
        <button onClick={handleClick}>Toggle Video Visibility</button>
        <video
          src={videoURL}
          autoPlay
          loop
          height={200}
          style={{ visibility }}
          muted
        />
      </div>
      <a
        href="https://github.com/amadeus/chrome-video-overflow-scroll-bug"
        // eslint-disable-next-line
        target="_blank"
      >
        Source Code
      </a>
    </>
  );
};

render(<Example />, document.getElementById("root"));
