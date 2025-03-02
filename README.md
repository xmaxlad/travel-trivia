# Travel Trivia

## To run
1. Clone this repo
2. Run `npm i`
3. Create a `.env` file and add DB URL and Unsplash Access Key.(Ask, if needed to be shared.)
4. Run `npx prisma migrate dev --name "init` to migrate the migrations.
5. Run `npx prisma db seed` to seed the database.
6. Run `npx prisma generate` to generate a prisma client.
7. Run `npm run dev`

## Hoisted Link - 
Or visit this link - [Vercel Link](https://travel-trivia.vercel.app/)  

## Tech choices 
### NextJS - For frontend application and backend routes.
Used NextJS because of various reasons including being able to write both frontend and backend code in one place.
### Postgres as Database and Neon Tech as postgres server provider.
### Prisma - As the ORM.
### Redux - For state management.
### Vercel - As hoisting platform.
### Unsplash - For random image generation.
### Claude 3.5 sonnet - For dataset generation.


