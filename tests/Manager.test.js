const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getSchool", () => {
      it("should set the officeNumber property to the given parameter", () => {
        const name = "Joe";
        const id = "1";
        const email = "joe@email.com";
        const officeNumber = "308"

    
        const result = new Manager(name, id, email, officeNumber).getOfficeNumber(officeNumber);

        expect(result).toEqual("308");
      });
    });
  

    describe("getRole", () => {
        it("should set the role property to Manager", () => {
    
          const result = new Manager().getRole();
    
          expect(result).toEqual("Manager");
        });
      });
  
  });
  