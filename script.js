var links = document.querySelectorAll(".sidebar a");

for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute("href");
        var target = document.querySelector(targetId);

        if (target) { 
            target.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = this.href;
        }
    };
}

function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hidden");
}