const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
      it("should set the github property to the given parameter", () => {
        const name = "Joe";
        const id = "1";
        const email = "joe@email.com";
        const github = "JoeGit"

    
        const result = new Engineer(name, id, email, github).getGithub(github);

        expect(result).toEqual("JoeGit");
      });
    });
  

    describe("getRole", () => {
        it("should set the role property to Engineer", () => {
    
          const result = new Engineer().getRole();
    
          expect(result).toEqual("Engineer");
        });
      });
  
  });
  