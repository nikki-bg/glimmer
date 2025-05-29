
document.addEventListener("DOMContentLoaded", () => {
    const vibe = document.body.dataset.vibe;
    const textarea = document.querySelector("textarea");
    const button = document.querySelector("button");
    const chatLog = document.createElement("div");
    chatLog.id = "chat-log";
    document.querySelector(".chat-box").appendChild(chatLog);

    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem(`messages_${vibe}`)) || [];
        chatLog.innerHTML = "";
        messages.forEach(msg => {
            const p = document.createElement("p");
            p.innerText = "💬 " + msg;
            chatLog.appendChild(p);
        });
    }

    button.onclick = () => {
        const msg = textarea.value.trim();
        if (!msg) return;
        const messages = JSON.parse(localStorage.getItem(`messages_${vibe}`)) || [];
        messages.push(msg);
        localStorage.setItem(`messages_${vibe}`, JSON.stringify(messages));
        textarea.value = "";
        loadMessages();
    };

    loadMessages();
});
