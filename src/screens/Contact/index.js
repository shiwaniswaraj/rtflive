import React, { useEffect } from "react";

import Header from "../../component/Header";

import Footer from "../../component/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Contact extends React.Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /*
@validate url 
*/

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  /*
@validate url 
*/
  validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  
/*
@submit contact form  url 
*/

  submit = () => {
    const {
      fname,
      lname,
      email,
      phone,
      com_name,
      com_url,
      msg,
      error,
    } = this.state;

    var err = error;

    if (!fname || !lname || !email || !com_name || !com_url || !msg) {
      this.setState({
        error: true,
      });
      return;
    }
    if (!this.validateEmail(email)) {
      return;
    }
    if (!this.validURL(com_url)) {
      return;
    }

    this.setState({
      loading: true,
    });
    axios
      .post(
        "https://api.rewardthefan.com/sendRTFLIVEMail.json?" +
          `firstName=${fname}&lastName=${lname}&email=${email}&phone=${phone}&compName=${com_name}&compURL=${com_url}&msg=${msg}`
      )
      .then((res) => {
        console.log(res);
        if (res.data.genericResp.status == 1) {
          this.setState({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            com_name: "",
            com_url: "",
            msg: "",
            loading: false,
            error: false,
          });
          toast.success(
            `Thanks for contacting us, we'll have a representative get back to you in 24-48 hours`,
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
  };
  render() {
    const {
      fname,
      lname,
      email,
      phone,
      com_name,
      com_url,
      msg,
      loading,
      error,
    } = this.state;

    return (
      <div className="App">
        <Header {...this.props} withbg={true} />
        <div className="contactpage page">
          <div className="container containercstm">
            <h2>Contact Us</h2>
            <h4>
              Fill out the contact form and we'll have a representative get back to you right away.
            </h4>
            <div className="contact_wrap">
              <label>First Name*</label>
              <input value={fname} name="fname" onChange={this.handleChange} />
              {error && !fname && (
                <span className="red_label">First Name is Required!</span>
              )}
              <label>Last Name*</label>
              <input value={lname} name="lname" onChange={this.handleChange} />
              {error && !lname && (
                <span className="red_label">Last Name is Required!</span>
              )}
              <label>Email*</label>
              <input value={email} name="email" onChange={this.handleChange} />
              {error && !email && (
                <span className="red_label">Email is Required!</span>
              )}
              {email && !this.validateEmail(email) && (
                <span className="red_label">Invalid Email Id</span>
              )}
              <label>Phone Number*</label>
              <input
                value={phone}
                type="number"
                name="phone"
                onChange={this.handleChange}
              />
              {error && !phone && (
                <span className="red_label">Phone is Required!</span>
              )}
              <label>Company Name*</label>
              <input
                value={com_name}
                name="com_name"
                onChange={this.handleChange}
              />
              {error && !com_name && (
                <span className="red_label">Company Name is Required!</span>
              )}

              <label>Company URL*</label>
              <input
                name="com_url"
                onChange={this.handleChange}
                value={com_url}
              />
              {error && !com_url && (
                <span className="red_label">Company URL is Required!</span>
              )}
              {com_url && !this.validURL(com_url) && (
                <span className="red_label">Invalid Company URL</span>
              )}

              <label>More about your project?</label>
              <textarea
                value={msg}
                name="msg"
                onChange={this.handleChange}
                placeholder="How can we help you?"
              ></textarea>
              {error && !msg && (
                <span className="red_label">Message is Required!</span>
              )}

              <div className="text-left">
                <button onClick={this.submit} className="btn btn-round btn-red">
                  {loading && (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                  {!loading && "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
