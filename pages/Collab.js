import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import Cumilla from "../public/Cumilla.png";

export default function Collab() {
  const Upzilla = <CountUp end={16} duration={10} />;
  const School = <CountUp end={86} duration={20} />;
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold text-blue-600 p-2 place-items-center">
        our Partners
      </h1>
      {/* partener section..................................................................................*/}
      <div className="collab grid place-items-center grid-cols-2 max-sm:grid-cols-1 m-3 ">
        <div className="flex max-sm:grid max-sm:place-items-center shadow-xl  shadow-indigo-500/50   max-sm:shadow-md">
          <Image alt="Cumilla" src={Cumilla} width={200} height={200} />
          <h1 className="font-bold text-3xl m-3  max-sm:text-2xl">
            {" "}
            {Upzilla}+ UPZILLA
            <p className="text-sm font-semibold">
              We work with {Upzilla}+ Upzilla in the Comilla region . We was
              teach robotics more than 1000k+ student they also we supply
              robotics kit in {Upzilla}+ upzilla we make robot car line
              followind car and etc for teach students . students ar learn with
              us happily we was send some of student BDRO and they are ranking
              good there
            </p>
          </h1>
        </div>
        <div
          className="flex max-sm:grid max-sm:place-items-center shadow-xl  shadow-indigo-500/50 max-sm:mt-20 
        max-sm:shadow-md "
        >
          <Image alt="Cumilla" src={Cumilla} width={200} height={200} />
          <h1 className="font-bold text-3xl m-3  max-sm:text-2xl ">
            {" "}
            {School}+ SCHOOL
            <p className="text-sm font-semibold">
              We work with {School}+ Upzilla in the Comilla region . We was
              teach robotics more than 1000k+ student they also we supply
              robotics kit in {School}+ upzilla we make robot car line followind
              car and etc for teach students . students ar learn with us happily
              we was send some of student BDRO and they are ranking good there
            </p>
          </h1>
        </div>
      </div>

      <div className="collab grid place-items-center grid-cols-2 max-sm:grid-cols-1 m-3 ">
        <div className="flex max-sm:grid max-sm:place-items-center shadow-xl  shadow-indigo-500/50   max-sm:shadow-md">
          <Image alt="Cumilla" src={Cumilla} width={200} height={200} />
          <h1 className="font-bold text-3xl m-3 max-sm:text-2xl ">
            {" "}
            DISTRICT ADMINISTRATION CUMILLA
            <p className="text-sm font-semibold">
              We work with Upzilla in the Comilla region . We was teach robotics
              more than 1000k+ student they also we supply robotics kit in
              upzilla we make robot car line followind car and etc for teach
              students . students ar learn with us happily we was send some of
              student BDRO and they are ranking good there
            </p>
          </h1>
        </div>
        <div
          className="flex max-sm:grid max-sm:place-items-center shadow-xl  shadow-indigo-500/50 max-sm:mt-20 
        max-sm:shadow-md "
        >
          <Image alt="Cumilla" src={Cumilla} width={200} height={200} />
          <h1 className="font-bold text-3xl m-3  max-sm:text-2xl ">
            {" "}
            DEPUTY COMMISIONER CUMILLA
            <p className="text-sm font-semibold">
              We work with {School}+ Upzilla in the Comilla region . We was
              teach robotics more than 1000k+ student they also we supply
              robotics kit in {School}+ upzilla we make robot car line followind
              car and etc for teach students . students ar learn with us happily
              we was send some of student BDRO and they are ranking good there
            </p>
          </h1>
        </div>
      </div>
      {/* news paper section..................................................................................*/}
      <h1 className="text-blue-600 uppercase font-bold text-center text-3xl mt-20">
        Quanta robotics in News channel and papers{" "}
      </h1>
      <div className="grid grid-cols-4 place-items-center max-sm:grid-cols-1 m-10 gap-16">
        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">jamuna tv</h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/Ku7SMQkh_QA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">Daily BD</h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/UUUZdQ7c5V0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">.</h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/j8I7kL0MQks"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">Shomoy tv</h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/LbGMwUdYakI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">Channel 24</h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/4t1SEEWCbpE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">On campus</h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/qdOhsTRXGP0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">Prothom alo</h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.prothomalo.com/bangladesh/district/q5y7f9y9p4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
           
          ></iframe>
        </div>
        <div className=" shadow-2xl rounded-md  ">
          <h1 className="text-xl uppercase font-bold">News bangla </h1>
          <iframe
            className="rounded"
            width="300"
            height="200"
            src="https://www.newsbangla24.com/science/215238/Niko-from-Comilla-can-tell-the-biodata-by-looking-at-the-appearance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
           
          ></iframe>
        </div>
      </div>
    </div>
  );
}
