import React, { useEffect, useState } from "react";
import {
    Box,
    VStack,
    HStack,
    Text,
    Textarea,
    Center,
    Button,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useBreakpointValue,
    useDisclosure,
} from "@chakra-ui/react";
import { NoteCard } from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

function NotePage() {
    const [notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [noteContent, setNoteContent] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const isDrawer = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(savedNotes);
        if (savedNotes.length > 0) {
            setSelectedNoteId(savedNotes[0].id);
            setNoteContent(savedNotes[0].content);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const handleNewNote = () => {
        const newNote = {
            id: Date.now(),
            content: "",
        };
        setNotes([newNote, ...notes]);
        setSelectedNoteId(newNote.id);
        setNoteContent("");
    };

    const handleSelectNote = (id) => {
        const selectedNote = notes.find((note) => note.id === id);
        setSelectedNoteId(id);
        setNoteContent(selectedNote.content);
    };

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        if (id === selectedNoteId) {
            if (updatedNotes.length > 0) {
                setSelectedNoteId(updatedNotes[0].id);
                setNoteContent(updatedNotes[0].content);
            } else {
                setSelectedNoteId(null);
                setNoteContent("");
            }
        }
    };

    const handleContentChange = (e) => {
        setNoteContent(e.target.value);
        setNotes(
            notes.map((note) =>
                note.id === selectedNoteId ? { ...note, content: e.target.value } : note
            )
        );
    };

    const getNoteTitle = (content) => {
        if (!content.trim()) {
            return "New Note...";
        }
        return content;
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <HStack spacing={0} height="100vh" alignItems="stretch">
            {isDrawer ? (
                <>
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon  />}
                        size="lg"
                        onClick={onOpen}
                        m={4}
                    />
                    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                        <DrawerOverlay>
                            <DrawerContent>
                                <DrawerCloseButton color={"#ffff"}/>
                                <DrawerHeader bg="gray.800" color={"#ffff"}>All Notes</DrawerHeader>
                                <DrawerBody bg="gray.800">
                                    <VStack align="start" spacing={4}>
                                        <Box
                                            w="100%"
                                            bg="blue.600"
                                            p={2}
                                            borderRadius="md"
                                            onClick={() => {
                                                handleNewNote();
                                                onClose();
                                            }}
                                        >
                                            <Text>New Note...</Text>
                                        </Box>

                                        <Box w="100%">
                                            {notes.map((note) => (
                                                <NoteCard
                                                    key={note.id}
                                                    title={getNoteTitle(note.content)}
                                                    isSelected={note.id === selectedNoteId}
                                                    onClick={() => {
                                                        handleSelectNote(note.id);
                                                        onClose();
                                                    }}
                                                    onDelete={() => handleDeleteNote(note.id)}
                                                />
                                            ))}
                                        </Box>
                                    </VStack>
                                    <Button colorScheme="blue" onClick={handleLogout} mt={4}>
                                        Logout
                                    </Button>
                                </DrawerBody>
                            </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                </>
            ) : (
                <Box
                    w="300px"
                    bg="gray.800"
                    color="white"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <VStack align="start" spacing={4}>
                        <Text fontSize="2xl">All Notes</Text>
                        <Box w="100%" bg="blue.600" p={2} borderRadius="md" onClick={handleNewNote}>
                            <Text>New Note...</Text>
                        </Box>

                        <Box w="100%">
                            {notes.map((note) => (
                                <NoteCard
                                    key={note.id}
                                    title={getNoteTitle(note.content)}
                                    isSelected={note.id === selectedNoteId}
                                    onClick={() => handleSelectNote(note.id)}
                                    onDelete={() => handleDeleteNote(note.id)}
                                />
                            ))}
                        </Box>
                    </VStack>
                    <Button colorScheme="blue" onClick={handleLogout}>
                        Logout
                    </Button>
                </Box>
            )}
            <Box flex="1" bg="gray.900" color="white" p={4} display="flex" justifyContent="center" alignItems="center">
                {notes.length === 0 ? (
                    <Center h="100%">
                        <Button onClick={handleNewNote} colorScheme="blue">
                            Create your first note
                        </Button>
                    </Center>
                ) : (
                    <Textarea
                        fontSize="2xl"
                        height="96vh"
                        bg="gray.800"
                        color="white"
                        placeholder="Start typing your notes here..."
                        resize="none"
                        border="none"
                        _focus={{ outline: "none", border: "none" }}
                        value={noteContent}
                        onChange={handleContentChange}
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '0px',
                                height: '0px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'transparent',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'transparent',
                            },
                        }}
                    />
                )}
            </Box>
        </HStack>
    );
}

export default NotePage;
