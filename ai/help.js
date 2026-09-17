export const HELP_CONTACTS = [
  {
    id: "emergency-112",
    name: "Emergency Response Support System",
    shortName: "Emergency",
    phone: "112",
    availability: "Police, fire, ambulance and urgent safety response",
    bestFor: [
      "Immediate danger",
      "Violence",
      "Accident",
      "Medical emergency",
      "Missing person"
    ],
    categories: [
      "police",
      "relationship",
      "accident",
      "medical",
      "criminal",
      "senior",
      "rights"
    ],
    website: "https://112.gov.in/",
    source: "https://112.gov.in/about"
  },
  {
    id: "cyber-1930",
    name: "National Cyber Crime Helpline",
    shortName: "Cyber Crime",
    phone: "1930",
    availability: "Cyber financial fraud and online crime reporting",
    bestFor: [
      "UPI fraud",
      "OTP scam",
      "Account hack",
      "Sextortion",
      "Fake profile"
    ],
    categories: [
      "cyber_fraud",
      "privacy",
      "banking"
    ],
    website: "https://cybercrime.gov.in/",
    source: "https://missionshakti.wcd.gov.in/contact"
  },
  {
    id: "legal-aid-15100",
    name: "NALSA Free Legal Aid Helpline",
    shortName: "Legal Aid",
    phone: "15100",
    availability: "Free legal aid, legal advice and nearest legal services institution",
    bestFor: [
      "Legal aid",
      "Victim support",
      "Women and children",
      "SC/ST matters",
      "Low-income applicants"
    ],
    categories: [
      "general",
      "police",
      "relationship",
      "workplace",
      "student",
      "property",
      "senior",
      "rights",
      "criminal",
      "accident",
      "medical"
    ],
    website: "https://nalsa.gov.in/",
    source: "https://nalsa.gov.in/promoting-inclusive-legal-system/"
  },
  {
    id: "women-181",
    name: "Women Helpline",
    shortName: "Women Help",
    phone: "181",
    availability: "Women in distress, violence, safety support and referral",
    bestFor: [
      "Domestic violence",
      "Dowry harassment",
      "Stalking",
      "Workplace sexual harassment",
      "Safe shelter"
    ],
    categories: [
      "relationship",
      "workplace",
      "police",
      "cyber_fraud",
      "rights"
    ],
    website: "https://missionshakti.wcd.gov.in/",
    source: "https://missionshakti.wcd.gov.in/contact"
  },
  {
    id: "child-1098",
    name: "Child Helpline",
    shortName: "Child Help",
    phone: "1098",
    availability: "Children in distress, missing children and child protection support",
    bestFor: [
      "Missing child",
      "Child abuse",
      "Child labour",
      "Runaway child",
      "Unsafe child"
    ],
    categories: [
      "student",
      "police",
      "relationship",
      "rights"
    ],
    website: "https://missionshakti.wcd.gov.in/",
    source: "https://missionshakti.wcd.gov.in/contact"
  },
  {
    id: "consumer-1915",
    name: "National Consumer Helpline",
    shortName: "Consumer",
    phone: "1915",
    secondaryPhone: "1800 11 4000",
    whatsapp: "8800001915",
    email: "nch-ca@gov.in",
    availability: "Consumer grievances, refunds, deficient services and product complaints",
    bestFor: [
      "Refund",
      "Warranty denial",
      "Defective product",
      "Bad service",
      "Ecommerce complaint"
    ],
    categories: [
      "consumer",
      "housing",
      "insurance",
      "medical",
      "banking"
    ],
    website: "https://consumerhelpline.gov.in/",
    source: "https://consumerhelpline.gov.in/public/index.php/contact"
  },
  {
    id: "tele-manas-14416",
    name: "Tele MANAS Mental Health Support",
    shortName: "Mental Health",
    phone: "14416",
    availability: "Mental health support for crisis, distress and counselling referral",
    bestFor: [
      "Severe distress",
      "Panic",
      "Self-harm thoughts",
      "Trauma after violence",
      "Counselling support"
    ],
    categories: [
      "general",
      "relationship",
      "police",
      "senior",
      "student"
    ],
    website: "https://telemanas.mohfw.gov.in/",
    source: "https://missionshakti.wcd.gov.in/contact"
  }
];

