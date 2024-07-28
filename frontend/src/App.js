import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <Box className="App" bg="gray.900" color="white">
      <AllRoutes />
    </Box>
  );
}

export default App;
