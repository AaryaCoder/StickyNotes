function redirectToNotes(){
    window.location="all_notes.html";
}

function newNote(){
    window.location="new_note.html";
    console.log("new_note");
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="welcome_notes.html";
}