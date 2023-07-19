import "../styles/globals.css";
import "../styles/responsive.css";
import { GlobalStyle } from "../styles/GlobalCss";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer autoClose={2500} />
    </Provider>
  );
}

export default MyApp;
