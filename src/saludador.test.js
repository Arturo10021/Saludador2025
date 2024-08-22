import botSaludos from "./saludador";
describe("Saludador", () => {
    it("Saludar a Pedro", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro") 
      expect(resultado).toEqual("Hola Pedro");
    });
    it("Saludar a Pedro en el dia", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 9) 
      expect(resultado).toEqual("Buenos dias Pedro");
    });
    it("Saludar a Pedro en la tarde", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 15) 
      expect(resultado).toEqual("Buenas tardes Pedro");
    });
    it("Saludar a Pedro en la noche", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 21) 
      expect(resultado).toEqual("Buenas noches Pedro");
    });
    it("Saludar a Pedro mayor", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 11, "M", 30) 
      expect(resultado).toEqual("Buenos dias Sr. Pedro");
    });

    it("Saludar a Maria mayor", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Maria", 22, "F", 30) 
      expect(resultado).toEqual("Buenas noches Sra. Maria");
    });

    it("Saludar a Pedro mayor en ingles", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 11, "M", 30, "en") 
      expect(resultado).toEqual("Good morning Mr. Pedro");
    });

    it("Saludar a Maria mayor en ingles", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Maria", 22, "F", 30, "en") 
      expect(resultado).toEqual("Good evening Mrs. Maria");
    });

    it("Saludar a Pedro en el dia en ingles", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 9, "M", 25, "en") 
      expect(resultado).toEqual("Good morning Pedro");
    });

    it("Saludar a Pedro en la tarde en ingles", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 15, "M", 12, "en") 
      expect(resultado).toEqual("Good afternoon Pedro");
    });

    it("Saludar a Pedro en la noche en ingles", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 21, "M", 15, "en") 
      expect(resultado).toEqual("Good evening Pedro");
    });

  });