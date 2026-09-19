export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoIsItFor: string[];
  howItWorks: { title: string; description: string }[];
  coverage: string;
  faqs: ServiceFaq[];
  relatedServices: string[];
  relatedLocations: string[];
  icon: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "daily-car-lift",
    title: "Daily Car Lift",
    shortDescription:
      "Pay-as-you-go one-way and return car lift rides across Abu Dhabi, Dubai, Ajman, and Al Ain.",
    fullDescription:
      "Our daily car lift service is designed for riders who need a dependable one-off or occasional ride within Abu Dhabi or across the emirates. Whether you're heading to work, the airport, a business meeting, or a family visit, we arrange a comfortable seat and a professional driver on the day and time that suit you.",
    whoIsItFor: [
      "Residents who need an occasional lift for work, appointments, or errands",
      "Airport and mall trips without the hassle of ride-hailing surge pricing",
      "Visitors staying in the UAE who need short-term transport",
      "Anyone travelling between Abu Dhabi and Dubai, Ajman, or Al Ain on a specific day",
    ],
    howItWorks: [
      {
        title: "Share your trip",
        description:
          "Call, WhatsApp, or fill in the booking form with your pickup, drop-off, date, and preferred time.",
      },
      {
        title: "Get a confirmation",
        description:
          "We confirm the seat, share the fare, and coordinate the driver details.",
      },
      {
        title: "Ride and pay",
        description:
          "Meet the driver at the agreed pickup point and pay as arranged. Simple and hassle-free.",
      },
    ],
    coverage:
      "Available within Abu Dhabi and across all four service areas: Abu Dhabi, Dubai, Ajman, and Al Ain.",
    faqs: [
      {
        question: "How far in advance should I book a daily car lift?",
        answer:
          "We recommend booking at least a few hours before your trip so we can lock in a seat and driver. Same-day requests are often possible depending on availability.",
      },
      {
        question: "Can I book a return ride on the same day?",
        answer:
          "Yes. Just share your return time and pickup point when you book, and we'll coordinate both legs of the trip.",
      },
      {
        question: "Do you cover early morning and late night trips?",
        answer:
          "We accommodate early and late trips where possible, especially for airport transfers and shift-based work. Please share your timing when you enquire.",
      },
    ],
    relatedServices: [
      "monthly-car-lift",
      "private-car-lift",
      "city-to-city-transportation",
    ],
    relatedLocations: ["abu-dhabi", "dubai", "ajman", "al-ain"],
    icon: "calendar-day",
    metadata: {
      title: "Daily Car Lift Service in Abu Dhabi | Quick Car Lift Service",
      description:
        "Reliable daily car lift service across Abu Dhabi, Dubai, Ajman, and Al Ain. Book a one-way or return ride with a professional driver at your preferred time.",
    },
  },
  {
    slug: "monthly-car-lift",
    title: "Monthly Car Lift",
    shortDescription:
      "Fixed monthly car lift subscriptions for daily commuters between home and work.",
    fullDescription:
      "Our monthly car lift is a shared or private commute plan that gets you between home and work on a fixed schedule, every working day, at a predictable monthly rate. Ideal for employees, students, and residents who want to stop worrying about parking, fuel, or ride-hailing surge pricing.",
    whoIsItFor: [
      "Daily commuters between Abu Dhabi and Dubai (and vice versa)",
      "Employees working set shifts who need a consistent ride",
      "Students and interns travelling to the same location each day",
      "Anyone who prefers a fixed monthly transport cost",
    ],
    howItWorks: [
      {
        title: "Tell us your route",
        description:
          "Share your pickup, drop-off, working days, and preferred pickup time.",
      },
      {
        title: "Get a monthly quote",
        description:
          "We confirm availability on the route and share a fixed monthly rate.",
      },
      {
        title: "Ride daily",
        description:
          "Your driver picks you up at the agreed spot every working day, on schedule.",
      },
    ],
    coverage:
      "Popular for daily routes such as Abu Dhabi to Dubai, Dubai to Abu Dhabi, Ajman to Abu Dhabi, and Al Ain to Abu Dhabi. Available within any of the four service areas.",
    faqs: [
      {
        question: "What is included in a monthly car lift plan?",
        answer:
          "A fixed number of working-day trips per month between your agreed pickup and drop-off points, at your preferred time.",
      },
      {
        question: "What happens on public holidays or if I'm off work?",
        answer:
          "Please share your working schedule at signup. We tailor plans around your working days and can pause or adjust for planned leave.",
      },
      {
        question: "Can I share the ride with colleagues?",
        answer:
          "Yes. Shared monthly plans are available for co-workers on the same route and schedule, usually at a lower per-person rate.",
      },
    ],
    relatedServices: [
      "daily-car-lift",
      "employee-transportation",
      "city-to-city-transportation",
    ],
    relatedLocations: ["abu-dhabi", "dubai", "ajman", "al-ain"],
    icon: "calendar-month",
    metadata: {
      title: "Monthly Car Lift Subscription | Quick Car Lift Service",
      description:
        "Fixed monthly car lift plans for daily commuters across Abu Dhabi, Dubai, Ajman, and Al Ain. Predictable pricing, consistent driver, on-time pickup.",
    },
  },
  {
    slug: "office-transportation",
    title: "Office Transportation",
    shortDescription:
      "Scheduled office pickup and drop-off for teams working across Abu Dhabi and neighbouring emirates.",
    fullDescription:
      "Our office transportation service moves your team between home and the office reliably, every working day. We coordinate directly with HR, admin, or facilities teams to build a schedule that fits your shift patterns and headcount.",
    whoIsItFor: [
      "HR, admin, and facilities teams arranging staff transport",
      "SMEs and corporates without their own transport fleet",
      "Companies expanding to new locations and needing a fast rollout",
      "Businesses looking to reduce car parking pressure and improve punctuality",
    ],
    howItWorks: [
      {
        title: "Share your requirements",
        description:
          "Tell us your office location, working hours, and the number of staff who need transport.",
      },
      {
        title: "Get a route plan",
        description:
          "We propose pickup points, timings, and a monthly rate that fits your team.",
      },
      {
        title: "Roll out and adjust",
        description:
          "We start the service and refine pickup points as your team grows or moves.",
      },
    ],
    coverage:
      "Available for offices across Abu Dhabi, Dubai, Ajman, and Al Ain, including inter-emirate routes.",
    faqs: [
      {
        question: "Do you invoice the company directly?",
        answer:
          "Yes. We can invoice the company monthly for the agreed staff transport plan.",
      },
      {
        question: "Can you handle multiple shifts?",
        answer:
          "Yes. We build separate schedules for morning, evening, and night shifts as needed.",
      },
      {
        question: "How many staff can you transport?",
        answer:
          "We tailor the plan to your team size and preferred vehicle type. Please share your headcount so we can propose an appropriate setup.",
      },
    ],
    relatedServices: [
      "employee-transportation",
      "monthly-car-lift",
      "city-to-city-transportation",
    ],
    relatedLocations: ["abu-dhabi", "dubai", "ajman", "al-ain"],
    icon: "building-office",
    metadata: {
      title: "Office Transportation Service | Quick Car Lift Service",
      description:
        "Corporate office pickup and drop-off across Abu Dhabi, Dubai, Ajman, and Al Ain. Reliable staff transport plans with fixed monthly billing.",
    },
  },
  {
    slug: "employee-transportation",
    title: "Employee Transportation",
    shortDescription:
      "Shift-based employee transport for shops, restaurants, hotels, sites, and warehouses.",
    fullDescription:
      "Our employee transportation service is designed for businesses that run on shifts and need dependable pickup and drop-off for staff at all hours. We coordinate schedules with supervisors so employees arrive on time and get home safely.",
    whoIsItFor: [
      "Retail, hospitality, and F&B businesses with rotating shifts",
      "Construction and industrial sites needing site pickup and drop-off",
      "Logistics and warehouse operations running around the clock",
      "Any employer arranging transport as a staff benefit",
    ],
    howItWorks: [
      {
        title: "Share the shift schedule",
        description:
          "Tell us the shifts, headcount per shift, and pickup/drop-off locations.",
      },
      {
        title: "Confirm the plan",
        description:
          "We propose vehicle allocation, timing, and monthly pricing for approval.",
      },
      {
        title: "Start service",
        description:
          "Employees get consistent, reliable transport with a single point of contact for any changes.",
      },
    ],
    coverage:
      "Serving employers across Abu Dhabi, Dubai, Ajman, and Al Ain, including inter-emirate staff commutes.",
    faqs: [
      {
        question: "Can you handle early morning and late night shifts?",
        answer:
          "Yes. We schedule around your shift start and end times, including overnight routes.",
      },
      {
        question: "Do you provide a dedicated coordinator?",
        answer:
          "Yes. We give you a single point of contact to handle schedule changes, staff additions, or route adjustments.",
      },
      {
        question: "What if a staff member misses a pickup?",
        answer:
          "We follow an agreed process with your supervisor and can adjust cutoff times so no one is stranded.",
      },
    ],
    relatedServices: [
      "office-transportation",
      "monthly-car-lift",
      "city-to-city-transportation",
    ],
    relatedLocations: ["abu-dhabi", "dubai", "ajman", "al-ain"],
    icon: "users",
    metadata: {
      title: "Employee Transportation Service | Quick Car Lift Service",
      description:
        "Shift-based employee transportation across Abu Dhabi, Dubai, Ajman, and Al Ain. Reliable staff pickup and drop-off for retail, hospitality, and industry.",
    },
  },
  {
    slug: "private-car-lift",
    title: "Private Car Lift",
    shortDescription:
      "Dedicated private car lift with a professional driver for individuals and families.",
    fullDescription:
      "Our private car lift service gives you a dedicated vehicle and driver for the duration of your trip. It's ideal for family outings, business meetings across the emirates, airport runs, and any journey where you'd rather not share the ride.",
    whoIsItFor: [
      "Families who want a private ride for the day",
      "Business travellers with meetings in multiple locations",
      "Visitors touring Abu Dhabi, Dubai, or Al Ain",
      "Anyone who prefers a private, direct trip over a shared ride",
    ],
    howItWorks: [
      {
        title: "Book the trip",
        description:
          "Share your pickup, drop-off, date, time, and any additional stops.",
      },
      {
        title: "Confirm the vehicle",
        description:
          "We assign a driver and vehicle appropriate to your group size and share the details.",
      },
      {
        title: "Enjoy the ride",
        description:
          "Your driver takes you where you need to go, on your schedule.",
      },
    ],
    coverage:
      "Available across Abu Dhabi, Dubai, Ajman, and Al Ain, including multi-stop and inter-emirate itineraries.",
    faqs: [
      {
        question: "Can I add multiple stops on a private trip?",
        answer:
          "Yes. Share the itinerary when you book so we can plan the timing and quote accordingly.",
      },
      {
        question: "Is the driver available for a half-day or full-day hire?",
        answer:
          "Yes. We offer hourly, half-day, and full-day private car lift options depending on your plans.",
      },
      {
        question: "Do you handle airport pickups and drop-offs?",
        answer:
          "Yes. Share your flight details and we'll plan the pickup time around your arrival or departure.",
      },
    ],
    relatedServices: [
      "daily-car-lift",
      "city-to-city-transportation",
      "office-transportation",
    ],
    relatedLocations: ["abu-dhabi", "dubai", "ajman", "al-ain"],
    icon: "user",
    metadata: {
      title: "Private Car Lift with Driver | Quick Car Lift Service",
      description:
        "Book a private car lift with a professional driver across Abu Dhabi, Dubai, Ajman, and Al Ain. Perfect for families, business trips, and airport runs.",
    },
  },
  {
    slug: "city-to-city-transportation",
    title: "City-to-City Transportation",
    shortDescription:
      "Direct inter-emirate transport between Abu Dhabi, Dubai, Ajman, and Al Ain.",
    fullDescription:
      "Our city-to-city transportation service focuses on inter-emirate travel: Abu Dhabi to Dubai, Dubai to Abu Dhabi, Abu Dhabi to Ajman, Ajman to Abu Dhabi, Abu Dhabi to Al Ain, and Al Ain to Abu Dhabi. Whether you need a daily commute or a one-off return trip, we plan the route to keep you on time.",
    whoIsItFor: [
      "Daily commuters between Abu Dhabi and Dubai",
      "Business travellers with meetings in another emirate",
      "Families visiting relatives across the UAE",
      "Anyone travelling between Abu Dhabi and Ajman or Al Ain",
    ],
    howItWorks: [
      {
        title: "Choose your route",
        description:
          "Pick the origin and destination city and let us know your date and time.",
      },
      {
        title: "Confirm the seat",
        description:
          "We confirm the vehicle, pickup point, and expected duration for the trip.",
      },
      {
        title: "Travel",
        description:
          "Meet your driver at the pickup point and get to your destination directly.",
      },
    ],
    coverage:
      "Popular routes include Abu Dhabi to Dubai, Dubai to Abu Dhabi, Abu Dhabi to Ajman, Ajman to Abu Dhabi, Abu Dhabi to Al Ain, and Al Ain to Abu Dhabi.",
    faqs: [
      {
        question: "How long does the Abu Dhabi to Dubai trip usually take?",
        answer:
          "Typical trip time depends on traffic and time of day. We plan pickup based on your desired arrival time.",
      },
      {
        question: "Can I bring luggage for the trip?",
        answer:
          "Yes. Please let us know the number and size of bags at booking so we can allocate the right vehicle.",
      },
      {
        question: "Do you offer both shared and private inter-emirate rides?",
        answer:
          "Yes. Shared seat plans are ideal for regular commuters, while private trips work best for families or business travellers.",
      },
    ],
    relatedServices: [
      "daily-car-lift",
      "monthly-car-lift",
      "private-car-lift",
    ],
    relatedLocations: ["abu-dhabi", "dubai", "ajman", "al-ain"],
    icon: "route",
    metadata: {
      title: "City-to-City Transportation UAE | Quick Car Lift Service",
      description:
        "Inter-emirate transport between Abu Dhabi, Dubai, Ajman, and Al Ain. Direct daily and one-off trips with a professional driver.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return services.map((s) => s.slug);
}
