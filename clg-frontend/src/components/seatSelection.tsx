"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setSelectedSeats, setTotalPrice } from "@/redux/reducers/bookingSlice";

// import Styles from "@/components/css/seatSelection.module.css";
// import { FaIndianRupeeSign } from "react-icons/fa6";
interface Seat {
  id: string;
  row: string;
  number: number;
  price: number;
  status: Boolean;
}

const SeatSelectionPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movie = useAppSelector((state) => state.booking.movie);
  // const cinema = useAppSelector((state) => state.booking.cinema);
  // const date = useAppSelector((state) => state.booking.date);
  // const time = useAppSelector((state) => state.booking.time);
  const selectedSeats = useAppSelector((state) => state.booking.selectedSeats);
  const totalPrice = useAppSelector((state) => state.booking.totalPrice);
  // console.log("date:", date);

  const router = useRouter();
  const rows = ["A", "B", "C", "D", "E"];
  const seatsPerRow = 15;
  const basePrice = 100; // Set your base price

  // const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  // const [totalPrice, setTotalPrice] = useState<number>(0);
  // const [seatStatus, setSeatStatus] = useState(false);
  const [seats, setSeats] = useState<Seat[]>([]);

  // useEffect(() => {
  //   // Fetch seat data from the database or API
  //   // For simplicity, using the sample seatData
  //   setSeats(seatData);
  // }, []);
  useEffect(() => {
    const tmpseats: Seat[] = [];
    rows.forEach((row) => {
      for (let i = 1; i <= seatsPerRow; i++) {
        const seat: Seat = {
          id: `${row}${i}`,
          row,
          number: i,
          price: basePrice,
          status: true,
        };
        // setSeats([seat]);
        tmpseats.push(seat);
        // seats.push(seat); //takes too long to render on site
      }
    });
    setSeats(tmpseats);
  }, []);

  // const seatData = [
  //   { id: 'A1', row: 'A', number: 1, price: 100, status: true },
  //   { id: 'A2', row: 'A', number: 2, price: 100, status: true },
  //   // Add more seat data...
  // ];
  // setSeats(seatData);
  const handleSeatClick = (selectedSeat: Seat) => {
    // console.log(seat);
    console.log(selectedSeat);
    let updatedSeats = [...selectedSeats];
    // Check seat availability
    // if (selectedSeat.status === true) {
      const index = updatedSeats.findIndex(
        (seat) => seat.id === selectedSeat.id
      );
      try {
        if (index === -1) {
          selectedSeat.status = false;
          updatedSeats.push(selectedSeat);
          dispatch(setTotalPrice(totalPrice + selectedSeat.price));
        } else {
          // let obj={...selectedSeat,status:true};
          // console.log(obj);
          // seats.findIndex((val)=>val.id===selectedSeat.id)
          // seats.splice(index, 1);
          // seats.push(obj)
          updatedSeats.splice(index, 1);
          console.log(selectedSeat.status);
          dispatch(setTotalPrice(totalPrice - selectedSeat.price));
          dispatch(setSelectedSeats([selectedSeat]));
        }
      } catch (err) {
        console.log(err);
      }
      // if (seat.status === true) {
      //   seat.status = false;
      //   // if(updatedSeats.find())
      //   updatedSeats.push(seat);
      //   console.log("status true:", updatedSeats);
      //   dispatch(setTotalPrice(totalPrice + seat.price));
      // } else {
      //   const index = updatedSeats.findIndex(
      //     (selectedSeat) => selectedSeat.id === seat.id
      //     );
      //     if (index !== -1) {
      //       updatedSeats.splice(index, 1);
      //       dispatch(setTotalPrice(totalPrice - seat.price));
      //   }
      //   console.log("else", updatedSeats);

      // console.log("ifelse:",updatedSeats)
    // }
    // console.log("selectedSeats:",selectedSeats)

    // setSelectedSeats(updatedSeats);
    dispatch(setSelectedSeats(updatedSeats));
  };
  console.log("selectedSeats:", selectedSeats);

  const handleBooking = () => {
    // Assuming you have an API endpoint to send data to your Node.js backend
    // fetch("/api/book-seats", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     selectedSeats,
    //     totalPrice,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response from the backend
    //     console.log("Booking response:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error booking seats:", error);
    //   });

    router.push(
      `/booking/${movie}/snacks`
      // `/booking/${movie}/snacks?seats=${selectedSeats}&price=${totalPrice}`
    );
  };
  // dispatch(setSelectedSeats(selectedSeats));

  return (
    <>
      <section className="w-full min-h-screen bg-[#000000cc] text-white">
        <div className=" flex flex-col min-h-screen items-center justify-center">
          <h1 className="text-3xl">Seat Selection</h1>
          <div className="bg-white rounded-md ">
            {rows.map((row) => (
              <div key={row}>
                {seats
                  .filter((seat) => seat.row === row)
                  .map((seat) => (
                    <button
                      key={seat.id}
                      onClick={
                        () => handleSeatClick(seat)
                        // const index = selectedSeats.findIndex((selectedSeat) => selectedSeat.id === seat.id);
                      }
                      // onChange={(e)=>setSeatStatus())}
                      className={
                        seat.status === false
                          ? "m-2 rounded-md bg-red-500 p-1"
                          : "m-2 rounded-md bg-green-500 p-1"
                      }
                    >
                      {seat.row}-{seat.number}
                    </button>
                  ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col w-2/3 items-center">
            <h1 className="border-b-4 border-slate-300 w-full rounded-xl  mt-10 font-bold text-center">
              Screen Here
            </h1>
            {/* 
            <ul>
              {selectedSeats.map((seat) => (
                <li key={seat.id}>
                  {seat.row}-{seat.number} (${seat.price})
                </li>
              ))}
            </ul> */}
            <div className="seat-example mt-10 flex flex-col ">
              <div className="flex gap-5 justify-center">
                <div className="bg-green-500 p-2 rounded-lg">C-6</div>
                <div className="bg-red-500 p-2 rounded-lg">C-7</div>
              </div>
              <div className="flex gap-2">
                <span>Available</span>
                <span>Selected</span>
              </div>
            </div>
            <div className="flex space-x-0 mt-10 bg-[#D0A2F7] mb-10 rounded-xl sm:rounded-full items-center justify-center text-black p-1 sm:p-2 text-xl font-bold ">
              Total Price:{" "}
              <span className="flex mx-5 space-x-5 gap-5 ">
                <Image
                  style={{ color: "white" }}
                  src="/svg/indian-rupee-sign-solid.svg"
                  width={10}
                  height={10}
                  alt="rupee"
                />

                {totalPrice}
              </span>
            </div>
            <div className="btn w-full flex justify-center ">
              <button
                onClick={handleBooking}
                className="bg-purple-500 p-4 font-bold rounded-xl active:transition-all duration-150 ease-in-out active:scale-95 hover:shadow-purple-600"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SeatSelectionPage;
