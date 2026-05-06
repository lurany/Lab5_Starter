// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore > img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (const voice of voices) {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    }
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', function () {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);

    const selectedVoice = voices.find(function (voice) {
      return voice.name === voiceSelect.value;
    });

    utterance.voice = selectedVoice;

    utterance.addEventListener('start', function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Open smiling face';
    });

    utterance.addEventListener('end', function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    speechSynthesis.speak(utterance);
  });
}