import { store } from '@/store';
import '@/styles/index.scss';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  return <>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </>
}
