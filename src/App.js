// routes

import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { ToastContainer } from 'react-toastify';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------

export default function App() {
    return (
        <ThemeProvider>
            <ScrollToTop />
            <BaseOptionChartStyle />
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                theme="colored"
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Router />
        </ThemeProvider>
    );
}
