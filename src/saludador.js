export class botSaludos {  
    saludar() {
    let saludo="";
    let tipoSaludo = ["Hola", "Buenos días", "Buenas tardes", "Buenas noches"];
    let add =0;
        if(hora >= 0 && hora < 12){
            add = 1;
        }
        else if(hora >= 12 && hora < 19){
            add = 2;
        }
        else if(hora >= 19 && hora < 24){
            add = 3;
        }else{
            add = 0;
        }
        saludo = tipoSaludo[add] + " ";
    return saludo;
    }
}
export default botSaludos;