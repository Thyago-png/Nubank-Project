 const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
 
        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            // Trava o scroll do body quando menu está aberto
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
 
        // Fecha o menu ao clicar em qualquer link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
                document.body.style.overflow = '';
            });
        });