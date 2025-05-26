document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const imaginiFundal = ['fundal1.jpg', 'fundal2.jpg', 'fundal3.jpg'];
    let index = 0;

    setInterval(() => {
        body.style.backgroundImage = `url('${imaginiFundal[index]}')`;
        index = (index + 1) % imaginiFundal.length;
    }, 5000); // Schimbă imaginea la fiecare 5 secunde
});
document.getElementById("email-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("cv-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("linkedin-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("github-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("facebook-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("instagram-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("twitter-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("youtube-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});
document.getElementById("pinterest-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {
    row.addEventListener("click", () => {
        alert(`Ai selectat: ${row.cells[1].innerText}`);
    });
});
document.getElementById("email-btn").addEventListener("click", () => {
    alert("Vă mulțumesc că mi-ați vizitat portofoliul!");
});