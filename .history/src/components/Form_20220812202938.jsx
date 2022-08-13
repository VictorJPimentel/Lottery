import React from "react";

function Form() {
  return (
    <>
      <div className="min-h-screen  sm:flex sm:flex-row  justify-center bg-amber-300 lg:p-50 ms:p-10  rounded-3xl shadow-xl xl:m-20 ">
        <div className="flex-col flex  self-center lg:p-10 sm:max-w-5xl xl:max-w-lg  z-10 sm:p-1">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <div className="flex items-center mb-5">
              <img src={require("./star.png")} class="filter drop-shadow-lg" />
            </div>
            <h1 className="my-3 font-semibold text-5xl">
              Everyone Can Be a Winner!
            </h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10 w-96">
          <div className="p-12 bg-primary mx-auto rounded-3xl w-100 xl:p-10 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-black">
                Start Here!{" "}
              </h3>
            </div>
            <div className="space-y-5">
              <div className="space-y-2 flex items-center border-b border-amber-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>
              <div className="space-y-2 flex items-center border-b border-amber-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="tel"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-amber-300  hover:bg-amber-400 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Submit
                </button>
              </div>
              <div className="flex items-center justify-center space-x-2 my-5 text-xs  text-gray-400  max-w-32">
                By clicking the “Submit” button, you certify that you have
                provided your legal name and your own phone number, you agree to
                the Terms and Conditions and Privacy Policy and authorize Sweeps
                Junkie and its partners to contact you by email or at the phone
                number you entered using automated technology including
                recurring auto-dialers, pre-recorded messages, and text
                messages, even if your phone is a mobile number or is currently
                listed on any state, federal, or corporate “Do Not Call” list.
                You understand that your telephone company may impose charges on
                you for these contacts, and that you can revoke this consent at
                any time. For SMS campaigns Text STOP to cancel and HELP for
                help. Message and data rates may apply. You are not required to
                give your consent as a condition of service. By clicking the
                “Submit” button and submitting this form, I affirm that I have
                read and agree to this Site’s Terms and Conditions (including
                the arbitration provision and the E-SIGN consent) and Privacy
                Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
