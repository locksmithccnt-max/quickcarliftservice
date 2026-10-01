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
      {
        question: "How much is the car lift from Abu Dhabi to Dubai?",
        answer:
          "Shared seat: 100 AED per person, one way. Private car: 180 AED for the whole vehicle. For monthly commute plans, contact us with your schedule and we'll quote a fixed daily rate.",
      },
      {
        question: "Do you offer pick-up and drop-off service near me in Abu Dhabi?",
        answer:
          "Yes. We provide door-to-door pickup from your home or office anywhere in Abu Dhabi — from Khalifa City and Mohammed Bin Zayed City to the islands and Musaffah. Share your address when you book.",
      },
    ],
    metadata: {
      title: "Car Lift Service in Abu Dhabi | Quick Car Lift Service",
      description:
        "Car lift service based in Abu Dhabi. Daily, monthly, and private trips to Dubai (100 AED), Ajman, and Al Ain. Door-to-door pickup across Abu Dhabi. Call +971 54 330 8261.",
    },
  },
  {
    slug: "dubai",
    city: "Dubai",
    isBase: false,
    description:
      "We serve Dubai as part of our daily inter-emirate car lift network. Most of our Dubai passengers are professionals commuting to Abu Dhabi — whether you need a daily shared seat at 100 AED or a monthly plan with a fixed pickup time, we coordinate the driver and get you there on time. Pickup from all main Dubai areas.",
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
      {
        question: "How much is the car lift from Dubai to Abu Dhabi?",
        answer:
          "Shared seat: 100 AED per person, one way. Private car: 180 AED for the whole vehicle. Monthly plans are available at a lower per-trip rate. Contact us for a monthly quote based on your schedule.",
      },
      {
        question: "Do you offer car lift services within Dubai itself?",
        answer:
          "Our main Dubai service is the inter-emirate route between Dubai and Abu Dhabi. For trips within Dubai, we can arrange private car hire — contact us with your requirements.",
      },
      {
        question: "How do I book a car lift from Dubai to Abu Dhabi?",
        answer:
          "Call or WhatsApp us on +971 54 330 8261 with your pickup area in Dubai, your Abu Dhabi destination, and your preferred time. We confirm the seat and driver details within minutes.",
      },
    ],
    metadata: {
      title: "Car Lift Service Dubai to Abu Dhabi | Quick Car Lift Service",
      description:
        "Daily car lift from Dubai to Abu Dhabi — 100 AED sharing, 180 AED private. Pickup from Marina, Business Bay, JLT, Deira, Bur Dubai. Monthly commute plans available. Call +971 54 330 8261.",
    },
  },
  {
    slug: "ajman",
    city: "Ajman",
    isBase: false,
    description:
      "Ajman is part of our inter-emirate car lift network. We coordinate daily and monthly car lift trips between Ajman and Abu Dhabi, with pickup from all main Ajman areas including Al Nuaimiya, Al Rashidiya, and Hamriyah Free Zone. Ideal for professionals and families commuting to Abu Dhabi.",
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
      {
        question: "Do you offer a car lift from Ajman to Hamriyah Free Zone?",
        answer:
          "We primarily run the Ajman to Abu Dhabi route, with pickup available from the Hamriyah Free Zone area. If you need a trip within the Ajman or Sharjah area, contact us and we'll advise.",
      },
      {
        question: "How long is the journey from Ajman to Abu Dhabi?",
        answer:
          "The trip from Ajman to Abu Dhabi typically takes 2 to 2.5 hours depending on traffic and your exact pickup and drop-off locations. Morning peak hours may add extra time.",
      },
    ],
    metadata: {
      title: "Car Lift Service in Ajman | Quick Car Lift Service",
      description:
        "Car lift service in Ajman — daily and monthly commutes to Abu Dhabi. Pickup from Al Nuaimiya, Al Rashidiya, Hamriyah Free Zone. Private and shared trips. Call +971 54 330 8261.",
    },
  },
  {
    slug: "al-ain",
    city: "Al Ain",
    isBase: false,
    description:
      "Al Ain is part of our inter-emirate car lift network. We run daily and monthly commutes between Al Ain and Abu Dhabi for residents, students, and working professionals. Whether you need a one-off trip or a regular weekday seat, we plan the route and pickup around your schedule.",
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
      {
        question: "What is the car lift price from Al Ain to Abu Dhabi?",
        answer:
          "We quote based on your pickup in Al Ain and drop-off in Abu Dhabi. Contact us on call or WhatsApp +971 54 330 8261 for a personalised fare. Monthly plans are available at a fixed daily rate.",
      },
      {
        question: "Is there a car lift from Dubai to Al Ain?",
        answer:
          "We primarily operate the Abu Dhabi to Al Ain and Al Ain to Abu Dhabi routes. If you need a trip from Dubai to Al Ain, please contact us and we will advise on availability.",
      },
      {
        question: "How early can I be picked up in Al Ain for the Abu Dhabi commute?",
        answer:
          "We accommodate early morning pickups, typically from 5:00 AM onwards for passengers who need to reach Abu Dhabi before working hours. Share your required arrival time when booking.",
      },
    ],
    metadata: {
      title: "Car Lift Service in Al Ain | Quick Car Lift Service",
      description:
        "Car lift service in Al Ain — daily and monthly commutes to Abu Dhabi. Pickup from Al Jimi, Al Muwaiji, Tawam, Al Sarooj. Private and shared trips. Call +971 54 330 8261.",
    },
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs() {
  return locations.map((l) => l.slug);
}
