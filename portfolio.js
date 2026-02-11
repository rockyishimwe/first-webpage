    // Wait for DOM to load
        document.addEventListener('DOMContentLoaded', () => {

            // 1. Initialize Lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // 2. Mobile Menu Toggle
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            if (menuBtn && mobileMenu) {
                menuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');

                    // Switch icon between 'menu' and 'x'
                    const iconName = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
                    menuBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
                    lucide.createIcons();
                });

                // Close mobile menu when a link is clicked
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                        menuBtn.innerHTML = `<i data-lucide="menu"></i>`;
                        lucide.createIcons();
                    });
                });
            }

            // 3. FAQ Accordion Toggle
            const faqBtns = document.querySelectorAll('.faq-btn');

            faqBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const plusIcon = btn.querySelector('.icon-plus');
                    const minusIcon = btn.querySelector('.icon-minus');

                    // Toggle content visibility
                    content.classList.toggle('hidden');

                    // Toggle icons
                    plusIcon.classList.toggle('hidden');
                    minusIcon.classList.toggle('hidden');
                });
            });

        });