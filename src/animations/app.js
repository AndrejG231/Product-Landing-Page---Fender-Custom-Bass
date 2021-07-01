const purchaseButton = document.querySelector(".purchase_button");
const goBackButton = document.querySelector(".purchase_form-goBack");
const purchaseModal = document.querySelector(".purchase_modal");

purchaseButton.addEventListener("click", () => {
  purchaseModal.style.transform = "translateY(-100vh)";
});

goBackButton.addEventListener("click", () => {
  purchaseModal.style.transform = "";
});
