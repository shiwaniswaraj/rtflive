import Header from "../../component/Header";
import Footer from "../../component/Footer";


import chat from "../../assets/chat.png";
import shopping from "../../assets/live_shopping.png";
import audience from "../../assets/audience.png";
import bg from "../../assets/live_hosted.png";
import notebook from "../../assets/notebook.jpg";

function Home(props) {
  const gotContact = () => {
    props.history.push("/contact");
  };
  return (
    <div className="App">
      <Header withbg={true}  {...props} />
      <div className="banner">
        <div>
         {/* <h1>
            {" "}
            
            Engage your customers by bringing retail and entertainment together, in a fun and rewarding experience.

          </h1>*/}
          
        </div>
      </div>

      <div className="banner-bottom">
        <h4>
        <span>Engage your customers by bringing retail and entertainment together, in a fun and rewarding experience.</span> 

        </h4>
      </div>

      <section id="platform" className="pb0">
        <div className=" imgbox  platformcard">
          <h2>Platform</h2>
          <p>
          <b>RTF</b> Live is an easy-to-use interactive streaming platform with live hosted gamification and live shopping.
          </p>
          {/* Row */}
          <div className="row nomargin mt50">
            {/* col start */}
            <div
              className="col-lg-6 bgbox"
              style={{
                backgroundImage: "url(" + bg + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* col */}
            <div className="col-lg-6 paddingmain bgbox flex">
              <div>
                <h4 className="text-left">LIVE-Hosted Game Show</h4>
                <ul>
                  <li>
                 LIVE hosts interact with your audience using trivia, polling, voting and other interactive gamification products.
                  </li>
                 
                </ul>
              </div>
            </div>
            {/* col */}
          </div>
          {/* row */}

          {/* Row */}
          <div className="row nomargin">
            {/* col start */}
            <div
              className="col-lg-6   bgbox"
              style={{
                backgroundImage: "url(" + shopping + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* col */}

            <div className="col-lg-6  order-lg-first   paddingmain bgbox flex">
              <div>
                <h4 className="text-left">Live Shopping Technology.</h4>
                <ul>
                  <li>
                  	 The audience can place items appearing in the video stream into their cart for purchase, all while continuing to engage with the live host.
                  </li>
                   {/* <li>Create your own production team.</li> */}
                </ul>
              </div>
            </div>
            {/* col */}
          </div>
          {/* row */}



          {/* Row */}
          <div className="row nomargin  ">
            {/* col start */}
            <div
              className="col-lg-6 bgbox"
              style={{
                backgroundImage: "url(" + chat + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* col */}
            <div className="col-lg-6 paddingmain bgbox flex">
              <div>
                <h4 className="text-left">Sponsorship Messaging</h4>
                <ul>
                  <li>
                  Pre-Game and In-Game Sponsorship Revenue Opportunities.
                  </li>
                 
                </ul>
              </div>
            </div>
            {/* col */}
          </div>
          {/* row */}

          {/* Row */}
          <div className="row nomargin">
            {/* col start */}
            <div
              className="col-lg-6   bgbox"
              style={{
                backgroundImage: "url(" + audience + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* col */}

            <div className="col-lg-6  order-lg-first   paddingmain bgbox flex">
              <div>
                <h4 className="text-left">Scalability.</h4>
                <ul>
                  <li>
                  	Engage audiences via your Website, App or BOTH simultaneously.
                  </li>
                  <li>
                  Players can access the platform from all major global markets.
                  </li>
                  <li>
                  	Ability to interact with several MILLION users at the SAME TIME. 
                  </li>
                  
                   {/* <li>Create your own production team.</li> */}
                </ul>
              </div>
            </div>
            {/* col */}
          </div>
          {/* row */}

 



        </div>
      </section>

      {/* section end */}

      <div className="banner-bottom">
        <div className="container">
          <h4>
            Our integration process is seamless, we provide you with the
            API and you are up and running.
          </h4>
          <button
            onClick={gotContact}
            className="btn btn-round btn-more btn-wh"
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* banner-bottom */}
      <Footer />
    </div>
  );
}

export default Home;
