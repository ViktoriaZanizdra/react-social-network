import './App.css';
import Navigation from './navigation';
import Content_text from './content-text';
import Content_img from './content-img';

function Content() {
  return (
    <div className="container">
      <div className="app-content">
        <Navigation/>
        <div className="content">
          <Content_img/>
          <Content_text/>
        </div>
      </div>
    </div>
  );
}

export default Content;
