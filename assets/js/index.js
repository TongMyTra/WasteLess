
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search-input");

        searchInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                const keyword = searchInput.value.trim();
                if (keyword !== "") {
                    alert("Đang tìm kiếm: " + keyword);
                    searchInput.blur();
                    setTimeout(() => {
                        searchInput.value = "";
                    }, 1000);
                }
            }
        });
    });

    window.addEventListener('DOMContentLoaded', function () {
        var currentPage = window.location.pathname.split("/").pop();

        var menuLinks = document.querySelectorAll('.inner-menu a');

        menuLinks.forEach(function(link) {
            var linkPath = link.getAttribute('href');

            if (linkPath === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

