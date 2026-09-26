export type RouteFaq = {
  question: string;
  answer: string;
};

export type RoutePricing = {
  sharing: number;
  private: number;
  currency: string;
};

export type Route = {
  slug: string;
  origin: string;
  destination: string;
  description: string;
  serviceTypes: string[];
  pickupInfo: string;
  dropoffInfo: string;
  scheduling: string;
  pricing?: RoutePricing;
  faqs: RouteFaq[];
  relatedRoutes: string[];
  metadata: {
    title: string;
    description: string;
  };
};

export const routes: Route[] = [
  {
    slug: "abu-dhabi-to-dubai",
    origin: "Abu Dhabi",
    destination: "Dubai",
    description:
      "Direct car lift service from Abu Dhabi to Dubai for daily commuters, business travellers, and residents heading to Dubai for the day. We offer both single-trip and monthly plans on this route.",
    serviceTypes: ["daily-car-lift", "monthly-car-lift", "private-car-lift"],
    pickupInfo:
      "Pickup from most residential and business areas of Abu Dhabi, including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, the islands, and Musaffah.",
    dropoffInfo:
      "Drop-off in Downtown Dubai, Business Bay, Marina, JLT, Deira, Bur Dubai, and other major districts on request.",
    scheduling:
      "Morning commuter trips and return afternoon/evening trips are the most common. We also arrange trips outside standard hours based on availability.",
    pricing: {
      sharing: 100,
      private: 180,
      currency: "AED",
    },
    faqs: [
      {
        question: "How much does the Abu Dhabi to Dubai car lift cost?",
        answer:
          "Sharing seat: 100 AED per person. Private car (vehicle to yourself): 180 AED. Call or WhatsApp to confirm availability and book your seat.",
      },
      {
        question: "How long does the Abu Dhabi to Dubai trip take?",
        answer:
          "Trip time depends on traffic conditions and the time of day. We plan the pickup based on your desired arrival time in Dubai.",
      },
      {
        question:
          "Is a monthly Abu Dhabi to Dubai commute cheaper than daily rides?",
        answer:
          "Yes. A monthly plan usually gives you a lower per-trip cost and a consistent seat every working day.",
      },
      {
        question: "Can I book a return trip on the same day?",
        answer:
          "Yes. Share your return time and drop-off point at booking and we'll coordinate both legs.",
      },
    ],
    relatedRoutes: [
      "dubai-to-abu-dhabi",
      "abu-dhabi-to-ajman",
      "abu-dhabi-to-al-ain",
    ],
    metadata: {
      title: "Car Lift Abu Dhabi to Dubai — 100 AED Sharing | Quick Car Lift Service",
      description:
        "Car lift from Abu Dhabi to Dubai. Sharing seat 100 AED per person, private car 180 AED. Call or WhatsApp +971 54 330 8261 to book.",
    },
  },
  {
    slug: "dubai-to-abu-dhabi",
    origin: "Dubai",
    destination: "Abu Dhabi",
    description:
      "Direct car lift service from Dubai to Abu Dhabi for daily commuters and residents heading to the capital. Available as a single trip or as a monthly commute plan.",
    serviceTypes: ["daily-car-lift", "monthly-car-lift", "private-car-lift"],
    pickupInfo:
      "Pickup from Downtown Dubai, Business Bay, Marina, JLT, Deira, Bur Dubai, Al Barsha, and other main areas of Dubai on request.",
    dropoffInfo:
      "Drop-off across Abu Dhabi including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, the islands, Musaffah, and other main districts.",
    scheduling:
      "Morning trips are most popular for commuters. Return trips in the evening are available on request.",
    pricing: {
      sharing: 100,
      private: 180,
      currency: "AED",
    },
    faqs: [
      {
        question: "How much does the Dubai to Abu Dhabi car lift cost?",
        answer:
          "Sharing seat: 100 AED per person. Private car (vehicle to yourself): 180 AED. Call or WhatsApp to confirm availability and book your seat.",
      },
      {
        question:
          "Can I get a monthly Dubai to Abu Dhabi car lift for work?",
        answer:
          "Yes. Many of our monthly customers commute from Dubai to Abu Dhabi every working day at a fixed rate.",
      },
      {
        question: "Where in Dubai will you pick me up?",
        answer:
          "We pick up from most main residential and business areas in Dubai. Share your exact address at booking for confirmation.",
      },
      {
        question: "Can I bring luggage on the trip?",
        answer:
          "Yes. Please share the number and size of bags at booking so we can assign a suitable vehicle.",
      },
    ],
    relatedRoutes: [
      "abu-dhabi-to-dubai",
      "ajman-to-abu-dhabi",
      "al-ain-to-abu-dhabi",
    ],
    metadata: {
      title: "Car Lift Dubai to Abu Dhabi — 100 AED Sharing | Quick Car Lift Service",
      description:
        "Car lift from Dubai to Abu Dhabi. Sharing seat 100 AED per person, private car 180 AED. Call or WhatsApp +971 54 330 8261 to book.",
    },
  },
  {
    slug: "abu-dhabi-to-ajman",
    origin: "Abu Dhabi",
    destination: "Ajman",
    description:
      "Car lift service from Abu Dhabi to Ajman for residents, families, and business travellers heading to the northern emirates.",
    serviceTypes: ["daily-car-lift", "private-car-lift", "monthly-car-lift"],
    pickupInfo:
      "Pickup from most residential and business areas of Abu Dhabi including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, and Musaffah.",
    dropoffInfo:
      "Drop-off in main areas of Ajman including Al Nuaimiya, Al Rashidiya, Al Rawda, Al Mowaihat, and along the Ajman Corniche.",
    scheduling:
      "Both single-trip and return options are available. Please share your preferred pickup time and Ajman drop-off area when booking.",
    faqs: [
      {
        question: "How often do you run the Abu Dhabi to Ajman route?",
        answer:
          "The route runs on request. Because Ajman is farther than Dubai, we recommend booking in advance so we can secure the seat.",
      },
      {
        question: "Can I get a monthly Abu Dhabi to Ajman commute plan?",
        answer:
          "Yes. Monthly plans are possible on this route. Share your schedule and we'll propose a fixed rate.",
      },
      {
        question: "Can I book a private car for Abu Dhabi to Ajman?",
        answer:
          "Yes. Private trips work well for families and business travellers who prefer a direct, non-shared ride.",
      },
    ],
    relatedRoutes: [
      "ajman-to-abu-dhabi",
      "abu-dhabi-to-dubai",
      "abu-dhabi-to-al-ain",
    ],
    metadata: {
      title: "Car Lift Abu Dhabi to Ajman | Quick Car Lift Service",
      description:
        "Car lift service from Abu Dhabi to Ajman. Daily and private trips with a professional driver serving both cities.",
    },
  },
  {
    slug: "ajman-to-abu-dhabi",
    origin: "Ajman",
    destination: "Abu Dhabi",
    description:
      "Car lift service from Ajman to Abu Dhabi for daily commuters, families, and business travellers heading to the capital.",
    serviceTypes: ["daily-car-lift", "monthly-car-lift", "private-car-lift"],
    pickupInfo:
      "Pickup from most residential areas of Ajman including Al Nuaimiya, Al Rashidiya, Al Rawda, Al Mowaihat, and along the Corniche.",
    dropoffInfo:
      "Drop-off across Abu Dhabi including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, the islands, and Musaffah.",
    scheduling:
      "Early morning trips are most popular for commuters. Please book in advance to secure your seat.",
    faqs: [
      {
        question: "Do you run a daily Ajman to Abu Dhabi commute?",
        answer:
          "Yes. This is one of our regular monthly commute routes for professionals working in Abu Dhabi.",
      },
      {
        question:
          "What time should I leave Ajman to be in Abu Dhabi by morning?",
        answer:
          "Pickup times are usually scheduled to reach your Abu Dhabi drop-off before your working hours. We plan the trip around your required arrival time.",
      },
      {
        question:
          "Can I share the ride with a colleague from the same neighbourhood?",
        answer:
          "Yes. Shared rides for co-workers from Ajman to Abu Dhabi are welcome and usually cost less per person.",
      },
    ],
    relatedRoutes: [
      "abu-dhabi-to-ajman",
      "dubai-to-abu-dhabi",
      "al-ain-to-abu-dhabi",
    ],
    metadata: {
      title: "Car Lift Ajman to Abu Dhabi | Quick Car Lift Service",
      description:
        "Daily and monthly car lift service from Ajman to Abu Dhabi. Reliable commute for professionals, students, and families.",
    },
  },
  {
    slug: "abu-dhabi-to-al-ain",
    origin: "Abu Dhabi",
    destination: "Al Ain",
    description:
      "Car lift service from Abu Dhabi to Al Ain for families visiting relatives, business travellers, and residents heading to the garden city.",
    serviceTypes: ["daily-car-lift", "private-car-lift", "monthly-car-lift"],
    pickupInfo:
      "Pickup from most areas of Abu Dhabi including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, and Musaffah.",
    dropoffInfo:
      "Drop-off in main areas of Al Ain including Al Jimi, Al Muwaiji, Al Mutarad, Al Sarooj, Tawam, and Al Ain City Centre.",
    scheduling:
      "Both single-trip and return options are available. Weekend family trips and weekday commutes are common.",
    faqs: [
      {
        question: "Is Al Ain covered as a regular route?",
        answer:
          "Yes. Abu Dhabi to Al Ain is one of our regular inter-emirate routes, available for single trips, monthly commutes, and private hires.",
      },
      {
        question:
          "Can I book a private car for a family trip from Abu Dhabi to Al Ain?",
        answer:
          "Yes. Private trips are ideal for families and groups. Share your group size at booking so we can assign the right vehicle.",
      },
      {
        question: "How long does the trip take?",
        answer:
          "The trip time depends on traffic and your pickup location in Abu Dhabi. We plan the pickup around your desired arrival time.",
      },
    ],
    relatedRoutes: [
      "al-ain-to-abu-dhabi",
      "abu-dhabi-to-dubai",
      "abu-dhabi-to-ajman",
    ],
    metadata: {
      title: "Car Lift Abu Dhabi to Al Ain | Quick Car Lift Service",
      description:
        "Car lift service from Abu Dhabi to Al Ain. Daily, monthly, and private trips with a professional driver across both cities.",
    },
  },
  {
    slug: "al-ain-to-abu-dhabi",
    origin: "Al Ain",
    destination: "Abu Dhabi",
    description:
      "Car lift service from Al Ain to Abu Dhabi for daily commuters, students, and families heading to the capital.",
    serviceTypes: ["daily-car-lift", "monthly-car-lift", "private-car-lift"],
    pickupInfo:
      "Pickup from main areas of Al Ain including Al Jimi, Al Muwaiji, Al Mutarad, Al Sarooj, Tawam, and Al Ain City Centre.",
    dropoffInfo:
      "Drop-off across Abu Dhabi including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, the islands, and Musaffah.",
    scheduling:
      "Morning commuter trips are the most popular. Return trips in the afternoon and evening are available on request.",
    faqs: [
      {
        question: "Do you run a monthly Al Ain to Abu Dhabi commute?",
        answer:
          "Yes. This is one of our regular monthly commute plans for professionals and students.",
      },
      {
        question: "Where in Al Ain will you pick me up?",
        answer:
          "We pick up from most residential areas of Al Ain. Share your address at booking so we can confirm.",
      },
      {
        question: "Can I share the ride with other passengers?",
        answer:
          "Yes. Shared monthly plans are ideal for regular commuters on this route.",
      },
    ],
    relatedRoutes: [
      "abu-dhabi-to-al-ain",
      "dubai-to-abu-dhabi",
      "ajman-to-abu-dhabi",
    ],
    metadata: {
      title: "Car Lift Al Ain to Abu Dhabi | Quick Car Lift Service",
      description:
        "Daily and monthly car lift service from Al Ain to Abu Dhabi. Reliable commute with a professional driver.",
    },
  },
];

export function getRouteBySlug(slug: string) {
  return routes.find((r) => r.slug === slug);
}

export function getRouteSlugs() {
  return routes.map((r) => r.slug);
}
