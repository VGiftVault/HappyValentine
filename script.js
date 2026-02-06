function unlock() {
    let pass = document.getElementById("password").value;

    if (pass === "LOVE") {
        window.location.href = "page1.html";
    } else {
        alert("Wrong password");
    }
}

/* page1 → page2 */
function goToPage2() {
    window.location.href = "page2.html";
}

/* page2 → page3 */
function goToPage3() {
    window.location.href = "page3.html";
}
/* page3 → page4 */
function goToPage4() {
    window.location.href = "page4.html";
}
/* page4 → page5 */
function goToPage5() {
    window.location.href = "page5.html";
}

/* floating hearts */
for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * -10 + "s";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(heart);
}
