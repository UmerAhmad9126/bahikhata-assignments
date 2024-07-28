import React from 'react';
import {
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Box>
      <Navbar />
      <Box height={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

        <Text fontSize="4xl" fontWeight="bold" mb="4">
          The simplest way to keep notes
        </Text>

        <Text fontSize="lg" mb="8">
          All your notes, synced on all your devices. Get Simplenote now for iOS, Android, Mac, Windows, Linux, or in your browser.
        </Text>

        <Link to="/signup">
          <Button colorScheme="blue" size="lg" mb="10">
            Sign up now
          </Button>
        </Link>


      </Box>
    </Box>
  );
}

export default App;
