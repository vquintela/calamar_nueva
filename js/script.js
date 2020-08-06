document.addEventListener('scroll', e => {
    const scroll = window.scrollY;
    const nav = document.querySelector('nav');
    if(scroll > 100) {
        nav.classList.add('bg')
    } else {
        nav.classList.remove('bg')
    }
})

document.getElementById("btn-menu").addEventListener("click", () => {
    document.getElementById("nav-navbar").classList.toggle("show");
});

window.onload = () => {
    let check = false;
    (a => {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    const aref = document.getElementById('btn-ws')
    check ? aref.setAttribute('href', "https://api.whatsapp.com/send?phone=+549116286-6910") : aref.setAttribute('href', "https://web.whatsapp.com/send?phone=+549116286-6910")
};

document.getElementById('consulta').addEventListener('click', e => {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('celular').value;
    const mail = document.getElementById('correo').value;
    const comentario = document.getElementById('mensaje').value;
    const expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || mail === "" || telefono === "" || comentario === "") {
        if (nombre === "") {
            document.getElementById('errorNombre').innerText = "¡Campo obligatorio!";
        } else {
            document.getElementById('errorNombre').innerText = "";
            if (nombre.length > 15) {
                document.getElementById('errorNombre').innerText = "¡El nombre es demasiado largo!";
            }
        }
        if (mail === "") {
            document.getElementById('errorEmail').innerText = "¡Campo obligatorio!";
        } else {
            document.getElementById('errorEmail').innerText = "";
            if (mail.length > 35) {
                document.getElementById('errorEmail').innerText = "¡El Mail es demasiado largo!";
            } else if (!expresion.test(mail)) {
                document.getElementById('errorEmail').innerText = "¡El mail no es del formato correcto!";
            }
        }
        if (telefono === "") {
            document.getElementById('errorTelefono').innerText = "¡Campo obligatorio!";
        } else {
            document.getElementById('errorTelefono').innerText = "";
            if (telefono.length > 10) {
                document.getElementById('errorTelefono').innerText = "¡El telefono es demasiado largo!";
            } else if (isNaN(telefono)) {
                document.getElementById('errorTelefono').innerText = "¡El telefono debe ser numerico!";
            }
        }
        if (comentario === "") {
            document.getElementById('errorComentario').innerText = "¡Campo obligatorio!";
        } else {
            document.getElementById('errorComentario').innerText = "";
        }
    } else if (nombre.length > 15 || mail.length > 35 || !expresion.test(mail) || telefono.length > 10 || isNaN(telefono)) {
        if (nombre.length > 15) {
            document.getElementById('errorNombre').innerText = "¡El nombre es demasiado largo!";
        } else {
            document.getElementById('errorNombre').innerText = "";
        }
        if (mail.length > 35) {
            document.getElementById('errorEmail').innerText = "¡El Mail es demasiado largo!";
        } else if (!expresion.test(mail)) {
            document.getElementById('errorEmail').innerText = "¡El mail no es del formato correcto!";
        } else {
            document.getElementById('errorEmail').innerText = "";
        }
        if (telefono.length > 10) {
            document.getElementById('errorTelefono').innerText = "¡El telefono es demasiado largo!";
        } else if (isNaN(telefono)) {
            document.getElementById('errorTelefono').innerText = "¡El telefono debe ser numerico!";
        } else {
            document.getElementById('errorTelefono').innerText = "";
        }
    } else {
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('telefono', telefono);
        formData.append('mail', mail);
        formData.append('comentario', comentario);
        fetch("php/email.php", { 
            method: 'POST', 
            body: formData })
            .then(function (response) {
                return response.text();
            });
        modalEd();
        document.querySelector("#aceptarEditarButton").addEventListener('click', function () {
            location.reload();
        });
    }

})

const modalEd = () => {
    let mascara = document.getElementById('lamascara');
    mascara.style.display = "block";
}