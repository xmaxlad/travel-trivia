import { PrismaClient, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

//This file never reaches the user.
const destination_data : Prisma.DestinationCreateInput[] = [
    {
      "city": "Paris",
      "country": "France",
      "clues": [
        "This city is home to a famous tower that sparkles every night.",
        "Known as the 'City of Love' and a hub for fashion and art."
      ],
      "fun_fact": [
        "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
        "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
      ],
      "trivia": [
        "This city is famous for its croissants and macarons. Bon appétit!",
        "Paris was originally a Roman city called Lutetia."
      ]
    },
    {
      "city": "Tokyo",
      "country": "Japan",
      "clues": [
        "This city has the busiest pedestrian crossing in the world.",
        "You can visit an entire district dedicated to anime, manga, and gaming."
      ],
      "fun_fact": [
        "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
        "More than 14 million people live in Tokyo, making it one of the most populous cities in the world."
      ],
      "trivia": [
        "The city has over 160,000 restaurants, more than any other city in the world.",
        "Tokyo's subway system is so efficient that train delays of just a few minutes come with formal apologies."
      ]
    },
    {
      "city": "New York",
      "country": "USA",
      "clues": [
        "Home to a green statue gifted by France in the 1800s.",
        "Nicknamed 'The Big Apple' and known for its Broadway theaters."
      ],
      "fun_fact": [
        "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
        "Times Square was once called Longacre Square before being renamed in 1904."
      ],
      "trivia": [
        "New York City has 468 subway stations, making it one of the most complex transit systems in the world.",
        "The Empire State Building has its own zip code: 10118."
      ]
    },
    {
      "city": "Sydney",
      "country": "Australia",
      "clues": [
        "This city is famous for its Opera House and stunning harbor.",
        "Known for its beautiful beaches and vibrant arts scene."
      ],
      "fun_fact": [
        "The Sydney Opera House took 15 years to build and was completed in 1973.",
        "Sydney is home to the world's largest natural harbor."
      ],
      "trivia": [
        "Bondi Beach is one of the most famous beaches in the world.",
        "The city hosted the Summer Olympics in 2000."
      ]
    },
    {
      "city": "Cairo",
      "country": "Egypt",
      "clues": [
        "This city is known for its ancient pyramids and the Sphinx.",
        "It is the largest city in the Arab world."
      ],
      "fun_fact": [
        "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World.",
        "Cairo is often referred to as 'The City of a Thousand Minarets'."
      ],
      "trivia": [
        "Cairo has a rich history that dates back over 1,000 years.",
        "The city is home to the world's second-largest museum, the Egyptian Museum."
      ]
    },
    {
      "city": "Rio de Janeiro",
      "country": "Brazil",
      "clues": [
        "This city is famous for its Carnival festival and Christ the Redeemer statue.",
        "Known for its stunning beaches like Copacabana and Ipanema."
      ],
      "fun_fact": [
        "The Christ the Redeemer statue is one of the New Seven Wonders of the World.",
        "Rio's Carnival is considered the largest carnival in the world."
      ],
      "trivia": [
        "The city is surrounded by mountains and has a unique landscape.",
        "Rio de Janeiro was the capital of Brazil until 1960."
      ]
    }
  ]

export async function main(){
    for(const d of destination_data){
        await prisma.destination.create({data : d})
    }
}

main()