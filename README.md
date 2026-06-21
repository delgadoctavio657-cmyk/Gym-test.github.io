# PowerFit Gym

Sistema web sencillo para mostrar membresias, registrar clientes y permitir login con PHP y MySQL.

## Requisitos

- XAMPP instalado en `C:\xampp`
- Apache encendido
- MySQL encendido

## Como abrirlo correctamente

No uses Live Server para abrir archivos `.php`, porque mostrara el codigo PHP como texto. Usa XAMPP:

```text
http://127.0.0.1/gym-test/
http://127.0.0.1/gym-test/signup/
http://127.0.0.1/gym-test/login/
```

## Base de datos

La conexion esta en `config/database.php`. Cuando se abre Login o Sign Up con MySQL encendido, el sistema crea automaticamente:

- Base de datos `powerfit_gym`
- Tabla `membresias`
- Tabla `usuarios`
- Membresias Basica, Estandar, Premium y VIP

Tambien puedes importar manualmente `database/powerfit_gym.sql` desde phpMyAdmin.

## Actualizar la copia de XAMPP

Ejecuta:

```bat
fix_php.bat
```

Ese archivo copia el proyecto a `C:\xampp\htdocs\gym-test` y abre la URL correcta.

## GitHub Pages

GitHub Pages puede publicar la parte estatica del sitio, pero no puede ejecutar `login/index.php`, `signup/index.php` ni MySQL. Por eso la version publicable esta separada en la carpeta `docs/`.


