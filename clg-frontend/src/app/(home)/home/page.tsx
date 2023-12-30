"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import styles from "./styles.module.css";

import Link from "next/link";
import { useEffect } from "react";

const Home = () => {
  
  useEffect(() => {
    // <script async type="text/javascript" src="https://collectcdn.com/embed.js"></script>
   
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
    // const script = document.createElement("script");
    // script.src =
    //   "https://collectcdn.com/embed.js";
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);
  return (
    <>
      <main>
        <div className="img_video-contaienr h-[500px]">
          <div
            className={styles.videoContainer}
            style={{ position: "absolute", width: "100%", height: "500px" }}
          >
            <Image
              className="lg:hidden"
              fill
              style={{ objectFit: "fill" }}
              sizes="500px"
              quality={100}
              src="/img/lio_movie1.jpg"
              alt="movie img"
            />
            <div className="overlay hidden lg:block z-10 absolute bg-black bg-opacity-40 w-full h-[500px]"></div>
            <video
              className="hidden lg:inline-flex"
              src="/video/video.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <div className="movie_slider bg-[rgba(0,0,0,0.89)] m-0 p-0  text-white w-full min-h-screen flex flex-col items-center justify-center">
          <h1 className=" bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text text-2xl lg:mt-8 lg:mb-5 text-gray-700 font-black   lg:text-4xl">
            Upcoming Movie
          </h1>
          {/* <Swiper
            slidesPerView={4}
            // spaceBetween={10}
            // centeredSlides={true}
            rewind={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                fill
                className="lg:max-h-[500px] lg:object-fill rounded-lg"
                src="/img/lio_movie1.jpg"
                quality={100}
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="h-[150px] w-[400px] object-fit lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
          </Swiper> */}
          <Swiper
            slidesPerView={3}
            // spaceBetween={10}
            // centeredSlides={true}
            rewind={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit  rounded-lg"
                src="/img/animal.jpeg"
                alt="movie"
              />
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/12fail.jpeg"
                alt="movie"
              />
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/tiger3.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/animal1.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/jawan.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Link
                href={{
                  pathname: "/leo",
                }}
              >
                <img
                  className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                  src="/img/lio_movie1.jpg"
                  alt="movie"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
          <h1 className="mt-9 bg-gradient-to-l from-red-500 to-purple-500 text-transparent bg-clip-text text-2xl lg:mt-8 lg:mb-5  lg:text-4xl text-gray-700 font-black">
            Ongoing Shows
          </h1>
          {/* <Swiper
            slidesPerView={4}
            // spaceBetween={10}
            // centeredSlides={true}
            rewind={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                fill
                className="lg:max-h-[500px] lg:object-fill rounded-lg"
                src="/img/lio_movie1.jpg"
                quality={100}
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:max-h-[500px] lg:object-fill rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:max-h-[500px] lg:object-fill rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:max-h-[500px] lg:object-fill rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:max-h-[500px] lg:object-fill rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:max-h-[500px] lg:object-fill rounded-lg"
                src="/img/lio_movie1.jpg"
                alt="movie"
              />
            </SwiperSlide>
          </Swiper> */}
          <Swiper
            slidesPerView={3}
            // spaceBetween={10}
            // centeredSlides={true}
            rewind={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <Link
                href={{
                  pathname: "/leo",
                }}
              >
                <img
                  className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                  src="/img/lio_movie1.jpg"
                  alt="movie"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/jawan.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/animal1.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/tiger3.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/12fail.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit  rounded-lg"
                src="/img/animal.jpeg"
                alt="movie"
              />
            </SwiperSlide>
          </Swiper>
          <h1 className="mt-16 bg-gradient-to-tr from-red-500 to-purple-500 text-transparent bg-clip-text text-2xl lg:mt-8 lg:mb-5 lg:text-4xl text-gray-700 font-black">
            Trending
          </h1>

          <Swiper
            slidesPerView={3}
            // spaceBetween={10}
            // centeredSlides={true}
            rewind={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/animal1.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Link
                href={{
                  pathname: "/leo",
                }}
              >
                <img
                  className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                  src="/img/lio_movie1.jpg"
                  alt="movie"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/12fail.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit  rounded-lg"
                src="/img/animal.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/tiger3.jpeg"
                alt="movie"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img
                className="lg:h-[350px] lg:w-[400px] lg:object-fit rounded-lg"
                src="/img/jawan.jpeg"
                alt="movie"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
      <footer>
        <div className="bg-black p-4 items-center min-h-screen">
          <div className="flex justify-center pt-10 pb-14 md:pb-9">
            <img
              className="w-2/5 md:w-[25%] lg:w-[18%] xl:w-[15%]"
              src="images/cucet-footer-logo.png"
              alt=""
            />
          </div>
          <div className="space-y-9 grid grid-cols-1 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
            <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
              <div className="flex justify-start md:mt-10">
                <h1 className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  Inform
                  </h1>
                <span className="text-white font-sans uppercase font-normal tracking-wider">
                  ation
                </span>
              </div>
              <p>Registration Start Date</p>
              <p>Registration End Date</p>
              <p>Exam Last Date </p>
            </div>
            <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
              <div>
                <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">

                  dates &nbsp;
                </pre>
              </div>
              <p>23 Dec 2021</p>
              <p>30 May 2022</p>
              <p>23 Dec 2021 to 31 May 2022</p>
            </div>
            <div className="md:flex flex-col justify-between">
              <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
                <div className="flex justify-start">
                  <h1 className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                    About
                  </h1>
                  <span className="text-white font-sans uppercase font-normal tracking-wider">
                    exam
                  </span>
                </div>
                <p className="">
                  
                  <a className="hover:text-[#cacaca]" href="#">
                    Apply
                  </a>
                </p>
                <p className="">
                  <a className="hover:text-[#cacaca]" href="#">
                    Eligibility
                  </a>
                </p>
                <p className="">
                  <a className="hover:text-[#cacaca]" href="#">
                    Application Process
                  </a>
                </p>
                <p className="">
                  <a className="hover:text-[#cacaca]" href="#">
                    Syllabus
                  </a>
                </p>
              </div>
              <div className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
                <div className="flex justify-start md:-mt-32">
                  <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                    suppor
                  </h1>
                  <span className="text-white font-sans uppercase font-normal tracking-wider">
                    t
                  </span>
                </div>
                <p className="">
                  <a href="#" className="hover:text-[#cacaca]">
                    {`FAQ's`}
                  </a>
                </p>
              </div>
            </div>
            <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
              <div className="flex justify-start">
                <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  get in t
                </h1>
                <span className="text-white font-sans uppercase font-normal tracking-wider">
                  ouch
                </span>
              </div>
              <p className="space-x-3">
                <i className="fa fa-home text-[17px]"></i>
                <strong className="text-[#8b8b8b] text-[15px] tracking-wide">
                  Our Company
                </strong>
              </p>
              <div className="leading-7">
                <p className="">
                  NH-70 Chandigarh-Ludhiana Highway, <br /> Mohali, Punjab
                 (INDIA) <br /> General Helpline No:+91 987-6543-210
                </p>
              </div>
              <div className="leading-7 mt-4 text-[15px] font-[500]">
                <p className="space-x-3 hover:text-[#cacaca]">
                  <i className="fa fa-phone text-[17px]"></i>
                  <a href="#"> 1800 1800 88800</a>
                </p>
                <p className="space-x-3 hover:text-[#cacaca]">
                  <i className="fa fa-phone text-[17px]"></i>
                  <a href="#">
                    9946948000S (
                    <span className="text-[13px] font-[500]">
                      General Enquiry
                    </span>
                    )
                  </a>
                </p>
                <p className="space-x-3 hover:text-[#cacaca]">
                  
                  <i className="fa fa-phone text-[17px]"></i>
                  <a href="#">
                    994694700&nbsp;(
                    <span className="text-[13px] font-[500]">
                      Technical Support: CUCET
                    </span>
                    )
                  </a>
                </p>
                <p className="space-x-3 hover:text-[#cacaca]">
                  
                  <i className="fa fa-envelope text-[16px]"></i>
                  <a href="#">admin@Company.in</a>
                </p>
              </div>
            </div>
          </div>
          <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </p>
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </p>
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </p>
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </p>
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </p>
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </p>
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <i className="fa fa-telegram"></i>
              </a>
            </p>
          </div>
        </div>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js" async></script>
      </footer>
      {/* <script
        src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
        async
      ></script> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <df-messenger
          intent="WELCOME"
          chat-title="chatbot"
          agent-id=${process.env.AGENT_ID}
          language-code="en"
        ></df-messenger>
`
        }}
      />
     {/* <iframe src="https://links.collect.chat/65734ed220465d1aa0f1ceed"  width="100%" height="600" frameBorder="0"></iframe> */}
    </>
  );
};

export default Home;
