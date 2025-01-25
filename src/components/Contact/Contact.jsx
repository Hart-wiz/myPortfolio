import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col ml-[90px] max-md:ml-[0] py-7 w-[60%] max-md:w-full text-2xl max-md:text-sm items-center bg-slate-400 "
    >
      <h2 className="text-3xl font-extrabold py-5 pt-10 max-md:text-sm">
        Send Me A Message
      </h2>
      <form
        action=""
        method="get"
        className="flex flex-col w-[70%] max-md:w-full max-md:gap-0"
      >
        <fieldset>
          <label htmlFor="" className="">
            Full Name
          </label>
          <input type="text" className="" />
        </fieldset>
        <fieldset>
          <label htmlFor="">contact email</label>
          <input type="text" className=" w-full" />
        </fieldset>
        <fieldset>
          <label htmlFor="">phone</label>
          <input type="text" className=" w-full" />
        </fieldset>
        <fieldset className="flex flex-col h-9 mt-11">
          <label htmlFor="" className="font-bold mb-7 ">
            message
          </label>
          <textarea name="" id="" className=" p-6"></textarea>
        </fieldset>
        <fieldset className="mt-28 ">
          <button className="w-[150px] py-4 bg-blue-800 text-yellow-200 mt-7 self-center outline-none mr-9">
            send
          </button>
          <button type="reset" className="p-4 rounded-xl">
            reset
          </button>
        </fieldset>
      </form>
    </div>
  );
}
