export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Washington University in St. Louis',
    degree: 'Ph.D. Molecular Genetics & Genomics',
    link: 'https://dbbs.wustl.edu/programs/molecular-genetics-genomics/',
    year: 2025,
  },
  {
    school: 'Washington University in St. Louis',
    degree: 'M.S. Chemistry',
    link: 'https://chemistry.wustl.edu/',
    year: 2021,
  },
  {
    school: 'Central South University',
    degree: 'B.S. Pharmaceutical Engineering',
    link: 'https://en.csu.edu.cn/',
    year: 2017,
  },
];

export default degrees;
