let hostConnection;
let hostChannel;

activateHostButton.onclick = ActivateHost;
answerTextarea.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    Connect(paste);
});

function ActivateHost() {
    ShowHostView();
    GenerateOffer();
}

function ShowHostView() {
    hostDiv.style.display = "block";
    roleDiv.style.display = "none";
}

function GenerateOffer() {
    const iceConfiguration = {
        iceServers: [{
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun3.l.google.com:19302",
                "stun:stun4.l.google.com:19302",
            ]
        }]
    };
    hostConnection = new RTCPeerConnection(iceConfiguration);
    hostConnection.onicecandidate = CopyOfferToClipboard;

    hostChannel = hostConnection.createDataChannel("sendChannel");
    hostChannel.onmessage = e => AddMessage(chatLogTextarea, e.data, hostConnection, false);
    hostChannel.onopen = ShowHostChat;
    hostChannel.onclose = () => console.log("Data channel closed.");

    hostConnection.createOffer().then(offer => hostConnection.setLocalDescription(offer));
}

function CopyOfferToClipboard() {
    let offer = JSON.stringify(hostConnection.localDescription);
    navigator.clipboard.writeText(offer);
}

function Connect(paste) {
    hostConnection.setRemoteDescription(JSON.parse(paste));
}

function ShowHostChat() {
    console.log("Data channel opened.");
    hostDiv.style.display = "none";
    chatDiv.style.display = "block";
}
