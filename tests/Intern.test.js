const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getSchool", () => {
      it("should set the school property to the given parameter", () => {
        const name = "Joe";
        const id = "1";
        const email = "joe@email.com";
        const school = "Anywhere University"

    
        const result = new Intern(name, id, email, school).getSchool(school);

        expect(result).toEqual("Anywhere University");
      });
    });
  

    describe("getRole", () => {
        it("should set the role property to Intern", () => {
    
          const result = new Intern().getRole();
    
          expect(result).toEqual("Intern");
        });
      });
  
  });
  