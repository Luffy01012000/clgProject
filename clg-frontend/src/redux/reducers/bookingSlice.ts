// reducers/bookingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Seat = {
  id: string;
  row: string;
  number: number;
  price: number;
  status: Boolean;
};
type date = {
  day: number;
  week: string;
  month: string;
}
interface BookingState {
  movie: string | null;
  cinema: string | null;
  time: string | null;
  date: date | null;
  selectedSeats: Seat[];
  totalPrice: number;
}

const initialState: BookingState = {
  movie: null,
  cinema: null,
  time: null,
  date: null,
  selectedSeats: [],
  totalPrice: 0,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<string>) => {
      state.movie = action.payload;
    },
    setCinema: (state, action: PayloadAction<string>) => {
      state.cinema = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    setDate: (state, action: PayloadAction<date>) => {
      state.date = action.payload;
    },
    setSelectedSeats: (state, action: PayloadAction<Seat[]>) => {
      state.selectedSeats = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  setMovie,
  setCinema,
  setTime,
  setDate,
  setSelectedSeats,
  setTotalPrice,
} = bookingSlice.actions;

export default bookingSlice.reducer;
