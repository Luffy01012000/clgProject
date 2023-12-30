"use client";
import Image from "next/image";
import Link from "next/link";
import { setMovie } from "@/redux/reducers/bookingSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaCircleChevronRight } from "react-icons/fa6";

interface MovieName {
  params: { movie: string };
}
const Movie = ({ params }: MovieName) => {
  const dispatch = useDispatch<AppDispatch>();
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      <main>
        <div className="banner h-[70vh]">
          <div className="bg-banner absolute min-h-[70vh] w-full">
            <Image
              src="/img/leo-et00351731-1675663884 (1).avif"
              fill
              quality={100}
              alt="movie-banner"
            />
            <div className="banner-overlay relative bg-opacity-80 bg-gradient-to-r from-black via-black w-[70vw] min-h-[70vh]"></div>
          </div>
          <div className="main-container  p-8 flex gap-10 w-full">
            <div className="left-container w-[200px]">
              <Image
                src="/img/leo-et00351731-1675663884.avif"
                width={200}
                height={200}
                alt="img"
                className="absolute h-[356px]"
              />
              <div className="bg-black text-white text-md relative top-[340px] text-center rounded-md w-[200px]">
                <span className="w-full">In cinemas</span>
              </div>
            </div>
            <div className="right-container left-[50%] text-white font-semibold flex flex-col justify-between h-72 ">
              <h1 className="text-2xl relative">Leo</h1>
              <div
                className="rating relative text-xl z-20 flex items-center gap-2"
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? (
                  <FaStar className="text-red-500 cursor-pointer" />
                ) : (
                  <CiStar className="text-red-500 cursor-pointer" />
                )}{" "}
                8.4/10 465.6k Votes
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="rate relative bg-[#333333] p-3 rounded-md flex items-center justify-between">
                  <div>
                    <h2>Add your rating & review</h2>
                    <h3>Your ratings matter</h3>
                  </div>
                  <button className="bg-white text-lg text-black rounded-lg py-1 px-2">Rate now</button>
              </div>
              <div className="text-black text-lg relative flex gap-2 ">
                <h3 className="bg-white rounded-sm">2D, IMAX 2D</h3>
                <h3 className="bg-white rounded-sm">
                  Tamil,Hindi,Telugu,Kannada
                </h3>
              </div>
              <div className="text-gray-500 relative">
                <ul className="flex gap-2 items-center">
                  <li>2h 44m</li>
                  <li>
                    <GoDotFill />
                  </li>
                  <li>Action,Thriller</li>
                  <li>
                    <GoDotFill />
                  </li>
                  <li>UA</li>
                  <li>
                    <GoDotFill />
                  </li>
                  <li>19 Oct,2023</li>
                </ul>
              </div>
              <div className="btns flex gap-8">
                <div className="active:scale-95 bg-purple-600 rounded-lg p-2 relative cursor-pointer z-10">
                  <Link
                    href={{
                      pathname: "/cinemas/",
                    }}
                    className=""
                  >
                    <button onClick={() => dispatch(setMovie(params.movie))}>
                      Book Tickets
                    </button>
                  </Link>
                </div>
                <div className="trailer-btn active:scale-95 relative font-semibold bg-red-500 p-2 rounded-lg text-white cursor-pointer z-20">
                  <Link href="https://youtube.com" className="">
                    <button>Trailer</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* page {params.movie} */}
      </main>
      <div className="container min-w-full p-0">
        <div className="headContainer sticky top-0 flex justify-between items-center shadow-md min-w-full pl-10 pr-10 bg-white">
          <div>
            <ul>
              <li className="capitalize font-semibold text-xl">
                {params.movie}
              </li>
              <li className="flex items-center gap-2 ">
                {toggle ? (
                  <FaStar className="text-red-500 cursor-pointer z-20" />
                ) : (
                  <CiStar className="text-red-500 cursor-pointer z-20" />
                )}
                <span className="font-semibold">8.4/10</span> 465.6k Votes
              </li>
            </ul>
          </div>
          <div className="cursor-pointer">
            <button className="bg-[#F84464] rounded-lg py-1 px-2 text-white">
              Book tickets
            </button>
          </div>
        </div>
        
        <div className="about mt-16 pl-10">
          <h1 className="text-2xl text-black font-semibold">About the movie</h1>
          <p>
            A cafe owner becomes a local hero but his actions being forth
            consequences from a dangerous world that can shake his
            <br /> carefully constructed life.
          </p>
        </div>
        <div className="castContainer  pl-10 mt-20">
          <h1 className="text-2xl text-black font-semibold">Cast</h1>
          <div className="flex items-center text-2xl gap-3 mt-5 flex-wrap break-words">
            <div className="">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/vijay.avif" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Vijay</h2>
              <p className="text-sm text-gray-400 ">as Parthiban/Leo Das</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/trisha-krishnan.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Tisha Krishnan</h2>
              <p className="text-sm text-gray-400">as Satya</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/sanjay-dutt.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Sanjay DUtt</h2>
              <p className="text-sm text-gray-400">as Antony Das</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/arjun-sarja.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Arjun Sarja</h2>
              <p className="text-sm text-gray-400">as Harold Das</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/priya-anand.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Priya Anand</h2>
              <p className="text-sm text-gray-400">as Deepa Andrews</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/gautham-menon.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Gautham Menon</h2>
              <p className="text-sm text-gray-400">as Joshy Andrews</p>
            </div>
            <div className="-top-5 relative cursor-pointer">
              <FaCircleChevronRight className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="crewContainer  pl-10 mt-20">
          <h1 className="text-2xl text-black font-semibold">Crew</h1>
          <div className="flex items-center text-2xl gap-3 mt-5">
            <div className="">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/lokesh-kanakaraj.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Lokesh Kanagaraj</h2>
              <p className="text-sm text-gray-400">Director Writer,Screenplay...</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/s-s-lalit-kumar.avif" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">S. S. Lalit Kumar</h2>
              <p className="text-sm text-gray-400">Producer</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/anirudh-ravichander.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Anirudh Ravichander</h2>
              <p className="text-sm text-gray-400">Musician Singer</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/vijay.avif" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Vijay</h2>
              <p className="text-sm text-gray-400">as Parthiban/Leo Das</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/rathna-kumar.avif" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Rathna Kumar</h2>
              <p className="text-sm text-gray-400">Dialogue Writer</p>
            </div>
            <div>
              <Avatar className="w-20 h-20">
                <AvatarImage src="/img/philomin-raj.avif" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Philomin Raj</h2>
              <p className="text-sm text-gray-400">Editor</p>
            </div>
            <div className="-top-5 relative cursor-pointer">
              <FaCircleChevronRight className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="reviewSlider pl-10 mt-8">
          <h1 className="text-xl font-semibold ">Reviews</h1>
        <div className="reviews mt-5 grid grid-cols-3 gap-3">
          <div className="mx-auto max-w-lg rounded-md bg-black p-1">
            <div className="flex flex-col rounded-md bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I&apos;ve found a template that covers all bases
                      for a bootstrapped startup. We were able to launch in
                      days, not months.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Theresa Webb
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl rounded-md bg-black p-1">
            <div className="flex flex-col rounded-md bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I&apos;ve found a movie that excite all action fan.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Theresa Webb
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl rounded-md bg-black p-1">
            <div className="flex flex-col rounded-md bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I&apos;ve found a template that covers all bases
                      for a bootstrapped startup. We were able to launch in
                      days, not months.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Theresa Webb
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="footer flex justify-between pl-10 pr-[26%] items-center mt-10 font-semibold ">
          <div>You might also like</div>
          <div className="flex items-center text-[#F84464] gap-1 cursor-pointer ">
            <Link href="/home">
            View All
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            </Link>
          </div>
        </div>
        <div className="mt-5 pl-10">
          <ul className="flex items-center gap-16 overflow-hidden">
            <Image
              className="rounded-md h-[170px]"
              src="/img/animal.jpeg"
              width={150}
              height={150}
              alt=""
              quality={100}
            ></Image>
            <Image
              className="rounded-md h-[170px]"
              src="/img/tiger3.jpeg"
              width={150}
              height={140}
              alt=""
              quality={100}
            ></Image>
            <Image
              className="rounded-md h-[170px]"
              src="/img/jawan.jpeg"
              width={150}
              height={140}
              alt=""
              quality={100}
            ></Image>
            <Image
              className="rounded-md h-[170px]"
              src="/img/12fail.jpeg"
              width={150}
              height={150}
              alt=""
              quality={100}
            ></Image>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Movie;
