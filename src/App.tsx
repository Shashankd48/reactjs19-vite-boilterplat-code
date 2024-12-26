import './App.css';
import Navigation from './navigation';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <Navigation />
    </NextUIProvider>
  );
}

export default App;
