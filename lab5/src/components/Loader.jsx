import BarLoader from "react-spinners/BarLoader";
const Loader = ({ isLoading, children }) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "50px", left: "85px" }}>
        <BarLoader
          loading={isLoading}
          aria-label="Loading Spinner"
          size={150}
          data-testid="loader"
        />
      </div>
      {children}
    </div>
  );
};

export default Loader;
