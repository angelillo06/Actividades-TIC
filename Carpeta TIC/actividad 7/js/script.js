        function comprobar() {
                // Obtener el valor del input
            let calificacion = parseFloat(document.getElementById("numero").value);
            
            // Comprobar si la calificación es válida
            if (isNaN(calificacion)) {
                document.getElementById("resultado").innerHTML = "Por favor, ingresa una calificación válida.";
            } else {
                // Comprobar si la calificación es aprobada o suspendida
                if (calificacion >= 5) {
                    document.getElementById("resultado").innerHTML = "Aprobado";
                } else {
                    document.getElementById("resultado").innerHTML = "Suspendido";
                }
            }
        }

