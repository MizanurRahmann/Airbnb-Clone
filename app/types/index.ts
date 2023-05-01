import { Listing, Reservation, User } from "@prisma/client";

// Listing
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

//   Reservation
export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

// User
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
