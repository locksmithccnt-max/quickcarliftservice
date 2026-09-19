export type LocationFaq = {
  question: string;
  answer: string;
};

export type Location = {
  slug: string;
  city: string;
  isBase: boolean;
  description: string;
  neighborhoods: string[];
  services: string[];
  routes: string[];
  faqs: LocationFaq[];
  metadata: {
    title: string;
    description: string;
  };
};

export const locations: Location[] = [
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    isBase: true,
    description:
      "Abu Dhabi is our home base. We serve residents, professionals, and businesses across the capital with daily, monthly, and corporate car lift services, plus direct routes to Dubai, Ajman, and Al Ain.",
    neighborhoods: [
      "Abu Dhabi City",
      "Yas Island",
      "Saadiyat Island",
      "Al Reem Island",
      "Al Raha",
      "Khalifa City",
      "Mohammed Bin Zayed City",
      "Musaffah",
      "Al Bateen",
      "Al Mushrif",
      "Al Zahiyah",
      "Al Maryah Island",
    ],
    services: [
      "daily-car-lift",
      "monthly-car-lift",
      "office-transportation",
      "employee-transportation",
      "private-car-lift",
      "city-to-city-transportation",
    ],
    routes: [
      "abu-dhabi-to-dubai",
      "abu-dhabi-to-ajman",
      "abu-dhabi-to-al-ain",
      "dubai-to-abu-dhabi",
      "ajman-to-abu-dhabi",
      "al-ain-to-abu-dhabi",
    ],
    faqs: [
      {
        question: "Which parts of Abu Dhabi do you cover?",
        answer:
          "We cover Abu Dhabi City, the islands (Yas, Saadiyat, Reem, Maryah), Al Raha, Khalifa City, Mohammed Bin Zayed City, Musaffah, and other main residential and business districts.",
      },
      {
        question:
          "Can I book a car lift from Abu Dhabi to Dubai on the same day?",
        answer:
          "Yes. Same-day Abu Dhabi to Dubai trips are often possible depending on driver availability. Please share your preferred pickup time when you enquire.",
      },
      {
        question:
          "Do you offer monthly commute plans within Abu Dhabi itself?",
        answer:
          "Yes. Many of our monthly customers commute inside Abu Dhabi, for example between Khalifa City and downtown, or between Musaffah and the central business area.",
      },
    ],
    metadata: {
      title: "Car Lift Service in Abu Dhabi | Quick Car Lift Service",
      description:
        "Based in Abu Dhabi. Daily, monthly, and corporate car lift service across the capital plus direct routes to Dubai, Ajman, and Al Ain.",
    },
  },
  {
    slug: "dubai",
    city: "Dubai",
    isBase: false,
    description:
      "We serve Dubai as part of our inter-emirate car lift network. Whether you need a daily commute between Dubai and Abu Dhabi, a return trip for work, or a private ride, we arrange the seat and driver for you.",
    neighborhoods: [
      "Downtown Dubai",
      "Business Bay",
      "Dubai Marina",
      "JLT",
      "JBR",
      "Deira",
      "Bur Dubai",
      "Al Barsha",
      "Al Quoz",
      "Silicon Oasis",
      "Al Nahda Dubai",
      "International City",
    ],
    services: [
      "daily-car-lift",
      "monthly-car-lift",
      "private-car-lift",
      "city-to-city-transportation",
      "office-transportation",
      "employee-transportation",
    ],
    routes: ["dubai-to-abu-dhabi", "abu-dhabi-to-dubai"],
    faqs: [
      {
        question: "Are you based in Dubai?",
        answer:
          "No. We are based in Abu Dhabi and serve Dubai primarily on inter-emirate routes, especially the Abu Dhabi to Dubai and Dubai to Abu Dhabi commute.",
      },
      {
        question: "Can you pick me up anywhere in Dubai?",
        answer:
          "We pick up from most major residential and business areas including Downtown, Business Bay, Marina, JLT, Deira, Bur Dubai, Al Barsha, and more. Share your address at booking so we can confirm.",
      },
      {
        question: "Do you offer a monthly Dubai to Abu Dhabi commute?",
        answer:
          "Yes. Our monthly car lift is very popular for professionals commuting between Dubai and Abu Dhabi.",
      },
    ],
    metadata: {
      title: "Car Lift Service in Dubai | Quick Car Lift Service",
      description:
        "Car lift service in Dubai focused on the Dubai to Abu Dhabi commute. Daily, monthly, and private car lift with a professional driver.",
    },
  },
  {
    slug: "ajman",
    city: "Ajman",
    isBase: false,
    description:
      "Ajman is part of our inter-emirate network. We coordinate daily and monthly car lift service between Ajman and Abu Dhabi and offer private trips for families and professionals.",
    neighborhoods: [
      "Ajman Downtown",
      "Al Nuaimiya",
      "Al Rashidiya",
      "Al Rawda",
      "Al Jurf",
      "Al Mowaihat",
      "Al Hamidiyah",
      "Ajman Corniche",
    ],
    services: [
      "daily-car-lift",
      "monthly-car-lift",
      "private-car-lift",
      "city-to-city-transportation",
    ],
    routes: ["ajman-to-abu-dhabi", "abu-dhabi-to-ajman"],
    faqs: [
      {
        question: "Do you offer daily car lift from Ajman to Abu Dhabi?",
        answer:
          "Yes. Ajman to Abu Dhabi is one of our regular inter-emirate routes and works well as both a one-off and a monthly commute.",
      },
      {
        question: "Where in Ajman do you pick up from?",
        answer:
          "We coordinate pickup from most residential areas in Ajman including Al Nuaimiya, Al Rashidiya, Al Rawda, Al Mowaihat, and along the Corniche.",
      },
      {
        question: "Can I add stops on the way to Abu Dhabi?",
        answer:
          "For private trips, yes. Share your itinerary at booking. For shared or monthly plans, the route is direct.",
      },
    ],
    metadata: {
      title: "Car Lift Service in Ajman | Quick Car Lift Service",
      description:
        "Car lift service between Ajman and Abu Dhabi. Daily, monthly, and private car lift with a professional driver serving Ajman residents.",
    },
  },
  {
    slug: "al-ain",
    city: "Al Ain",
    isBase: false,
    description:
      "Al Ain is part of our inter-emirate network. We arrange daily and monthly car lift service between Al Ain and Abu Dhabi for commuters, students, and families.",
    neighborhoods: [
      "Al Ain City Centre",
      "Al Jimi",
      "Al Muwaiji",
      "Al Mutarad",
      "Al Sarooj",
      "Al Foah",
      "Al Yahar",
      "Tawam",
    ],
    services: [
      "daily-car-lift",
      "monthly-car-lift",
      "private-car-lift",
      "city-to-city-transportation",
    ],
    routes: ["al-ain-to-abu-dhabi", "abu-dhabi-to-al-ain"],
    faqs: [
      {
        question: "Do you run a daily Al Ain to Abu Dhabi commute?",
        answer:
          "Yes. Al Ain to Abu Dhabi is one of our regular monthly commute routes for professionals and students.",
      },
      {
        question: "Where in Al Ain do you pick up from?",
        answer:
          "We arrange pickups from the main residential areas of Al Ain including Al Jimi, Al Muwaiji, Al Mutarad, Al Sarooj, and Tawam.",
      },
      {
        question: "Can I book a return trip from Abu Dhabi to Al Ain?",
        answer:
          "Yes. Just share your outbound and return times when you book and we'll coordinate both legs.",
      },
    ],
    metadata: {
      title: "Car Lift Service in Al Ain | Quick Car Lift Service",
      description:
        "Car lift service between Al Ain and Abu Dhabi. Daily, monthly, and private car lift with a professional driver serving Al Ain residents.",
    },
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs() {
  return locations.map((l) => l.slug);
}
