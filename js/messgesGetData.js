function LoadData() {
    // Retrieve data from localStorage
    let name = localStorage.getItem('Name');
    let audio = localStorage.getItem('Audio');
    let img = localStorage.getItem('Image');
    let year = localStorage.getItem('Year');
    let transcript = localStorage.getItem('Transcript');
    let topic = localStorage.getItem('Topic');

    // Create an array to store the retrieved data
    let array = [
        name, audio, img, year, transcript, topic
    ];

    // Create the HTML message using template literals
    let message = `
        <div class="messages-gallery-container-col">
            <div class="baseContainer">
                <div class="img-col">
                    <img src=${array[2]} alt=${array[0]}>
                </div>
                <div class="mgc-text-col">
                    <div class="mgc-left">
                        <h3 class="messageTopic">${array[5]}</h3>
                        <div class="mgc-title">
                            By <span>${array[0]}</span> <span style="color: #F47B20;">on June 29th, <span>${array[3]}</span></span>
                        </div>
                        <div class="program">
                            SMFLX 2023
                        </div>
                    </div>
                    <div class="mgc-right btn-col">
                        <a style="color: black; "  href=${array[1]} download class="mgc-btn1">
                            Download
                            <img class="arrowDownload" src="./assets/images/Arrow Download.svg" alt="">
                        </a>
                        <button class="mgc-btn2">Get Transcript</button>
                    </div>
                </div>
            </div>
            <div class="audio-col">
                <audio id="audio" src=${array[1]} controls></audio>
            </div>
        </div>
    `;

    // Update the HTML content of '.messageplayer-container' with the created message
    document.querySelector('.messageplayer-container').innerHTML = message;
}
