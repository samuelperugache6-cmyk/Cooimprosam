/* ================================================================
   COOIMPROSAM — script.js
   ================================================================ */

/* ---- Nav: fondo al hacer scroll ---- */
const nav = document.getElementById('nav');

function actualizarNav() {
  nav.classList.toggle('fijado', window.scrollY > 60);
}
window.addEventListener('scroll', actualizarNav, { passive: true });
actualizarNav();


/* ---- Menú móvil ---- */
const btnMenu   = document.getElementById('navMenu');
const enlaces   = document.getElementById('navEnlaces');

btnMenu.addEventListener('click', () => {
  const abierto = enlaces.classList.toggle('abierto');
  btnMenu.setAttribute('aria-expanded', abierto);
  btnMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

// Cerrar al tocar un enlace
document.querySelectorAll('.nav__enlaces a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    enlaces.classList.remove('abierto');
    btnMenu.setAttribute('aria-expanded', 'false');
    btnMenu.setAttribute('aria-label', 'Abrir menú');
  });
});

// Cerrar al tocar fuera
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) {
    enlaces.classList.remove('abierto');
    btnMenu.setAttribute('aria-expanded', 'false');
  }
});


/* ---- Animación de aparición al scroll ---- */
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada, i) => {
    if (entrada.isIntersecting) {
      // Pequeño delay escalonado para grupos de elementos
      setTimeout(() => {
        entrada.target.classList.add('visible');
      }, i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


/* ---- Formulario de contacto ---- */
const form           = document.getElementById('contactoForm');
const btnEnviar      = document.getElementById('btnEnviar');
const confirmacion   = document.getElementById('formConfirmacion');

if (form) {
  form.addEventListener('submit', async (e) => {
    // Si el ID de Formspree no ha sido configurado, mostrar instrucción
    const accion = form.getAttribute('action');

// Envío real con Formspree
e.preventDefault();
btnEnviar.textContent = 'Enviando…';
btnEnviar.disabled = true;

    // Envío real con Formspree
    e.preventDefault();
    btnEnviar.textContent = 'Enviando…';
    btnEnviar.disabled    = true;

    try {
      const datos = new FormData(form);
      const res   = await fetch(accion, {
        method:  'POST',
        body:    datos,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        confirmacion.textContent = '✓ Mensaje recibido. Te contactaremos pronto.';
        form.reset();
      } else {
        throw new Error('Error al enviar');
      }
    } catch {
      confirmacion.textContent = 'Hubo un error. Escríbenos directamente a cooimprosam@gmail.com';
    } finally {
      btnEnviar.textContent = 'Enviar mensaje';
      btnEnviar.disabled    = false;
    }
  });
}


/* ---- Scroll suave para navegadores que no lo soportan ---- */
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    const id      = enlace.getAttribute('href').slice(1);
    const destino = document.getElementById(id);
    if (!destino) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 8;
    const top    = destino.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
