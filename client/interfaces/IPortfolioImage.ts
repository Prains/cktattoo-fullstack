import IMaster from "./IMaster";

interface IPortfolioImage {
  master: IMaster;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export default IPortfolioImage
