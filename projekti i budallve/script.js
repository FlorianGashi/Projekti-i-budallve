function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (!weight || !heightCm) {
        document.getElementById('result').textContent = "Ju lutem plotësoni të dy fushat.";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const result = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Nën peshë";
    } else if (bmi < 25) {
        category = "Peshë normale";
    } else if (bmi < 30) {
        category = "Mbipeshë";
    } else {
        category = "Obez";
    }

    document.getElementById('result').textContent = `BMI-ja juaj është ${result} (${category})`;
}
 // Get modal elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Add click listeners to all gallery images
    document.querySelectorAll(".gallery img").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.textContent = img.alt;
      });
    });

    // Close modal when close button clicked
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Close modal when clicking outside the image
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };

    // Optional: close modal on pressing ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.style.display = "none";
      }
    });