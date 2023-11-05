import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-20 lg:grid-cols-2 xl:grid-cols-2">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            <p className = " Heading text-center text-4xl font-bold"><Mark>PROBLEM</Mark> <br /><br /></p>
            Natural gas, composed mostly of methane (70-90%) along with other hydrocarbons, undergoes processing to extract impurities and ensure it meets the standards for safe transportation.
            However, the occurrence of leaks during this process poses significant risks, releasing a colorless, odorless, toxic, and highly explosive gas into the atmosphere.
            The lack of timely leak detection leads to the wastage of valuable natural gas resources. 
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            <p className = " Heading text-center text-4xl font-bold"><Mark>SOLUTION</Mark> <br/><br/></p>
              To address this, our application swiftly identifies the location and severity of leaks for prompt resolution,
               leading to substantial cost savings and a more sustainable processing system. 
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            <p className = " Heading text-center text-4xl font-bold"><Mark>RESULTS</Mark> <br/><br/></p>
              Our application represents an opportunity to revolutionize the natural gas processing industry by establishing a proactive approach to leak detection.
              By enhancing operational efficiency and reducing resource wastage, our solution can minimize environmental risks, positioning it as a leading technology
              for ensuring the safety, sustainability, and profitability of natural gas processing facilities. 
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
            <p className = " Heading text-center text-4xl font-bold"><Mark>SCALABILITY</Mark> <br/><br/></p>
              Our highly scalable solution seamlessly integrates into various natural gas processing plants and facilities, 
              adapting to diverse infrastructures regardless of scale or complexity. With advanced technologies, our application 
              caters to the evolving needs of processing plants, enhancing its reach and potential for significant industry-wide 
              implementation and future expansion. 
            </p>
          </div>
        </div>

      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;