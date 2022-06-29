
function mselec() {
    var msg = document.getElementById("msg");

    if (document.getElementById("rad1").checked) {
        msg.innerText = "Celular";
    }
    if (document.getElementById("rad2").checked) {
        msg.innerText = "Ordenador";
    }
    if (document.getElementById("rad3").checked) {
        msg.innerText = "IOSS";
    }
}

function mostrardispositivo() {
    document.getElementById("cantidad").style.display = "none";
    document.getElementById("dispositivo").style.display = "block";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var line = document.getElementById("user_line");
var num = getRandomInt(1, 5);
line.innerHTML = num;
var interval = setInterval(function () {
    if (num < 50) {
        var num2 = getRandomInt(1, 5);
        num = num + num2;
        line.innerHTML = num;
    }
}, 2000);

var i = 0;
var interval2 = setInterval(function () {
    if (i < arrayName.length - 1) {
        i = i + 1;
    } else {
        i = 0;
    }
    bName.innerHTML = arrayName[i];
    bdiamantes.innerHTML = arraydiamantes[i];
    bPlat.innerHTML = arrayPlat[i];
}, 2000);

function validation() {
    var name = document.getElementById("nameuser").value;
    var can;

    if (name == "") {
    }
    var opciones = document.getElementsByName("diamantes");
    var seleccionado = false;
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            can = opciones[i].value;
            break;
        }
    }
    if (!seleccionado) {
    } else {
        if (name != "") {
            document.getElementById("section-p1").style.display = "none";
            document.getElementById("section-p2").style.display = "block";

            var barra = document.getElementById("barra");
            var barrat = document.getElementById("barra-text");
            var img = document.getElementById("img-load");
            var texload = document.getElementById("tex-load");
            var progreso = 0;
            var aumento = 1;

            clearInterval(interval);
            clearInterval(interval2);

            var totalCan;
            var totalText = 1;
            var time = 0;

            var interval = setInterval(function () {
                if (progreso <= 100) {
                    if (Number.isInteger(time / 10)) {
                        progreso = progreso + aumento;
                        barrat.innerHTML = progreso + "%";
                        barra.style.width = progreso + "%";
                    }
                    if (progreso == 8) {
                        texload.innerHTML = "Conectando a servicios de Google Pay";
                    }
                    if (progreso == 15) {
                        texload.innerHTML = "<strong style='color:#05ff0d;'>Conectando correctamente...</strong>";
                    }
                    if (progreso == 23) {
                        texload.innerHTML = "Generando <strong style='color:yellow;'>" + Intl.NumberFormat("es").format(can) + "</strong> diamantes ...";
                    }
                    if (progreso == 32) {
                        texload.innerHTML = "Verificando ID:<b style='color:#05ff0d;'>" + name + "</b> en Garena Free Fire...";
                        document.getElementById("textLoad").style.display = "block";
                    }
                    if (progreso == 48) {
                        texload.innerHTML = "Autenticando ID de usuario...";
                    } else if (progreso == 59) {
                        texload.innerHTML = "<strong style='color:#05ff0d;'>Nombre de usuario verificado.</strong>";
                    } else if (progreso == 70) {
                        texload.innerHTML = "Enviando <strong style='color:yellow;'><a  id='textLoad'><span id='total1'>0</span></a></strong> diamantes...";
                    } else if (progreso > 70) {
                        totalText = Math.round(totalText);
                        document.getElementById("total1").innerHTML = Intl.NumberFormat("es").format(totalText);
                        if (can == 310) {
                            totalText = totalText + 0.75;
                        } else if (can == 520) {
                            totalText = totalText + 1.5;
                        } else if (can == 1060) {
                            totalText = totalText + 3.2;
                        } else if (can == 2180) {
                            totalText = totalText + 6.8;
                        }
                    }
                } else {
                    clearInterval(interval);
                    document.getElementById("section-p2").style.display = "none";
                    document.getElementById("section-p3").setAttribute("class", "ultimo");
                    document.getElementById("textLoad").style.display = "none";
                    document.getElementById("guser").innerHTML = name;
                    document.getElementById("total").innerHTML = Intl.NumberFormat("es").format(can);
                }
                time = time + 1;
            }, 35);
        }
    }
}
function onlyNumbers(e) {
    var key = e.which || e.keyCode;

    if ((key < 48 || key > 57) && (key < 65 || key > 90) && (key < 97 || key > 122) && key != 8 && key != 45 && key != 46 && key != 95) {
        e.preventDefault();
    }
}

function validar() {
    var form = document.form;

    if (form.user.value == 0) {
        document.getElementById("nameuser").className = "inguser";
        form.user.value = "";
        return false;
    }
    document.getElementById("cantidad").style.display = "block";
    document.getElementById("usuario").style.display = "none";
}