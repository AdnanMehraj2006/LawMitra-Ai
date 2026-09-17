export const LEGAL_CASES = [
  {
    id: "cyber-upi-otp-fraud",
    category: "cyber_fraud",
    title: "UPI, OTP, phishing, or account takeover fraud",
    urgency: "high",
    summary:
      "Use this when money was taken through UPI, card, net banking, OTP sharing, phishing links, remote-access apps, fake customer care calls, or a hacked social account.",
    keywords: [
      "upi",
      "otp",
      "phishing",
      "bank",
      "scam",
      "fraud",
      "remote access",
      "anydesk",
      "teamviewer",
      "hacked",
      "fake link",
      "cyber",
      "1930"
    ],
    sanctions: [
      "Criminal investigation may lead to charges for cheating, identity misuse, unauthorized access, and related cyber offences.",
      "Suspected beneficiary accounts or wallets can be frozen during investigation when reported quickly.",
      "Banks and payment providers may review unauthorized transaction liability when the complaint is made promptly.",
      "Platforms can be directed to preserve logs, block fraudulent accounts, and share records with investigators."
    ],
    immediateActions: [
      "Call 1930 immediately if money was deducted.",
      "Report on cybercrime.gov.in and keep the acknowledgement number.",
      "Ask the bank to freeze the transaction trail and issue a written complaint acknowledgement.",
      "Change passwords, revoke unknown devices, and disable remote-access apps."
    ],
    evidence: [
      "Transaction IDs, UTR numbers, bank statements, and screenshots.",
      "Phone numbers, links, emails, app names, Telegram or Instagram handles.",
      "Call logs, chat exports, complaint acknowledgements, and bank ticket numbers."
    ],
    escalation: [
      "Bank fraud desk or nodal officer",
      "National Cyber Crime Portal",
      "Local cyber crime police station"
    ],
    questions: [
      "How much money was lost and when?",
      "Was an OTP, PIN, password, screen share, or remote-access app involved?",
      "Have you already called 1930 or contacted your bank?"
    ]
  },
  {
    id: "landlord-deposit-eviction",
    category: "landlord",
    title: "Landlord deposit, eviction, rent, or repair dispute",
    urgency: "medium",
    summary:
      "Use this when a landlord is withholding a security deposit, threatening eviction, entering the premises, refusing repairs, or demanding extra rent.",
    keywords: [
      "landlord",
      "tenant",
      "rent",
      "deposit",
      "eviction",
      "lease",
      "agreement",
      "maintenance",
      "owner"
    ],
    sanctions: [
      "A rent authority, civil court, or consumer forum may order refund, compensation, interest, or repair compliance depending on the forum and facts.",
      "Illegal lockout, intimidation, or forceful dispossession may trigger police action and civil injunctions.",
      "Contractual penalties may apply if the rent agreement has clear clauses on notice, repairs, or deposit deductions."
    ],
    immediateActions: [
      "Send a written notice asking for the exact deduction reasons and supporting bills.",
      "Preserve rent receipts, UPI records, the agreement, move-in photos, and move-out photos.",
      "Do not hand over original documents or keys without a written handover record.",
      "If there is force or lockout, call local police and document the incident immediately."
    ],
    evidence: [
      "Rent agreement, deposit proof, payment records, handover messages.",
      "Photos or videos of property condition and inventory.",
      "Repair complaints, electricity or water bills, and landlord replies."
    ],
    escalation: [
      "Legal notice",
      "Rent authority or civil court",
      "Police complaint for threats or force",
      "Consumer forum where service elements are involved"
    ],
    questions: [
      "Is there a written rent agreement?",
      "How much deposit is withheld and what reason was given?",
      "Have you already vacated the property?"
    ]
  },
  {
    id: "salary-termination-workplace",
    category: "workplace",
    title: "Unpaid salary, wrongful termination, or workplace dues",
    urgency: "medium",
    summary:
      "Use this for unpaid salary, final settlement delays, PF or gratuity issues, wrongful termination, forced resignation, or withheld experience letters.",
    keywords: [
      "salary",
      "termination",
      "resignation",
      "company",
      "employer",
      "office",
      "pf",
      "gratuity",
      "employee",
      "fnf",
      "notice period"
    ],
    sanctions: [
      "Labour authorities can direct payment of wages, statutory dues, and compliance records where employment law applies.",
      "Courts or labour forums may award back wages, compensation, reinstatement, or settlement depending on the role and facts.",
      "Non-payment of PF, gratuity, or statutory deductions may lead to regulatory penalties and recovery proceedings.",
      "Contractual damages may apply when notice period or employment contract terms are breached."
    ],
    immediateActions: [
      "Send one concise written demand for salary, full-and-final settlement, and documents.",
      "Collect offer letter, payslips, attendance proof, emails, chats, and bank statements.",
      "Avoid signing a backdated resignation or settlement unless you understand the terms.",
      "Escalate to HR leadership or labour authority if the employer does not respond."
    ],
    evidence: [
      "Offer letter, appointment letter, payslips, attendance records.",
      "Email or chat instructions, resignation or termination letters.",
      "Bank statements showing salary history and unpaid months."
    ],
    escalation: [
      "Company HR or grievance channel",
      "Labour commissioner or labour department",
      "EPFO or gratuity authority where applicable",
      "Civil recovery or labour forum"
    ],
    questions: [
      "Are you an employee, contractor, intern, or consultant?",
      "How many months of salary or dues are unpaid?",
      "Do you have a termination letter or written resignation?"
    ]
  },
  {
    id: "consumer-refund-defective-product",
    category: "consumer",
    title: "Consumer refund, defective product, warranty, or service failure",
    urgency: "low",
    summary:
      "Use this when a seller, ecommerce platform, service provider, airline, coaching service, or warranty provider denies refund, replacement, or repair.",
    keywords: [
      "refund",
      "product",
      "defective",
      "warranty",
      "replacement",
      "consumer",
      "amazon",
      "flipkart",
      "delivery",
      "service"
    ],
    sanctions: [
      "Consumer commissions may order refund, replacement, repair, compensation, litigation costs, and interest.",
      "Misleading ads, unfair trade practices, or deficient services can attract corrective directions and penalties.",
      "Repeated non-compliance can lead to stronger enforcement, execution proceedings, and adverse orders."
    ],
    immediateActions: [
      "Raise a written complaint through the seller or platform support channel.",
      "Preserve invoice, warranty card, delivery proof, unboxing media, and service tickets.",
      "Send a short final notice before filing a consumer complaint.",
      "File on the consumer helpline or consumer commission portal if unresolved."
    ],
    evidence: [
      "Invoice, order ID, warranty documents, service ticket IDs.",
      "Photos, videos, courier records, and return pickup proof.",
      "Support chat transcripts and email replies."
    ],
    escalation: [
      "Seller or platform grievance officer",
      "National Consumer Helpline",
      "District consumer commission"
    ],
    questions: [
      "What did you buy and when?",
      "Was a refund, repair, or replacement promised in writing?",
      "Do you have invoice and support ticket proof?"
    ]
  },
  {
    id: "student-fee-hostel-harassment",
    category: "student",
    title: "College fee refund, hostel, exam, or student harassment issue",
    urgency: "medium",
    summary:
      "Use this when an institution denies refund, blocks exam access, imposes arbitrary fines, withholds documents, or ignores harassment complaints.",
    keywords: [
      "college",
      "school",
      "university",
      "hostel",
      "fees",
      "refund",
      "exam",
      "teacher",
      "principal",
      "marksheet",
      "student"
    ],
    sanctions: [
      "Education regulators, courts, or consumer forums may direct refund, document release, exam access, or compensation.",
      "Harassment, discrimination, or ragging can trigger institutional disciplinary action and police involvement.",
      "Institutions may face regulatory scrutiny for unfair fee retention, withheld certificates, or unsafe campus practices."
    ],
    immediateActions: [
      "Write to the principal, registrar, or grievance cell with dates and documents.",
      "Keep fee receipts, prospectus, refund policy, emails, notices, and ID proof.",
      "For safety threats, harassment, or ragging, report to the anti-ragging or internal complaint mechanism immediately.",
      "Escalate to the relevant education regulator if the institution remains silent."
    ],
    evidence: [
      "Admission documents, fee receipts, prospectus, refund policy.",
      "Email notices, WhatsApp messages, screenshots, attendance or exam records.",
      "Names of witnesses, complaint IDs, and medical or counselling records if relevant."
    ],
    escalation: [
      "Institution grievance cell",
      "University or education regulator",
      "Anti-ragging helpline where relevant",
      "Consumer forum or writ remedy in suitable cases"
    ],
    questions: [
      "Is this about fees, exams, hostel, documents, or harassment?",
      "Which institution and course are involved?",
      "Have you received any written notice or policy?"
    ]
  },
  {
    id: "police-fir-threat-assault",
    category: "police",
    title: "Police refusal, threats, assault, or harassment complaint",
    urgency: "high",
    summary:
      "Use this when there are threats, assault, stalking, intimidation, police refusal to record a complaint, or urgent safety concerns.",
    keywords: [
      "police",
      "fir",
      "complaint",
      "threat",
      "assault",
      "violence",
      "abuse",
      "stalking",
      "blackmail",
      "harassment"
    ],
    sanctions: [
      "Cognizable offences can lead to FIR registration, arrest, bail conditions, investigation, and prosecution.",
      "Courts can issue protection, restraining, or injunction-style directions in appropriate matters.",
      "False threats, assault, stalking, extortion, or intimidation can result in criminal penalties if proved.",
      "Police inaction may be escalated to senior officers, magistrate remedies, or writ proceedings."
    ],
    immediateActions: [
      "If safety is at risk, call emergency services or go to the nearest police station.",
      "Write a clear complaint with dates, names, locations, and evidence.",
      "Ask for a diary number, CSR, NCR, or FIR copy depending on how it is recorded.",
      "Escalate to senior police officers if a cognizable complaint is refused."
    ],
    evidence: [
      "Threat messages, call logs, recordings where lawful, photos, videos.",
      "Medical records, witness names, location details, CCTV references.",
      "Copies of complaints and acknowledgement numbers."
    ],
    escalation: [
      "Police station duty officer",
      "ACP/DCP/SP or commissioner office",
      "Magistrate complaint route",
      "Legal aid or protection services"
    ],
    questions: [
      "Is anyone in immediate danger right now?",
      "What exactly happened and when?",
      "Did police give any written acknowledgement?"
    ]
  },
  {
    id: "domestic-violence-dowry-maintenance",
    category: "relationship",
    title: "Domestic violence, dowry harassment, maintenance, or matrimonial dispute",
    urgency: "high",
    summary:
      "Use this for domestic violence, dowry demands, maintenance, child support, divorce, cruelty, residence rights, or protection needs.",
    keywords: [
      "domestic violence",
      "dowry",
      "husband",
      "wife",
      "marriage",
      "divorce",
      "maintenance",
      "cruelty",
      "child support",
      "in-laws"
    ],
    sanctions: [
      "Courts may grant protection orders, residence orders, maintenance, custody directions, compensation, or return of stridhan.",
      "Dowry harassment, cruelty, assault, or threats can lead to criminal investigation and prosecution.",
      "Breach of court protection or maintenance orders can attract enforcement action.",
      "Mediation, settlement, or divorce terms may include financial and custody obligations."
    ],
    immediateActions: [
      "Prioritize safety and contact trusted family, emergency services, or a protection officer if at risk.",
      "Preserve medical records, photos, messages, bank records, and witness details.",
      "Avoid informal settlements that require giving up safety, residence, or child rights without advice.",
      "Consider legal aid, protection orders, and maintenance remedies."
    ],
    evidence: [
      "Medical reports, photos of injuries or damage, call logs and messages.",
      "Proof of marriage, residence, children, income, bank transfers.",
      "Dowry demand messages, witness names, prior complaints."
    ],
    escalation: [
      "Emergency services or local police",
      "Protection officer or women's helpline",
      "Family court",
      "Legal aid services"
    ],
    questions: [
      "Are you safe right now?",
      "Is the issue violence, dowry demand, maintenance, divorce, or child custody?",
      "Do you have any prior complaint or medical record?"
    ]
  },
  {
    id: "property-inheritance-partition",
    category: "property",
    title: "Property ownership, inheritance, partition, or possession dispute",
    urgency: "medium",
    summary:
      "Use this for land ownership, inheritance, partition, illegal possession, title defects, sale deed disputes, or family property conflicts.",
    keywords: [
      "property",
      "land",
      "inheritance",
      "partition",
      "possession",
      "sale deed",
      "title",
      "mutation",
      "ancestral",
      "ownership"
    ],
    sanctions: [
      "Civil courts may grant injunctions, partition, possession, cancellation of documents, damages, or mesne profits.",
      "Forgery, cheating, trespass, or land grabbing allegations can trigger criminal investigation if supported by facts.",
      "Revenue authorities may correct mutation or land records where their jurisdiction allows.",
      "Unauthorized construction or encroachment may face municipal or revenue enforcement."
    ],
    immediateActions: [
      "Collect title chain documents before sending accusations or signing anything.",
      "Get certified copies of sale deed, mutation, tax records, and encumbrance records.",
      "Document possession status with photos, utility bills, and witness details.",
      "Seek an injunction quickly if someone is selling, demolishing, or taking possession."
    ],
    evidence: [
      "Sale deed, gift deed, will, succession documents, partition deed.",
      "Mutation, revenue records, property tax receipts, electricity bills.",
      "Photos, possession proof, notices, and buyer or broker communications."
    ],
    escalation: [
      "Revenue office or registrar records",
      "Civil court injunction or partition suit",
      "Police complaint for forgery, trespass, or threats",
      "Municipal authority for unauthorized construction"
    ],
    questions: [
      "Is the property self-acquired, ancestral, rented, or jointly owned?",
      "Who currently has possession?",
      "Which document proves your ownership or share?"
    ]
  },
  {
    id: "cheque-bounce-payment-default",
    category: "cheque",
    title: "Cheque bounce or written payment default",
    urgency: "medium",
    summary:
      "Use this when a cheque is dishonoured, a loan or invoice remains unpaid, or there is a written promise to pay that has been breached.",
    keywords: [
      "cheque",
      "check bounce",
      "dishonour",
      "loan",
      "invoice",
      "payment default",
      "promissory",
      "debt",
      "borrowed money"
    ],
    sanctions: [
      "Cheque dishonour can lead to criminal complaint, fine, compensation, and possible imprisonment if statutory conditions are met.",
      "Civil recovery can seek principal, interest, legal costs, and contractual damages.",
      "A negotiated settlement can include payment schedule, security, and default consequences.",
      "Repeated default may affect credit, business relationships, and future litigation exposure."
    ],
    immediateActions: [
      "Preserve the returned cheque memo and bank dishonour reason.",
      "Check statutory notice timelines before delay causes loss of remedy.",
      "Send a precise legal notice with cheque details, amount, and demand for payment.",
      "Keep loan agreement, invoice, WhatsApp acknowledgements, and bank transfers."
    ],
    evidence: [
      "Original cheque, cheque return memo, bank statement.",
      "Loan agreement, invoice, purchase order, ledger, or written acknowledgement.",
      "Demand notice, courier receipt, tracking proof, and replies."
    ],
    escalation: [
      "Legal demand notice",
      "Cheque bounce complaint where limitation is satisfied",
      "Civil recovery or summary suit",
      "Mediation or settlement agreement"
    ],
    questions: [
      "What date is on the cheque and when did it bounce?",
      "What reason did the bank give for dishonour?",
      "Was the cheque issued for a legally enforceable debt?"
    ]
  },
  {
    id: "workplace-sexual-harassment-posh",
    category: "workplace",
    title: "Workplace sexual harassment or hostile work environment",
    urgency: "high",
    summary:
      "Use this for unwelcome sexual comments, messages, physical conduct, retaliation, unsafe workplace behavior, or an employer refusing to act on a complaint.",
    keywords: [
      "sexual harassment",
      "posh",
      "icc",
      "internal committee",
      "hostile workplace",
      "inappropriate messages",
      "retaliation"
    ],
    sanctions: [
      "The employer's internal committee can recommend written apology, warning, transfer, salary deduction, termination, or other service-rule action.",
      "Compensation can be recommended based on trauma, career loss, medical expenses, and income impact.",
      "Criminal law may apply for assault, stalking, voyeurism, threats, or other offences depending on facts.",
      "Employers can face compliance consequences for failing to maintain a lawful complaint mechanism."
    ],
    immediateActions: [
      "Write down a dated timeline while details are fresh.",
      "Preserve messages, emails, calendar invites, CCTV references, and witness names.",
      "Submit a written complaint to the Internal Committee or HR channel within the applicable timeline.",
      "If there is physical danger or threats, contact police or emergency support."
    ],
    evidence: [
      "Screenshots, emails, chat logs, meeting invites, recordings where lawful.",
      "Witness names, prior reports, HR replies, performance retaliation records.",
      "Medical or counselling records if relevant."
    ],
    escalation: [
      "Internal Committee under workplace policy",
      "District officer or labour authority where internal process is missing",
      "Police for criminal conduct",
      "Legal aid or employment counsel"
    ],
    questions: [
      "Are you safe at work right now?",
      "Does your workplace have an Internal Committee or POSH policy?",
      "What evidence exists and when did the latest incident happen?"
    ]
  },
  {
    id: "builder-delay-rera-homebuyer",
    category: "housing",
    title: "Builder delay, possession, RERA, or homebuyer dispute",
    urgency: "medium",
    summary:
      "Use this when a builder delays possession, changes the layout, demands extra charges, refuses refund, gives poor construction, or does not execute promised documents.",
    keywords: [
      "builder",
      "rera",
      "flat",
      "apartment",
      "possession delay",
      "homebuyer",
      "allotment",
      "sale agreement",
      "occupancy certificate",
      "maintenance charges"
    ],
    sanctions: [
      "RERA authorities may order possession, refund, interest for delay, compensation, or project compliance.",
      "Consumer commissions can award refund, compensation, interest, and litigation costs in suitable homebuyer matters.",
      "Serious misrepresentation, diversion, or cheating allegations may be escalated separately when facts support it.",
      "Non-compliance with RERA or consumer orders can trigger execution and regulatory consequences."
    ],
    immediateActions: [
      "Collect booking form, allotment letter, builder-buyer agreement, payment receipts, and promised possession date.",
      "Check the project registration and complaint route on the state RERA portal.",
      "Send a written demand for possession, refund, interest, or defect rectification.",
      "Avoid signing a revised possession or settlement letter without reviewing waiver clauses."
    ],
    evidence: [
      "RERA registration details, agreement, allotment letter, payment ledger.",
      "Brochure, promised amenities, possession notices, emails, and WhatsApp chats.",
      "Photos of construction, defect reports, occupancy or completion certificate status."
    ],
    escalation: [
      "Builder grievance or CRM team",
      "State RERA authority",
      "Consumer commission",
      "Civil court or criminal complaint for serious fraud facts"
    ],
    questions: [
      "Is the project registered under RERA?",
      "What possession date was promised and what delay has occurred?",
      "Do you want possession, refund, interest, or defect rectification?"
    ]
  },
  {
    id: "bank-loan-recovery-harassment",
    category: "banking",
    title: "Banking, loan recovery, credit card, or debt harassment",
    urgency: "medium",
    summary:
      "Use this for abusive recovery calls, illegal threats, wrong loan entries, unauthorized charges, failed chargebacks, credit card disputes, or CIBIL/credit score errors.",
    keywords: [
      "banking",
      "bank",
      "loan",
      "recovery agent",
      "harassment",
      "credit card",
      "cibil",
      "emi",
      "debit",
      "chargeback",
      "wrong transaction"
    ],
    sanctions: [
      "The bank or regulated entity can be directed to reverse charges, correct records, pay compensation, or stop unfair recovery practices.",
      "Regulators and ombudsman forums can examine service deficiency, unauthorized transactions, and grievance delays.",
      "Threats, intimidation, or public shaming by recovery agents may support police complaint and civil remedies.",
      "Credit information errors can be corrected when supporting records show the entry is wrong or outdated."
    ],
    immediateActions: [
      "Raise a written complaint with the bank and ask for a complaint number.",
      "Preserve call logs, messages, agent names, emails, statements, and credit reports.",
      "Escalate to the bank nodal officer if the first response is poor or delayed.",
      "For threats or visits to workplace/family, record details and contact police if safety is affected."
    ],
    evidence: [
      "Bank statements, card statements, EMI schedule, credit report.",
      "Call recordings where lawful, call logs, messages, agent IDs, and recovery notices.",
      "Bank complaint number, nodal officer emails, and reply timelines."
    ],
    escalation: [
      "Bank customer care and nodal officer",
      "RBI Integrated Ombudsman Scheme where eligible",
      "Credit bureau dispute route",
      "Police complaint for threats, intimidation, or extortion"
    ],
    questions: [
      "Is this about a bank account, loan, credit card, recovery agent, or credit report?",
      "Have you already raised a written complaint with the bank?",
      "Are there threats, workplace visits, or public shaming involved?"
    ]
  },
  {
    id: "insurance-claim-rejection",
    category: "insurance",
    title: "Insurance claim rejection, delay, or low settlement",
    urgency: "medium",
    summary:
      "Use this when health, motor, life, travel, or property insurance is denied, delayed, underpaid, or rejected for exclusions or missing documents.",
    keywords: [
      "insurance",
      "claim rejected",
      "claim denial",
      "cashless",
      "mediclaim",
      "policy",
      "premium",
      "settlement",
      "surveyor",
      "tpa"
    ],
    sanctions: [
      "Insurance grievance channels and ombudsman forums may direct claim payment, interest, compensation, or reasoned reconsideration.",
      "Consumer forums may award claim amount, compensation, costs, and interest for deficiency in service.",
      "False suppression or fraud findings can affect claim rights, but insurers must justify rejection with policy terms and facts.",
      "Delay without valid reason may support interest and compensation claims."
    ],
    immediateActions: [
      "Ask the insurer for the written rejection reason and policy clause relied on.",
      "Collect policy schedule, proposal form, claim form, medical or repair records, bills, and surveyor report.",
      "File a written grievance with the insurer within the policy and regulator timelines.",
      "Escalate to insurance ombudsman or consumer forum if the grievance reply is unsatisfactory."
    ],
    evidence: [
      "Policy document, premium receipts, proposal form, claim form.",
      "Hospital records, discharge summary, bills, prescriptions, repair invoices, or survey report.",
      "Insurer emails, rejection letter, grievance number, and call recordings where lawful."
    ],
    escalation: [
      "Insurer grievance officer",
      "Insurance ombudsman",
      "Consumer commission",
      "Civil court for complex coverage disputes"
    ],
    questions: [
      "Which insurance type is involved: health, motor, life, travel, or property?",
      "What exact rejection reason did the insurer give?",
      "When was the claim filed and when was it rejected or delayed?"
    ]
  },
  {
    id: "motor-accident-injury-compensation",
    category: "accident",
    title: "Road accident injury, death, vehicle damage, or compensation",
    urgency: "high",
    summary:
      "Use this after a road accident involving injury, death, hit-and-run, vehicle damage, insurance claim, police report, or compensation claim.",
    keywords: [
      "accident",
      "road accident",
      "vehicle",
      "car crash",
      "bike accident",
      "hit and run",
      "injury",
      "maact",
      "motor claim",
      "ambulance"
    ],
    sanctions: [
      "Police may investigate rash driving, negligence, hit-and-run, intoxication, licence violations, or related offences.",
      "Motor accident claims forums may award compensation for medical expenses, income loss, disability, death, and future care.",
      "Insurers may be directed to pay covered claims, subject to policy defences and evidence.",
      "Vehicle owners or drivers may face civil liability, licence action, or criminal prosecution depending on facts."
    ],
    immediateActions: [
      "Get medical care first and keep all hospital records.",
      "Report the accident to police and obtain FIR, accident report, or acknowledgement.",
      "Photograph vehicles, number plates, location, injuries, and road conditions.",
      "Inform the insurer quickly and avoid repairing the vehicle before inspection if possible."
    ],
    evidence: [
      "FIR, accident report, MLC, discharge summary, medical bills.",
      "Vehicle photos, dashcam/CCTV references, witness names, insurance policy.",
      "Income proof, disability certificate, repair estimates, and towing bills."
    ],
    escalation: [
      "Nearest police station or traffic police",
      "Hospital and insurer",
      "Motor Accident Claims Tribunal",
      "Legal aid or accident claim lawyer"
    ],
    questions: [
      "Was anyone injured or killed?",
      "Do you have the vehicle number and police acknowledgement?",
      "Is this about compensation, insurance, or criminal action?"
    ]
  },
  {
    id: "medical-negligence-hospital-billing",
    category: "medical",
    title: "Medical negligence, hospital billing, or patient rights issue",
    urgency: "high",
    summary:
      "Use this for suspected negligence, wrong treatment, delayed diagnosis, refusal to release records, overbilling, denial of emergency care, or hospital misconduct.",
    keywords: [
      "medical negligence",
      "hospital",
      "doctor",
      "wrong treatment",
      "operation",
      "surgery",
      "patient",
      "medical records",
      "overbilling",
      "diagnosis"
    ],
    sanctions: [
      "Consumer forums may award compensation for proven deficiency in medical service.",
      "Medical councils or professional bodies may examine professional misconduct and recommend disciplinary action.",
      "Hospitals may be directed to release records, correct bills, or follow patient-rights obligations.",
      "Criminal proceedings are possible only in serious cases where the legal threshold for negligence is met."
    ],
    immediateActions: [
      "Ask for complete medical records, discharge summary, test reports, consent forms, and bills in writing.",
      "Seek a second medical opinion before making final allegations if the patient is stable.",
      "Preserve prescriptions, reports, photos, and chronology of symptoms and treatment.",
      "For immediate danger or denial of emergency care, contact emergency services or the hospital authority."
    ],
    evidence: [
      "Medical records, prescriptions, test reports, scans, consent forms.",
      "Bills, payment records, discharge summary, referral notes, death summary if applicable.",
      "Second opinion, expert note, complaint emails, and witness details."
    ],
    escalation: [
      "Hospital grievance or medical superintendent",
      "State medical council or clinical establishment authority",
      "Consumer commission",
      "Police in serious criminal negligence facts"
    ],
    questions: [
      "What treatment or procedure is in dispute?",
      "What harm occurred and when?",
      "Do you have complete hospital records and bills?"
    ]
  },
  {
    id: "online-harassment-sextortion-reputation",
    category: "cyber_fraud",
    title: "Online harassment, sextortion, image abuse, or fake profile",
    urgency: "high",
    summary:
      "Use this for threats to leak photos, blackmail, fake social profiles, cyberstalking, non-consensual image sharing, obscene messages, or impersonation.",
    keywords: [
      "sextortion",
      "blackmail",
      "fake profile",
      "impersonation",
      "image abuse",
      "morphed photo",
      "cyberstalking",
      "instagram",
      "telegram",
      "whatsapp threat",
      "leak photos"
    ],
    sanctions: [
      "Police and cyber cells can investigate stalking, threats, extortion, impersonation, obscene content, and privacy violations.",
      "Platforms may remove content, preserve logs, suspend accounts, or respond to lawful requests.",
      "Courts may grant takedown, restraint, protection, or compensation remedies in appropriate matters.",
      "Sharing intimate images without consent can lead to serious criminal consequences."
    ],
    immediateActions: [
      "Do not pay blackmail money or send more material.",
      "Take screenshots with profile URLs, phone numbers, UPI IDs, timestamps, and messages.",
      "Report on cybercrime.gov.in and preserve the acknowledgement number.",
      "Use platform reporting and privacy tools, and contact police if there are immediate threats."
    ],
    evidence: [
      "Screenshots, profile URLs, chat exports, phone numbers, email IDs, UPI handles.",
      "Threat messages, payment demands, fake account links, and takedown reports.",
      "Names of people who received the content and platform complaint IDs."
    ],
    escalation: [
      "National Cyber Crime Portal or 1930 for cyber financial fraud",
      "Local cyber police station",
      "Platform grievance or reporting channel",
      "Legal aid or protection support"
    ],
    questions: [
      "Is there an immediate threat to publish or physically harm someone?",
      "Which platform is involved?",
      "Do you have the account link, phone number, or payment demand proof?"
    ]
  },
  {
    id: "defamation-reputation-false-accusation",
    category: "defamation",
    title: "Defamation, false accusation, or reputation harm",
    urgency: "medium",
    summary:
      "Use this when someone publishes false allegations, damaging reviews, social media posts, workplace rumours, or public statements that harm reputation.",
    keywords: [
      "defamation",
      "false allegation",
      "fake review",
      "reputation",
      "slander",
      "libel",
      "rumour",
      "public post",
      "false complaint"
    ],
    sanctions: [
      "Civil remedies may include apology, takedown, injunction, damages, or restraint against repetition.",
      "Criminal defamation or related offences may be considered where legal ingredients are met.",
      "Platforms may be asked to review and remove content that violates policy or law.",
      "False complaints can have consequences, but only after careful review of evidence and legal context."
    ],
    immediateActions: [
      "Preserve the exact post, URL, screenshot, date, author identity, and audience reach.",
      "Do not respond emotionally in public; prepare a measured written rebuttal or legal notice.",
      "Request takedown through the platform if the content is online.",
      "Check whether the statement is fact, opinion, review, or privileged complaint before escalating."
    ],
    evidence: [
      "Screenshots, URLs, archives, account profile, publication date and time.",
      "Proof the statement is false and proof of reputational or business loss.",
      "Witnesses, client messages, employer notices, and platform complaint IDs."
    ],
    escalation: [
      "Platform grievance channel",
      "Legal notice for apology or takedown",
      "Civil injunction or damages claim",
      "Criminal complaint where legally supported"
    ],
    questions: [
      "What exactly was said and where was it published?",
      "Why is it false or misleading?",
      "What harm has already happened?"
    ]
  },
  {
    id: "rti-public-records-information-delay",
    category: "public_records",
    title: "RTI, public records, or government information request",
    urgency: "low",
    summary:
      "Use this when you need public records, file status, government documents, inspection records, or action-taken reports from a public authority.",
    keywords: [
      "rti",
      "right to information",
      "public records",
      "government records",
      "file status",
      "information officer",
      "pio",
      "appeal",
      "documents"
    ],
    sanctions: [
      "Public Information Officers may be directed to provide information, justify denial, or transfer the request.",
      "Information commissions can impose penalty for unreasonable delay, refusal, or misinformation in appropriate cases.",
      "Appeals can lead to disclosure orders, inspection directions, or corrected responses.",
      "Exemptions may apply for privacy, security, confidential, or privileged information."
    ],
    immediateActions: [
      "Identify the correct public authority and Public Information Officer.",
      "Ask for specific records, dates, file numbers, and action-taken information.",
      "Keep the RTI fee proof, acknowledgement, and all replies.",
      "File first appeal if there is no reply, incomplete reply, or improper denial."
    ],
    evidence: [
      "RTI application, fee proof, postal receipt or portal acknowledgement.",
      "PIO reply, first appeal, hearing notices, and prior representations.",
      "File numbers, department names, dates, and document descriptions."
    ],
    escalation: [
      "Public Information Officer",
      "First Appellate Authority",
      "State or Central Information Commission",
      "Court route in exceptional cases"
    ],
    questions: [
      "Which department holds the record?",
      "What exact information or document do you need?",
      "Have you already filed RTI or first appeal?"
    ]
  },
  {
    id: "government-service-delay-grievance",
    category: "public_service",
    title: "Government service delay, certificate, licence, or grievance",
    urgency: "low",
    summary:
      "Use this for delayed certificates, mutation, pension, ration, Aadhaar-linked service, licence approval, municipal service, or unanswered government grievances.",
    keywords: [
      "government service",
      "certificate",
      "licence",
      "license",
      "pension",
      "ration card",
      "aadhaar",
      "municipal",
      "delay",
      "grievance",
      "passport delay"
    ],
    sanctions: [
      "Department grievance officers may be directed to process, reject with reasons, or correct service records.",
      "Public service guarantee laws in some states may allow escalation, compensation, or officer accountability.",
      "Courts can direct authorities to decide pending applications within a fixed time in suitable matters.",
      "RTI can reveal file status, pending officer, and reasons for delay."
    ],
    immediateActions: [
      "Collect application number, submission proof, fee receipt, and promised timeline.",
      "File a written grievance on the department portal or public grievance system.",
      "Use RTI to ask for file movement, officer name, and delay reasons if needed.",
      "Avoid paying unofficial charges; document any demand for bribe or favour."
    ],
    evidence: [
      "Application acknowledgement, receipt, portal screenshots, SMS or email updates.",
      "Department replies, grievance number, RTI reply, and supporting documents.",
      "Names, dates, counter visits, and written objections or deficiency memos."
    ],
    escalation: [
      "Department grievance officer",
      "District administration or appellate authority",
      "Public grievance portal",
      "RTI and court direction in serious delay"
    ],
    questions: [
      "Which service or certificate is delayed?",
      "When did you apply and what acknowledgement do you have?",
      "Did the department give a written reason or deficiency memo?"
    ]
  },
  {
    id: "senior-citizen-maintenance-elder-abuse",
    category: "senior",
    title: "Senior citizen maintenance, eviction, property, or elder abuse",
    urgency: "high",
    summary:
      "Use this when a senior citizen needs maintenance from children, faces abuse, neglect, property pressure, illegal occupation, or needs protection.",
    keywords: [
      "senior citizen",
      "elder abuse",
      "parents maintenance",
      "old age",
      "maintenance tribunal",
      "evict children",
      "neglect",
      "abused parent"
    ],
    sanctions: [
      "Maintenance tribunals may order children or relatives to pay maintenance to eligible senior citizens.",
      "Authorities may order protection, restoration of property possession, or action against abuse depending on local law and facts.",
      "Police can act where there are threats, violence, intimidation, or forced property transfers.",
      "Gift deeds or property transfers may be challenged where care obligations were breached."
    ],
    immediateActions: [
      "If there is violence or immediate danger, call emergency services or local police.",
      "Preserve medical records, property documents, bank transfers, messages, and witness details.",
      "Contact district legal services authority or senior citizen cell where available.",
      "File a written application before the maintenance tribunal if maintenance or eviction is needed."
    ],
    evidence: [
      "Age proof, relationship proof, income and medical expense records.",
      "Property documents, gift deeds, bank records, threats, photos, and medical reports.",
      "Prior complaints, witness names, and local authority acknowledgements."
    ],
    escalation: [
      "Emergency services or police",
      "Senior citizen cell or district administration",
      "Maintenance tribunal",
      "District Legal Services Authority"
    ],
    questions: [
      "Is the senior citizen safe right now?",
      "Is the issue maintenance, abuse, property, or eviction?",
      "Are there medical expenses or property documents involved?"
    ]
  },
  {
    id: "sc-st-discrimination-atrocity",
    category: "rights",
    title: "Caste discrimination, SC/ST atrocity, or hate harassment",
    urgency: "high",
    summary:
      "Use this for caste abuse, social boycott, violence, humiliation, denial of access, workplace or school discrimination, or threats linked to caste identity.",
    keywords: [
      "caste",
      "sc st",
      "atrocity",
      "discrimination",
      "dalit",
      "tribal",
      "hate speech",
      "social boycott",
      "untouchability",
      "humiliation"
    ],
    sanctions: [
      "Police may register and investigate caste-based offences, threats, assault, humiliation, or property damage where facts support it.",
      "Victim compensation, protection, rehabilitation, and special court processes may be available in eligible cases.",
      "Institutions and employers may face directions to stop discrimination and take disciplinary action.",
      "False or unsupported allegations can harm the case, so chronology and exact words or acts matter."
    ],
    immediateActions: [
      "Prioritize safety and contact emergency services if there is violence or imminent threat.",
      "Write down exact words, location, date, witnesses, and caste-reference context.",
      "Preserve videos, messages, medical records, property damage photos, and prior complaints.",
      "Seek help from legal aid, rights commission, or a lawyer familiar with atrocity cases."
    ],
    evidence: [
      "Exact abusive words, witness names, audio/video where lawful, messages.",
      "Medical records, photos of injuries or damage, complaint acknowledgements.",
      "Caste certificate or community proof where needed for formal proceedings."
    ],
    escalation: [
      "Police station and senior police officers",
      "District administration and welfare officer",
      "SC/ST commission or rights commission",
      "District Legal Services Authority"
    ],
    questions: [
      "Is anyone in immediate danger?",
      "What exact caste-based words or acts were used?",
      "Who witnessed it and what proof exists?"
    ]
  },
  {
    id: "traffic-challan-license-vehicle-seizure",
    category: "traffic",
    title: "Traffic challan, licence suspension, towing, or vehicle seizure",
    urgency: "low",
    summary:
      "Use this for wrong e-challan, overspeeding notice, drunk driving allegation, licence suspension, vehicle towing, accident challan, or impoundment.",
    keywords: [
      "traffic",
      "challan",
      "e challan",
      "license",
      "licence",
      "drunk driving",
      "towing",
      "vehicle seized",
      "impound",
      "rc"
    ],
    sanctions: [
      "Traffic authorities may impose fines, licence points or suspension, towing charges, or vehicle release conditions.",
      "Wrong or duplicate challans can be contested with vehicle records, GPS, photos, or payment proof.",
      "Serious violations can lead to court appearance, licence action, insurance issues, or criminal proceedings.",
      "Vehicle release may require ownership proof, penalty payment, court order, or police clearance."
    ],
    immediateActions: [
      "Download the challan details, image evidence, date, time, and location.",
      "Verify vehicle number, offence, and whether the vehicle was actually present.",
      "Preserve RC, insurance, licence, PUC, payment receipts, and GPS or toll proof.",
      "Use the official challan contest or court route if the notice is wrong."
    ],
    evidence: [
      "Challan copy, photo evidence, RC, licence, insurance, PUC.",
      "GPS/toll records, parking receipts, dashcam/CCTV references, payment proof.",
      "Towing memo, seizure memo, and police or traffic department replies."
    ],
    escalation: [
      "Traffic police helpdesk",
      "Virtual court or traffic court",
      "Transport department",
      "Police station for seizure or accident-related issues"
    ],
    questions: [
      "Is the challan wrong, unpaid, already paid, or linked to seizure?",
      "What offence and location are shown?",
      "Do you have vehicle documents and challan number?"
    ]
  },
  {
    id: "passport-visa-immigration-police-verification",
    category: "passport",
    title: "Passport, visa, immigration, or police verification issue",
    urgency: "medium",
    summary:
      "Use this for passport application delays, adverse police verification, wrong personal details, visa refusal support documents, or immigration travel restrictions.",
    keywords: [
      "passport",
      "visa",
      "immigration",
      "police verification",
      "pcc",
      "emigration",
      "travel ban",
      "name correction",
      "regional passport office"
    ],
    sanctions: [
      "Passport authorities may seek clarification, hold, reject, reissue, or correct passport records based on documents and verification.",
      "Adverse police reports can be challenged with supporting proof and written representation.",
      "Courts can direct reconsideration or time-bound decision in suitable delay or arbitrary rejection matters.",
      "False documents or suppression can lead to refusal, impounding, penalties, or criminal action."
    ],
    immediateActions: [
      "Collect application reference number, appointment receipt, police verification status, and deficiency notices.",
      "Prepare proof of address, identity, date of birth, court case status, and affidavits where required.",
      "Submit a written representation to the passport office if there is an adverse or delayed report.",
      "Do not submit inconsistent declarations across passport, visa, and court records."
    ],
    evidence: [
      "Passport application ARN, receipt, police verification report status.",
      "ID/address proof, birth proof, court orders, FIR or case status if applicable.",
      "Emails, deficiency memos, appointment slips, and prior passport copies."
    ],
    escalation: [
      "Passport Seva Kendra or Regional Passport Office",
      "Local police verification unit",
      "Public grievance portal",
      "Court remedy for arbitrary delay or refusal"
    ],
    questions: [
      "Is this a new passport, renewal, PCC, visa support, or correction?",
      "What status or objection is shown?",
      "Is any criminal case, address mismatch, or document mismatch involved?"
    ]
  },
  {
    id: "contract-freelancer-service-payment",
    category: "contract",
    title: "Contract breach, freelancer payment, service agreement, or business dispute",
    urgency: "medium",
    summary:
      "Use this for unpaid invoices, client refusing payment, vendor breach, poor service, NDA disputes, partnership promises, or written agreement violations.",
    keywords: [
      "contract",
      "agreement",
      "freelancer",
      "invoice unpaid",
      "client not paying",
      "vendor",
      "service agreement",
      "nda",
      "breach",
      "business dispute"
    ],
    sanctions: [
      "Civil recovery can seek unpaid amount, interest, damages, costs, and enforcement of contract terms.",
      "Arbitration or mediation may apply if the agreement contains a dispute resolution clause.",
      "Cheating or criminal breach allegations require stronger facts than mere non-payment.",
      "Written settlement can include milestones, default interest, and consequences for non-payment."
    ],
    immediateActions: [
      "Collect signed agreement, scope, invoice, delivery proof, approvals, and payment reminders.",
      "Send a concise demand notice with amount, due date, and bank details.",
      "Check arbitration, jurisdiction, limitation, and notice clauses before filing.",
      "Avoid deleting access or source files in a way that violates contract terms."
    ],
    evidence: [
      "Agreement, purchase order, invoice, statement of account.",
      "Emails, chats, delivery links, acceptance notes, and revision requests.",
      "Payment records, tax invoices, GST details, and reminder notices."
    ],
    escalation: [
      "Demand notice",
      "Mediation or arbitration",
      "Civil recovery or summary suit",
      "Police complaint only where fraud facts are specific"
    ],
    questions: [
      "Is there a written contract or purchase order?",
      "How much is unpaid and since when?",
      "Was the work delivered and accepted in writing?"
    ]
  },
  {
    id: "arrest-bail-summons-criminal-process",
    category: "criminal",
    title: "Arrest, bail, summons, notice, or criminal investigation",
    urgency: "high",
    summary:
      "Use this when police issue a notice, someone is arrested, bail is needed, a summons arrives, or a person is called for questioning.",
    keywords: [
      "arrest",
      "bail",
      "summons",
      "notice",
      "questioning",
      "criminal case",
      "police station",
      "warrant",
      "custody",
      "anticipatory bail"
    ],
    sanctions: [
      "Criminal cases can involve investigation, arrest, bail conditions, charge sheet, trial, fines, imprisonment, or acquittal.",
      "Courts may grant regular bail, anticipatory bail, protection, or conditions based on offence, risk, and facts.",
      "Non-compliance with summons or court orders can create additional risk.",
      "Illegal detention or police misconduct can be challenged through senior officers, court, or legal aid."
    ],
    immediateActions: [
      "Do not ignore summons, notices, or calls from police; verify and respond through counsel if possible.",
      "Ask for a copy/photo of the notice, FIR number, sections, police station, and officer details.",
      "Arrange a lawyer or legal aid before appearing in a serious matter.",
      "Keep family informed and carry ID, medicines, and written contact details if attending police station."
    ],
    evidence: [
      "FIR copy, notice, summons, warrant, complaint copy, bail order if any.",
      "Call logs, chats, CCTV, alibi records, travel/location proof, and witness names.",
      "Medical records if there is assault, detention harm, or custodial injury."
    ],
    escalation: [
      "Criminal defence lawyer or legal aid",
      "Police station or investigating officer",
      "Magistrate or sessions court",
      "Senior police officers for misconduct or illegal detention"
    ],
    questions: [
      "Has anyone been arrested or only called for questioning?",
      "Do you have FIR number, notice, or sections mentioned?",
      "Which police station or court is involved?"
    ]
  },
  {
    id: "ip-copyright-trademark-content-theft",
    category: "intellectual_property",
    title: "Copyright, trademark, brand misuse, or content theft",
    urgency: "medium",
    summary:
      "Use this when someone copies your content, logo, brand name, software, photos, product listing, course, music, or uses a confusingly similar mark.",
    keywords: [
      "copyright",
      "trademark",
      "brand name",
      "logo copied",
      "content theft",
      "plagiarism",
      "software copied",
      "dmca",
      "passing off",
      "counterfeit"
    ],
    sanctions: [
      "Civil remedies may include takedown, injunction, damages, account of profits, delivery-up, or restraint from misuse.",
      "Platforms may remove infringing listings, posts, ads, or seller accounts based on IP complaints.",
      "Counterfeiting or piracy can trigger criminal action in serious cases.",
      "Trademark registration strengthens remedies, but passing-off may still be available based on goodwill."
    ],
    immediateActions: [
      "Preserve URLs, screenshots, invoices, dates, account IDs, and copied material.",
      "Collect proof of ownership, first use, registration certificates, drafts, and source files.",
      "Use platform IP complaint or takedown process if the infringement is online.",
      "Send a cease-and-desist notice before litigation unless urgent injunction is needed."
    ],
    evidence: [
      "Registration certificate, first-use proof, source files, invoices, publication dates.",
      "Infringing URLs, screenshots, seller details, ad IDs, product samples.",
      "Customer confusion evidence, sales loss, platform complaint IDs."
    ],
    escalation: [
      "Platform IP/takedown portal",
      "Cease-and-desist notice",
      "Commercial court or civil court",
      "Police complaint for counterfeiting or piracy where applicable"
    ],
    questions: [
      "Is this copyright, trademark, design, software, or counterfeit goods?",
      "Do you have registration or first-use proof?",
      "Where is the copied material being used?"
    ]
  },
  {
    id: "tax-gst-income-tax-notice",
    category: "tax",
    title: "GST, income tax, TDS, or tax notice issue",
    urgency: "medium",
    summary:
      "Use this for GST notices, income tax scrutiny, TDS mismatch, demand notices, penalty show cause, late filing, or business tax compliance problems.",
    keywords: [
      "gst",
      "income tax",
      "tds",
      "tax notice",
      "scrutiny",
      "demand notice",
      "penalty",
      "itr",
      "gstr",
      "show cause"
    ],
    sanctions: [
      "Tax authorities may demand tax, interest, penalty, late fee, reversal of credit, or prosecution in serious evasion cases.",
      "Proper reply with reconciliation can reduce demand, penalties, or adverse assessment.",
      "Appeal, rectification, or stay routes may be available against incorrect orders.",
      "Ignoring notices can lead to ex parte orders, recovery steps, blocked credits, or bank attachment in serious cases."
    ],
    immediateActions: [
      "Download the full notice, order, annexures, DIN/ARN, and deadline.",
      "Reconcile returns, invoices, bank statements, Form 26AS/AIS, GSTR data, and books.",
      "Do not miss reply or appeal limitation dates.",
      "Consult a tax professional for high-value demands or prosecution language."
    ],
    evidence: [
      "Notice, order, portal screenshot, return copies, books of account.",
      "Invoices, e-way bills, bank statements, Form 26AS/AIS, GST ledgers.",
      "Prior replies, hearing notices, appeal papers, and payment challans."
    ],
    escalation: [
      "Jurisdictional tax officer or portal reply",
      "Rectification or grievance route",
      "Appeal authority",
      "Tax professional or counsel"
    ],
    questions: [
      "Is this GST, income tax, TDS, or another tax?",
      "What is the deadline and demand amount?",
      "Is it a notice, assessment order, or appeal stage?"
    ]
  },
  {
    id: "neighbour-noise-nuisance-encroachment",
    category: "civic",
    title: "Neighbour nuisance, noise, encroachment, or local civic dispute",
    urgency: "medium",
    summary:
      "Use this for loud noise, water leakage, illegal construction, encroachment, parking obstruction, pets, garbage, society disputes, or local nuisance.",
    keywords: [
      "neighbour",
      "neighbor",
      "noise",
      "nuisance",
      "encroachment",
      "illegal construction",
      "society",
      "parking",
      "water leakage",
      "garbage"
    ],
    sanctions: [
      "Municipal or development authorities may issue notices, stop-work orders, demolition directions, fines, or corrective directions.",
      "Police may act for threats, public nuisance, night disturbance, trespass, or intimidation.",
      "Civil courts may grant injunction, damages, or restraining orders for recurring nuisance or encroachment.",
      "Housing societies may apply bye-laws, penalties, or internal dispute processes."
    ],
    immediateActions: [
      "Document dates, times, photos, videos, decibel app readings where useful, and witnesses.",
      "Send a calm written complaint to the society or municipal authority.",
      "Call police only for immediate disturbance, threats, trespass, or safety risk.",
      "Avoid self-help actions like breaking structures, blocking access, or public confrontation."
    ],
    evidence: [
      "Photos, videos, noise logs, society notices, municipal complaints.",
      "Property plan, sanctioned plan if available, maintenance records, witness names.",
      "Police diary entry, municipal acknowledgement, and repair estimates."
    ],
    escalation: [
      "Resident welfare association or housing society",
      "Municipal authority or development authority",
      "Police for threats or urgent nuisance",
      "Civil injunction or local magistrate route"
    ],
    questions: [
      "Is the issue noise, construction, encroachment, parking, leakage, or threats?",
      "How often does it happen and what proof exists?",
      "Have you complained to society or municipality?"
    ]
  },
  {
    id: "environment-pollution-noise-waste",
    category: "environment",
    title: "Pollution, waste dumping, tree cutting, or environmental harm",
    urgency: "medium",
    summary:
      "Use this for air or water pollution, illegal waste dumping, tree cutting, industrial emissions, noise pollution, sewage discharge, or environmental clearance concerns.",
    keywords: [
      "pollution",
      "environment",
      "waste dumping",
      "tree cutting",
      "sewage",
      "industrial smoke",
      "noise pollution",
      "water pollution",
      "air pollution",
      "ngt"
    ],
    sanctions: [
      "Pollution control boards may issue closure, penalty, remediation, prosecution, or compliance directions.",
      "Municipal authorities may remove waste, stop illegal dumping, impose fines, or act against sanitation violations.",
      "Environmental tribunals and courts can order restoration, compensation, and preventive directions.",
      "Illegal tree cutting or protected-area violations can trigger separate forest or municipal penalties."
    ],
    immediateActions: [
      "Record dates, times, location, photos, videos, odour or noise logs, and source details.",
      "Complain to municipal authority or pollution control board with map location and evidence.",
      "For hazardous discharge or acute health risk, contact emergency services and local administration.",
      "Avoid entering unsafe industrial or dumping sites to gather proof."
    ],
    evidence: [
      "Photos, videos, location pins, time logs, sample reports if legally obtained.",
      "Health complaints, neighbour statements, prior complaints, and official replies.",
      "Factory name, vehicle numbers, dumping source, and land records where relevant."
    ],
    escalation: [
      "Municipal authority",
      "State Pollution Control Board",
      "District administration",
      "National Green Tribunal or court route"
    ],
    questions: [
      "What type of pollution or environmental harm is happening?",
      "Where exactly is it happening and who is causing it?",
      "Is there immediate health or safety danger?"
    ]
  },
  {
    id: "missing-person-runaway-child",
    category: "police",
    title: "Missing person, runaway child, or urgent tracing request",
    urgency: "high",
    summary:
      "Use this when a child, adult, elderly person, or vulnerable person is missing, unreachable in suspicious circumstances, or needs urgent tracing.",
    keywords: [
      "missing person",
      "missing child",
      "runaway",
      "not reachable",
      "kidnap",
      "abduction",
      "lost person",
      "elder missing",
      "last seen"
    ],
    sanctions: [
      "Police can register a missing complaint or FIR depending on age, risk, and facts, and start search procedures.",
      "Child-related missing cases receive urgent treatment and may involve child welfare systems.",
      "Abduction, trafficking, kidnapping, or wrongful confinement allegations can lead to criminal investigation.",
      "Courts can be approached urgently if police inaction causes serious risk."
    ],
    immediateActions: [
      "Call emergency services or go to the nearest police station immediately.",
      "Share recent photo, last-seen location, clothes, phone number, friends, and travel routes.",
      "Preserve phone records, chats, CCTV locations, cab/train/bus details, and bank activity.",
      "For a child, also contact child helpline and nearby shelters or transport hubs."
    ],
    evidence: [
      "Recent photo, ID proof, last-seen details, phone number, clothes, medical needs.",
      "Chats, call logs, CCTV leads, travel bookings, cab or payment records.",
      "Friend/contact list, prior threats, family disputes, and police acknowledgement."
    ],
    escalation: [
      "Emergency services or local police",
      "Child helpline for children",
      "Senior police officers",
      "Legal aid or court route for urgent inaction"
    ],
    questions: [
      "Is the missing person a child, elderly person, or medically vulnerable?",
      "When and where were they last seen?",
      "Have police given a complaint or FIR acknowledgement?"
    ]
  },
  {
    id: "data-privacy-doxxing-consent",
    category: "privacy",
    title: "Data privacy, doxxing, consent, or personal information misuse",
    urgency: "medium",
    summary:
      "Use this when personal data, Aadhaar/PAN, address, photos, private chats, health data, or workplace records are leaked, sold, exposed, or misused.",
    keywords: [
      "privacy",
      "data leak",
      "doxxing",
      "aadhaar",
      "pan card",
      "personal information",
      "consent",
      "private data",
      "leaked address"
    ],
    sanctions: [
      "Platforms, employers, or businesses may be required to remove data, secure accounts, correct records, or respond to grievance requests.",
      "Cyber police may investigate hacking, identity theft, impersonation, stalking, or extortion linked to data misuse.",
      "Regulatory or civil remedies may apply depending on the type of data, harm, and entity involved.",
      "Courts may grant takedown, restraint, or compensation in serious privacy violations."
    ],
    immediateActions: [
      "Capture screenshots and URLs before content is removed or changed.",
      "Secure accounts, change passwords, enable two-factor authentication, and lock identity documents where possible.",
      "Send takedown and deletion requests to the platform or organization.",
      "Report to cybercrime portal if identity theft, threats, impersonation, or financial risk is involved."
    ],
    evidence: [
      "Screenshots, URLs, account IDs, data fields exposed, and publication date.",
      "Proof of identity misuse, OTP alerts, account changes, and threat messages.",
      "Platform complaints, emails to data holder, and cyber complaint acknowledgement."
    ],
    escalation: [
      "Platform or organization grievance officer",
      "Cybercrime portal or cyber police",
      "Legal notice for takedown and restraint",
      "Regulatory or court remedy where applicable"
    ],
    questions: [
      "What personal data was exposed or misused?",
      "Where is it visible or who is using it?",
      "Is there financial risk, impersonation, or physical safety risk?"
    ]
  },
  {
    id: "family-custody-divorce-alimony",
    category: "relationship",
    title: "Divorce, child custody, alimony, visitation, or family settlement",
    urgency: "medium",
    summary:
      "Use this for mutual or contested divorce, child custody, visitation, alimony, maintenance, property settlement, mediation, or separation terms.",
    keywords: [
      "divorce",
      "custody",
      "alimony",
      "visitation",
      "family court",
      "separation",
      "mutual consent",
      "child support",
      "settlement",
      "parenting"
    ],
    sanctions: [
      "Family courts may order custody, visitation, maintenance, alimony, residence, mediation, or settlement enforcement.",
      "Breach of maintenance or custody orders can trigger enforcement or modification proceedings.",
      "Cruelty, violence, dowry, or child safety allegations may lead to separate criminal or protection proceedings.",
      "Settlement terms can cover money, property, child arrangements, stridhan, and case withdrawal timelines."
    ],
    immediateActions: [
      "List marriage date, separation date, children, income, expenses, and pending cases.",
      "Collect marriage proof, child records, income proof, bank statements, and prior orders.",
      "Avoid informal child handover or money settlement without written terms.",
      "Consider mediation when safety risk is not present and both sides can negotiate."
    ],
    evidence: [
      "Marriage certificate, child birth certificate, school records, medical records.",
      "Income proof, bank statements, expenses, property details, messages, prior orders.",
      "Evidence of caregiving, residence, violence, addiction, or neglect if relevant."
    ],
    escalation: [
      "Family court",
      "Mediation centre",
      "Protection officer or police where safety issues exist",
      "Legal aid or family lawyer"
    ],
    questions: [
      "Is this mutual divorce, contested divorce, custody, or maintenance?",
      "Are there children and any safety concerns?",
      "What orders or cases already exist?"
    ]
  },
  {
    id: "immovable-property-registration-stamp-duty",
    category: "property",
    title: "Property registration, stamp duty, sale deed, or title defect",
    urgency: "medium",
    summary:
      "Use this for sale deed mistakes, registration refusal, stamp duty demand, encumbrance, missing title documents, forged sale deed, or property transfer problems.",
    keywords: [
      "registration",
      "stamp duty",
      "sale deed mistake",
      "encumbrance",
      "sub registrar",
      "title defect",
      "property transfer",
      "gift deed",
      "will registration"
    ],
    sanctions: [
      "Registration authorities may require correction deeds, stamp duty, penalty, adjudication, or refusal reasons.",
      "Civil courts may cancel forged documents, declare title, grant injunction, or order specific performance.",
      "Forgery or cheating allegations can trigger criminal investigation where documents or identity were misused.",
      "Revenue records may be corrected through mutation or appeal routes depending on local law."
    ],
    immediateActions: [
      "Get certified copies of the disputed deed, encumbrance certificate, mutation, and payment challans.",
      "Do not sign correction or cancellation documents without title review.",
      "Check whether the issue is registration, stamp duty, title, possession, or fraud.",
      "File objections quickly if someone is attempting fresh registration or mutation."
    ],
    evidence: [
      "Sale deed, gift deed, will, power of attorney, registration receipt.",
      "Encumbrance certificate, mutation record, tax receipt, identity proof, payment records.",
      "Certified copies, notices, registrar objections, and witness details."
    ],
    escalation: [
      "Sub-registrar or district registrar",
      "Revenue authority",
      "Civil court",
      "Police for forgery, impersonation, or cheating facts"
    ],
    questions: [
      "Is the problem with registration, stamp duty, title, mutation, or fraud?",
      "Who is in possession of the property?",
      "Do you have certified copies of the disputed documents?"
    ]
  },
  {
    id: "immigration-visa-foreigner-registration",
    category: "immigration",
    title: "Visa, OCI, foreigner registration, or immigration issue",
    urgency: "medium",
    summary: "Use this for visa refusal, overstay concerns, OCI matters, foreigner registration, immigration questioning, deportation concerns, or travel-document compliance.",
    keywords: ["visa refusal", "visa rejected", "overstay", "foreigner registration", "frro", "oci", "deportation", "immigration", "entry denied"],
    sanctions: ["Immigration authorities may seek documents, impose conditions, or take action under the applicable visa and immigration rules.", "A refusal or adverse action may have an administrative review or representation route depending on the visa type and facts."],
    immediateActions: ["Check the expiry date and conditions on the visa or OCI document immediately.", "Keep all applications, acknowledgements, travel records, and official emails.", "Use the official immigration or FRRO channel; do not rely on agents for urgent status advice."],
    evidence: ["Passport, visa or OCI card, application and acknowledgement numbers.", "Travel itinerary, entry/exit stamps, official notices, and correspondence."],
    escalation: ["FRRO/FRO or the relevant official immigration portal", "Indian mission or consulate where applicable", "Qualified immigration lawyer for detention, removal, or urgent travel restrictions"],
    questions: ["What document or visa type is involved?", "What is the deadline or expiry date?", "Did you receive a written refusal or notice?"]
  },
  {
    id: "business-registration-licence-compliance",
    category: "business",
    title: "Business registration, licence, MSME, or regulatory compliance",
    urgency: "medium",
    summary: "Use this for company or partnership registration, shop and establishment issues, trade licences, GST registration, MSME/Udyam, local permits, or compliance notices.",
    keywords: ["business registration", "company registration", "partnership", "llp", "msme", "udyam", "trade licence", "shop act", "business licence", "compliance notice"],
    sanctions: ["Authorities may seek corrections, returns, fees, or compliance before granting or renewing a registration or licence.", "Non-compliance can lead to notices, penalties, suspension, or other action under the relevant law."],
    immediateActions: ["Identify the exact registration, licence, department, and deadline involved.", "Preserve the notice, filings, payment receipts, and prior correspondence.", "Use the official portal or a qualified professional for time-sensitive filings."],
    evidence: ["Registration certificate, licence, notice, filings, and payment challans.", "Constitution documents, address proof, invoices, and communication from the authority."],
    escalation: ["Relevant registration or licensing authority", "Department grievance channel", "Company secretary, chartered accountant, or lawyer"],
    questions: ["What type of entity or licence is involved?", "Which authority issued the notice?", "What is the filing or response deadline?"]
  },
  {
    id: "debt-insolvency-recovery",
    category: "insolvency",
    title: "Debt recovery, insolvency, bankruptcy, or loan default",
    urgency: "high",
    summary: "Use this for loan-default notices, recovery action, business insolvency, personal-guarantor issues, bankruptcy concerns, or creditor payment disputes.",
    keywords: ["insolvency", "bankruptcy", "loan default", "recovery notice", "debt recovery", "creditor", "guarantor", "nclt", "sarfaesi", "possession notice"],
    sanctions: ["A creditor may pursue recovery or insolvency remedies only through the applicable legal process.", "Tribunals or courts may set timelines, approve a resolution process, or determine claims and priorities based on the case."],
    immediateActions: ["Do not ignore a demand, possession, tribunal, or court notice.", "Collect loan agreements, statements, security documents, notices, and payment records.", "Get prompt professional advice before admitting liability, signing a settlement, or transferring assets."],
    evidence: ["Loan and guarantee documents, account statements, notices, and repayment proof.", "Security documents, valuation papers, business records, and correspondence."],
    escalation: ["Lender grievance channel or authorised officer", "Debt recovery/tribunal or insolvency forum where applicable", "Insolvency professional or qualified lawyer"],
    questions: ["Is this a personal loan, secured loan, business debt, or guarantee?", "Have you received a formal notice or tribunal case number?", "What deadline is stated in the notice?"]
  },
  {
    id: "arbitration-mediation-commercial-dispute",
    category: "arbitration",
    title: "Arbitration, mediation, or commercial dispute resolution",
    urgency: "medium",
    summary: "Use this for contract disputes with an arbitration clause, unpaid invoices, partnership disputes, mediation proposals, arbitral notices, or award-enforcement questions.",
    keywords: ["arbitration", "arbitrator", "arbitral award", "mediation", "commercial dispute", "dispute resolution", "arbitration clause", "conciliation"],
    sanctions: ["An arbitral tribunal may issue directions and an award within its authority under the agreement and applicable law.", "Courts may become involved for interim protection, appointment issues, challenge, or enforcement in defined circumstances."],
    immediateActions: ["Read the dispute-resolution clause and every notice carefully.", "Preserve the contract, invoices, emails, delivery proof, and calculation of the claim.", "Check contractual and statutory deadlines before replying or appointing an arbitrator."],
    evidence: ["Signed agreement and arbitration clause.", "Invoices, purchase orders, delivery records, emails, and payment ledger."],
    escalation: ["Contractual mediation or arbitration institution", "Commercial court where court relief is required", "Commercial-disputes lawyer"],
    questions: ["Does the contract contain an arbitration or mediation clause?", "What amount and obligation are disputed?", "Have you received a notice invoking arbitration?"]
  },
  {
    id: "utility-electricity-water-gas-billing",
    category: "utilities",
    title: "Electricity, water, gas, or utility billing and disconnection dispute",
    urgency: "medium",
    summary: "Use this for incorrect utility bills, meter disputes, wrongful disconnection, delayed connection, water-supply complaints, or gas-service issues.",
    keywords: ["electricity bill", "power cut", "meter", "water bill", "water connection", "gas connection", "utility bill", "wrong bill", "disconnection"],
    sanctions: ["The utility may inspect, correct billing, or take action only under its applicable supply rules and procedures.", "A grievance authority or consumer forum may direct correction, service restoration, or compensation where justified."],
    immediateActions: ["Raise a written complaint and retain the complaint/reference number.", "Photograph the meter and preserve bills, payment receipts, and disconnection notices.", "Pay any undisputed portion where appropriate while contesting the disputed amount in writing."],
    evidence: ["Bills, meter photographs, payment receipts, complaint numbers, and notices.", "Previous consumption history and connection documents."],
    escalation: ["Utility grievance officer or consumer grievance forum", "Electricity ombudsman or local utility authority where applicable", "Consumer commission for eligible service disputes"],
    questions: ["Which utility and city/state is involved?", "Was there a disconnection or only a billing dispute?", "What complaint number and bill amount do you have?"]
  },
  {
    id: "telecom-mobile-internet-service",
    category: "telecom",
    title: "Mobile, internet, SIM, or telecom service dispute",
    urgency: "medium",
    summary: "Use this for SIM-swap fraud, billing disputes, mobile-number porting, unwanted service activation, broadband failure, or telecom-provider complaints.",
    keywords: ["sim swap", "sim card", "mobile bill", "telecom", "broadband", "internet provider", "porting", "network complaint", "mobile number"],
    sanctions: ["The provider may investigate, correct service or billing records, and take account-security steps.", "Regulatory or consumer remedies may be available after the provider's grievance process, depending on the issue."],
    immediateActions: ["Secure the account and bank/UPI access immediately if a SIM swap is suspected.", "Record the provider complaint number and preserve bills, SMS messages, and service requests.", "Do not share OTPs, SIM details, or account credentials with callers."],
    evidence: ["Bills, service requests, porting records, SMS/email alerts, and identity-verification records.", "Provider complaint numbers and screenshots of account changes."],
    escalation: ["Telecom provider grievance officer", "Relevant telecom grievance or consumer channel", "Cybercrime reporting for SIM-swap financial fraud"],
    questions: ["Is this billing, service outage, porting, or suspected SIM swap?", "Which provider and complaint number are involved?", "Was money or account access affected?"]
  },
  {
    id: "disability-accessibility-discrimination",
    category: "disability",
    title: "Disability rights, accessibility, accommodation, or discrimination",
    urgency: "medium",
    summary: "Use this for inaccessible public services, education or workplace accommodation, disability discrimination, benefit delays, or denial of equal access.",
    keywords: ["disability", "disabled", "accessible", "accessibility", "reasonable accommodation", "wheelchair", "discrimination disability", "disability certificate"],
    sanctions: ["Institutions may be required to examine an accessibility or accommodation complaint under applicable law and policy.", "A competent authority, commission, court, or employer process may order corrective action where a violation is established."],
    immediateActions: ["Ask for the accommodation or accessibility change in writing and state the date needed.", "Preserve medical/disability documents only to the extent necessary, plus emails, notices, and photos.", "Seek urgent support if denial affects health, education, work, or safety."],
    evidence: ["Written request, response, disability certificate where relevant, and photographs or recordings of barriers.", "Employment, school, service, or benefit records showing the impact."],
    escalation: ["Institution grievance officer", "State/central disability-rights authority or commission", "Legal aid or rights-focused lawyer"],
    questions: ["Which service, school, employer, or authority denied access?", "What accommodation did you request?", "Do you have the refusal in writing?"]
  },
  {
    id: "adoption-guardianship-child-welfare",
    category: "child_welfare",
    title: "Adoption, guardianship, child welfare, or child-protection concern",
    urgency: "high",
    summary: "Use this for adoption-process questions, guardianship, child neglect, child labour, missing-child reports, abuse concerns, or child-welfare services.",
    keywords: ["adoption", "guardianship", "child welfare", "child abuse", "child labour", "missing child", "child protection", "orphan", "juvenile"],
    sanctions: ["Child-protection authorities and courts can take protective, welfare, guardianship, or other action based on the child's best interests and applicable procedure.", "Abuse, trafficking, exploitation, or child-labour concerns can require immediate reporting to the competent authorities."],
    immediateActions: ["If a child is in immediate danger, call 112 or the child-help service and contact police.", "Do not conduct private adoption arrangements or share a child's identity/photos publicly.", "Preserve messages, medical records, location details, and any prior complaint references."],
    evidence: ["Identity and relationship documents, court orders, school/medical records, and official notices.", "Messages, photographs, witness details, and prior complaint acknowledgements."],
    escalation: ["Police or child-protection authority", "Child welfare committee or authorised adoption channel", "Family court or legal-aid lawyer"],
    questions: ["Is there immediate danger, a missing child, adoption, or guardianship issue?", "Which city/state and authority is involved?", "Is there an existing court or child-welfare order?"]
  },
  {
    id: "election-voter-id-electoral-complaint",
    category: "elections",
    title: "Voter ID, electoral roll, election complaint, or political intimidation",
    urgency: "medium",
    summary: "Use this for voter-registration errors, voter ID issues, electoral-roll corrections, campaigning complaints, voting obstruction, or election-related intimidation.",
    keywords: ["voter id", "voter list", "electoral roll", "election complaint", "booth", "voting", "election commission", "political intimidation"],
    sanctions: ["Election authorities may correct records, investigate complaints, and take action under election law and the applicable code of conduct.", "Threats, violence, bribery, or obstruction may also require police reporting."],
    immediateActions: ["Keep the electoral-roll entry, application/reference number, screenshots, and polling-station details.", "Report threats or violence to police immediately; do not confront armed or violent persons.", "Use official election channels for registration and conduct complaints."],
    evidence: ["Voter ID, roll entry, application number, photos/videos where safe, and witness details.", "Complaint acknowledgements, notices, and polling-station details."],
    escalation: ["Electoral registration officer or election authority", "Police for threats, violence, bribery, or obstruction", "Legal aid for urgent voting-rights issues"],
    questions: ["Is the issue registration, roll correction, voting, or a safety complaint?", "Which constituency and election are involved?", "Do you have an application or complaint number?"]
  },
  {
    id: "armed-forces-veteran-service-matter",
    category: "service_matters",
    title: "Government service, armed-forces, pension, or service-record dispute",
    urgency: "medium",
    summary: "Use this for government-service disciplinary matters, pension and retirement benefits, armed-forces service records, ex-servicemen issues, or departmental decisions.",
    keywords: ["government employee", "service matter", "disciplinary inquiry", "pension arrears", "retirement benefits", "armed forces", "ex serviceman", "service record", "departmental inquiry"],
    sanctions: ["The department may conduct a process or review under the applicable service rules, subject to procedural safeguards.", "Tribunal or court remedies may be available for eligible service, pension, or disciplinary disputes."],
    immediateActions: ["Preserve the order, charge sheet, service book extracts, pension papers, and representations.", "Calendar the response, appeal, or review deadline stated in every order.", "Use the departmental grievance or appeal route before missing a formal deadline."],
    evidence: ["Appointment and service records, orders, pay slips, pension papers, and representations.", "Charge sheet, inquiry notices, witness documents, and acknowledgement receipts."],
    escalation: ["Departmental grievance or appellate authority", "Relevant service tribunal or pension authority", "Service-law lawyer or veterans' legal-aid support"],
    questions: ["Is this pension, disciplinary action, promotion, pay, or service record?", "What order and deadline were issued?", "Are you a civilian employee, serving member, or veteran?"]
  }
];

