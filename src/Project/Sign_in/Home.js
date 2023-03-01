import logo from "../../logo.svg";
import { useEffect } from "react";
import SettingApi from "../../Api/settingApi";
import Signin from "./SignIn";
// import './App.scss';

const Home = () => {
  // const [productList, setProduclist] = useState();
  useEffect(() => {
    const products = async () => {
      const productList = await SettingApi.get(1);
      // setProduclist(productList);
      console.log(productList);
    };
    products();
  }, []);
  return (
    <div className="App">
      <div className="right">
        <header className="App-header left">
          <div style={{ textAlign: "center" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <br />
          <Signin />
          <br />
          <a
            className="App-link"
            href="https://c4.wallpaperflare.com/wallpaper/560/855/635/spy-x-family-anya-forger-hd-wallpaper-preview.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANYA PIC
          </a>
          {/* <span>{productList.id}</span> */}
        </header>
      </div>
    </div>
  );
};

export default Home;
