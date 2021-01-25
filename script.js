document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        return (new Audio("white_keys/A.mp3")).play();
    } else if (event.code === "KeyS") {
        return (new Audio("white_keys/S.mp3")).play();
    } else if (event.code === "KeyD") {
        return (new Audio("white_keys/D.mp3")).play();
    } else if (event.code === "KeyF") {
        return (new Audio("white_keys/F.mp3")).play();
    } else if (event.code === "KeyG") {
        return (new Audio("white_keys/G.mp3")).play();
    } else if (event.code === "KeyH") {
        return (new Audio("white_keys/H.mp3")).play();
    } else if (event.code === "KeyJ") {
        return (new Audio("white_keys/J.mp3")).play();
    } else if (event.code === "KeyW") {
        return (new Audio("black_keys/W.mp3")).play();
    } else if (event.code === "KeyE") {
        return (new Audio("black_keys/E.mp3")).play();
    } else if (event.code === "KeyT") {
        return (new Audio("black_keys/T.mp3")).play();
    } else if (event.code === "KeyY") {
        return (new Audio("black_keys/Y.mp3")).play();
    } else if (event.code === "KeyU") {
        return (new Audio("black_keys/U.mp3")).play();
    } else {
        console.log("Error");
    }
});
