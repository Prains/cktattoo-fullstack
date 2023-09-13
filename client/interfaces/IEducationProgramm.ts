interface IEducationProgramm {
  name: string;
  lessonBlocks: {
    id: number;
    title: string;
    description: string;
  }[];
}

export default IEducationProgramm;
