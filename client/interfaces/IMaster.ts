interface IMaster {
  id: number;
  name: string;
  experienceYears: number;
  description: string;
  price: string;
  status: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export default IMaster;
