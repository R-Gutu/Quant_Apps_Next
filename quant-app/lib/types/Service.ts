  type Block = {
    text: string;
    src: string;
    alt: string;
  };
  
  type Description = {
    title: string;
    blocks: Block[];
    className: string;
  };

  type Header = {
    title: string,
    text: string,
    button: string
  }

 export default interface Service{
    header: Header,
    description: Description []
  }