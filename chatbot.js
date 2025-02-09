function sendMessage() {
  const userInput = document.getElementById("user_input").value;
  const chatlog = document.getElementById("chatlog");

  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + userInput;
  chatlog.appendChild(userMessage);

  const botMessage = document.createElement("p");
  botMessage.textContent =
    "Chatbot: I’m here to help with flight data and fuel optimization.";
  chatlog.appendChild(botMessage);

  document.getElementById("user_input").value = "";
}
