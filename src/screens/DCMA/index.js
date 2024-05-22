import React,{useEffect} from 'react'

import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function DCMA(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  return (
    <>
      <Header withbg={true} {...props} />
      <div className="contactpage page pb0">
        <div className=" imgbox  platformcard paddrem1">
          <h2>DCMA</h2>
          <div className="container_custom container-fluid ">
            <div class="media-body media-body-2 ">
              <p align="justify">
                <strong>
                  RTF LIVE ("<strong>RTF</strong>," "<strong>us</strong>,"{" "}
                  <strong>our</strong>" or "<strong>we</strong>") has adopted
                  the following procedures to respond to alleged copyright
                  infringement in accordance with the Digital Millennium
                  Copyright Act ("<strong>DMCA</strong>"). The address of our
                  designated agent to receive notification of infringement ("
                  <strong>Designated Agent</strong>") is listed at the end of
                  this policy.{" "}
                </strong>
              </p>
              <p align="justify">
                It is our policy to (1) block access to or remove material that
                we believe in good faith to be copyrighted material that has
                been illegally copied and distributed by any of our users; and
                (2) remove and discontinue service to repeat offenders.
              </p>
              <p align="justify">
                <strong>
                  <u>A.&nbsp;How to Report Copyright Infringement</u>
                </strong>
              </p>
              <p align="justify">
                If you believe that material or content residing on or
                accessible through the Website infringes a copyright,please send
                a notice of copyright infringement containing the following
                information to the Designated Agent listed below:
              </p>
              <p align="justify">
                1.&nbsp;A physical or electronic signature of a person
                authorized to act on behalf of the owner of the copyright that
                has been allegedly infringed;
              </p>
              <p align="justify">
                2.&nbsp;Identification of works or materials being infringed;
              </p>
              <p align="justify">
                3.&nbsp;Identification of the material that is claimed to be
                infringing including information regarding the location of the
                infringing materials that the copyright owner seeks to have
                removed, with sufficient detail so that we are capable of
                finding and verifying its existence;
              </p>
              <p align="justify">
                4.&nbsp;Contact information about the copyright owner including
                address, telephone number and, if available, email address. If
                you are not the owner of the copyright that has been allegedly
                infringed, please describe your relationship to the copyright
                owner;
              </p>
              <p align="justify">
                5.&nbsp;A statement that you have a good faith belief that the
                material is not authorized by the copyright owner, its agent, or
                the law; and
              </p>
              <p align="justify">
                6.&nbsp;A statement made under penalty of perjury that the
                information provided is accurate and the notifying party is
                authorized to make the complaint on behalf of the copyright
                owner.
              </p>
              <p align="justify">
                <strong>
                  <u>B.&nbsp;Upon Notification to the Designated Agent</u>
                </strong>
              </p>
              <p align="justify">It is our policy:</p>
              <p align="justify">
                1.&nbsp;to remove or disable access to the infringing material;
              </p>
              <p align="justify">
                2.&nbsp;to notify the user that we have removed or disabled
                access to the material; and
              </p>
              <p align="justify">
                3.&nbsp;that repeat offenders will have the infringing material
                removed from the system and that we will terminate such user’s
                access to the Website.
              </p>
              <p align="justify">
                <strong>
                  <u>C.&nbsp;Counter-Notice by Content Provider</u>
                </strong>
              </p>
              <p align="justify">
                If the user believes that the material that was removed or to
                which access was disabled is either not infringing, or the user
                believes that it has the right to post and use such material
                from the copyright owner, the copyright owner’s agent, or
                pursuant to the law, the user must send a counter-notice
                containing the following information to the Designated Agent
                listed below:
              </p>
              <p align="justify">
                1.&nbsp;A physical or electronic signature of the user;
              </p>
              <p align="justify">
                2.&nbsp;Identification of the material that has been removed or
                to which access to has been disabled and the location at which
                the material appeared before it was removed or disabled;
              </p>
              <p align="justify">
                3.&nbsp;A statement that the user has a good faith belief that
                the material was removed or disabled as a result of mistake or a
                misidentification of the material; and
              </p>
              <p align="justify">
                4.&nbsp;User’s name, address, telephone number, and, if
                available, e-mail address and a statement that such person or
                entity consents to the jurisdiction of the federal court for the
                judicial district in which the user’s address is located, or if
                the user’s address is located outside the United States, for any
                judicial district in which RTF is located, and that such person
                or entity will accept service of process from the person who
                provided notification of the alleged infringement.
              </p>
              <p align="justify">&nbsp;</p>
              <p align="justify">
                If a counter-notice is received by the Designated Agent, we may
                send a copy of the counter-notice to the original complaining
                party informing that person that it may replace the removed
                material or cease disabling it in ten (10) business days. Unless
                the copyright owner files an action seeking a court order
                against the user, the removed material may be replaced or access
                to it restored in fourteen (14) business days or more after
                receipt of the counter-notice, solely at our discretion.
              </p>
              <p align="justify">
                Please contact our Designated Agent at the following address:
                RTF LIVE, Attn: DMCA Designated Agent, 159-16 Union Turnpike
                Suite 212, Fresh Meadows, NY 11366 or email:{" "}
                <u>
                  <a href="mailto:dmca@rewardthefan.com">
                    dmca@rewardthefan.com
                  </a>
                </u>
                .
              </p>
              <p align="justify">
                You hereby acknowledge that if you fail to comply with the
                requirements set forth above, your DMCA notice may not be valid.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
