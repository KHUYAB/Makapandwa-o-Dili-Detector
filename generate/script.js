let hasGenerated = false;

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('preview');
    output.src = reader.result;
    output.style.display = 'block';
  };
  reader.readAsDataURL(event.target.files[0]);
}

function detectBeauty() {
  if (hasGenerated) return;

  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();
  const resultDiv = document.getElementById("result");
  const checkBtn = document.getElementById("checkBtn");

  if (!name) {
    resultDiv.innerText = "ngala ningka wata na barmm!";
    resultDiv.style.color = "black";
    return;
  }

  const isMaganda = Math.random() < 0.5;

  const messagesMaganda = [
    "dili maka pandwaya ka loyal!",
  ];

  const messagesPanget = [
    "maka pandwaya sa mga pateman ka gwapo! 😂",
  ];

  const message = isMaganda
    ? messagesMaganda[Math.floor(Math.random() * messagesMaganda.length)]
    : messagesPanget[Math.floor(Math.random() * messagesPanget.length)];

  resultDiv.innerHTML = `${name}, ${isMaganda ? "Seka a <span style='color:green;'>dika pandwaya 😍✨</span>" : "seka a <span style='color:red;'>Maka pandwaya 😅💔</span>"}<br><small>${message}</small>`;

  nameInput.disabled = true;
  checkBtn.disabled = true;
  hasGenerated = true;
}
