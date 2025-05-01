let header = document.querySelector('.header');
header.innerHTML = `
<header class="header" data-aos="fade-down" data-aos-duration="11500">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="inner-main">
                    <div class="inner-logo">
                        <a href="/">
                            <img src="assets/images/logo.png" alt="Waste Less">
                        </a>
                        <span>Waste Less</span>
                    </div>
                    <div class="inner-menu">
                        <ul>
                            <li>
                                <a href="#">Trang chủ</a>
                            </li>
                            <li>
                                <a href="#">Hướng dẫn</a>
                            </li>
                            <li>
                                <a href="#">Thống kê</a>
                            </li>
                            <li>
                                <a href="#">Cộng đồng</a>
                            </li>
                            <li>
                                <a href="#">Tin tức</a>
                            </li>
                            <li>
                                <a href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                    <div class="inner-search">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" id="search-input" class="form-control search-input" placeholder="Tìm kiếm...">
                    </div>
                    <div class="inner-icon-mobi">
                             <i class="fa-solid fa-bars"></i>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</header>
`;

AOS.init();
