document.querySelector(".chat-form").addEventListener("submit", function(event) {
    event.preventDefault(); // ფორმის გაგზავნის თავიდან აცილება
    const message = document.querySelector(".message-input").value;
    console.log("Message sent:", message);
    // აქ შეგიძლიათ დაამატოთ დამატებითი ლოგიკა
});
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelectorAll(".message-input")

const createMessageElement = (content, classes) => {
    const div = document.createElement("div") ;
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

const handleOutgoingMessage = (userMessage) => {
    const messageContent = ` <div class="message-text">${userMessage}</div>`;

    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoingMessageDiv);
}

 messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage) {
        handleOutgoingMessage(userMessage);
    }
});