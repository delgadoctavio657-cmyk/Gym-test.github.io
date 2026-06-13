$(document).ready(function () {
  var $window = $(window);
  var $body = $("body");
  var $menu = $(".menu");
  var correoExpresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function limpiarError($campo) {
    var $grupo = $campo.closest(".form-group");
    $grupo.removeClass("has-error");
    $grupo.find(".help-block.error-message").remove();
  }

  function mostrarError($campo, mensaje) {
    var $grupo = $campo.closest(".form-group");

    limpiarError($campo);
    $grupo.addClass("has-error");
    $campo.after('<span class="help-block error-message">' + mensaje + "</span>");
  }

  function validarFormularioCliente($form) {
    var valido = true;
    var $nombre = $form.find('[name="Nombre"]');
    var $correo = $form.find('[name="Correo"]');
    var $membresia = $form.find('[name="Membresia"]');
    var nombre = $.trim($nombre.val());
    var correo = $.trim($correo.val());

    $form.find(".form-control").each(function () {
      limpiarError($(this));
    });

    if (nombre === "") {
      mostrarError($nombre, "Ingrese su nombre.");
      valido = false;
    }

    if (correo === "") {
      mostrarError($correo, "Ingrese su correo electronico.");
      valido = false;
    } else if (!correoExpresion.test(correo)) {
      mostrarError($correo, "Ingrese un correo electronico valido.");
      valido = false;
    }

    if ($membresia.length && $.trim($membresia.val()) === "") {
      mostrarError($membresia, "Seleccione una membresia.");
      valido = false;
    }

    return valido;
  }

  $('[data-validate="cliente"]').on("submit", function (event) {
    if (!validarFormularioCliente($(this))) {
      event.preventDefault();
    }
  });

  $('[data-validate="cliente"] .form-control').on("input change", function () {
    limpiarError($(this));
  });

  $(".btn-suscripcion").on("click", function () {
    var membresia = $(this).data("membresia");

    if (membresia && window.sessionStorage) {
      sessionStorage.setItem("membresiaSeleccionada", membresia);
    }
  });

  if ($("#Membresia").length && !$("#Membresia").val() && window.sessionStorage) {
    var membresiaGuardada = sessionStorage.getItem("membresiaSeleccionada");

    if (membresiaGuardada && $("#Membresia option[value='" + membresiaGuardada + "']").length) {
      $("#Membresia").val(membresiaGuardada);
    }
  }

  $(".navbar-collapse a").on("click", function () {
    if ($.fn.collapse) {
      $(".navbar-collapse.in").collapse("hide");
    }
  });

  $('a[href^="#"]').not("[data-slide]").on("click", function (event) {
    var destino = $(this).attr("href");
    var $destino = destino.length > 1 ? $(destino) : $();

    if ($destino.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $destino.offset().top - ($menu.length ? $menu.outerHeight() : 0)
        },
        450
      );
    }
  });

  if ($menu.length === 0) return;

  var altura = $menu.offset().top;

  function actualizarMenu() {
    $body.css("--menu-height", $menu.outerHeight() + "px");

    if ($window.scrollTop() > altura) {
      $menu.addClass("menu-fixed");
      $body.addClass("menu-is-fixed");
    } else {
      $menu.removeClass("menu-fixed");
      $body.removeClass("menu-is-fixed");
    }
  }

  $window.on("scroll", actualizarMenu);
  $window.on("resize", function () {
    $menu.removeClass("menu-fixed");
    $body.removeClass("menu-is-fixed");
    altura = $menu.offset().top;
    actualizarMenu();
  });

  actualizarMenu();
});
