interface DescriptionBlock {
    text: string;
    src: string;
    alt: string;
  }
  
  interface DescriptionType {
    title: string;
    blocks: DescriptionBlock[];
    className: string;
  }

  export default DescriptionType;