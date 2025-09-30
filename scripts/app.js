let buttons = document.querySelectorAll(".column");

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const audioToPlay = new Audio("../sounds/" + button.id + ".wav");
        audioToPlay.volume = 0.20;
        audioToPlay.play();
    });
    button.addEventListener("mouseover", (e) => {
        let label = button.getElementsByTagName("p")[0];
        console.log(label);
        // button.style.backgroundColor = "white";
        label.style.color = "white";
        button.style.backgroundImage = "url(../images/head.gif)";
        button.style.backgroundSize = "cover";
    });
    button.addEventListener("mouseout", () => {
        let label = button.getElementsByTagName("p")[0];
        button.style.backgroundColor = "#f4f2f4";
        label.style.color = "red";
        button.style.backgroundImage = "";
    });
})