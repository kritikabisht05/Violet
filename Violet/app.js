let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
let navbarHeight = navbar.offsetHeight;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = `-${navbarHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};

//chatbox
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");
const sendMessage = document.getElementById("send-message");
const chatMessage = document.getElementById("chat-message");
const chatMessages = document.querySelector(".chat-messages");

chatIcon.addEventListener("click", () => {
  chatBox.classList.remove("hidden");
});

closeChat.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});

sendMessage.addEventListener("click", sendChatMessage);
chatMessage.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendChatMessage();
  }
});

function sendChatMessage() {
  const message = chatMessage.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = `You: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessage.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    //for response
    setTimeout(() => {
      const responseElement = document.createElement("div");
      responseElement.textContent = `Amethyst: Thanks for your message! We'll get back to you soon.`;
      chatMessages.appendChild(responseElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
  }
}
