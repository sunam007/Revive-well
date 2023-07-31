import { Link } from "react-router-dom";
import error from "../../assets/icons/404.png";
import Button from "../../components/Button";
import Subtitle from "../../components/Subtitle";

const NotFound = () => {
  return (
    <div className="h-[640px] flex flex-col items-center justify-center space-y-8">
      <img src={error} className="w-32" alt="" />
      <Subtitle>Page not found</Subtitle>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
