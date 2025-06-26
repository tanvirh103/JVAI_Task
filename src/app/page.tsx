import Aboutpage from "../Component/Welcome/Aboutpage";
import Benefit from "../Component/Welcome/Benefit";
import Caseuse from "../Component/Welcome/Caseuse";
import Footer from "../Component/Welcome/Footer";
import GetStarted from "../Component/Welcome/GetStarted";
import Homepage from "../Component/Welcome/Homepage";
import Navbar from "../Component/Welcome/Navbar";
import Othersolutions from "../Component/Welcome/Othersolutions";
import OurTechnology from "../Component/Welcome/OurTechnology";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Othersolutions/>
      <OurTechnology/>
      <Benefit/>
      <Caseuse/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}
