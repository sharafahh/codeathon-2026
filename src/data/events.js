export const events = [
  {
    id: 1,
    path: '/crack-the-code',
    title: 'Crack the Code',
    description:
      "A programming competition that tests participants' ability to understand problems, develop algorithms, write correct programs, identify errors and produce efficient solutions within a limited time.",
    icon: 'Code2',
    date: 'Mar 14, 2026',
    time: '09:00 AM - 05:00 PM',
    category: 'Coding',
    teams: 'Individual / 2 members',
    fee: '₹150 per participant',
  },
  {
    id: 2,
    path: '/hackathon',
    title: 'Hackathon',
    description:
      'Identify a real-world problem and build a technology solution, from web or mobile apps to AI/ML, IoT and cybersecurity projects.',
    icon: 'Rocket',
    date: 'Mar 15, 2026',
    time: '09:00 AM - 05:00 PM',
    category: 'Software & Technology',
    teams: '2–5 members',
    fee: '₹150 per participant',
  },
  {
    id: 3,
    path: '/techforge',
    title: 'TechForge',
    description:
      'Build and demonstrate a working engineering prototype for a real-world problem across EEE, ECE, Mechanical and Civil Engineering.',
    icon: 'CircuitBoard',
    date: 'Mar 16, 2026',
    time: '09:00 AM - 05:00 PM',
    category: 'Hardware & Engineering',
    teams: '2–4 members',
    fee: '₹150 per participant',
  },
];

