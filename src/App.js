import logo from "./logo.svg";
import "./App.css";
import photoMine from "./photoMine.jpg";
import blackNature2 from "./blackNature2.jpg";
import swanlogo from "./swanlogo.jpg";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <a href="#">
            <h2 className="font-emoji">K. Griffith</h2>
          </a>
          <ul className="nav-ul">
            <li>
              {" "}
              <a href="#">APPEARANCES</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">BOOKS</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">NEWS</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">ABUOT</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">CONTACT</a>{" "}
            </li>
          </ul>
        </div>

        <div className="img-title-Kayla">
          <img
            className="kayla-img"
            src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_298,h_329,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-11967148821.webp"
            alt="KaylaPhoto"
          />
          <div className="titleKayla">
            <h1 className="kaylaH1 font-emoji">Kayla Griffith</h1>
            <p className="kayla-p">Award Winning Author</p>
          </div>
        </div>
      </header>
      <div className="iconNetwork ">
        <div className=" sod">
          <img
            className="iconTwitter"
            src="https://tighestimepieces.com/wp-content/uploads/2016/11/Twitter-icon-circle-logo-WHITE.png"
            alt=""
          />
        </div>
        <div className=" sod">
          <img
            className="iconTwitter"
            src="https://www.clipartmax.com/png/full/62-623706_social-circle-media-facebook-network-icon-sign.png"
            alt=""
          />
        </div>
      </div>

      <section id="swan-main">
        <div className="container">
          <div className="swan">
            <div className="swan-title">
              <img className="swanlogo" src={swanlogo} alt="swanlogo" />
              <h2 className="font-emoji swan-text">
                The Swan Isle <br />
                (2023)
              </h2>
              <p className="swan-text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <h5 className="swan-text order">Order Now</h5>
              <div className="swan-btn">
                <a href="#">
                  <button className="swan-btn-push ">Amazon</button>
                </a>
                <a href="#">
                  <button className="swan-btn-push ">Google</button>
                </a>
                <a href="#">
                  <button className="swan-btn-push ">iBooks</button>
                </a>
              </div>
            </div>

            <div className="">
              <img
                className="swan-img"
                src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_481,h_679,al_c,q_85,usm_0.66_1.00_0.01/Screen%20Shot%202021-02-07%20at%209_24_47.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div id="homeSection">
        <img
          className="homeSection-img"
          src="https://images.unsplash.com/photo-1602601342371-fba6688daf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80"
          alt=""
        />
      </div>

      <section className="praise">
        <div className="container">
          <div className="praise-icon">
            <ion-icon name="bookmark-sharp" id="praise-icon"></ion-icon>
          </div>
          <h1 className="font-emoji praise-text-h1">Praise & Reviews</h1>
          <div className="praise-texts">
            <div className="praise-text">
              <q className="qu" className="qu">
                {" "}
              </q>
              <p className="praise-p">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="font-emoji  praise-q">
                ‘Swan Isle’ is Griffith's <br /> best writing yet” The <br />{" "}
                Times Book Review
              </p>
              <div className="praise-line"></div>
            </div>

            <div className="praise-text">
              <q className="qu"> </q>
              <p className="praise-p">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="font-emoji praise-q">
                ‘Swan Isle’ is Griffith's <br /> best writing yet” The <br />{" "}
                Times Book Review
              </p>
              <div className="praise-line"></div>
            </div>

            <div className="praise-text">
              <q className="qu"> </q>
              <p className="praise-p">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="font-emoji praise-q">
                ‘Swan Isle’ is Griffith's <br /> best writing yet” The <br />{" "}
                Times Book Review
              </p>
              <div className="praise-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="see">
        <div className="container">
          <div className="see-block">
            <div className="see-title">
              <h1 className="font-emoji praise-text-h1">See Upcoming Appearances</h1>
              <p>
                I'm a paragraph. Click here to add your own <br /> text and edit me.
                It's easy.
              </p>
            </div>
            <div className="see-join">
              <h4>
                January 18th 2023, The Breakfast Club, Virtual Book Reading of
                Swan Isle, 7PM - 8PM EST
              </h4>
              <a href="#">
                <button className="swan-btn-push ">Join</button>
              </a>
            </div>
            <div className="see-join">
              <h4>
                January 18th 2023, The Breakfast Club, Virtual Book Reading of
                Swan Isle, 7PM - 8PM EST
              </h4>
              <a href="#">
                <button className="swan-btn-push ">Join</button>
              </a>
            </div>
            <div className="see-join">
              <h4>
                January 18th 2023, The Breakfast Club, Virtual Book Reading of
                Swan Isle, 7PM - 8PM EST
              </h4>
              <a href="#">
                <button className="swan-btn-push ">Join</button>
              </a>
            </div>
          </div>
          <div className="about">
          <img className="about-img" src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_221,h_221,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-11967148791.webp" alt="" />
          <div className="praise-icon">
            <ion-icon name="bookmark-sharp" id="praise-icon"></ion-icon>
          </div>
            <div className="about-text">
              
              <div className=" about-cs">
                <h1 className="font-emoji about-h1">About Kayla Griffith</h1>
                <p className="about-p">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
                <a href="#">
                  <button className="swan-btn-push about-btn">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">

        <p>© 2023 by K.Griffith. Proudly created with Wix.com</p>
      </footer>
    </div>
  );
}

export default App;
