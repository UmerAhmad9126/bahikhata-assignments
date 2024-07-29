import React from 'react';
import {
    Box,
    Text,
    Button,
    Flex,
    VStack,
    HStack,
    IconButton,
    Collapse,
    useDisclosure,
    Container,
    Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Container maxW="90%" py="4">
            <Flex as="nav" align="center" justify="space-between" wrap="wrap">
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        Simplenote
                    </Text>
                </Box>
                <IconButton
                    display={{ base: 'block', md: 'none' }}
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon color={"white"} /> : <HamburgerIcon color={"white"} />}
                    variant="outline"
                    aria-label="Toggle Navigation"
                />
                <HStack
                    display={{ base: 'none', md: 'flex' }}
                    spacing="8"
                >
                    <Link fontSize="xl">Contact Us</Link>
                    <Link fontSize="xl">Help</Link>
                    <Link fontSize="xl">Support Forum</Link>
                    <Link fontSize="xl">Blog</Link>
                    <Spacer />
                    <Link to="/login">
                        <Button variant="outline" colorScheme="blue">Log In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button colorScheme="blue">Sign Up</Button>
                    </Link>
                </HStack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <VStack
                    display={{ md: 'none', base: "flex" }}
                    spacing="4"
                    mt="4"
                    align="start"
                    bg="gray.800"
                    p="4"
                    borderRadius="md"
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems="center"
                >
                    <Link fontSize="xl" color="white">Contact Us</Link>
                    <Link fontSize="xl" color="white">Help</Link>
                    <Link fontSize="xl" color="white">Support Forum</Link>
                    <Link fontSize="xl" color="white">Blog</Link>
                    <Link to="/login" style={{ width: '100%' }}>
                        <Button variant="outline" colorScheme="blue" width="100%">Log In</Button>
                    </Link>
                    <Link to="/signup" style={{ width: '100%' }}>
                        <Button colorScheme="blue" width="100%">Sign Up</Button>
                    </Link>
                </VStack>
            </Collapse>
        </Container>
    );
};

export default Navbar;
