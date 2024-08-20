export class botSaludos {  
    saludar(nombre, hora, genero, edad, idioma) {
      let saludo = "";
      let tipoSaludo = ["Hola","Buenos dias", "Buenas tardes", "Buenas noches"];
      let add = 0;
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

        if ((genero === "M" || genero === "m") && edad >=30 && idioma != "en") {
            saludo += "Sr. ";
        }else if ((genero === "F" || genero === "f") && edad >=30 && idioma != "en") {
            saludo += "Sra. ";
        }else if ((genero === "M" || genero === "m") && edad <30 && idioma != "en") {
            saludo += "Joven ";
        }else if ((genero === "F" || genero === "f") && edad <30 && idioma != "en") {
            saludo += "Jovencita ";
        }else if ((genero === "M" || genero === "m") && edad >=30 && idioma === "en") {
            saludo += "Mr. ";
        }
        else if ((genero === "F" || genero === "f") && edad >=30 && idioma === "en") {
            saludo += "Mrs. ";
        }
        else if ((genero === "M" || genero === "m") && edad <30 && idioma === "en") {
            saludo += "Young ";
        }
        else if ((genero === "F" || genero === "f") && edad <30 && idioma === "en") {
            saludo += "Miss ";
        } 

      saludo+= nombre;
      console.log(nombre);
      return saludo;
    }
}
export default botSaludos;