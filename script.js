document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript loaded!");

    // Get all buttons to open the books
    document.querySelectorAll('.book').forEach(book => {
        book.addEventListener('click', function () {
            const targetBookId = this.dataset.target;
            const targetBook = document.getElementById(targetBookId);
            if (!targetBook) {
                console.error("Target spell book not found:", targetBookId);
                return;
            }
            // Hide all books and show only the target book
            document.querySelectorAll('.spell-book').forEach(b => b.classList.add('hidden'));
            targetBook.classList.remove('hidden');
        });
    });

    // Close all spell books when clicking "Close Tome"
    const closeButton = document.getElementById('close-tome');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            console.log("Close Tome button clicked!");
            document.querySelectorAll('.spell-book').forEach(book => book.classList.add('hidden'));
        });
    } else {
        console.error("Close Tome button NOT found!");
    }

    // Handle form submissions for Change Password, Change Name, and Summon Familiar
    // Password Form
    const passwordForm = document.querySelector('#change-password-book button');
    if (passwordForm) {
        passwordForm.addEventListener('click', function(event) {
            event.preventDefault();
            const password = document.querySelector('#change-password-book input[type="password"]:nth-child(2)');
            const confirmPassword = document.querySelector('#change-password-book input[type="password"]:nth-child(3)');
            
            if (password.value === confirmPassword.value) {
                alert("Password changed successfully!");
            } else {
                alert("Passwords do not match.");
            }
        });
    }

    // Name Change Form
    const nameForm = document.querySelector('#change-name-book button');
    if (nameForm) {
        nameForm.addEventListener('click', function(event) {
            event.preventDefault();
            const newName = document.querySelector('#change-name-book input:nth-child(1)').value;
            const newTitle = document.querySelector('#change-name-book input:nth-child(2)').value;
            
            document.querySelector('.spellbook-header').innerText = `📖 Magical Spellbook of ${newName} the ${newTitle}`;
            alert("Name changed successfully!");
        });
    }

    // Summon Familiar Form
    const summonForm = document.querySelector('#summon-familiar-book button');
    if (summonForm) {
        summonForm.addEventListener('click', function(event) {
            event.preventDefault();
            const familiarName = document.querySelector('#summon-familiar-book input:nth-child(1)').value;
            const familiarType = document.querySelector('#summon-familiar-book input:nth-child(2)').value;
            const hasWings = document.querySelector('#summon-familiar-book input[type="checkbox"]').checked;
            const wingType = document.querySelector('#summon-familiar-book input:nth-child(4)').value;
            
            let wingsDescription = hasWings ? ` with ${wingType} wings` : "";
            alert(`You have summoned: ${familiarName}, a ${familiarType}${wingsDescription}.`);
        });
    }
});
