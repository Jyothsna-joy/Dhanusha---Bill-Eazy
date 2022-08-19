import Sidebar2 from "../../components/sidebar/Sidebar2";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import ChartBuildingUsage from "../../components/chart/ChartBuildingUsage";
import { useLocation } from "react-router-dom";

const CaretakerHome = () => {
  return (
    <div className="home">
      <Sidebar2 />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Widget type="user" /> */}
          
        </div>
        <div className="charts">
          <Featured />
          <ChartBuildingUsage title="Usage of Electricity(In Units)" aspect={2 / 1} />
        </div>
       
      </div>
    </div>
  );
};

export default CaretakerHome;
