const E = '/images/extra'

const problem =
  'Many small businesses continue to manage employee records using spreadsheets or paper-based files. This approach often leads to duplicated records, data inconsistency, time-consuming searches, and difficulties in updating employee information.'

const standardMetricText = {
  speed: 'Through advanced memorization & edge-computing integration.',
  engagement: 'Increase in average session time due to improved UX & interactive tools.',
}

const sharedArtifacts = {
  small1: `${E}/6e44dbee.png`,
  small2: `${E}/c0dad6c3.png`,
  bottom: `${E}/e0f9d721.png`,
}

export const projectDetails = {
  'employee-management-system': {
    title: 'EMPLOYEE MANAGEMENT SYSTEM',
    hero: `${E}/345f276e.png`,
    overview:
      'The Employee Management System (EMS) is a desktop-based application developed using Python with a database to simplify employee record management for small and medium-sized organizations. The system provides an intuitive interface for storing, updating, searching, and managing employee information efficiently.',
    tech: ['Python', 'File Handling', 'Java', 'MySQL Database'],
    role: 'Senior UI/UX designer & Python developer',
    duration: '7 May 2025 – 28 May 2025',
    problem,
    solution:
      'The Employee Management System was designed to provide a centralized platform for managing employee information through a simple and intuitive interface.\n\nThe application enables users to perform essential employee management tasks quickly and efficiently while maintaining organized records within a database.',
    images: {
      main: `${E}/0a9f77de.png`,
      wide: `${E}/89dd8da3.png`,
      tall: `${E}/508cc7fa.png`,
      ...sharedArtifacts,
    },
    metrics: [
      { value: '45%', label: 'FASTER DATA LOADING', text: standardMetricText.speed },
      { value: '4.2x', label: 'USER ENGAGEMENT', text: standardMetricText.engagement },
    ],
  },

  'hive-management-system': {
    title: 'HIVE MANAGEMENT SYSTEM',
    hero: '/images/hive-cover.png',
    overview:
      'The HIVE management system is a website where students can apply and book tables in the HIVE also known as the library of the college.\n\nThis is an advance level website which handles all the work of library and overall works inside there.',
    tech: ['Python', 'File Handling', 'Java', 'MySQL Database'],
    role: 'Senior UI/UX designer & Data Analyst',
    duration: '9 June 2026 - 2 July 2026',
    problem,
    solution:
      'The HIVE Management System was designed to provide a centralized platform for managing library & table information through a simple and intuitive interface.\n\nThe application enables users to perform essential library tasks quickly and efficiently also while maintaining organized records within a database.',
    images: {
      main: '/images/hive-cover.png',
      wide: `${E}/89dd8da3.png`,
      tall: `${E}/2155906f.png`,
      ...sharedArtifacts,
    },
    metrics: [
      { value: '70%', label: 'FASTER DATA LOADING', text: standardMetricText.speed },
      { value: '10x', label: 'USER ENGAGEMENT', text: standardMetricText.engagement },
    ],
  },

  'food-fest-2026': {
    title: 'FOOD-FEST 2026 WEBSITE',
    hero: '/images/foodfest-cover.png',
    overview:
      'The food fest 2026 is a website which is designed and made for the annual food fest in Kathmandu, where all the food ventures comes and serve their work.\n\nA very popular fest on the basis of foods and related topics.',
    tech: ['Python', 'JavaScript', 'CSS', 'HTML5'],
    role: 'Senior UI/UX designer & Frontend developer',
    duration: '7 May 2025 – 28 May 2025',
    problem,
    solution:
      'The FOOD-FEST 2026 Website was designed to provide a centralized platform for managing employee information through a simple and intuitive interface.\n\nThe application enables users to perform essential employee management tasks quickly and efficiently while maintaining organized records within a database.',
    images: {
      main: '/images/foodfest-cover.png',
      wide: `${E}/f0a57af5.png`,
      tall: `${E}/f4f28888.png`,
      ...sharedArtifacts,
    },
    metrics: [
      { value: '45%', label: 'FASTER DATA LOADING', text: standardMetricText.speed },
      { value: '4.2x', label: 'USER ENGAGEMENT', text: standardMetricText.engagement },
    ],
  },

  'dance-studio-management-system': {
    title: 'DANCE STUDIO MANAGEMENT STUDIO',
    hero: '/images/dance-cover.png',
    overview:
      'The Dance Studio Management System is a desktop-based application developed using Python with a database to simplify studio record management for small and medium-sized organizations. The system provides an intuitive interface for storing, updating, searching, and managing studio information efficiently.',
    tech: ['Python', 'File Handling', 'Java', 'MySQL Database'],
    role: 'Senior UI/UX designer & Python developer',
    duration: '7 May 2025 – 28 May 2025',
    images: {
      main: '/images/dance-cover.png',
      wide: `${E}/89dd8da3.png`,
      tall: `${E}/508cc7fa.png`,
      ...sharedArtifacts,
    },
    metrics: [
      { value: '45%', label: 'FASTER DATA LOADING', text: standardMetricText.speed },
      { value: '4.2x', label: 'USER ENGAGEMENT', text: standardMetricText.engagement },
    ],
  },

  'portfolio-design': {
    title: 'PORTFOLIO DESIGN ',
    hero: '/images/portfolio-cover.png',
    overview:
      'The Portfolio Design is an assignment of the UI/UX, which is being taught in Techspire College.\n\nAn assignment for the intermediate level UI/UX Designing.',
    tech: ['Figma'],
    role: ' UI/UX designer',
    duration: '18 July 2026 - 26 July 2026',
    images: {
      main: `${E}/6e44dbee.png`,
      wide: `${E}/0beb394e.png`,
      tall: '/images/portfolio-cover.png',
      ...sharedArtifacts,
    },
    metrics: [
      {
        value: '100%',
        label: 'GREAT VISUAL DESIGN',
        text: 'A good design with great creativity, attractive.',
      },
      { value: '100%', label: 'USER ENGAGEMENT', text: standardMetricText.engagement },
    ],
  },
}