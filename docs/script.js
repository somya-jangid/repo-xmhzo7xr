// Navigation smooth scroll (if needed)
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Optional: add smooth transition if using single page layout
    });
});

// Chat functionality
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');

if(sendBtn) {
    sendBtn.addEventListener('click', () => {
        const text = userInput.value.trim();
        if(text !== "") {
            // Create user message
            const userMsg = document.createElement('div');
            userMsg.classList.add('message', 'user');
            userMsg.innerHTML = `<div class="bubble">${text}<span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span></div>`;
            chatMessages.appendChild(userMsg);
            userInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simulate chatbot response
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.classList.add('message', 'chatbot');
                botMsg.innerHTML = `<div class="bubble">I received your message.<span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span></div>`;
                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 500);
        }
    });
}

// Optional: handle Enter key for sending message
if(userInput) {
    userInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            sendBtn.click();
        }
    });
}
