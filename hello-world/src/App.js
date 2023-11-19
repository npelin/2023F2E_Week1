import Slider from 'react-slider';


import logo from './Logo_group.png';

import fb from './facebook fb face book.png';
import ig from './ig instagram insta photo.png';
import line from './line chat chatting message.png';
import ytu from './youtube youtuber video play.png';
import fish from './fish.png';


import './App.css';
import './Mobile.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-menu">
          <ul>
            <li><a href="#1">About Me</a></li>
            <li><a href="#2">Last Activity</a></li>
            <li><a href="#3">Policy</a></li>
            <li><a href="#4"><img src={logo} className="App-logo" alt="logo" /></a></li>
            <li><a href="#5">Donate</a></li>
            <li><a href="#6">Feedback</a></li>
            <li>
              <img src={fb} className="App-feeback" alt="FB"></img>
              <img src={ig} className="App-feeback" alt="FB"></img>
              <img src={ytu} className="App-feeback" alt="FB"></img>
              <img src={line} className="App-feeback" alt="FB"></img>
            </li>
          </ul>
        </nav>
        <nav className="Mobile-menu">
          <div className="App-logoBlock"><img src={logo} className="App-logo" alt="logo" /></div>
          <input type="checkbox" id="Mobile-menuIcon" />
          <label htmlFor="Mobile-menuIcon" className="Mobile-menuline">
            <div className="Mobile-menuIcon"></div>
          </label>

          <div className="Mobile-menu-list">
            <ul>
              <li><a href="#1">About Me</a></li>
              <li><a href="#2">Last Activity</a></li>
              <li><a href="#3">Policy</a></li>
              <li><a href="#4">Donate</a></li>
              <li><a href="#5">Feedback</a></li>
              <li>
                <img src={fb} className="App-feeback" alt="FB"></img>
                <img src={ig} className="App-feeback" alt="FB"></img>
                <img src={ytu} className="App-feeback" alt="FB"></img>
                <img src={line} className="App-feeback" alt="FB"></img>
              </li>
            </ul>
        </div>
        </nav>
      </header>
        <div className="MobileSpace"> </div>
        <div className="IndexContent">
          <div className="IndexTitle">台灣的明天，喵先鋪路 </div>
           <img src={fish} className="IndexContentFish1" alt="fish"></img>
           <img src={fish} className="IndexContentFish2" alt="fish"></img>
        </div>
        <br/> 
        <div className="Page2">
          <div className="Page2Title">
            <div className="PageTitle">
              <div className="engTitle">About Me</div>
              <div className="zhTitle">立法委員</div>
            </div>
          </div>
          <div className="Page2Line2">候選人主張</div>
          <div className="Page2Img"> </div>
          <div className="Page2Text">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</div>
        </div>
        <div className="Page3">
          <div className="PageTitle">
            <div className="engTitle">Last Activity</div>
            <div className="zhTitle">最新活動</div>
          </div>
        </div>
        <div className="Page4">
          <div className="PageTitle">
            <div className="engTitle">Policy</div>
            <div className="zhTitle">政策議題</div>
          </div>
        </div>
        <div className="Page5">
          <div className="PageTitle">
            <div className="engTitle">Donate</div>
            <div className="zhTitle">捐款方案</div>
          </div>
        </div>
        <div className="Page6">
          <div className="PageTitle">
            <div className="engTitle">Feedback</div>
            <div className="zhTitle">民眾服務信箱</div>
          </div>
          <div className="Page6Line3">您的聲音，我們的行動！</div>
          <div className="Page6Desc">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</div>
          <div className='Page6Note'>
            <div className="UserNote">
              <div className="NoteLine">
                <label>姓名</label>
                <input type="text" name="UserName" id="UserName" placeholder="請輸入"></input>
              </div>
              <div className="NoteLine">
                <label>EMAIL</label>
                <input type="text" name="UserEmail" id="UserEmail" placeholder="請輸入"></input>
              </div>
              <div className="NoteLine">
                <label>手機</label>
                <input type="text" name="UserPhone" id="UserPhone" placeholder="請輸入"></input>
              </div>
              <div className="NoteLine">
                <label>建言</label>
                <textarea name="UserRemart" id="UserRemart" placeholder="請輸入" rows="7"></textarea>
              </div>
              <div className="NoteSubmit">送出</div>
            </div>
            <img src={fish} className="Page6Fish1" alt="fish"></img>
            <img src={fish} className="Page6Fish2" alt="fish"></img>
          </div>
          <div className=""> </div>
        </div>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
    </div>
    
  );
}

export default App;