export const MAP_HELP_OPTIONS = [
  {
    id: "legal-aid",
    label: "Legal aid",
    query: "District Legal Services Authority near me",
    categories: ["general"]
  },
  {
    id: "police",
    label: "Police station",
    query: "police station near me",
    categories: ["police", "criminal", "relationship", "senior", "rights"]
  },
  {
    id: "cyber-police",
    label: "Cyber police",
    query: "cyber crime police station near me",
    categories: ["cyber_fraud", "privacy", "banking"]
  },
  {
    id: "consumer-forum",
    label: "Consumer forum",
    query: "District Consumer Commission near me",
    categories: ["consumer", "insurance", "medical", "housing"]
  },
  {
    id: "women-help",
    label: "Women help centre",
    query: "One Stop Centre women help near me",
    categories: ["relationship", "workplace", "rights"]
  },
  {
    id: "hospital",
    label: "Hospital",
    query: "hospital emergency near me",
    categories: ["medical", "accident", "police"]
  },
  {
    id: "rera",
    label: "RERA office",
    query: "RERA authority office near me",
    categories: ["housing"]
  },
  {
    id: "labour",
    label: "Labour office",
    query: "labour commissioner office near me",
    categories: ["workplace"]
  },
  {
    id: "rto",
    label: "RTO office",
    query: "RTO office near me",
    categories: ["traffic", "accident"]
  },
  {
    id: "passport",
    label: "Passport office",
    query: "Regional Passport Office near me",
    categories: ["passport"]
  }
];

const DEFAULT_OFFICIAL_SOURCES = [
  { label: "India Code (central laws)", url: "https://indiacode.gov.in/" },
  { label: "NALSA legal-aid services", url: "https://nalsa.gov.in/" }
];

const CATEGORY_OFFICIAL_SOURCES = {
  banking: [{ label: "Reserve Bank of India", url: "https://www.rbi.org.in/" }],
  business: [{ label: "Ministry of Corporate Affairs", url: "https://www.mca.gov.in/" }],
  consumer: [{ label: "National Consumer Helpline", url: "https://consumerhelpline.gov.in/" }],
  cyber_fraud: [{ label: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in/" }],
  elections: [{ label: "Election Commission of India", url: "https://eci.gov.in/" }],
  immigration: [{ label: "Bureau of Immigration", url: "https://boi.gov.in/" }],
  intellectual_property: [{ label: "IP India", url: "https://ipindia.gov.in/" }],
  passport: [{ label: "Passport Seva", url: "https://passportindia.gov.in/" }],
  tax: [{ label: "Income Tax e-Filing", url: "https://www.incometax.gov.in/" }],
  workplace: [{ label: "Ministry of Labour & Employment", url: "https://labour.gov.in/" }]
};

const DEFAULT_CONTACT_IDS = [
  "emergency-112",
  "legal-aid-15100",
  "cyber-1930",
  "consumer-1915"
];

export function getHelpContactsForCase(legalCase) {

  const category = legalCase?.category || "general";
  const matched = HELP_CONTACTS.filter((contact) => {
    return contact.categories.includes(category);
  });

  const defaults = DEFAULT_CONTACT_IDS
    .map((id) => HELP_CONTACTS.find((contact) => contact.id === id))
    .filter(Boolean);

  return uniqueById([...matched, ...defaults]).slice(0, 5);
}

export function getMapOptionsForCase(legalCase) {

  if (!legalCase) {
    return MAP_HELP_OPTIONS.slice(0, 6);
  }

  const category = legalCase?.category || "general";
  const matched = MAP_HELP_OPTIONS.filter((option) => {
    return option.categories.includes(category) || option.categories.includes("general");
  });

  return uniqueById(matched).slice(0, 5);
}

export function getOfficialSourcesForCase(legalCase) {
  const category = legalCase?.category || "general";
  return [...(CATEGORY_OFFICIAL_SOURCES[category] || []), ...DEFAULT_OFFICIAL_SOURCES].slice(0, 3);
}

export function createMapSearchUrl(query, coordinates) {

  const locationQuery = coordinates
    ? `${query} near ${coordinates.latitude},${coordinates.longitude}`
    : query;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery)}`;
}

function uniqueById(items) {

  const seen = new Set();

  return items.filter((item) => {
    if (!item || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}
