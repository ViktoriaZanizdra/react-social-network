import React from 'react';
import Navigation from './navigation';
import Content_text from './content-text';
import Content_img from './content-img';
import s from './content.module.css';

function Content() {
  return (
    <div className={s.container}>
      <div className={s.app_content}>
        <Navigation/>
        <div className={s.content}>
          <Content_img/>
          <Content_text/>
        </div>
      </div>
    </div>
  );
}

export default Content;
