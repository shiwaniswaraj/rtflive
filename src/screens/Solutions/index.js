import React,{useEffect} from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Footer";
import bg from "../../assets/restaurants.png";
import notebook from "../../assets/travel.png";
import retail from "../../assets/retail.png";
import fashion from "../../assets/fashion.png";
import cpg from "../../assets/cpg.png";
import music from "../../assets/music.png";
import sports from "../../assets/sports.png";
import politic from "../../assets/politics.png";
import charities from "../../assets/charities.png";
import transport from "../../assets/transport.png";

export default function Solutions(props) {
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
  <h2>Solutions</h2>
  <p>
    Produce your own shows, utilize RTF Live’s turn-key production services, or a combination of both.
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
        <h4 className="text-left">Restaurants & Cloud Kitchens</h4>
          <ul>
            <li>Increase “frictionless” sales by showcasing your menu items using our LIVE shopping tool.</li>
            <li>Generate pre-game and in-game sponsorship revenue.</li>
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
        <h4 className="text-left">Travel & Hospitality</h4>
          <ul>
            <li>Members can earn and redeem points towards purchases made in real-time during the Live show.</li>
            <li>Players can use co-branded cards, providing you and your partners with additional revenue.</li>
            <li>Generate sponsorship revenue via pre-game and in-game advertising.</li>
           
            {/* <li>Create your own production team.</li> */}
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
      backgroundImage: "url(" + retail + ")",
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}>

    </div>
    {/* col */}

    <div className="col-lg-6   paddingmain bgbox flex">
    <div>
        <h4 className="text-left">Retail & E-Commerce</h4>
          <ul>
            <li>Provide consumers with discounts they can use towards purchases during (and after) the LIVE game show.</li>
            <li>Generate sponsorship revenue via pre-game and in-game advertising.</li>
            {/* <li>Create your own production team.</li> */}
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
     backgroundImage: "url(" + fashion + ")",
     backgroundSize:'cover',
     backgroundPosition:'center'
   }}>

   </div>
   {/* col */}

   <div className="col-lg-6  order-lg-first     paddingmain bgbox flex">
   <div>
       <h4 className="text-left">Fashion & Beauty</h4>
         <ul>
           <li>Members can earn and redeem points towards purchases in real-time during the LIVE show.</li>
           <li>Generate sponsorship revenue via pre-game and in-game advertising.</li>
           {/* <li>Create your own production team.</li> */}
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
     backgroundImage: "url(" + cpg + ")",
     backgroundSize:'cover',
     backgroundPosition:'center'
   }}>

   </div>
   {/* col */}

   <div className="col-lg-6    paddingmain bgbox flex">
   <div>
       <h4 className="text-left">CPG</h4>
         <ul>
           <li>Sell DIRECT-TO-CONSUMER during the LIVE game show by providing players with special discounts that expire soon after the show.</li>
           <li>Players can also purchase during the game show via a direct integration to your partner platforms.</li>
           <li>Generate sponsorship revenue via pre-game and in-game advertising.</li>
           {/* <li>Create your own production team.</li> */}
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
     backgroundImage: "url(" + music + ")",
     backgroundSize:'cover',
     backgroundPosition:'center'
   }}>

   </div>
   {/* col */}

   <div className="col-lg-6   order-lg-first   paddingmain bgbox flex">
   <div>
       <h4 className="text-left">Music</h4>
         <ul>
           <li>Pay-Per-View performances.</li>
           <li>VIP experiences.</li>
           <li>Sell Tickets or merchandise during Live shows via our Live Shopping technology.</li>
           <li>Generate sponsorship revenue via pre-game and in-game advertising.</li>
           <li>Monetize via personalized fan “shout-outs”</li>
           {/* <li>Create your own production team.</li> */}
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
     backgroundImage: "url(" + sports + ")",
     backgroundSize:'cover',
     backgroundPosition:'center'
   }}>

   </div>
   {/* col */}

   <div className="col-lg-6    paddingmain bgbox flex">
   <div>
       <h4 className="text-left">Sports</h4>
         <ul>
           <li>VIP experiences.</li>
           <li>Sell Tickets or merchandise during Live shows via our Live Shopping technology.</li>
            <li>Generate sponsorship revenue via pre-game and in-game advertising.</li>
           <li>Monetize via personalized fan “shout-outs”</li>
           {/* <li>Create your own production team.</li> */}
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
     backgroundImage: "url(" + politic + ")",
     backgroundSize:'cover',
     backgroundPosition:'center'
   }}>

   </div>
   {/* col */}

   <div className="col-lg-6   order-lg-first   paddingmain bgbox flex">
   <div>
       <h4 className="text-left">Politics</h4>
         <ul>
           <li>Engage voters directly with a platform that offers Live polling that gamifies the feedback experience.</li>
           <li>Monetize via real-time donations.</li>
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
     backgroundImage: "url(" + charities + ")",
     backgroundSize:'cover',
     backgroundPosition:'center'
   }}>

   </div>
   {/* col */}

   <div className="col-lg-6    paddingmain bgbox flex">
   <div>
       <h4 className="text-left">Charities</h4>
         <ul>
           <li>Speak directly to your audience.</li>
           <li>Engage your audience directly with a platform that offers LIVE polling that gamifies the experience.</li>
           <li>Frictionless Fundraising.</li>
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
     backgroundImage: "url(" + transport + ")",
     backgroundSize:'cover',
     backgroundPosition:'center'
   }}>

   </div>
   {/* col */}

   <div className="col-lg-6   order-lg-first  paddingmain bgbox flex">
   <div>
       <h4 className="text-left">Transportation</h4>
         <ul>
           <li>Generate sponsorship revenue via pre-game and in-game advertising.</li>
           <li>Players can also purchase items from your Sponsors during the game show via a direct integration to your partner platforms.</li>
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
