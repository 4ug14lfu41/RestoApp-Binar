const menuEndpoint = "/menu";
const orderEndpoint = "/menu/order";

function placeOrder() {
  const selectedItems = [];
  document
    .querySelectorAll('input[name="menu"]:checked')
    .forEach((checkbox) => {
      selectedItems.push({ id: parseInt(checkbox.value) });
    });

  fetch(orderEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedItems),
  }).then((response) => {
    if (response.ok) {
      alert("Order placed successfully!");
      window.location.href = "/orders";
    } else {
      alert("Failed to place order.");
    }
  });
}
