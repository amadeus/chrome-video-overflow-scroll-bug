import React, {useState} from 'react';
import {render} from 'react-dom';
import styles from './Styles.module.css';
import videoURL from './vid.mp4';

const Example = () => {
  const [visibility, setVisibility] = useState('visible');
  const handleClick = () => setVisibility(visibility === 'visible' ? 'hidden' : 'visible');
  return (
    <div className={styles.scroller}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button onClick={handleClick}>Toggle Video Visibility</button>
      <video src={videoURL} autoPlay loop height={100} style={{visibility}} muted />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

render(<Example />, document.getElementById('root'));
