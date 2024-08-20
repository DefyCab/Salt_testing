const assert = require("assert")

describe("greet function", () => {
  it("should greet Love properly", () => {
    // arrange
    const greeter = require("./index.js")

    // act
    const actualResult = greeter.greet("Love")

    // assert
    assert.equal("Welcome to SALT, Love", actualResult)
  })
})


describe("greet function", () => {
  it("should greet Eliza properly", () => {
 
    const greeter = require("./index.js")

    // sparar resultatet i en variabel

   const actualResult = greeter.greet("Eliza")

   // jämför om actualReuslt är lika med strängen

     assert.equal("Welcome to SALT, Eliza", actualResult)
  })
})
