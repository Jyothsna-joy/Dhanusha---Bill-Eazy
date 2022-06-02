import Sidebar from "../../components/sidebar/Sidebar1";
import Navbar from "../../components/navbar/Navbar";

const UsersPage = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <h1>Welcome to Billezy</h1>
          
         </div>
      </div>
    );
  };
  
  export default UsersPage;
  