

$(document).ready(()=>{
    
    $("#ingForm").validate({

        rules:{
            usuario:{
                required:true,
                minlength:5,
                email:true
            },
            contrasena:{
                required:true,
                minlength:5
            }
        },
        messages:{
            usuario:{
                required:"el campo usuario es obligatorio",
                minlength:"debe tener un minimo de 5 caracteres",
                email:"debe ser un email valido"
            },
            contrasena:{
                required:"el campo usuario es obligatorio",
                minlength:"debe tener un minimo de 5 caracteres"
            }
        }
    })
})