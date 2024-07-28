import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authReducer/action';

const initialData = {
    email: "",
    password: "",
}

export default function Login() {


    const [loginUser, setLoginUser] = useState(initialData);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((store) => store.authReducer.token);
    const isError = useSelector((store) => store.authReducer.isError);
    const isLoading = useSelector((store) => store.authReducer.isLoading);


    const toast = useToast();
    const navigate = useNavigate();



    const handleChnage = (e) => {

        const { name, value } = e.target;

        setLoginUser((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleLogin = () => {
        dispatch(login(loginUser));
        setLoginUser(initialData);
        setHasSubmitted(true);
    }

    useEffect(() => {

        if (hasSubmitted && !isLoading) {

            if (isError) {
                toast({
                    title: `Login Failed`,
                    status: "error",
                    isClosable: true,
                    position: "top"
                });
            } else {
                toast({
                    title: `Login Successfully`,
                    status: "success",
                    isClosable: true,
                    position: "top"
                });

                navigate("/note");
                localStorage.setItem("token", token);
            }
            setHasSubmitted(false);
        }

    }, [isError, isLoading, hasSubmitted, toast, navigate, token]);



    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" name="email" value={loginUser.email} onChange={handleChnage} placeholder='Enter Email' />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" value={loginUser.password} onChange={handleChnage} placeholder='Enter Password' />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button
                                onClick={handleLogin}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                            >
                                {isLoading ? "Submitting..." : "Sign in"}
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}