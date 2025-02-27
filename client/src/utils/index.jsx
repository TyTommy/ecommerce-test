import { Suspense } from "react";
import "./index.css";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="loader">Loading...</div>
    </div>
  );
};

const SuspenseComponent = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default SuspenseComponent;
