        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');

        if (mobileToggle) {
            mobileToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                const spans = this.querySelectorAll('span');
                if (navLinks.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        }