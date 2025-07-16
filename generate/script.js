let hasGenerated = false;

// Preview the selected image in an <img id="preview">
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('preview');
    output.src = reader.result;
    output.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

// Randomly detect "beauty" based on the name input
function detectBeauty() {
  if (hasGenerated) return;

  const nameInput = document.getElementById("name");
  const resultDiv = document.getElementById("result");
  const checkBtn = document.getElementById("checkBtn");
  const name = nameInput.value.trim();

  if (!name) {
    resultDiv.innerText = "Ngala ningka wata na BARMM!";
    resultDiv.style.color = "black";
    return;
  }

  // Random true or false
  const isMaganda = Math.random() < 0.5;

  const messagesMaganda = [
    "Dili maka pandwaya ka loyal!"
  ];

  const messagesPanget = [
    "Maka pandwaya sa mga pateman ka gwapo! 😂"
  ];

  const message = isMaganda
    ? messagesMaganda[Math.floor(Math.random() * messagesMaganda.length)]
    : messagesPanget[Math.floor(Math.random() * messagesPanget.length)];

  resultDiv.innerHTML = `
    ${name}, seka a 
    ${isMaganda 
      ? "<span style='color:green;'>dika pandwaya 😍✨</span>" 
      : "<span style='color:red;'>maka pandwaya 😅💔</span>"
    }<br>
    <small>${message}</small>
  `;

  nameInput.disabled = true;
  checkBtn.disabled = true;
  hasGenerated = true;
}
