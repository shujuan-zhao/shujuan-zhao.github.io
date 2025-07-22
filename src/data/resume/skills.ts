export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'GATK',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools'],
  },
  {
    title: 'ANNOVAR',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools', 'Disease Mechanism'],
  },
  {
    title: 'bcftools',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools'],
  },
  {
    title: 'samtools',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools'],
  },
  {
    title: 'bedtools',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools'],
  },
  {
    title: 'VEP',
    competency: 4,
    category: ['Genomic Pipelines', 'Tools'],
  },
  {
    title: 'IGV',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Languages', 'Tools', 'Programming', 'Genomic Pipelines'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Tools', 'Programming', 'Python', 'Genomic Pipelines'],
  },
  {
    title: 'SLUM',
    competency: 3,
    category: ['Genomic Pipelines', 'Tools', 'Programming'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools', 'Programing'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Genomic Pipelines'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Python', 'Genomic Pipelines'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science', 'Genomic Pipelines', 'Python'],
  },
  {
    title: 'gnomAD',
    competency: 4,
    category: ['Genomic Pipelines', 'Databases', 'Disease Mechanism'],
  },
  {
    title: 'ClinVar',
    competency: 4,
    category: ['Genomic Pipelines', 'Databases', 'Disease Mechanism'],
  },
  {
    title: 'UCSC Genome Browser',
    competency: 4,
    category: ['Genomic Pipelines', 'Databases', 'Disease Mechanism'],
  },
  {
    title: 'NCBI',
    competency: 4,
    category: ['Genomic Pipelines', 'Databases','Biochemistry', 'Disease Mechanism'],
  },
  {
    title: 'UniProt',
    competency: 4,
    category: ['Genomic Pipelines', 'Databases','Biochemistry', 'Disease Mechanism'],
  },
  {
    title: 'OMIM',
    competency: 4,
    category: ['Genomic Pipelines', 'Databases', 'Disease Mechanism'],
  },
  {
    title: 'Whole Exome Sequencing',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools', 'Disease Mechanism'],
  },
  {
    title: 'Whole Genome Sequencing',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools', 'Disease Mechanism'],
  },
  {
    title: 'Targeted Deep Sequencing',
    competency: 5,
    category: ['Genomic Pipelines', 'Tools', 'Disease Mechanism'],
  },
  {
    title: 'Long Read Sequencing',
    competency: 4,
    category: ['Genomic Pipelines', 'Tools', 'Disease Mechanism'],
  },
  {
    title: 'Single-cell RNA-Seq',
    competency: 3,
    category: ['Genomic Pipelines', 'Tools'],
  },
  {
    title: 'Primer Design',
    competency: 4,
    category: ['Biochemistry', 'Biology'],
  },
  {
    title: 'CRISPR KO',
    competency: 3,
    category: ['Biochemistry', 'Disease Mechanism', 'Tools'],
  },
  {
    title: 'Zebrafish Crossing and Injection',
    competency: 3,
    category: ['Disease Mechanism', 'Tools'],
  },
  {
    title: 'Organic Chemistry Synthesis',
    competency: 5,
    category: ['Organic Chemisty', 'Tools'],
  },
  {
    title: 'Column Chromatography',
    competency: 5,
    category: ['Organic Chemisty', 'Tools'],
  },
  {
    title: 'High-Performance Liquid Chromatography(HPLC)',
    competency: 5,
    category: ['Organic Chemisty', 'Tools'],
  },
  {
    title: 'Glove Box',
    competency: 5,
    category: ['Organic Chemisty'],
  },
  {
    title: 'Schlenk Techniques',
    competency: 5,
    category: ['Organic Chemisty'],
  },
  {
    title: 'NMR',
    competency: 5,
    category: ['Organic Chemisty', 'Tools'],
  },
  {
    title: '2D-NMR',
    competency: 4,
    category: ['Organic Chemisty'],
  },
  {
    title: 'GC-MS',
    competency: 4,
    category: ['Organic Chemisty'],
  },
  {
    title: 'Mass Spectrometry',
    competency: 5,
    category: ['Organic Chemisty', 'Tools', 'Biochemistry'],
  },
  {
    title: 'ChemDraw',
    competency: 5,
    category: ['Organic Chemisty', 'Tools', 'Biochemistry'],
  },
  {
    title: 'MestReNova',
    competency: 5,
    category: ['Organic Chemisty', 'Tools', 'Biochemistry'],
  },
  {
    title: 'PCR Cloning',
    competency: 5,
    category: ['Tools', 'Biochemistry'],
  },
  {
    title: 'Plasmid Transformation',
    competency: 5,
    category: ['Tools', 'Biochemistry'],
  },
  {
    title: 'Protein Purification',
    competency: 4,
    category: ['Tools', 'Biochemistry'],
  },
  {
    title: 'PyMOL',
    competency: 4,
    category: ['Biochemistry', 'Tools'],
  },
  {
    title: 'SnapGene',
    competency: 4,
    category: ['Tools', 'Biochemistry'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