const CUSTOM_CASES_KEY = "lawmitra_custom_cases_v1";

loadCustomCases().forEach((legalCase) => LEGAL_CASES.push(legalCase));

export function saveCustomCases(value) {
  const parsed = typeof value === "string" ? JSON.parse(value) : value;
  if (!Array.isArray(parsed)) throw new Error("The catalogue must be a JSON array.");

  const cases = parsed.map(normalizeCustomCase);
  try {
    localStorage.setItem(CUSTOM_CASES_KEY, JSON.stringify(cases));
  } catch {
    throw new Error("Browser storage is unavailable.");
  }
  return cases;
}

export function exportCustomCases() {
  return JSON.stringify(loadCustomCases(), null, 2);
}

function loadCustomCases() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CUSTOM_CASES_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.map(normalizeCustomCase) : [];
  } catch {
    return [];
  }
}

function normalizeCustomCase(value) {
  if (!value || typeof value !== "object") throw new Error("Each catalogue entry must be an object.");
  const id = String(value.id || "").trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  const category = String(value.category || "").trim().toLowerCase().replace(/[^a-z0-9_]+/g, "_");
  const title = String(value.title || "").trim();
  const summary = String(value.summary || "").trim();
  if (!id || !category || !title || !summary) {
    throw new Error("Each entry requires id, category, title, and summary.");
  }

  const list = (items) => Array.isArray(items)
    ? items.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim()).slice(0, 12)
    : [];

  return {
    id,
    category,
    title: title.slice(0, 160),
    urgency: ["low", "medium", "high"].includes(value.urgency) ? value.urgency : "medium",
    summary: summary.slice(0, 800),
    keywords: list(value.keywords),
    sanctions: list(value.sanctions),
    immediateActions: list(value.immediateActions),
    evidence: list(value.evidence),
    escalation: list(value.escalation),
    questions: list(value.questions)
  };
}

export function getCasesByCategory(category) {
  return LEGAL_CASES.filter((legalCase) => legalCase.category === category);
}

export function getCaseById(id) {
  return LEGAL_CASES.find((legalCase) => legalCase.id === id);
}

export function getCaseCategories() {
  return [...new Set(LEGAL_CASES.map((legalCase) => legalCase.category))];
}
