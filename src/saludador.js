export class botSaludos {  
    saludar(hora) {
    let saludo="";
    let tipoSaludo = ["Hola", "Buenos días", "Buenas tardes", "Buenas noches"];
    let add =0;
        if (idioma === "en") {
            tipoSaludo = ["Hello","Good morning", "Good afternoon", "Good evening"];
        }
        if (hora > 6 && hora < 12) {
            add = 1;
        } else if (hora >= 12 && hora < 20) {
            add = 2;
        } else  if (hora >= 20 || hora < 6) {
            add = 3;
        } else {
            add = 0;
        }
        saludo = tipoSaludo[add] + " ";
    return saludo;
    }
}
export default botSaludos;