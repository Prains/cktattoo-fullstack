interface IMaster {
  id: number;
  name: string;
  experienceYears: number;
  description: string;
  price: string;
  status: string;
  portolioImages: {
    data: {
      attributes: {
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    }[];
  };
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  workingPhoto: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export default IMaster;
