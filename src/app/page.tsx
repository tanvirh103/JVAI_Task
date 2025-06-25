import Aboutpage from "./Component/Aboutpage";
import Homepage from "./Component/Homepage";
import Navbar from "./Component/Navbar";
import Othersolutions from "./Component/Othersolutions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Othersolutions/>
    </div>
  );
}
