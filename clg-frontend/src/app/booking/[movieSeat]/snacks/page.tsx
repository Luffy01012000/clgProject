"use client";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import { IoTrashBin } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import Link from "next/link";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setTotalPrice } from "@/redux/reducers/bookingSlice";

const Snacks: React.FC = ({ params }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const movie = useAppSelector((state) => state.booking.movie);
  const cinema = useAppSelector((state) => state.booking.cinema);
  // const date = useAppSelector((state) => state.booking.date);
  // const time = useAppSelector((state) => state.booking.time);
  const selectedSeats = useAppSelector((state) => state.booking.selectedSeats);
  const totalPrice = useAppSelector((state) => state.booking.totalPrice);

  // const searchParams = useSearchParams()
  // const seats = searchParams.get('seats')
  // const price:any = searchParams.get('price')
  console.log("seats:", selectedSeats);
  // JSON.parse(seats).map((val):any=>console.log(val))
  console.log("price:", totalPrice);
  const ticketTotal = totalPrice | 0;
  let total: number;
  const obj = [
    {
      path: "/img/Nachos.avif",
      title: "Nachos With Cheese & Salsa 90g",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/burger.avif",
      title: "Veggie Mint Chutney Burger 170g",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/combo-pop-2pep.avif",
      title: "Combo 2 (Cheese)",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/combo-pop-pep.avif",
      title: "Combo 1 (Salted)",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/combo-Sand-Pop-Pepsi.avif",
      title: "Combo 3 (Salted)",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/sandwich.avif",
      title: "Paneer Tikka Sandwich 190g",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/pepsi.avif",
      title: "Regular Pepsi 540ml",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/pepsi.avif",
      title: "Large Pepsi 810ml",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/megaPopCorn.avif",
      title: "Mega Salted Popcorn 240g",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
    {
      path: "/img/popCorn.avif",
      title: "Regular Salted Popcorn 90g",
      subTitle:
        "Paneer Tikka Sandwich 190g (529 Kcal | Allergens: Milk, Wheat, Soybean, Gluten)",
      price: 259.35,
    },
  ];
  return (
    <>
      <section>
        <nav className="p-3 bg-[#000000ce] text-white text-xl flex items-center w-full">
          <div className="left-nav_side flex items-center justify-start gap-10 h-fit">
            <button className="text-4xl font-semibold">
              <BiLeftArrowAlt />
            </button>
            <div className="info text-start tracking-wider">
              {/* <h1 className="text-xl">{params.movieSeat}</h1> */}
              <h1 className="text-xl uppercase">{movie}</h1>
              <p className="text-sm">{cinema}</p>
            </div>
          </div>
          <div className="right-nav_side flex content-end items-center w-full">
            <button className="text-purple-400 text-2xl font-semibold flex justify-end w-full items-center">
              <MdCancel />
            </button>
          </div>
        </nav>
        <main className="flex flex-col h-fit lg:flex-row bg-[#F2F2F2] gap-2">
          <div className="left lg:w-[70vw] p-2 shadow shadow-slate-200">
            <div className="headings lg:sticky lg:top-0">
              <h1 className="text-4xl text-center" id="grab-a-bite">
                Grab a <span className="text-red-500 font-semibold">bite!</span>
                <br />
              </h1>
              <h2
                className="sub-head text-center mt-5 text-xl font-semibold text-gray-500"
                id="text-"
              >
                Prebook Your Meal and
                <span className="text-center"> Save More!</span>
              </h2>
            </div>
            <ScrollArea className="rounded-md h-96">
              <div className="food-items grid grid-col-1 sm:grid-cols-2 overflow-y-scroll gap-1">
                {obj &&
                  Array.isArray(obj) &&
                  obj.map((data) => (
                    <div
                      className="food-data border-2 border-[#fff] rounded-md mt-3 shadow-lg shadow-white p-2 "
                      key={data.title}
                    >
                      <div className="food-card">
                        <div className="img">
                          <Image
                            src="/img/veg-icon.svg"
                            width={10}
                            height={10}
                            alt="img"
                          />
                          <Image
                            src={data.path}
                            width={100}
                            height={100}
                            alt="img"
                          />
                        </div>
                        <div className="info">
                          <div className="top-container">
                            <div className="title">{data.title}</div>
                            <div className="sub-title">{data.subTitle}</div>
                          </div>
                          <div className="bottom-container flex justify-between">
                            <div className="price flex items-center text-center gap-3 font-semibold">
                              <span className="">
                                <FaRupeeSign />
                              </span>
                              {data.price}
                            </div>
                            <button className="add-btn rounded-lg border-2 border-purple-400 text-purple-400 text-center  p-1 px-2 active:scale-95">
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
          </div>
          <div className="right lg:w-[30vw] p-4 mt-10 lg:mt-0">
            <div className="Booking-Summary border-white shadow-md shadow-white">
              <div className="headin uppercase">
                <h1 className="text-red-500">BOOKING SUMMARY</h1>
                <ul className="font-semibold">
                  <li className="flex justify-between py-5">
                    <div className="seats-detail flex-wrap">
                      {selectedSeats &&
                        selectedSeats.map((seat) =>( <span className="p-2" key={seat.id}>{seat.id}</span>))
                      }
                      <div>{(selectedSeats.length)} tickets</div>
                    </div>
                    <div className="ticket-price-total flex  text-center items-center">
                      <span>
                        <FaRupeeSign />
                      </span>
                      {ticketTotal}
                    </div>
                  </li>
                  <li className="flex justify-between py-2">
                    <div className="Tax-detail">GST 18%</div>
                    <div className="Tax-price-total flex  text-center items-center">
                      <span>
                        <FaRupeeSign />
                      </span>
                      {(total = ticketTotal * (18 / 100)).toFixed(2)}
                    </div>
                  </li>
                  <li className="border-t-2 border-slate-300 pt-2"></li>
                  <li className="flex justify-between py-3">
                    <div className="sub-total">Sub Total</div>
                    <div className="sub-total flex  text-center items-center ">
                      <span>
                        <FaRupeeSign />
                      </span>
                      {(ticketTotal + total).toFixed(2)}
                    </div>
                  </li>
                  <li className="food-drinks">
                    <Collapsible className="flex flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <div className="left-container flex items-center justify-center gap-2">
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-9 p-0"
                            >
                              <ChevronsUpDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                          <h1>Food & Beverage</h1>
                          <button>
                            <IoTrashBin />
                          </button>
                        </div>
                        <div className="right-container flex">
                          <div className="snack-sub-total flex  text-center items-center ">
                            <span>
                              <FaRupeeSign />
                            </span>
                            {(ticketTotal + total).toFixed(2)}
                          </div>
                        </div>
                      </div>
                      <div className="content mt-3">
                        <CollapsibleContent className="flex justify-between">
                          <div className="left-container flex gap-2">
                            <button className="delte-btn">
                              <MdCancel />
                            </button>
                            <div className="content">
                              combo 2 selected qty. 1
                            </div>
                          </div>
                          <div className="right-container flex">
                            <div className="snack-sub-total flex  text-center items-center ">
                              <span>
                                <FaRupeeSign />
                              </span>
                              {(ticketTotal + total).toFixed(2)}
                            </div>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </li>
                </ul>
              </div>
              <div className="Proceed">
                <ul>
                  <li className="flex gap-2 text-sm font-semibold text-slate-400">
                    <CiCircleInfo />
                    <h1>
                      By proceeding, I express my consent to complete this
                      transaction.
                    </h1>
                  </li>
                  <li className="bg-red-600 active:scale-95 rounded-lg text-white text-center text-2xl mt-5 shadow-md shadow-red-500 hover:bg-red-500 flex">
                    <Link
                      href={{
                        pathname: "/booking/payment",
                        // query:{
                        //   amount:ticketTotal+total,
                        //   movie:params.movieSeat,

                        // }
                      }}
                      onClick={() =>
                        dispatch(setTotalPrice(ticketTotal + total))
                      }
                    >
                      <button className="flex justify-between p-2 gap-5 w-1/2">
                        <span>
                          <FaRupeeSign />
                        </span>
                        {(ticketTotal + total).toFixed(2)}{" "}
                        <span>proceed...</span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Snacks;
