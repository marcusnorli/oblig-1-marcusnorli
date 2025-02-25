document.addEventListener('DOMContentLoaded', function () {
    // Open the correct spell book when a book is clicked
    document.querySelectorAll('.book').forEach(book => {
        book.addEventListener('click', function () {
            const targetBook = document.querySelector(`#${this.dataset.target}`);
            document.querySelectorAll('.book').forEach(b => b.classList.add('hidden'));
            targetBook.classList.remove('hidden');
        });
    });

    // Close all books when the close button is clicked
    document.getElementById('close-tome').addEventListener('click', function () {
        document.querySelectorAll('.book').forEach(book => book.classList.add('hidden'));
    });

    // Handle password change form submission
    document.getElementById('change-password-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        if (newPassword === confirmPassword) {
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match.');
        }
    });

    // Handle name change form submission
    document.getElementById('rename-wizard-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const newName = document.getElementById('new-name').value;
        const newTitle = document.getElementById('new-title').value;
        document.querySelector('h1').innerText = `Welcome to The MagiScript Library of ${newName} the ${newTitle}`;
        alert('Name and title updated!');
    });

    // Handle familiar summoning form submission
    document.getElementById('summon-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const familiarName = document.getElementById('familiar-name').value;
        const familiarType = document.getElementById('familiar-type').value;
        const hasWings = document.getElementById('has-wings').checked;
        const wingsType = document.getElementById('wings-type-input').value;
        let familiarDescription = `You have summoned: ${familiarName}, a ${familiarType}`;
        if (hasWings) {
            familiarDescription += ` with ${wingsType} Wings`;
        }
        alert(familiarDescription);
    });

    // Show/hide wings input based on checkbox
    document.getElementById('has-wings').addEventListener('change', function () {
        const wingsTypeInput = document.getElementById('wings-type');
        if (this.checked) {
            wingsTypeInput.classList.remove('hidden');
        } else {
            wingsTypeInput.classList.add('hidden');
        }
    });
});
