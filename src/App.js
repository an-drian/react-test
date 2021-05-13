import theme from 'base/theme';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import { Provider } from 'react-redux';
import store from 'store';
import MainWrapper from 'base/styled/MainWrapper';
import HeadContent from 'base/components/HeadContent';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <MainWrapper>
              <HeadContent />
              <RouterConfig />
            </MainWrapper>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
