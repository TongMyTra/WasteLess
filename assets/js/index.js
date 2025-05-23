
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
    


    /*PHONE*/
  const button = document.querySelector('.contact-button');
  const menu = document.getElementById('contactIcons');

  function toggleMenu() {
    menu.classList.toggle('active');
  }

  document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.classList.remove('active');
    }
  });




//CHUYỂN FORM
const container = document.getElementById('container');
 const registerBtn = document.getElementById('register');
 const loginBtn = document.getElementById('login');
 
 registerBtn.addEventListener('click', () => {
     container.classList.add("active");
 });
 
 loginBtn.addEventListener('click', () => {
     container.classList.remove("active");
 });

 function togglePasswordVisibility(type) {
    var passwordField = document.getElementById(type === 'signup' ? 'signup-password' : 'signin-password');
    var eyeIcon = document.getElementById(type === 'signup' ? 'signup-eye-icon' : 'signin-eye-icon');
    var eyeSlashIcon = document.getElementById(type === 'signup' ? 'signup-eye-slash-icon' : 'signin-eye-slash-icon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; 
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'block'; 
    } else {
        passwordField.type = 'password';
        eyeIcon.style.display = 'block';
        eyeSlashIcon.style.display = 'none';
    }
}




//kéo form
dragElement(document.getElementById("container"));

function dragElement(elm) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elm.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        // Tránh kéo khi đang nhấn vào input, textarea, button
        if (["INPUT", "TEXTAREA", "BUTTON"].includes(e.target.tagName)) return;

        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elm.style.top = (elm.offsetTop - pos2*1.3) + "px";
        elm.style.left = (elm.offsetLeft - pos1*1.3) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//ĐÓNG FORM//
function openForm(){
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('header-register');
    const loginBtn = document.getElementById('header-login');
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
    document.querySelector('.form').style.display = 'block';

}

  
function closeForm() {
    document.querySelector('.form').style.display = 'none';
}

