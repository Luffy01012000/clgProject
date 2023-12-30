"use client"
// import React from 'react'
import SeatSelectionPage from "@/components/seatSelection";
import Map from '@/components/map';
// import SeatSelection from '@/components/seatSelection1';


const seatSelection  = () => {
  
  return (
    <>
    <section className=''>
    <SeatSelectionPage />
    {/* <SeatSelection movieId={"123"}/> */}
    <Map/>
    </section>
    </>
  )
}

export default seatSelection