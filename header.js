document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let hideTimeout;

    function onScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.transition = 'background-color 0.5s ease-in-out';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                header.style.transition = 'top 0.5s ease-in-out';
                header.style.top = '-100px';
            }, 70);
        } else {
            // Scrolling up
            clearTimeout(hideTimeout);
            header.style.transition = 'top 0.5s ease-in-out, background-color 0.5s ease-in-out';
            header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            header.style.top = '0';
        }

        lastScrollTop = Math.max(scrollTop, 0);
    }

    window.addEventListener('scroll', function () {
        window.requestAnimationFrame(onScroll);
    });
});
