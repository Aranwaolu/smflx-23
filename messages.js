
    document.addEventListener('DOMContentLoaded', function() {
      // Get references to DOM elements
      const searchInput = document.getElementById('search');
      const yearFilter = document.getElementById('yearFilter');
      const pastorFilter = document.getElementById('pastorsList');
      const messageItems = document.getElementsByClassName('messages-gallery-container-col');

      // Event listeners for search and filter inputs
      searchInput.addEventListener('input', filterMessages);
      yearFilter.addEventListener('change', filterMessages);
      pastorFilter.addEventListener('change', filterMessages);

      // Function to filter messages based on search and filters
      function filterMessages() {
        const searchValue = searchInput.value.trim().toLowerCase();
        const yearValue = yearFilter.value;
        const pastorValue = pastorFilter.value;

        Array.from(messageItems).forEach(function(item) {
          const topic = item.querySelector('#messageTopic').textContent.toLowerCase();
          const year = item.querySelector('.messageYear').textContent;
          const pastor = item.querySelector('.pastorName').textContent;

          const topicMatch = topic.includes(searchValue);
          const yearMatch = year === yearValue || yearValue === '';
          const pastorMatch = pastor === pastorValue || pastorValue === '';

          if (topicMatch) {
            if (yearMatch && pastorMatch) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          } else {
            item.style.display = 'none';
          }
        });
      }
    });

    

    
const array = [
  {
      id: 1,
      audio : './assets/audio/[Waploaded]_Tasha_Cobbs_Leonard_-_I-m_Getting_Ready_ft_NickiMinaj-1505140210.mp3',
      img: './assets/images/pst-tom1.png',
      name: 'Pastor Tosin',
      transcript: '',
      topic: "God's Ideal on Family Upholding His Righteousness",
      year: 2023
  },
  {
      id: 2,
      audio : './assets/audio/[Waploaded]_Tasha_Cobbs_Leonard_-_I-m_Getting_Ready_ft_NickiMinaj-1505140210.mp3',
      img: './assets/images/pst-tom1.png',
      name: 'Pastor Michael',
      transcript: '',
      topic: "God's Ideal on Family Upholding His Righteousness",
      year: 2022
  },
  {
      id: 3,
      audio : './assets/audio/[Waploaded]_Tasha_Cobbs_Leonard_-_I-m_Getting_Ready_ft_NickiMinaj-1505140210.mp3',
      img: './assets/images/pst-tom1.png',
      name: 'Pastor Emeka',
      transcript: '',
      topic: "God's Ideal on Family Upholding His Righteousness",
      year: 2021
  },
  {
      id: 4,
      audio : './assets/audio/[Waploaded]_Tasha_Cobbs_Leonard_-_I-m_Getting_Ready_ft_NickiMinaj-1505140210.mp3',
      img: './assets/images/pst-tom1.png',
      name: 'Pastor Thompson Ehima',
      transcript: '',
      topic: "God's Ideal on Family Upholding His Righteousness",
      year: 2020
  }
]


function handleClick(id) {
  console.log(id)
  
  let x = array[id]
  console.log(x)
  let audio = x.audio
  let img = x.img
  let name = x.name
  let year = x.year
  let transcript = x.transcript
  let topic = x.topic


  localStorage.setItem("Name", name)
  localStorage.setItem("Audio", audio)
  localStorage.setItem("Image", img)
  localStorage.setItem("Year", year)
  localStorage.setItem("Transcript", transcript)
  localStorage.setItem("Topic", topic)
  
  window.location.href='./messagesplayer.html'
}



let message = array.map(message =>{
  return `<div class="messages-gallery-container-col" key=${message.id}   >
  <div class="img-col">
      <img src=${message.img} alt=${message.name}>
  </div>
  <div class="mgc-text-col">
      <h3 id="messageTopic">${message.topic}</h3>
          <div class="mgc-title">
              By <span class="pastorName">${message.name}</span> on June 29th, <span class="messageYear">${message.year}</span>
          </div>
          <div class="program">
              SMFLX 2023
          </div>
          <div class="btn-col">
              <button class="mgc-btn1" onclick="handleClick(${message.id})">Play </button>
              <button class="mgc-btn2">Download Transcript</button>
          </div>
  </div>
</div>`

})

document.querySelector('.messages-gallery-container').innerHTML = message.join(' ')
  