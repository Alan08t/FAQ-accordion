import React, { Component } from "react";

import illustrationWomanOnlineMobile from "./assets/images/illustration-woman-online-mobile.svg";
import illustrationWomanOnlineDesktop from "./assets/images/illustration-woman-online-desktop.svg";
import bgPatternMobile from "./assets/images/bg-pattern-mobile.svg";
import bgPatternDesktop from "./assets/images/bg-pattern-desktop.svg";
import illustrationBoxDesktop from './assets/images/illustration-box-desktop.svg'

import { Accordion } from "./assets/components/Accordion";




class App extends Component {



  render() {
    return (
      <div className="bg-gradient-to-b h-screen from-soft-violet to-soft-blue flex items-center">
        <div className="relative container bg-white  w-10/12 h-4/6 rounded-3xl mt-10 overflow-visible sm:flex sm:flex-row ">
          
          <div className="container flex h-1/4 w-full sm:w-1/2 sm:h-full">
            <picture className="relative flex w-full items-center justify-center -top-24 overflow-visible sm:top-0 sm:flex">
              <img
                className="w-8/12 absolute sm:w-5/6 sm:-left-10"
                src={(window.screen.width < 680 ) ? illustrationWomanOnlineMobile : illustrationWomanOnlineDesktop}
              />
              <img
                src={(window.screen.width < 680 ) ? bgPatternMobile : bgPatternDesktop}
                className="w-8/12 absolute -bottom-14 sm:w-full sm:bottom-16 sm:-left-20"
              />

              <img src={illustrationBoxDesktop} className='w-auto hidden  sm:block absolute -left-32 top-1/5'/>
            </picture>
          </div>
          
          
          <div className="flex flex-col items-center justify-start container w-full h-3/4 mb-5 sm:max-h-96 sm:w-1/2 sm:h-full sm:mb-0 sm:justify-center self-center">
            <h1 className="flex text-5xl pb-5 font-bold h-1/6 self-start pl-7">FAQ</h1>
            <div className="w-full max-h-96 overflow-y-scroll px-5">
              <Accordion
                title={"How many team members can I invite."}
                content={"How many you want."}
                id={1}
              />
              <Accordion
                title={"What is the maximum file upload file?"}
                content={
                  "No more than 2Gb. All file in your account must fit your allotted storage space."
                }
                id={2}
              />
              <Accordion
                title={"How do I reset my password"}
                content={"You can reset your password in your profile section."}
                id={3}
              />
              <Accordion
                title={"Can I cancel my subscription?"}
                content={
                  "For sure, you can cancel your subscription when you want."
                }
                id={4}
              />
              <Accordion
                title={"Do you provide additional support?"}
                content={"We provide amazing support for our customers!."}
                id={5}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
