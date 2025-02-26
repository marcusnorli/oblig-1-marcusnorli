document.addEventListener("DOMContentLoaded", () => {
    console.log("ready!");

    // Event listener to open the spell books when clicked
    const openBooks = {
        'change-password-book-cover': 'change-password-book',
        'change-name-book-cover': 'change-name-book',
        'summon-familiar-book-cover': 'summon-familiar-book'
    };

    Object.keys(openBooks).forEach(bookCoverId => {
        const bookCover = document.getElementById(bookCoverId);
        const targetBookId = openBooks[bookCoverId];

        bookCover.addEventListener("click", () => {
            document.getElementById(targetBookId).classList.remove('hidden');
            document.getElementById('book-view').classList.remove('hidden');
        });
    });

    // Event listener to close the open book view
    document.getElementById('close-tome').addEventListener("click", () => {
        document.getElementById('book-view').classList.add('hidden');
        const spellPages = document.querySelectorAll('.spell-page');
        spellPages.forEach(page => page.classList.add('hidden'));
    });

    // Handle form submissions for each book
    document.getElementById("change-password-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword === confirmPassword) {
            alert("Password changed successfully!");
        } else {
            alert("Passwords do not match!");
        }
    });

    document.getElementById("rename-wizard-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const wizardName = document.getElementById("wizard-name").value;
        alert(`Your wizard name has been changed to: ${wizardName}`);
    });

    document.getElementById("summon-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const familiarName = document.getElementById("familiar-name").value;
        const familiarType = document.getElementById("familiar-type").value;
        const hasWings = document.getElementById("has-wings").checked;
        const wingType = document.getElementById("wing-type").value;

        alert(`Familiar ${familiarName} of type ${familiarType} has been summoned!`);
    });
});
