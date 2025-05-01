
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


    



    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".counter");
    
        const easeOut = (t) => 1 - Math.pow(1 - t, 3); // Công thức easing cho hiệu ứng mượt mà
    
        const animateCount = (counter, duration = 2000) => {
            const target = +counter.getAttribute("data-target");
            let start = 0;
            const startTime = performance.now();
    
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1); // không vượt quá 1
                const easedProgress = easeOut(progress);
                const value = Math.floor(easedProgress * target);
    
                // Cập nhật giá trị và thêm dấu chấm và dấu cộng nếu chưa có
                counter.textContent = value.toLocaleString();
    
                // Thêm dấu cộng nếu chưa có
                if (!counter.textContent.includes('+')) {
                    counter.textContent += '+';
                }
    
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = value.toLocaleString() + '+';
                }
            };
    
            requestAnimationFrame(updateCounter);
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.6 });
    
        counters.forEach(counter => {
            observer.observe(counter);
        });
    });
    
