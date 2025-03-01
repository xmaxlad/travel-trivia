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
    },
    {
      "city": "Rome",
      "country": "Italy",
      "clues": [
        "This eternal city is home to the world's smallest country.",
        "Ancient gladiators once fought in its famous circular amphitheater."
      ],
      "fun_fact": [
        "The Trevi Fountain collects about €3,000 in coins every day, which goes to charity.",
        "There are more than 2,000 fountains throughout this ancient city."
      ],
      "trivia": [
        "The city was founded in 753 BC according to legend.",
        "The Pantheon has the world's largest unreinforced concrete dome."
      ]
    },
    {
      "city": "Barcelona",
      "country": "Spain",
      "clues": [
        "This city features many unfinished works by a famous architect who died in 1926.",
        "Known for its unique modernist architecture and beach culture."
      ],
      "fun_fact": [
        "The Sagrada Familia has been under construction for over 140 years.",
        "The city's grid pattern was designed to allow wind from the sea to flow through."
      ],
      "trivia": [
        "It's home to Europe's largest football stadium, Camp Nou.",
        "Las Ramblas was originally a streambed before becoming a famous street."
      ]
    },
    {
      "city": "Dubai",
      "country": "United Arab Emirates",
      "clues": [
        "Home to the world's tallest building and artificial islands shaped like palm trees.",
        "This desert city transforms from sand dunes to skyscrapers."
      ],
      "fun_fact": [
        "The police force here uses luxury supercars for patrol vehicles.",
        "It has the world's first 7-star hotel, the Burj Al Arab."
      ],
      "trivia": [
        "Only about 15% of its population are native citizens.",
        "The city has the world's largest choreographed fountain system."
      ]
    },
    {
      "city": "Venice",
      "country": "Italy",
      "clues": [
        "This city is built on 118 small islands connected by over 400 bridges.",
        "Famous for its gondolas and carnival masks."
      ],
      "fun_fact": [
        "The city is slowly sinking at a rate of 1-2 millimeters per year.",
        "There are no cars or roads in the historic center, only canals and footpaths."
      ],
      "trivia": [
        "The city's carnival tradition dates back to the 12th century.",
        "Marco Polo was born here in 1254."
      ]
    },
    {
      "city": "Amsterdam",
      "country": "Netherlands",
      "clues": [
        "This city has more bicycles than people.",
        "Famous for its narrow houses and canal ring system."
      ],
      "fun_fact": [
        "Many houses lean forward intentionally - they have a special hook at the top for moving furniture in through windows.",
        "There are over 1,500 bridges in the city."
      ],
      "trivia": [
        "The city is built entirely on wooden poles driven into the ground.",
        "It has more canals than Venice and more bridges than Paris."
      ]
    },
    {
      "city": "Singapore",
      "country": "Singapore",
      "clues": [
        "This city-state features a hotel with an infinity pool on top of three towers.",
        "Known for its strict cleanliness laws and modern architecture."
      ],
      "fun_fact": [
        "It's one of only three city-states in the world.",
        "The national symbol is the Merlion, a mythical creature that's half lion and half fish."
      ],
      "trivia": [
        "Chewing gum is banned here to maintain cleanliness.",
        "It has the world's first night safari zoo."
      ]
    },
    {
      "city": "Istanbul",
      "country": "Turkey",
      "clues": [
        "The only city in the world that spans two continents.",
        "Once known as Constantinople, it was the capital of multiple empires."
      ],
      "fun_fact": [
        "The Grand Bazaar is one of the world's oldest and largest covered markets.",
        "The city is home to the world's oldest subway in continental Europe."
      ],
      "trivia": [
        "The Hagia Sophia has served as both a church and a mosque.",
        "The Bosphorus Strait divides the European and Asian sides of the city."
      ]
    },
    {
      "city": "Kyoto",
      "country": "Japan",
      "clues": [
        "This former capital is known for its numerous temples and traditional gardens.",
        "Famous for geishas in the Gion district."
      ],
      "fun_fact": [
        "It was removed from the atomic bomb target list during WWII due to its cultural significance.",
        "The city's name literally means 'Capital City' in Japanese."
      ],
      "trivia": [
        "There are over 1,600 Buddhist temples in the city.",
        "The Imperial Palace was the residence of Japan's Imperial Family until 1868."
      ]
    },
    {
      "city": "Prague",
      "country": "Czech Republic",
      "clues": [
        "Home to the world's largest ancient castle complex.",
        "Known for its medieval astronomical clock in the Old Town Square."
      ],
      "fun_fact": [
        "The Dancing House was inspired by Fred Astaire and Ginger Rogers.",
        "The Charles Bridge took 45 years to complete."
      ],
      "trivia": [
        "The city is nicknamed 'The City of a Hundred Spires'.",
        "Prague Castle has been the seat of power for kings of Bohemia and presidents of Czechoslovakia."
      ]
    },
    {
      "city": "San Francisco",
      "country": "USA",
      "clues": [
        "Famous for its steep hills and iconic red bridge.",
        "Known for its fog, which locals have nicknamed Karl."
      ],
      "fun_fact": [
        "The city's cable cars are the only moving National Historic Landmark.",
        "Alcatraz Island was once home to Native American activists for 19 months."
      ],
      "trivia": [
        "The Golden Gate Bridge's color is officially called 'International Orange'.",
        "The city was built on top of dozens of abandoned ships from the Gold Rush era."
      ]
    },
    {
      "city": "Moscow",
      "country": "Russia",
      "clues": [
        "Home to the colorful onion domes of Saint Basil's Cathedral.",
        "Its metro stations are known as 'underground palaces'."
      ],
      "fun_fact": [
        "The Kremlin walls were originally white before being painted red in the 1940s.",
        "Moscow's Metro carries more passengers daily than London and New York combined."
      ],
      "trivia": [
        "The city has seven identical skyscrapers known as the 'Seven Sisters'.",
        "Red Square was not named for communism or the color of its buildings."
      ]
    },
    {
      "city": "Bangkok",
      "country": "Thailand",
      "clues": [
        "This city's full ceremonial name is the longest city name in the world.",
        "Famous for its floating markets and ornate temples."
      ],
      "fun_fact": [
        "The city is sinking 2-3 centimeters every year.",
        "It's known as Krung Thep to locals, which means 'City of Angels'."
      ],
      "trivia": [
        "The city has more than 400 temples.",
        "Street food vendors here have earned Michelin stars."
      ]
    },
    {
      "city": "Vienna",
      "country": "Austria",
      "clues": [
        "This city is known as the world's capital of classical music.",
        "Famous for its coffee house culture and Sachertorte chocolate cake."
      ],
      "fun_fact": [
        "The snow globe was invented here in 1900.",
        "The city's central cemetery has more residents than the living city."
      ],
      "trivia": [
        "It's the only capital city that produces significant quantities of wine within its city limits.",
        "The Spanish Riding School here has been training horses since the 1500s."
      ]
    },
    {
      "city": "Seoul",
      "country": "South Korea",
      "clues": [
        "This city is home to the world's first museum dedicated to kimchi.",
        "Known for its high-tech subway system and ancient palaces."
      ],
      "fun_fact": [
        "The city has free WiFi access in all public spaces.",
        "Its subway system uses AI to prevent suicide attempts."
      ],
      "trivia": [
        "The city has the world's largest underground shopping center.",
        "There's a cafe where you can play with sheep in the middle of the city."
      ]
    },
    {
      "city": "Berlin",
      "country": "Germany",
      "clues": [
        "This city was once divided by a famous wall.",
        "Known for its street art and techno music scene."
      ],
      "fun_fact": [
        "The city has more bridges than Venice.",
        "There's a traffic light that hasn't changed since 1987."
      ],
      "trivia": [
        "The city has more museums than rainy days per year.",
        "The largest remaining section of the Berlin Wall is now an open-air gallery."
      ]
    },
    {
      "city": "Mumbai",
      "country": "India",
      "clues": [
        "Home to the world's largest film industry.",
        "Known for its Victorian Gothic architecture and bustling street markets."
      ],
      "fun_fact": [
        "The city's dabbawalas deliver over 200,000 lunch boxes daily with remarkable accuracy.",
        "The world's most expensive private residence, Antilia, is located here."
      ],
      "trivia": [
        "The city was originally seven separate islands.",
        "The Dharavi slum is one of the largest and most productive in Asia."
      ]
    },
    {
      "city": "Edinburgh",
      "country": "Scotland",
      "clues": [
        "This city's castle sits atop an extinct volcano.",
        "Known for its annual festival of arts and culture."
      ],
      "fun_fact": [
        "The city was the first in the world to have its own fire brigade.",
        "There are more listed buildings in the Old Town than anywhere else in the UK."
      ],
      "trivia": [
        "The city inspired J.K. Rowling's Harry Potter series.",
        "It has more trees per head of population than any other UK city."
      ]
    },
    {
      "city": "Buenos Aires",
      "country": "Argentina",
      "clues": [
        "This city is known as the 'Paris of South America'.",
        "Famous for tango dancing and colorful houses in La Boca."
      ],
      "fun_fact": [
        "It has the highest concentration of theatres in the world.",
        "The city's main avenue, 9 de Julio, is the widest in the world."
      ],
      "trivia": [
        "It has a whole neighborhood dedicated to mate tea drinking.",
        "The city's subway is the oldest in South America."
      ]
    },
    {
      "city": "Cape Town",
      "country": "South Africa",
      "clues": [
        "This city sits beneath a flat-topped mountain.",
        "Home to the colorful Bo-Kaap neighborhood."
      ],
      "fun_fact": [
        "Table Mountain has over 2,200 species of plants found nowhere else in the world.",
        "The Castle of Good Hope is the oldest colonial building in South Africa."
      ],
      "trivia": [
        "It was the first city outside Europe to get Blue Flag Beach status.",
        "The city is home to the world's smallest floral kingdom."
      ]
    },
    {
      "city": "Stockholm",
      "country": "Sweden",
      "clues": [
        "This city is built on 14 islands connected by 57 bridges.",
        "Home to the Nobel Prize banquet each year."
      ],
      "fun_fact": [
        "The city's subway system is known as the world's longest art gallery.",
        "There's a hotel made entirely of ice that's rebuilt every winter."
      ],
      "trivia": [
        "The city hall is made of 8 million bricks.",
        "It's home to the world's first open-air museum, Skansen."
      ]
    },
    {
      "city": "Mexico City",
      "country": "Mexico",
      "clues": [
        "This city was built on a lake by the Aztecs.",
        "Known for its vibrant street art and ancient pyramids."
      ],
      "fun_fact": [
        "It's sinking at a rate of about 20 cm per year.",
        "The city has more museums than any other city in the world."
      ],
      "trivia": [
        "The first printing press in North America was established here.",
        "The city's Chapultepec Castle is the only royal castle in North America."
      ]
    },
    {
      "city": "Marrakech",
      "country": "Morocco",
      "clues": [
        "This city is known for its maze-like medina and vibrant souks.",
        "Famous for its red buildings and walls."
      ],
      "fun_fact": [
        "The city's tanneries have been operating the same way for over 900 years.",
        "It's nicknamed the 'Red City' due to its buildings and walls being made of red clay."
      ],
      "trivia": [
        "The medina is a UNESCO World Heritage site.",
        "Jemaa el-Fnaa square has been a marketplace since the 11th century."
      ]
    },
    {
      "city": "St. Petersburg",
      "country": "Russia",
      "clues": [
        "This city is known as the 'Venice of the North' for its many canals.",
        "Home to the world's largest art museum."
      ],
      "fun_fact": [
        "The city was built on 101 islands.",
        "During summer, the sun never fully sets for about 80 days."
      ],
      "trivia": [
        "The Hermitage Museum has so many exhibits it would take 11 years to see them all.",
        "Cats in the Hermitage Museum have official employment contracts."
      ]
    },
    {
      "city": "Vancouver",
      "country": "Canada",
      "clues": [
        "This city is surrounded by mountains and ocean.",
        "Known for its film industry, often called 'Hollywood North'."
      ],
      "fun_fact": [
        "It has the longest uninterrupted waterfront path in the world.",
        "The city has never had a natural disaster in its recorded history."
      ],
      "trivia": [
        "Steam clock in Gastown runs on electricity despite its name.",
        "It's home to the world's first IMAX theater."
      ]
    },
    {
      "city": "Athens",
      "country": "Greece",
      "clues": [
        "This city is named after the goddess of wisdom.",
        "Home to one of the world's most famous ancient citadels."
      ],
      "fun_fact": [
        "It's Europe's oldest capital city.",
        "The Acropolis was built without any cement or mortar."
      ],
      "trivia": [
        "The city has been continuously inhabited for over 7,000 years.",
        "The modern Olympic Games were first held here in 1896."
      ]
    },
    {
      "city": "Jerusalem",
      "country": "Israel",
      "clues": [
        "This city is sacred to three major religions.",
        "Its old city is divided into four quarters."
      ],
      "fun_fact": [
        "The city has been captured and recaptured 44 times throughout history.",
        "There are over 26 different names for the city in various languages."
      ],
      "trivia": [
        "The Western Wall receives over a million written prayers each year.",
        "The city has over 2,000 archaeological sites."
      ]
    },
    {
      "city": "Lisbon",
      "country": "Portugal",
      "clues": [
        "This city is built on seven hills.",
        "Famous for its yellow trams and tile-covered buildings."
      ],
      "fun_fact": [
        "The city's Vasco da Gama Bridge is the longest in Europe.",
        "It's the only European capital city that faces the Atlantic Ocean."
      ],
      "trivia": [
        "The city's oldest bookstore has been open since 1732.",
        "Local law requires buildings to be painted in their original colors."
      ]
    },
    {
      "city": "Copenhagen",
      "country": "Denmark",
      "clues": [
        "This city is home to a famous little mermaid statue.",
        "Known for its cycling culture and colorful harbor."
      ],
      "fun_fact": [
        "There are more bicycles than people in the city.",
        "It's home to the two oldest amusement parks in the world."
      ],
      "trivia": [
        "The city aims to become carbon neutral by 2025.",
        "The longest pedestrian shopping street in Europe is located here."
      ]
    },
    {
      "city": "Dublin",
      "country": "Ireland",
      "clues": [
        "This city's most famous export is a dark stout beer.",
        "Home to the Book of Kells and numerous literary landmarks."
      ],
      "fun_fact": [
        "The St. James's Gate Brewery has a 9,000-year lease.",
        "Phoenix Park is the largest urban park in Europe."
      ],
      "trivia": [
        "The city has produced four Nobel Prize winners for literature.",
        "The Ha'penny Bridge got its name from the toll once charged to cross it."
      ]
    },
    {
      "city": "Shanghai",
      "country": "China",
      "clues": [
        "This city has the world's second-tallest building.",
        "Known for its futuristic skyline and historic Bund waterfront."
      ],
      "fun_fact": [
        "The city has the world's fastest commercial train.",
        "More than 300 bridges connect the city across the Huangpu River."
      ],
      "trivia": [
        "It has the world's first commercial maglev train system.",
        "The city processes half of China's foreign trade."
      ]
    },
    {
      "city": "San Sebastian",
      "country": "Spain",
      "clues": [
        "This city has the most Michelin stars per square meter in the world.",
        "Known for its beautiful La Concha beach and pintxos culture."
      ],
      "fun_fact": [
        "The city hosts one of the oldest film festivals in the world.",
        "It has the highest concentration of Michelin-starred restaurants per capita."
      ],
      "trivia": [
        "The city was almost completely rebuilt after a fire in 1813.",
        "Local tradition includes drinking small portions of cider from very high up."
      ]
    },
    {
      "city": "Havana",
      "country": "Cuba",
      "clues": [
        "This city is famous for its vintage American cars.",
        "Known for its colonial architecture and seaside Malecón."
      ],
      "fun_fact": [
        "The city's old town contains over 3,000 buildings from colonial times.",
        "Many buildings have survived for centuries due to the U.S. embargo limiting new construction."
      ],
      "trivia": [
        "The city was founded by the Spanish in 1519.",
        "The National Capitol building is slightly taller than the U.S. Capitol."
      ]
    },
    {
      "city": "Petra",
      "country": "Jordan",
      "clues": [
        "This ancient city is carved into rose-colored rock.",
        "Known as the 'Lost City' until its rediscovery in 1812."
      ],
      "fun_fact": [
        "Only 15% of the ancient city has been uncovered.",
        "The city's water conduit system was an ancient engineering marvel."
      ],
      "trivia": [
        "It appeared in Indiana Jones and the Last Crusade.",
        "The city was named one of the New Seven Wonders of the World."
      ]
    },
    {
      "city": "Quebec City",
      "country": "Canada",
      "clues": [
        "This city is the only walled city north of Mexico in North America.",
        "Known for its European charm and winter carnival."
      ],
      "fun_fact": [
        "The city's Château Frontenac is the most photographed hotel in the world.",
        "It was the first city in North America to be named a UNESCO World Heritage site."
      ],
      "trivia": [
        "The city has a toboggan run that's been operating since 1884.",
        "Its Old Town walls are the only remaining fortified city walls in North America."
      ]
    },
    {
      "city": "Fez",
      "country": "Morocco",
      "clues": [
        "This city has the world's largest car-free urban area.",
        "Known for its ancient leather tanneries and medieval medina."
      ],
      "fun_fact": [
        "The University of Al Quaraouiyine here is the oldest existing university in the world.",
        "The medina contains over 9,000 narrow streets and alleys."
      ],
      "trivia": [
        "The city was founded in the 8th century.",
        "Traditional craftsmen still use medieval techniques passed down through generations."
      ]
    },
    {
      "city": "Kyiv",
      "country": "Ukraine",
      "clues": [
        "This city is known for its golden-domed churches.",
        "Home to the deepest metro station in the world."
      ],
      "fun_fact": [
        "The city's main street, Khreshchatyk, is the widest in Europe.",
        "Its Arsenalna metro station is the deepest in the world at 105.5 meters."
      ],
      "trivia": [
        "The city is older than Moscow.",
        "The Motherland Monument here is taller than the Statue of Liberty."
      ]
    },
    {
      "city": "Wellington",
      "country": "New Zealand",
      "clues": [
        "This city is the world's southernmost capital.",
        "Known for its strong winds and vibrant cafe culture."
      ],
      "fun_fact": [
        "It has more cafes per capita than New York City.",
        "The city's cable car has been running since 1902."
      ],
      "trivia": [
        "The city is built on an active geological fault line.",
        "It's home to Weta Workshop, famous for Lord of the Rings special effects."
      ]
    },
    {
      "city": "Cartagena",
      "country": "Colombia",
      "clues": [
        "This colonial city is surrounded by massive stone walls.",
        "Known for its colorful buildings and Caribbean atmosphere."
      ],
      "fun_fact": [
        "The city's walls took 200 years to complete.",
        "It was one of the first sanctuaries of freed African slaves in the Americas."
      ],
      "trivia": [
        "The city inspired many of Gabriel García Márquez's stories.",
        "Its fortress was never breached despite numerous pirate attacks."
      ]
    },
    {
      "city": "Jaipur",
      "country": "India",
      "clues": [
        "This city is known as the 'Pink City'.",
        "Famous for its astronomical instruments at Jantar Mantar."
      ],
      "fun_fact": [
        "The entire city was painted pink to welcome Britain's Prince of Wales in 1876.",
        "It was India's first planned city."
      ],
      "trivia": [
        "The city's Hawa Mahal has 953 windows.",
        "Local law still requires all buildings in the old city to be painted pink."
      ]
    },
    {
      "city": "Cusco",
      "country": "Peru",
      "clues": [
        "This city was the capital of the Inca Empire.",
        "Known as the gateway to Machu Picchu."
      ],
      "fun_fact": [
        "The city's street pattern is said to be in the shape of a puma.",
        "Inca walls were built so precisely that you can't fit a piece of paper between the stones."
      ],
      "trivia": [
        "The city sits at an altitude of 3,399 meters above sea level.",
        "Many buildings have both Inca foundations and colonial Spanish architecture."
      ]
    },
    {
      "city": "Dubrovnik",
      "country": "Croatia",
      "clues": [
        "This city is surrounded by massive stone walls facing the Adriatic.",
        "Known as the 'Pearl of the Adriatic' and a filming location for Game of Thrones."
      ],
      "fun_fact": [
        "The city walls have never been breached by a hostile army.",
        "The main street is paved with limestone that has become polished by centuries of foot traffic."
      ],
      "trivia": [
        "The city was an independent republic for centuries.",
        "It was one of the first medieval towns to have a sewage system."
      ]
    },
    {
      "city": "Chiang Mai",
      "country": "Thailand",
      "clues": [
        "This city is known as the 'Rose of the North'.",
        "Famous for its hundreds of temples and night bazaar."
      ],
      "fun_fact": [
        "The city has over 300 temples, some dating back to the 13th century.",
        "Its old city is surrounded by a square moat that still contains water."
      ],
      "trivia": [
        "The city hosts the world's largest lantern festival.",
        "Traditional Lanna architecture can still be seen throughout the old city."
      ]
    },
    {
      "city": "Porto",
      "country": "Portugal",
      "clues": [
        "This city is famous for its sweet fortified wine.",
        "Known for its Dom Luis I Bridge and riverside quarter."
      ],
      "fun_fact": [
        "The Lello Bookstore here inspired J.K. Rowling's Harry Potter series.",
        "The city's São Bento railway station has over 20,000 decorative tiles."
      ],
      "trivia": [
        "The city gave its name to both Portugal and port wine.",
        "Its historic center is a UNESCO World Heritage site since 1996."
      ]
    },
    {
      "city": "Krakow",
      "country": "Poland",
      "clues": [
        "This city's main square is the largest medieval town square in Europe.",
        "Known for its dragon legend and historic salt mines."
      ],
      "fun_fact": [
        "A trumpet signal is played every hour from the main church tower, ending abruptly mid-note.",
        "The city survived WWII largely undamaged, preserving its historic architecture."
      ],
      "trivia": [
        "It was the capital of Poland until 1596.",
        "The Wieliczka Salt Mine has been operating since the 13th century."
      ]
    },
    {
      "city": "Luang Prabang",
      "country": "Laos",
      "clues": [
        "This city is known for its morning alms-giving ceremony.",
        "Located at the confluence of the Mekong and Nam Khan rivers."
      ],
      "fun_fact": [
        "Every morning, hundreds of monks walk through the streets collecting alms.",
        "The entire town is a UNESCO World Heritage site."
      ],
      "trivia": [
        "The city was the royal capital until 1975.",
        "It has 33 golden Buddhist temples in its historic center."
      ]
    },
    {
      "city": "Granada",
      "country": "Spain",
      "clues": [
        "This city is home to a famous Moorish palace complex.",
        "Known for its free tapas culture and Sierra Nevada backdrop."
      ],
      "fun_fact": [
        "The Alhambra's walls contain poems written in Arabic calligraphy.",
        "Every drink order comes with a free tapa by law."
      ],
      "trivia": [
        "It was the last Muslim kingdom to fall to Christian Spain in 1492.",
        "The city's name means 'pomegranate' in Spanish."
      ]
    },
    {
      "city": "Bruges",
      "country": "Belgium",
      "clues": [
        "This medieval city is known as the 'Venice of the North'.",
        "Famous for its canals, cobblestone streets, and chocolate shops."
      ],
      "fun_fact": [
        "The city still has a family of swans descended from an ancient punishment.",
        "Its belfry houses a treasure chamber behind a medieval door with 13 locks."
      ],
      "trivia": [
        "The city center has remained largely unchanged since medieval times.",
        "It was one of the world's first tourist destinations in the 1800s."
      ]
    },
    {
      "city": "Varanasi",
      "country": "India",
      "clues": [
        "This city is considered the spiritual capital of India.",
        "Known for its ghats along the Ganges River."
      ],
      "fun_fact": [
        "It's one of the oldest continuously inhabited cities in the world.",
        "The city is built on layers of ancient cities dating back 3000 years."
      ],
      "trivia": [
        "Mark Twain once said it's older than history, tradition, and legend.",
        "The city has over 87 ghats along the river."
      ]
    },
    {
      "city": "Salzburg",
      "country": "Austria",
      "clues": [
        "This city is the birthplace of Mozart.",
        "Known for The Sound of Music filming locations."
      ],
      "fun_fact": [
        "The city's name means 'Salt Castle' due to its history of salt mining.",
        "It has the oldest restaurant in Central Europe, dating from 803 AD."
      ],
      "trivia": [
        "The Salzburg Festival is one of the world's most important classical music events.",
        "The city's fortress has never been captured by foreign troops."
      ]
    },
    {
      "city": "Hoi An",
      "country": "Vietnam",
      "clues": [
        "This ancient trading port is famous for its lanterns.",
        "Known for its well-preserved Ancient Town and tailoring shops."
      ],
      "fun_fact": [
        "The city holds a lantern festival every full moon.",
        "No cars or motorcycles are allowed in the Ancient Town center."
      ],
      "trivia": [
        "The Japanese Bridge here was built in the 1590s.",
        "The city was a major trading port from the 15th to 19th centuries."
      ]
    },
    {
      "city": "Reykjavik",
      "country": "Iceland",
      "clues": [
        "This is the world's northernmost capital city.",
        "Known for its colorful houses and geothermal pools."
      ],
      "fun_fact": [
        "The city uses geothermal energy for heating and electricity.",
        "In summer, the sun barely sets, while in winter it barely rises."
      ],
      "trivia": [
        "The city's name means 'Smoky Bay' in Icelandic.",
        "It's one of the cleanest, greenest, and safest cities in the world."
      ]
    },
    {
      "city": "Antigua Guatemala",
      "country": "Guatemala",
      "clues": [
        "This colonial city is surrounded by volcanoes.",
        "Known for its preserved Spanish Baroque architecture."
      ],
      "fun_fact": [
        "The city was once the capital of all Spanish colonies in Central America.",
        "Many buildings still show damage from the 1773 earthquake."
      ],
      "trivia": [
        "It was the third capital of Guatemala.",
        "The city's Santa Catalina Arch is its most photographed landmark."
      ]
    },
    {
      "city": "Tallinn",
      "country": "Estonia",
      "clues": [
        "This medieval city has one of Europe's best-preserved old towns.",
        "Known for its digital innovation and startup culture."
      ],
      "fun_fact": [
        "It was the first city to offer free public transport to residents.",
        "The city's Town Hall is the oldest in Northern Europe."
      ],
      "trivia": [
        "Skype was developed here.",
        "The city's medieval walls still have 20 defensive towers."
      ]
    },
    {
      "city": "Udaipur",
      "country": "India",
      "clues": [
        "This city is known as the 'City of Lakes'.",
        "Famous for its floating palace in Lake Pichola."
      ],
      "fun_fact": [
        "The Lake Palace hotel was featured in a James Bond film.",
        "The city palace here is the largest palace complex in Rajasthan."
      ],
      "trivia": [
        "It's often called the 'Venice of the East'.",
        "The city was founded in 1559 as the capital of Mewar."
      ]
    },
    {
      "city": "Ljubljana",
      "country": "Slovenia",
      "clues": [
        "This city's name means 'beloved' in Slovene.",
        "Known for its dragon bridges and castle on a hill."
      ],
      "fun_fact": [
        "The city was designed by architect Jože Plečnik, like a living work of art.",
        "It won the European Green Capital Award in 2016."
      ],
      "trivia": [
        "The city has more than 10,000 cultural events each year.",
        "Dragons are the symbol of the city and appear throughout its architecture."
      ]
    },
    {
      "city": "Valparaíso",
      "country": "Chile",
      "clues": [
        "This port city is known for its colorful clifftop homes.",
        "Famous for its historic funicular elevators."
      ],
      "fun_fact": [
        "The city has 42 hills, each with its own distinct neighborhood.",
        "Pablo Neruda had a house here that's now a museum."
      ],
      "trivia": [
        "It's known as the 'Jewel of the Pacific'.",
        "The historic quarter is a UNESCO World Heritage site."
      ]
    },
    {
      "city": "Heidelberg",
      "country": "Germany",
      "clues": [
        "This city is home to Germany's oldest university.",
        "Known for its romantic castle ruins and philosopher's path."
      ],
      "fun_fact": [
        "The castle contains the world's largest wine barrel.",
        "Mark Twain wrote extensively about the city in 'A Tramp Abroad'."
      ],
      "trivia": [
        "The city was largely spared from WWII bombing.",
        "Its university library is the oldest in Germany."
      ]
    },
    {
      "city": "Tbilisi",
      "country": "Georgia",
      "clues": [
        "This city is known for its sulfur baths and diverse architecture.",
        "Famous for its historic Old Town and modern Peace Bridge."
      ],
      "fun_fact": [
        "The city's name comes from the Georgian word for 'warm' due to its hot springs.",
        "It's one of the world's oldest wine-producing regions."
      ],
      "trivia": [
        "The city has buildings from Persian, Russian, Art Nouveau, and Soviet eras.",
        "Traditional Georgian feasts can last for days."
      ]
    },
    {
      "city": "Guanajuato",
      "country": "Mexico",
      "clues": [
        "This colonial city is known for its underground tunnel system.",
        "Famous for its mummy museum and colorful architecture."
      ],
      "fun_fact": [
        "The city's tunnels were originally built for flood control.",
        "It was once the world's leading silver mining city."
      ],
      "trivia": [
        "The city hosts the International Cervantino Festival.",
        "Many streets are too narrow for cars and are called 'callejones'."
      ]
    },
    {
      "city": "Ghent",
      "country": "Belgium",
      "clues": [
        "This medieval city was once larger than London.",
        "Known for its three towers and Gravensteen castle."
      ],
      "fun_fact": [
        "The city holds the world record for the largest vegetarian festival.",
        "It has a graffiti street where street art is legal and encouraged."
      ],
      "trivia": [
        "The Ghent Altarpiece is considered the most stolen artwork in history.",
        "The city introduced 'Thursday Veggieday' to promote vegetarianism."
      ]
    },
    {
      "city": "Bukhara",
      "country": "Uzbekistan",
      "clues": [
        "This ancient Silk Road city has over 140 protected monuments.",
        "Known for its trading domes and ancient minarets."
      ],
      "fun_fact": [
        "The city's Kalyan Minaret was so tall Genghis Khan spared it.",
        "It's been continuously inhabited for at least 5,000 years."
      ],
      "trivia": [
        "The city was a major medieval center for Islamic theology and culture.",
        "Its old town is essentially an open-air museum of Islamic architecture."
      ]
    },
    {
      "city": "Oaxaca",
      "country": "Mexico",
      "clues": [
        "This city is famous for its seven types of mole sauce.",
        "Known for its indigenous cultures and Day of the Dead celebrations."
      ],
      "fun_fact": [
        "The city's Santo Domingo church contains over 60,000 sheets of gold leaf.",
        "It's home to a 2,000-year-old tree with the world's largest trunk circumference."
      ],
      "trivia": [
        "The city's name comes from the Nahuatl word for 'in the nose of the squash'.",
        "It's known as the land of seven moles."
      ]
    },
    {
      "city": "Sarajevo",
      "country": "Bosnia and Herzegovina",
      "clues": [
        "This city is known as the 'Jerusalem of Europe'.",
        "Famous for its Ottoman bazaar and multicultural heritage."
      ],
      "fun_fact": [
        "You can see Catholic and Orthodox churches, synagogues, and mosques within walking distance.",
        "The city hosted the 1984 Winter Olympics."
      ],
      "trivia": [
        "The assassination that sparked WWI happened here.",
        "The city's Town Hall was rebuilt from its original plans after being destroyed in 1992."
      ]
    },
    {
      "city": "Lucerne",
      "country": "Switzerland",
      "clues": [
        "This city is known for its covered wooden bridge.",
        "Famous for its preserved medieval architecture and lake views."
      ],
      "fun_fact": [
        "The Kapellbrücke is Europe's oldest covered wooden bridge.",
        "The city's water tower has served as a prison, torture chamber, and treasury."
      ],
      "trivia": [
        "Wagner composed many of his works while living here.",
        "The Lion Monument was described by Mark Twain as 'the most mournful stone in the world'."
      ]
    },
    {
      "city": "Jeonju",
      "country": "South Korea",
      "clues": [
        "This city is known as Korea's food capital.",
        "Famous for its traditional hanok village and bibimbap."
      ],
      "fun_fact": [
        "The city was designated as a UNESCO City of Gastronomy.",
        "It has the largest collection of traditional Korean houses in one area."
      ],
      "trivia": [
        "The city produces traditional Korean paper called hanji.",
        "It's considered the birthplace of the Joseon Dynasty."
      ]
    },
    {
      "city": "Segovia",
      "country": "Spain",
      "clues": [
        "This city has a Roman aqueduct that still stands without mortar.",
        "Known for its fairy-tale castle and roast suckling pig."
      ],
      "fun_fact": [
        "The aqueduct was built with 25,000 granite blocks held together by balance alone.",
        "The Alcázar is said to have inspired Walt Disney's Cinderella Castle."
      ],
      "trivia": [
        "The city's old town is a UNESCO World Heritage site.",
        "Isabella I was proclaimed Queen of Castile here in 1474."
      ]
    },
    {
      "city": "Lviv",
      "country": "Ukraine",
      "clues": [
        "This city is known as Ukraine's cultural capital.",
        "Famous for its coffee culture and historic architecture."
      ],
      "fun_fact": [
        "The city has the most cafes per capita in the world.",
        "It's home to a restaurant that requires a password to enter."
      ],
      "trivia": [
        "The historic center is a UNESCO World Heritage site.",
        "The city was once part of the Austro-Hungarian Empire."
      ]
    },
    {
      "city": "Colmar",
      "country": "France",
      "clues": [
        "This city is known as 'Little Venice' in the Alsace region.",
        "Famous for its well-preserved medieval old town."
      ],
      "fun_fact": [
        "The city inspired the setting of 'Beauty and the Beast'.",
        "It's one of the driest cities in France due to the Vosges mountains."
      ],
      "trivia": [
        "The creator of the Statue of Liberty was born here.",
        "The city has remained largely unchanged since the 14th century."
      ]
    },
    {
      "city": "Merida",
      "country": "Mexico",
      "clues": [
        "This city is known as the 'White City'.",
        "Famous for its Mayan heritage and colonial architecture."
      ],
      "fun_fact": [
        "The city was built on top of an ancient Maya city called T'ho.",
        "It has the oldest cathedral on mainland Americas."
      ],
      "trivia": [
        "The city has the second largest historic center in Mexico.",
        "It was named after the Roman city of Mérida in Spain."
      ]
    },
    {
      "city": "Mostar",
      "country": "Bosnia and Herzegovina",
      "clues": [
        "This city is famous for its iconic bridge and bridge divers.",
        "Known for its Ottoman architecture and multicultural heritage."
      ],
      "fun_fact": [
        "The bridge was designed to be able to hold a camel's weight.",
        "Local divers have been jumping from the bridge for over 450 years."
      ],
      "trivia": [
        "The bridge was destroyed in 1993 and rebuilt in 2004.",
        "The city's name means 'bridge-keeper'."
      ]
    },
    {
      "city": "Yangon",
      "country": "Myanmar",
      "clues": [
        "This city is home to the golden Shwedagon Pagoda.",
        "Known for its colonial architecture and bustling markets."
      ],
      "fun_fact": [
        "The Shwedagon Pagoda contains more gold than the Bank of England's vaults.",
        "The city has the highest number of colonial buildings in Southeast Asia."
      ],
      "trivia": [
        "It was formerly known as Rangoon.",
        "The pagoda is believed to contain relics of four Buddhas."
      ]
    },
    {
      "city": "Salvador",
      "country": "Brazil",
      "clues": [
        "This city was Brazil's first capital.",
        "Known for its colorful colonial architecture and African heritage."
      ],
      "fun_fact": [
        "The city has the largest carnival in the world after Rio.",
        "It has the first elevator in Brazil, still operating since 1873."
      ],
      "trivia": [
        "The historic center is called Pelourinho.",
        "It's considered the center of Afro-Brazilian culture."
      ]
    },
    {
      "city": "Plovdiv",
      "country": "Bulgaria",
      "clues": [
        "This city is one of the oldest continuously inhabited in Europe.",
        "Known for its Roman amphitheater and revival architecture."
      ],
      "fun_fact": [
        "The city was built on seven hills, like Rome.",
        "It has been inhabited for over 8,000 years."
      ],
      "trivia": [
        "It was the European Capital of Culture in 2019.",
        "The city has been ruled by Thracians, Romans, Byzantines, and Ottomans."
      ]
    },
    {
      "city": "Arequipa",
      "country": "Peru",
      "clues": [
        "This city is known as the 'White City' due to its volcanic stone buildings.",
        "Famous for its colonial architecture and nearby volcanoes."
      ],
      "fun_fact": [
        "The city's buildings are made from white volcanic sillar rock.",
        "It has over 300 days of sunshine per year."
      ],
      "trivia": [
        "The historic center is a UNESCO World Heritage site.",
        "The city sits at 2,335 meters above sea level."
      ]
    },
    {
      "city": "Sintra",
      "country": "Portugal",
      "clues": [
        "This city is known for its romantic palaces and gardens.",
        "Famous for its colorful Pena Palace and mystical atmosphere."
      ],
      "fun_fact": [
        "Lord Byron called it a 'glorious Eden'.",
        "The Quinta da Regaleira has underground tunnels and initiation wells."
      ],
      "trivia": [
        "It was the summer residence of Portuguese royalty.",
        "The entire town is a UNESCO World Heritage site."
      ]
    },
    {
      "city": "Samarkand",
      "country": "Uzbekistan",
      "clues": [
        "This city was a major stop on the ancient Silk Road.",
        "Known for its stunning Islamic architecture and blue-domed mosques."
      ],
      "fun_fact": [
        "The Registan square was used for public executions until the early 20th century.",
        "The city's observatory in 1420 calculated the length of the year to within 1 minute."
      ],
      "trivia": [
        "Alexander the Great said, 'Everything I have heard about the city is true, except it is more beautiful than I imagined.'",
        "The city is over 2,700 years old."
      ]
    },
    {
      "city": "Avignon",
      "country": "France",
      "clues": [
        "This city was once home to seven Catholic popes.",
        "Known for its medieval ramparts and famous bridge."
      ],
      "fun_fact": [
        "The Palais des Papes is the largest Gothic building in the world.",
        "The famous bridge inspired a children's song known worldwide."
      ],
      "trivia": [
        "The city walls are among the finest examples of medieval fortifications.",
        "It was the seat of Western Christianity during the 14th century."
      ]
    },
    {
      "city": "Kanazawa",
      "country": "Japan",
      "clues": [
        "This city is known for its well-preserved samurai and geisha districts.",
        "Famous for its traditional gardens and gold leaf production."
      ],
      "fun_fact": [
        "The city produces 99% of Japan's gold leaf.",
        "Its Kenroku-en is considered one of Japan's three great gardens."
      ],
      "trivia": [
        "The city was spared from WWII bombing, preserving its historic districts.",
        "Local gold leaf is so thin that 1 gram can be stretched to cover 1 square meter."
      ]
    },
    {
      "city": "Český Krumlov",
      "country": "Czech Republic",
      "clues": [
        "This medieval city is built around a 13th-century castle.",
        "Known for its Renaissance architecture and winding Vltava River."
      ],
      "fun_fact": [
        "The castle's theater is one of few in the world with original Baroque stage machinery.",
        "The city's name means 'crooked meadow' in old Czech."
      ],
      "trivia": [
        "The castle complex is the second largest in the Czech Republic after Prague Castle.",
        "Bears have been kept in the castle moat since the 16th century."
      ]
    },
    {
      "city": "Hue",
      "country": "Vietnam",
      "clues": [
        "This city was the imperial capital of Vietnam.",
        "Known for its Imperial City and royal tombs."
      ],
      "fun_fact": [
        "The city's imperial palace was modeled after Beijing's Forbidden City.",
        "Each emperor's tomb was designed during his lifetime as a pleasure palace."
      ],
      "trivia": [
        "The city was heavily damaged during the Tet Offensive of 1968.",
        "The Perfume River runs through the heart of the city."
      ]
    },
    {
      "city": "Siena",
      "country": "Italy",
      "clues": [
        "This medieval city is famous for its horse race around its main square.",
        "Known for its fan-shaped piazza and Gothic architecture."
      ],
      "fun_fact": [
        "The Palio horse race has been held since 1644.",
        "The city was planning a cathedral larger than St. Peter's before the Black Death."
      ],
      "trivia": [
        "The city is divided into 17 contrade (districts), each with its own flag and emblem.",
        "Its main square is shaped like an amphitheater."
      ]
    },
    {
      "city": "Fes",
      "country": "Morocco",
      "clues": [
        "This city has the world's oldest university.",
        "Known for its ancient medina and leather tanneries."
      ],
      "fun_fact": [
        "The medina has over 9,000 streets and alleys.",
        "The leather tanneries have been operating the same way for over 1,000 years."
      ],
      "trivia": [
        "Cars are not allowed in much of the old city.",
        "It was the capital of modern Morocco until 1925."
      ]
    },
    {
      "city": "Vilnius",
      "country": "Lithuania",
      "clues": [
        "This city has the largest baroque old town in Eastern Europe.",
        "Known for its self-declared artist republic within the city."
      ],
      "fun_fact": [
        "The city has a statue of Frank Zappa despite him never visiting.",
        "Užupis Republic declares independence every April 1st."
      ],
      "trivia": [
        "The city center is a UNESCO World Heritage site.",
        "It's home to one of the oldest universities in Eastern Europe."
      ]
    },
    {
      "city": "Cartagena",
      "country": "Spain",
      "clues": [
        "This port city has been inhabited for over 2,000 years.",
        "Known for its Roman theater and Art Nouveau buildings."
      ],
      "fun_fact": [
        "The city has the world's first submarine prototype.",
        "It has one of the best-preserved Roman theaters in Spain."
      ],
      "trivia": [
        "The city was founded by the Carthaginians in 227 BC.",
        "It was one of the most important naval ports in the Mediterranean."
      ]
    }
]

export async function main(){
    for(const d of destination_data){
        await prisma.destination.create({data : d})
    }
}

main()