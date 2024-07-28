import React from 'react'
import {
    Box,
    Text,
    Button,
    Flex,
    Spacer,
    HStack,
    Container,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Container maxW="90%" py="10">
            <Flex as="nav" align="center" justify="space-between" wrap="wrap">
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        Simplenote
                    </Text>
                </Box>
                <HStack spacing="8">
                    <Link href="#" fontSize="xl">Contact Us</Link>
                    <Link href="#" fontSize="xl">Help</Link>
                    <Link href="#" fontSize="xl">Support Forum</Link>
                    <Link href="#" fontSize="xl">Blog</Link>
                    <Spacer />
                    <Link to="/login">
                        <Button variant="outline" colorScheme="blue">Log In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button colorScheme="blue">Sign Up</Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar