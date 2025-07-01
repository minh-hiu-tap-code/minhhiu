function generateCodes() {
  const input = document.getElementById("input").value.trim();
  const type = document.querySelector('input[name="type"]:checked').value;
  const output = document.getElementById("output-list");

  output.innerHTML = ""; // Xoá mã cũ

  if (input === "") {
    alert("Vui lòng nhập nội dung!");
    return;
  }

  const lines = input.split("\n").filter(line => line.trim() !== "");

  lines.forEach(text => {
    const container = document.createElement("div");
    container.className = "code-item";

    if (type === "qr") {
      const qrDiv = document.createElement("div");
      new QRCode(qrDiv, {
        text: text,
        width: 150,
        height: 150
      });
      container.appendChild(qrDiv);
    } else if (type === "barcode") {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      JsBarcode(svg, text, {
        format: "CODE128",
        width: 2,
        height: 60,
        displayValue: false
      });
      container.appendChild(svg);
    }

    const label = document.createElement("div");
    label.className = "code-label";
    label.textContent = text;
    container.appendChild(label);

    output.appendChild(container);
  });
}
