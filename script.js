document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript loaded!");

    // Get all book elements
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
});
