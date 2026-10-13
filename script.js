const artworks = document.querySelectorAll(".project-art img");

artworks.forEach(function(artwork) {
    artwork.addEventListener("error", function() {
        artwork.classList.add("hidden");
        artwork.parentElement.classList.add("no-artwork");
    });
});