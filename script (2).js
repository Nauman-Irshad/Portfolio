document.addEventListener("DOMContentLoaded", () => {
    const aboutButton = document.getElementById("aboutButton");
    const workButton = document.getElementById("workButton");

    aboutButton.addEventListener("click", () => {
        alert("More about me coming soon!");
        aboutButton.style.transform = "scale(1.1)";
        setTimeout(() => {
            aboutButton.style.transform = "scale(1)";
        }, 200);
    });

    workButton.addEventListener("click", () => {
        alert("Portfolio section under development!");
        workButton.style.transform = "rotate(360deg)";
        setTimeout(() => {
            workButton.style.transform = "rotate(0deg)";
        }, 500);
    });
});
