import { DeleteIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";

export const NoteCard = ({ title, isSelected, onClick, onDelete }) => {


    return (
        <HStack
            bg={isSelected ? "gray.500" : "gray.1000"}
            p={3}
            borderRadius="md"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
            onClick={onClick}
            cursor="pointer"
            _hover={{ bg: "gray.600" }}
        >
            <Text color="white">{title.substring(0, 20)}</Text>
            <IconButton
                aria-label="Delete Note"
                icon={<DeleteIcon />}
                size="sm"
                colorScheme="red"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
            />
        </HStack>
    );
};
