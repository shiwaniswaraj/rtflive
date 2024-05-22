import React,{useEffect} from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Footer";
import bg from "../../assets/bg.png";
import notebook from "../../assets/notebook.png";

export default function ProductionService(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  const gotContact = () => {
    props.history.push("/contact");
  };
  return(
    <>
<Header withbg={true}  {...props} />
<div className="contactpage page pb0">
  
<div className=" imgbox  platformcard">
  <h2>Production Services</h2>
  <p>
    Produce your own shows, utilize RTF’s turn-key production services, or a combination of both.
    </p>
  {/* Row */}
    <div className="row nomargin mt50">
  {/* col start */}
    <div className="col-lg-6 bgbox" style={{
      backgroundImage: "url(" + bg + ")",
      backgroundSize:'cover',
      backgroundPosition:'center'

    }}>

    </div>
    {/* col */}
    <div className="col-lg-6 paddingmain bgbox flex">
      <div>
        <h4 className="text-left">Self Produced</h4>
          <ul>
            <li>Launch your show from a camera attached to a desktop or laptop.</li>
            <li>Use your own talent, brand ambassadors or influencers.</li>
            <li>Create your own production team.</li>
          </ul>
          </div>
    </div>
    {/* col */}
    </div> 
    {/* row */}

  {/* Row */}
  <div className="row nomargin">
 
  {/* col start */}
  <div className="col-lg-6   bgbox" style={{
      backgroundImage: "url(" + notebook + ")",
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}>

    </div>
    {/* col */}

    <div className="col-lg-6  order-lg-first   paddingmain bgbox flex">
    <div>
        <h4 className="text-left">RTF LIVE Turn-Key Production</h4>
          <ul>
            <li>Live Streaming Studio with state-of-the-art live streaming equipment.</li>
            <li>In-House Host, Producer, Director, Technical Director, Production Associate for Shoppable Video & Sponsorship Advertisement Management.</li>
            {/* <li>Create your own production team.</li> */}
          </ul>
          </div>
    </div>
    {/* col */}

    

    </div> 
    {/* row */}


</div>

</div>

      {/* section end */}

      <div className="banner-bottom">
        <div className="container">
          <h4>
          Let's work together to create a fun and engaging production.
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
      
      <Footer/>
</>
)
}
