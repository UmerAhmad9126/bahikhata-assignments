# Notes App

This is a simple Notes application that allows users to register, log in, and manage their notes. The notes are stored in the local storage of the user's browser.

## Features

- User Registration
- User Login
- Create new notes
- View and edit existing notes
- Delete notes
- Notes are persisted in local storage
- Easy-to-use UI with Chakra UI components

## Getting Started

### Prerequisites

- Node.js (for backend)
- A web browser (for frontend)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/notes-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd frontend
    ```
3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

### Running the Application

#### Backend

1. Start the backend server:
    ```bash
    cd backend
    npm run server
    ```

The backend server will start on `http://localhost:8080`.


## Usage

### Registration

1. Open the application in your browser.
2. Click on the "Signup" button.
3. Enter your username email and password.
4. Click "Signup" to Signup.

### Login

1. Open the application in your browser.
2. Click on the "Login" button.
3. Enter your email and password.
4. Click "Login" to Sign in.

### Managing Notes

Once logged in, you can create, view, and delete your notes.

#### Creating a Note

- Click on the "New Note" button in the sidebar to create a new note.
- Type your note in the textarea. The note title in the sidebar will be the first 20 letters of the note.
- Click on a note in the sidebar to view or edit it.
- Click the delete icon on a note in the sidebar to delete it.
- If there are no notes, a button will be displayed in the center of the screen to create your first note.


#### Viewing Notes

Your notes will be displayed in a list below the "New Note" text area.

#### Deleting a Note

1. Click the "Delete" button next to the note you want to delete.

## Backend

The backend is built with Node.js and Express. It handles user registration, login.

### Endpoints

- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Log in a user

## Frontend

The frontend is a simple HTML, CSS, JavaScript React and Redux application.

### Local Storage

The notes are stored in the browser's local storage. This ensures that the notes persist between page reloads.
