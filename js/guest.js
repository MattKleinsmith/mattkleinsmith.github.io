let guestConnection;
let guestChannel;

activateGuestButton.onclick = ActivateGuest;
offerTextarea.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    GenerateAnswer(paste);
});

function ActivateGuest() {
    ShowGuestView();
}

function ShowGuestView() {
    guestDiv.style.display = "block";
    roleDiv.style.display = "none";
}

function GenerateAnswer(paste) {
    guestConnection = new RTCPeerConnection();

    guestConnection.ondatachannel = e => {
        guestChannel = e.channel;
        guestChannel.onmessage = e => AddMessage(chatLogTextarea, e.data, hostConnection, false);
        guestChannel.onopen = ShowGuestChat;
        guestChannel.onclose = () => console.log("Data channel closed.");
        guestConnection.channel = guestChannel;
    }

    guestConnection.setRemoteDescription(JSON.parse(paste));

    guestConnection.createAnswer()
        .then(answer => guestConnection.setLocalDescription(answer))
        .then(CopyAnswerToClipboard);
}

function CopyAnswerToClipboard() {
    let answer = JSON.stringify(guestConnection.localDescription);
    navigator.clipboard.writeText(answer);
}

function ShowGuestChat() {
    console.log("Data channel opened.");
    guestDiv.style.display = "none";
    chatDiv.style.display = "block";
}
