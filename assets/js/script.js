const SearchIcon = document.querySelector('.search-icon');
const autocompleteInput = document.querySelector('.autocomplete');
SearchIcon.addEventListener('click', function (e) {
    if (autocompleteInput.classList.contains('autocompleteHover')) {
        if (!autocompleteInput.contains(e.target) || !autocompleteItems.contains(e.target)) {
            autocompleteInput.classList.remove('autocompleteHover')
        }
    } else {
        autocompleteInput.classList.add('autocompleteHover')
        // langDropDown.style.animation = 'showUp 0.35s 1';
        langDropDown.style.display = 'none';
    }
});
