## Airbnb Clone

![airbnb-image](https://github.com/MizanurRahmann/Airbnb-Clone/assets/37991614/589545d5-c2d5-471e-8904-62c18b6f79a2)

Airbnb clone which allows you to upload your property, reserve for a trip and view your trips with proper cost. Also an owner can view and delete customer reservations whenever he/she want. This authentication part made with next-auth that allows user to authente using email & password or using google and github account.

### Featurus
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Favorites system
- Advanced search system by category, date range, map location, number of guests, rooms and bathrooms

### Tools
<p>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="next" height="40"/> &nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" height="40"/> &nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" height="40"/> &nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongoDB" height="40"/> &nbsp;&nbsp;
    <img src="https://cdn.worldvectorlogo.com/logos/prisma-4.svg" alt="prisma" height="40"/>
</p>

### Run the project

**Clone the project**
```shell
git clone https://github.com/MizanurRahmann/Airbnb-Clone.git
```

**Install packages**
```shell
npm i
```

**Setup .env file**
```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

**Setup Prisma**
```shell
npx prisma db push

```

**Start the app**
```shell
npm run dev
```