// menu.js

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const totalPriceDisplay = document.getElementById('total-price');

    let totalPrice = 0;

    menuItems.forEach(item => {
        item.addEventListener('change', function () {
            if (item.checked) {
                const itemPrice = parseFloat(item.getAttribute('data-price'));
                totalPrice += itemPrice;
            } else {
                const itemPrice = parseFloat(item.getAttribute('data-price'));
                totalPrice -= itemPrice;
            }

            // Display the updated total price
            totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        });
    });
});
