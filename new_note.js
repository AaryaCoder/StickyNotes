function Customize(){
    text_area=document.getElementById("newnote_text").value;
    size_type=document.getElementById("size_type").value;
    console.log("Font Size:"+size_type);
    

    color_type=document.getElementById("color_type").value;
    console.log("Text-Color:"+color_type);
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="welcome_notes.html";
}
