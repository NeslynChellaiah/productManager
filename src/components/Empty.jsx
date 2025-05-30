import { Image } from "react-bootstrap";

const Empty = ({ message }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Image src="/rejected.png" height={234} />
      <div className="text-center mt-3">{message}</div>
    </div>
  );
};

export default Empty;
