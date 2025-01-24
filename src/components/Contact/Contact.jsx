import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col ml-[90px] py-7 w-[60%] text-2xl "
    >
      <h2 className="text-3xl font-bold py-5">message</h2>
      <form action="" method="get" className="flex flex-col">
        <fieldset>
          <label htmlFor="" className="">
            Full Name
          </label>
          <input type="text" className="ml-16" />
        </fieldset>
        <fieldset>
          <label htmlFor="">contact email</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label htmlFor="">phone</label>
          <input type="text" className="ml-24" />
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
