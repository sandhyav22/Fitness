
    document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active");

        let icon = this.querySelector("i");

        if (this.classList.contains("active")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
    });
});

const links = document.querySelectorAll('#menu a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});