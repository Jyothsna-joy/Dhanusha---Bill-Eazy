import Sidebar1 from "../../components/sidebar/Sidebar1";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import ChartUser from "../../components/chart/ChartUser";
import { useLocation } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="home">
      <Sidebar1 />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Widget type="user" /> */}
          
        </div>
        <div className="charts">
          <Featured />
          <ChartUser title="Usage of Electricity(In Units)" aspect={2 / 1} />
        </div>
       
      </div>
    </div>
  );
};

export default UserHome;
