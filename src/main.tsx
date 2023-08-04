import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import { Provider as ReduxProvider } from 'react-redux';

import './index.css';
import App from './App';
import { persistor, store } from './redux/store';
import { theme } from './utils/styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ReduxProvider store={store}>
		<ThemeProvider theme={theme}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</ThemeProvider>
	</ReduxProvider>
);
