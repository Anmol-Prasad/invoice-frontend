document.addEventListener('DOMContentLoaded', function () {
    fetch('https://invoice-backend-i6zc.onrender.com/api/invoice')
        .then(response => response.json())
        .then(data => {
            let html = '<ul>';

            data.items.forEach(item => {
                html += `<li>${item.name} - ₹${item.price}</li>`;
            });

            html += '</ul>';
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(err => {
            console.error("Error:", err);
            document.getElementById('invoice-container').innerText = "Failed to load invoice";
        });
});