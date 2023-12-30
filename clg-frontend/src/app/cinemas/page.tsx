"use client";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useAppSelector } from "@/redux/store";
import {setCinema,setTime,setDate} from "@/redux/reducers/bookingSlice";
import {useDispatch} from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
const Cinemas = () => {
  let obj = [
    {
      TID: 1,
      TName: "pvr1",
      address: "sg highway",
      time: "4:30 pm",
      date: {
        week: "sat",
        day: 24,
        month: "nov",
      },
    },
    {
      TID: 2,
      TName: "pvr2",
      address: "narol",
      time: "4:30 pm",
      date: {
        week: "sun",
        day: 25,
        month: "nov",
      },
    },
    {
      TID: 3,
      TName: "pvr3",
      address: "address3",
      time: "4:30 pm",
      date: {
        week: "mon",
        day: 26,
        month: "nov",
      },
    },
  ];
  const [isClicked, setIsClicked] = useState(false);
  const handleLike=()=>{
    setIsClicked(!isClicked)
  }
  const movie = useAppSelector((state) => state.booking.movie);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <section className="w-full min-h-screen">
     
        <nav className="sticky top-0">
          <div className="time-date ">
            <div className="date-slider flex gap-2">
              <button className="">
                <svg
                  width="60px"
                  height="50px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#000000"
                  />
                </svg>
              </button>
              {obj.map((val: any) => (
                <>
                  <ul className="flex flex-col p-2 border-2 rounded-xl shadow-lg shadow-slate-300" >
                    <li className="week">{val.date.week}</li>
                    <li className="day">{val.date.day}</li>
                    <li className="month">{val.date.month}</li>
                  </ul>
                </>
              ))}
              <button>
                <svg
                  width="60px"
                  height="50px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <main>
          <div className="cinema-container mt-14 bg-slate-50 shadow-slate-200 shadow-xl p-2 flex text-lg lg:text-2xl">
            <div className="LR-containers flex flex-col p-2 gap-20 ">
              {obj.map((val): any => (
                <div
                  className="containers flex space-y-11 gap-14"
                  key={val.TName}
                >
                  <div className="left-container  flex items-center justify-center gap-5">
                    <div
                      className="like-icon text-purple-500 text-xl relative cursor-pointer"
                      style={{ color: "purple" }}
                      onChange={(e)=>setIsClicked(!isClicked)}
                    >
                      {/* <div className="like-icon text-purple-500 text-xl" style={{color:"purple"}} onClick={(e)=>setIsClicked(e.target =!isClicked)}> */}
                      {isClicked === false ? (
                        <CiHeart className="" />
                      ) : (
                        <FaHeart />
                      )}
                    </div>
                    <div className="address  cursor-pointer">{val.address}</div>
                    <div className="info-icon flex  cursor-pointer">
                      <CiCircleInfo />
                    </div>
                    <div>INFO</div>
                  </div>
                  <div className="right-container gap-10 flex items-center justify-center" style={{marginTop: "0px"}}>
                    {obj.map((val) => (
                      <div key={val.TID} className="container flex items-center justify-center  cursor-pointer" onClick={()=>dispatch(setCinema(val.address))}>
                        <Link href={{
                          pathname:"/booking/selectSeat",
                        }}>

                        <div className="show_time border-2 shadow-md shadow-slate-200 text-green-500 rounded-lg text-center p-2" onClick={()=>dispatch(setDate(val.date))}>
                          <p className="center" onClick={()=>dispatch(setTime(val.time))}>{val.time}</p>
                        </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
      </section>
    </>
  );
};

export default Cinemas;
