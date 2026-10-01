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
  image?: string;
  imageAlt?: string;
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
      "Direct car lift service from Abu Dhabi to Dubai for daily commuters, business travellers, and families. Shared seats from 100 AED per person. Private car 180 AED. We serve Khalifa City, Mohammed Bin Zayed City, Abu Dhabi City, and all main residential areas. Call or WhatsApp to book.",
    serviceTypes: ["daily-car-lift", "monthly-car-lift", "private-car-lift"],
    pickupInfo:
      "We pick up from all major areas of Abu Dhabi including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, Al Raha Beach, Musaffah, Yas Island, Saadiyat Island, Al Reem Island, Al Maryah Island, Al Bateen, Al Mushrif, and Al Zahiyah. Share your address at booking and we'll confirm.",
    dropoffInfo:
      "We drop off across Dubai including Downtown Dubai, Business Bay, Dubai Marina, JBR, JLT, Deira, Bur Dubai, Al Barsha, Al Quoz, Silicon Oasis, International City, Al Nahda Dubai, Al Furjan, Dubai Hills, and Discovery Gardens.",
    scheduling:
      "Morning commuter trips from Abu Dhabi are the most popular — most pickups depart between 5:30 AM and 8:00 AM. Return trips from Dubai to Abu Dhabi in the evenings are available from around 4:30 PM onwards. We also accommodate early morning and late night trips where possible.",
    pricing: {
      sharing: 100,
      private: 180,
      currency: "AED",
    },
    image: "/images/quick-carlift-service-lexus-es-abu-dhabi-to-dubai-car-lift-rear-side.webp",
    imageAlt: "Lexus ES car lift from Abu Dhabi to Dubai — Quick Car Lift Service",
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
      {
        question: "How long does the Abu Dhabi to Dubai car lift take?",
        answer:
          "The trip takes approximately 1 hour 15 minutes to 1 hour 45 minutes depending on your pickup location in Abu Dhabi, your Dubai drop-off, and traffic. Early morning and evening peak hours can add 15-30 minutes. We plan your pickup time around your required arrival in Dubai.",
      },
      {
        question: "What is the Abu Dhabi to Dubai car lift price?",
        answer:
          "Shared seat: 100 AED per person, one way. Private car: 180 AED for the whole vehicle, one way. Monthly commute plans are available at a fixed daily rate — contact us for a personalised quote.",
      },
      {
        question: "Can I book a same-day Abu Dhabi to Dubai car lift?",
        answer:
          "Yes. Same-day bookings are often available depending on driver availability. We recommend booking at least 2-3 hours in advance. For guaranteed morning pickups, book the evening before.",
      },
      {
        question: "Do you offer a monthly Abu Dhabi to Dubai commute for professionals?",
        answer:
          "Yes. A monthly Abu Dhabi to Dubai car lift plan gives you a fixed daily pickup time, a consistent driver, and a predictable monthly cost. Ideal for employees who commute every working day.",
      },
      {
        question: "Is the Abu Dhabi to Dubai car pool a shared or private ride?",
        answer:
          "We offer both. A sharing seat at 100 AED means you travel with other passengers on the same route. A private car at 180 AED gives you the whole vehicle to yourself — ideal if you want a direct, non-stop trip.",
      },
      {
        question: "Do you pick up from Khalifa City and Mohammed Bin Zayed City for the Dubai commute?",
        answer:
          "Yes. Khalifa City and Mohammed Bin Zayed City are two of our most common Abu Dhabi pickup areas for the Dubai route. We also cover Al Raha, Musaffah, and Abu Dhabi City.",
      },
      {
        question: "Do you also offer a private car hire from Abu Dhabi to Dubai?",
        answer:
          "Yes. Private car hire at 180 AED gives you a dedicated vehicle for the trip with no other passengers. Ideal for families, business meetings, or when you need to travel with luggage.",
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
        "Car lift from Abu Dhabi to Dubai. Sharing seat 100 AED, private car 180 AED. Daily and monthly plans. Pickup from Khalifa City, MBZ, Abu Dhabi City. Call +971 54 330 8261.",
    },
  },
  {
    slug: "dubai-to-abu-dhabi",
    origin: "Dubai",
    destination: "Abu Dhabi",
    description:
      "Direct car lift service from Dubai to Abu Dhabi for daily commuters, professionals, and families. Whether you need a single trip or a fixed monthly commute, we arrange the driver, confirm your seat, and keep you on time. Shared seats start at 100 AED per person. Private car 180 AED. Call or WhatsApp +971 54 330 8261 to book.",
    serviceTypes: ["daily-car-lift", "monthly-car-lift", "private-car-lift"],
    pickupInfo:
      "We pick up from all major areas of Dubai including Downtown Dubai, Business Bay, Dubai Marina, JBR, JLT, Deira, Bur Dubai, Al Barsha, Al Quoz, Silicon Oasis, International City, Al Nahda Dubai, Al Furjan, Dubai Hills, and Discovery Gardens. Share your address at booking for confirmation.",
    dropoffInfo:
      "We drop off across Abu Dhabi including Abu Dhabi City, Khalifa City, Mohammed Bin Zayed City, Al Raha Beach, Musaffah, Yas Island, Saadiyat Island, Al Reem Island, Al Maryah Island, Al Bateen, Al Mushrif, and Al Zahiyah. If your area is not listed, contact us — we likely cover it.",
    scheduling:
      "Morning trips are most popular for office commuters — pickups typically depart Dubai between 5:30 AM and 8:00 AM depending on your location and required arrival time in Abu Dhabi. Evening return trips from Abu Dhabi to Dubai are available from around 4:00 PM onwards. Monthly plans run every working day on a fixed schedule.",
    pricing: {
      sharing: 100,
      private: 180,
      currency: "AED",
    },
    image: "/images/quick-carlift-service-lexus-es-dubai-abu-dhabi-car-lift-front-angle.webp",
    imageAlt: "Lexus ES car lift from Dubai to Abu Dhabi — Quick Car Lift Service",
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
      {
        question: "How long does the Dubai to Abu Dhabi car lift take?",
        answer:
          "The trip typically takes 1 hour 15 minutes to 1 hour 45 minutes depending on your pickup location in Dubai, drop-off in Abu Dhabi, and traffic conditions. Morning peak can add 15-30 minutes. We plan your pickup time to ensure you arrive before your working hours.",
      },
      {
        question: "What is the Dubai to Abu Dhabi car lift price?",
        answer:
          "Sharing seat: 100 AED per person, one way. Private car (the whole vehicle to yourself): 180 AED one way. Monthly commute plans offer a fixed rate per working day — contact us for a quote based on your schedule.",
      },
      {
        question: "Do you offer a daily car lift from Dubai to Abu Dhabi for office workers?",
        answer:
          "Yes. Our daily car lift is designed for professionals who commute between Dubai and Abu Dhabi regularly. You can book day by day or sign up for a monthly plan with a fixed pickup time and consistent driver.",
      },
      {
        question: "Is a Dubai to Abu Dhabi car pool cheaper than driving yourself?",
        answer:
          "For most commuters, yes. When you add up fuel, Salik toll charges, and parking fees in Abu Dhabi, sharing a car lift at 100 AED per trip often works out cheaper than driving. Monthly plans reduce the per-trip cost further.",
      },
      {
        question: "Do you run the Dubai to Abu Dhabi route every day including weekends?",
        answer:
          "Regular commuter trips run Monday to Saturday. Weekend and Friday trips are available on request. Please book in advance for weekend travel as availability is limited.",
      },
      {
        question: "Can I book a monthly Dubai to Abu Dhabi car lift subscription?",
        answer:
          "Yes. Our monthly car lift is one of our most popular plans for Dubai to Abu Dhabi commuters. You get a fixed daily pickup time, a consistent driver, and a predictable monthly rate. Contact us with your pickup area, drop-off, and working days to get a quote.",
      },
      {
        question: "Do you pick up from Dubai Marina and JBR for the Abu Dhabi commute?",
        answer:
          "Yes. Dubai Marina and JBR are two of our regular pickup areas for the Dubai to Abu Dhabi route. We also cover JLT, Al Barsha, Discovery Gardens, and other nearby communities.",
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
        "Shared car lift Dubai to Abu Dhabi — 100 AED per person. Private car 180 AED. Daily and monthly commute plans. Pickup from Marina, JLT, Business Bay, Deira. Call +971 54 330 8261.",
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
    image: "/images/quick-carlift-service-kia-optima-shared-carpool-abu-dhabi.webp",
    imageAlt: "Kia Optima shared carpool car lift from Abu Dhabi to Ajman",
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
      {
        question: "How long does the Abu Dhabi to Ajman trip take?",
        answer:
          "The trip from Abu Dhabi to Ajman takes approximately 2 to 2.5 hours depending on traffic and your pickup location in Abu Dhabi.",
      },
      {
        question: "Do you cover Abu Dhabi to Ajman including Hamriyah area?",
        answer:
          "Yes. We drop off in the Hamriyah Free Zone area and other main areas of Ajman. Share your exact drop-off address when booking.",
      },
      {
        question: "What is the fare for Abu Dhabi to Ajman car lift?",
        answer:
          "We quote based on your pickup and drop-off details. Contact us on call or WhatsApp +971 54 330 8261 for a fare estimate.",
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
      "Pickup from residential areas of Ajman including Al Nuaimiya, Al Rashidiya, Al Rawda, Al Jurf, Al Mowaihat, Al Hamidiyah, Ajman Corniche, and Hamriyah Free Zone. Share your address at booking for confirmation.",
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
      {
        question: "How much does the Ajman to Abu Dhabi car lift cost?",
        answer:
          "We quote based on your specific pickup and drop-off. Contact us with your details and we will share the fare. Monthly commute plans are available at a fixed daily rate.",
      },
      {
        question: "Do you pick up from Hamriyah Free Zone for the Abu Dhabi route?",
        answer:
          "Yes. We serve the Hamriyah Free Zone area in Ajman. If you work or live near Hamriyah, share your address at booking and we will confirm pickup.",
      },
      {
        question: "How long does the Ajman to Abu Dhabi trip take?",
        answer:
          "The trip from Ajman to Abu Dhabi takes approximately 2 to 2.5 hours depending on traffic. Morning peak hours can extend the journey. We plan your departure time around your required arrival in Abu Dhabi.",
      },
      {
        question: "Can I get a daily car lift from Ajman to Abu Dhabi for work?",
        answer:
          "Yes. Daily and monthly Ajman to Abu Dhabi car lift plans are available. Monthly plans are ideal for professionals commuting every working day at a fixed rate.",
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
        "Car lift service from Ajman to Abu Dhabi. Daily and monthly commute plans. Pickup from Al Nuaimiya, Al Rashidiya, Hamriyah Free Zone. Call +971 54 330 8261.",
    },
  },
  {
    slug: "abu-dhabi-to-al-ain",
    origin: "Abu Dhabi",
    destination: "Al Ain",
    description:
      "Car lift service from Abu Dhabi to Al Ain for families visiting relatives, business travellers, students, and residents. Available as a single trip or monthly commute. We pick up from all main Abu Dhabi areas and drop off across Al Ain.",
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
      {
        question: "How much does the Abu Dhabi to Al Ain car lift cost?",
        answer:
          "We provide a personalised fare based on your Abu Dhabi pickup and Al Ain drop-off. Contact us on call or WhatsApp +971 54 330 8261 for a quick quote.",
      },
      {
        question: "How long does the Abu Dhabi to Al Ain trip take?",
        answer:
          "The trip from Abu Dhabi to Al Ain typically takes 1.5 to 2 hours depending on traffic and your pickup and drop-off locations. We plan the departure time around your needed arrival in Al Ain.",
      },
      {
        question: "Do you offer a car lift from Dubai to Al Ain?",
        answer:
          "We primarily serve the Abu Dhabi to Al Ain route. If you need a trip from Dubai to Al Ain, please contact us on +971 54 330 8261 and we will advise on availability.",
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
        "Car lift from Abu Dhabi to Al Ain. Daily and monthly trips for commuters and families. Pickup from Khalifa City, Abu Dhabi City, MBZ. Call +971 54 330 8261.",
    },
  },
  {
    slug: "al-ain-to-abu-dhabi",
    origin: "Al Ain",
    destination: "Abu Dhabi",
    description:
      "Car lift service from Al Ain to Abu Dhabi for daily commuters, students, and families. We serve all main areas of Al Ain and drop off across Abu Dhabi city, Khalifa City, Mohammed Bin Zayed City, and beyond. Book a single trip or a monthly commute plan.",
    serviceTypes: ["daily-car-lift", "monthly-car-lift", "private-car-lift"],
    pickupInfo:
      "Pickup from the main residential and commercial areas of Al Ain including Al Ain City Centre, Al Jimi Mall area, Al Muwaiji, Al Mutarad, Al Sarooj, Al Foah, Al Yahar, Tawam, and other Al Ain districts. Share your address at booking for confirmation.",
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
      {
        question: "How much does the Al Ain to Abu Dhabi car lift cost?",
        answer:
          "We provide a personalised quote based on your pickup area in Al Ain and your drop-off in Abu Dhabi. Contact us on call or WhatsApp +971 54 330 8261 for an instant fare.",
      },
      {
        question: "How long does the Al Ain to Abu Dhabi trip take?",
        answer:
          "The drive from Al Ain to Abu Dhabi typically takes around 1.5 to 2 hours depending on your pickup location, drop-off point, and traffic conditions. We schedule your pickup to arrive on time.",
      },
      {
        question: "Do you offer a monthly Al Ain to Abu Dhabi commute plan?",
        answer:
          "Yes. A monthly commute plan from Al Ain to Abu Dhabi gives you a consistent daily pickup time and a predictable monthly rate — ideal for professionals and students who travel this route every working day.",
      },
      {
        question: "Can students use the Al Ain to Abu Dhabi car lift?",
        answer:
          "Yes. Many of our Al Ain to Abu Dhabi passengers are students and young professionals. The shared car lift is an affordable and comfortable way to commute without the stress of driving or waiting for public transport.",
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
        "Car lift service from Al Ain to Abu Dhabi. Daily commutes, monthly plans, and private trips. Pickup from Al Jimi, Al Muwaiji, Tawam, Al Sarooj. Call +971 54 330 8261.",
    },
  },
];

export function getRouteBySlug(slug: string) {
  return routes.find((r) => r.slug === slug);
}

export function getRouteSlugs() {
  return routes.map((r) => r.slug);
}
