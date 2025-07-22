export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Advanced Genetics',
    number: 'L41 5491',
    link: 'https://biology.wustl.edu/advanced-genetics',
    university: 'WashU',
  },
  {
    title: 'Computational Statistical Genetics',
    number: 'M21 621',
    link: 'https://courses.wustl.edu/CourseInfo.aspx?sch=M&dept=M21&crs=621',
    university: 'WashU',
  },
  {
    title: 'Genomics',
    number: 'L41 5488',
    link: 'https://biology.wustl.edu/genomics',
    university: 'WashU',
  },
  {
    title: 'Nucleic Acids',
    number: 'L07 485',
    link: 'https://chemistry.wustl.edu/nucleic-acids',
    university: 'WashU',
  },
  {
    title: 'Spectral Methods in Organic Chemistry',
    number: 'L07 558',
    link: 'https://chemistry.wustl.edu/spectral-methods-organic-chemistry',
    university: 'WashU',
  },
  {
    title: 'Synthetic Polymer Chemistry with Lab',
    number: 'L07 452L',
    link: 'https://it.artsci.wustl.edu/courses/452l/synthetic-polymer-chemistry-lab',
    university: 'WashU',
  },
  {
    title: 'Organometallic Chemistry',
    number: 'L07 459',
    link: 'https://chemistry.wustl.edu/organometallic-chemistry',
    university: 'WashU',
  },
  {
    title: 'Bioorganic Chemistry',
    number: 'L07 453',
    link: 'https://chemistry.wustl.edu/bioorganic-chemistry',
    university: 'WashU',
  },
  {
    title: 'Organic Chemistry III',
    number: 'L07 451',
    link: 'https://chemistry.wustl.edu/organic-chemistry-iii',
    university: 'WashU',
  },
];

export default courses;
