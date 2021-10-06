
import '../../public/assets/styles/styles.css';

function App({ Component, pageProps }) {
    return (
        <Component { ...pageProps } />
    );
}

export default App;