export const codeathonEvents = {
  crackTheCode: {
    slug: 'crack-the-code',
    path: '/crack-the-code',
    title: 'Crack the Code',
    shortTitle: 'Crack the Code',
    focus: 'Coding & Debugging',
    tagline: "A programming competition that tests participants' ability to understand problems, develop algorithms, write correct programs, identify errors and produce efficient solutions within a limited time.",
    teamSize: 'Individual or 2/team',
    fee: 150,
    feeLabel: '₹150 per participant',
    icon: 'Code2',
    gradient: 'from-[#02A4FF] via-[#FFFFFF] to-[#34D9B2]',
    glow: 'glow-vermillion',
    description: "A programming competition that tests participants' ability to understand problems, develop algorithms, write correct programs, identify errors and produce efficient solutions within a limited time.",
    eligibility: 'Open to all engineering colleges/disciplines; individual or team of 2; valid college ID mandatory',
    procedure: [
      'Code Sprint — solve programming problems within the allotted time.',
      'Debugging Arena — identify and correct syntax, logical, runtime and output errors.',
      'Final Code Challenge — shortlisted participants solve advanced programming and problem-solving tasks.',
      'Ranking — winners are determined by correctness, problems solved, efficiency and time.',
    ],
    domains: [],
    rules: [
      'All submissions must be original work.',
      'No copying or unauthorized assistance from other participants.',
      'Reference materials and internet use are allowed only where stated per round.',
      'Strict per-round deadlines — late submissions are not accepted.',
      'Any malpractice leads to immediate disqualification.',
      'Jury and organizing committee decisions are final.',
    ],
    evaluation: [
      { criterion: 'Correctness', weight: 40 },
      { criterion: 'Problem-solving approach', weight: 25 },
      { criterion: 'Code efficiency', weight: 15 },
      { criterion: 'Debugging ability', weight: 10 },
      { criterion: 'Time management', weight: 10 },
    ],
  },
  hackathon: {
    slug: 'hackathon',
    path: '/hackathon',
    title: 'Hackathon',
    shortTitle: 'Hackathon',
    focus: 'Software & Technology Innovation',
    tagline: 'Identify a real-world problem and develop a technology-based solution within the event duration.',
    teamSize: '2–5 members',
    fee: 150,
    feeLabel: '₹150 per participant',
    icon: 'Rocket',
    gradient: 'from-[#34D9B2] via-[#02A4FF] to-[#34D9B2]',
    glow: 'glow-charcoal',
    description: 'Identify a real-world problem and develop a technology-based solution within the event duration. Teams may build web apps, mobile apps, AI/ML solutions, IoT applications, cybersecurity solutions, or other innovative software.',
    eligibility: 'All engineering colleges; team of 2–5; interdisciplinary encouraged; one nominated team leader',
    procedure: [],
    domains: [
      'Open Innovation',
      'AI & ML',
      'Cybersecurity',
      'EdTech',
      'Healthcare',
      'Smart Campus/Smart City',
      'Agriculture',
      'Sustainable Development',
      'FinTech',
      'IoT',
      'Safety & Social Innovation',
      'Environmental Protection',
    ],
    rules: [
      'All submitted work must be built during the event window.',
      'No copying, resubmission, or unauthorized assistance.',
      'AI and internet use are permitted only where explicitly stated.',
      'Deadlines are strict — demos after the cut-off are disqualified.',
      'Any malpractice leads to immediate disqualification.',
      'Jury and organizing committee decisions are final.',
    ],
    evaluation: [
      { criterion: 'Problem Identification', weight: 15 },
      { criterion: 'Innovation', weight: 20 },
      { criterion: 'Technical Implementation', weight: 25 },
      { criterion: 'Functionality & Demo', weight: 15 },
      { criterion: 'Impact & Scalability', weight: 10 },
      { criterion: 'UI/UX', weight: 5 },
      { criterion: 'Presentation & Q&A', weight: 10 },
    ],
  },
  techforge: {
    slug: 'techforge',
    path: '/techforge',
    title: 'TechForge',
    shortTitle: 'TechForge',
    focus: 'Hardware & Engineering Innovation',
    tagline: 'A continuous hardware innovation hackathon for students of EEE, ECE, Mechanical and Civil Engineering.',
    teamSize: '2–4 members',
    fee: 150,
    feeLabel: '₹150 per participant',
    icon: 'CircuitBoard',
    gradient: 'from-[#34D9B2] via-[#34D9B2] to-[#02A4FF]',
    glow: 'glow-peach',
    description: 'A continuous hardware innovation hackathon for students of EEE, ECE, Mechanical and Civil Engineering — not a level-based circuit competition. Teams identify an engineering problem, design a solution, build a prototype, test it and demonstrate the working model.',
    eligibility: 'EEE/ECE/Mechanical/Civil students only; team 2–4; interdisciplinary encouraged; one team per participant',
    procedure: [],
    domains: [
      'Open Innovation',
      'Embedded Systems',
      'IoT & Smart Automation',
      'Energy & Power Solutions',
      'EVs & Mobility',
      'Robotics',
      'Communication Systems',
      'Safety Systems',
      'Sustainable Engineering',
      'Mechanical Automation',
      'Smart Structures/Civil-Tech',
      'Assistive Technology',
      'Interdisciplinary Hardware Innovation',
    ],
    rules: [
      'All work must be original and produced during the event window.',
      'No copying or unauthorized assistance from other teams.',
      'Materials and tool usage follow the rules announced at the event.',
      'Deadlines are strict — prototypes after the cut-off are disqualified.',
      'Any malpractice leads to immediate disqualification.',
      'Jury and organizing committee decisions are final.',
    ],
    evaluation: [
      { criterion: 'Problem Relevance', weight: 10 },
      { criterion: 'Innovation & Creativity', weight: 15 },
      { criterion: 'Engineering Design', weight: 20 },
      { criterion: 'Technical Implementation', weight: 20 },
      { criterion: 'Working Prototype & Demo', weight: 20 },
      { criterion: 'Practicality & Scalability', weight: 5 },
      { criterion: 'Presentation & Q&A', weight: 10 },
    ],
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Why Us', href: '#why' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Schedule', href: '#timeline' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const COORDINATORS = {
  faculty: [
    { name: 'Sukanya', phone: '+91 73058 10279' },
  ],
  students: [
    { name: 'Arif Basha', phone: '+91 63838 59800' },
    { name: 'Fizal Raja', phone: '+91 91235 38846' },
    { name: 'Nihaya', phone: '+91 8940751495' },
    { name: 'Sharafah', phone: '8870037871' },
  ],
};

export const COLLEGE_INFO = {
  name: 'Aalim Muhammed Salegh College of Engineering',
  accreditation: [
    { label: 'NAAC', value: 'A+' },
    { label: 'NBA', value: 'Accredited' },
    { label: 'AICTE', value: 'Approved' },
  ],
};

export const OBJECTIVES = [
  {
    title: 'Foster Innovation',
    description:
      'Encourage creative thinking and problem-solving among students from diverse engineering disciplines.',
  },
  {
    title: 'Build Technical Skills',
    description:
      'Provide hands-on experience with cutting-edge technologies and real-world engineering challenges.',
  },
  {
    title: 'Promote Collaboration',
    description:
      'Create a platform for inter-college teamwork, networking, and knowledge exchange.',
  },
  {
    title: 'Bridge Industry & Academia',
    description:
      'Connect students with industry mentors and expose them to professional-grade development practices.',
  },
];

export const awards = [
  {
    title: 'First Prize',
    award: 'Certificate with Cash Prize',
    amount: 'TBD',
    color: 'text-yellow-400',
  },
  {
    title: 'Second Prize',
    award: 'Certificate with Cash Prize',
    amount: 'TBD',
    color: 'text-gray-300',
  },
  {
    title: 'Third Prize',
    award: 'Certificate with Cash Prize',
    amount: 'TBD',
    color: 'text-amber-600',
  },
  {
    title: 'Participation Certificate',
    award: 'Certificate',
    color: 'text-indigo-400',
  },
  {
    title: 'Internship Opportunities',
    award: 'Internship',
    color: 'text-emerald-400',
  },
  {
    title: 'Best Innovation',
    award: 'Special Recognition',
    color: 'text-pink-400',
  },
  {
    title: 'Best Technical Implementation',
    award: 'Special Recognition',
    color: 'text-pink-400',
  },
  {
    title: 'Best Interdisciplinary Team',
    award: 'Special Recognition',
    color: 'text-pink-400',
  },
  {
    title: 'Best Social Impact',
    award: 'Special Recognition',
    color: 'text-pink-400',
  },
];
