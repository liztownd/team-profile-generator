const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
      it("should set the name property to the given parameter", () => {
        const name = "Joe";
        const id = "1";
        const email = "joe@email.com";
        const role = "Employee"
    
        const result = new Employee(name, id, email, role).getName(name);

        expect(result).toEqual("Joe");
      });
    });
  
    describe("getId", () => {
      it("should set the id property to the given parameter", () => {
        const name = "Joe";
        const id = "1";
        const email = "joe@email.com";
        const role = "Employee"
  
        const result = new Employee(name, id, email, role).getId(id);
  
        expect(result).toEqual("1");
      });
  
    });
  
    describe("getEmail", () => {
      it("should set the email property to the given parameter", () => {
        const name = "Joe";
        const id = "1";
        const email = "joe@email.com";
        const role = "Employee"
  
        const result = new Employee(name, id, email, role).getEmail(email);
  
        expect(result).toEqual("joe@email.com");
      });
    });

    describe("getRole", () => {
        it("should set the role property to Employee", () => {
    
          const result = new Employee().getRole();
    
          expect(result).toEqual("Employee");
        });
      });
  
  });
  