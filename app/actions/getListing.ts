import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const listing = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListing = listing.map(listing => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }))

    return safeListing;
  } catch (err: any) {
    throw new Error(err);
  }
}
