# Cooimprosam — Sitio Web Oficial

Cafés Especiales de Altura · Samaniego, Nariño, Colombia  
28 familias campesinas unidas por el origen, la calidad y el comercio justo.

---

## Cómo publicar en GitHub Pages

### 1. Sube los archivos a GitHub

```
cooimprosam/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

### 2. Activa GitHub Pages

1. En tu repositorio, ve a **Settings → Pages**
2. En *Source*, selecciona **Deploy from a branch**
3. Elige la rama **main** y carpeta **/ (root)**
4. Haz clic en **Save**

El sitio estará disponible en:  
`https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/`

---

## Configurar el formulario de contacto (Formspree)

El formulario de contacto requiere Formspree para recibir mensajes en tu correo.

### Pasos:

1. Ve a **https://formspree.io** y crea una cuenta gratuita
2. Crea un nuevo formulario → copia el **ID** (ejemplo: `xpwzabcd`)
3. En `index.html`, línea del formulario, reemplaza:

```html
action="https://formspree.io/f/REEMPLAZAR_ID"
```

por:

```html
action="https://formspree.io/f/xpwzabcd"
```

4. Guarda y sube el cambio a GitHub

Formspree tiene plan gratuito de hasta **50 mensajes/mes**.

---

## Personalizar el sitio

### Información de contacto
En `index.html`, busca y reemplaza:
- `cooimprosam@gmail.com` → tu correo real
- `https://wa.me/573000000000` → tu número de WhatsApp  
  (formato: `https://wa.me/57XXXXXXXXXX`)

### Colores
Todos los colores están en `css/style.css` al inicio, dentro de `:root { }`:
- `--verde-profundo` — fondo oscuro principal
- `--oro-claro` — acentos dorados
- `--niebla` — textos sobre fondo oscuro

---

## Estructura del sitio

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#inicio` | Portada con silueta de montañas |
| Nosotros | `#nosotros` | Historia + estadísticas |
| El Café | `#cafe` | Altitud, variedades, procesos, notas |
| Las Familias | `#familias` | Las 28 familias campesinas |
| Comercio Justo | `#comercio` | Valores y compromisos |
| Contacto | `#contacto` | Formulario + canales |

---

© 2025 Cooimprosam · Samaniego, Nariño
