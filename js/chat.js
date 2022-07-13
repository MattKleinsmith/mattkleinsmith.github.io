outgoingTextarea.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        SendMessage();
    }
});
sendButton.onclick = SendMessage;

function SendMessage() {
    let outgoingChannel = hostConnection ? hostChannel : guestChannel;
    outgoingChannel.send(outgoingTextarea.value);
    AddMessage(chatLogTextarea, outgoingTextarea.value, hostConnection, true);
}

function AddMessage(chat, message, hostConnection, isSending) {
    let isFromHost = (hostConnection && isSending) || (!hostConnection && !isSending);
    chat.value += isFromHost ? "Host: " : "Guest: ";
    chat.value += message + "\n";
    chat.scrollTop = chat.scrollHeight;
}
