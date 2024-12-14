import Stepper from "./Stepper"

describe('Stepper.cy.jsx', () => {

  const steeperSelector = "[data-testid=stepper]"
  const incrementSelector = "[aria-label=increment]"
  const decrementSelector = "[aria-label=decrement]"
  


  it("Steeper should default to 0", ()=>{
    //Arrange
    cy.mount(<Stepper />);
    //Assert
    cy.get(steeperSelector).should("contain.text", 0);
  })

  it("Steeper an initial prop to set the value", ()=>{
    //Arrange
    cy.mount(<Stepper initial={100}/>);
    //Assert
    cy.get(steeperSelector).should("contain.text", 100);
  })

  it("Check the increment Button",()=>{
    //Arrange
    cy.mount(<Stepper />)
    //Act
    cy.get(incrementSelector).click();
    //Assert
    cy.get(steeperSelector).should("contain.text", 1)
  })

  it("Check the Decrement Button", ()=>{
    //Arrange
    cy.mount(<Stepper />);
    //Act
    cy.get(decrementSelector).click();
    //Assert
    cy.get(steeperSelector).should("contain.text", -1)

  })
  
  it("Check has an initial counter that can be incrementd and decrementd",()=>{
    cy.mount(<Stepper initial={100}/>);
    cy.get(steeperSelector).should("contain.text", 100)
    
    cy.get(incrementSelector).click();
    cy.get(steeperSelector).should("contain.text", 101);

    cy.get(decrementSelector).click().click();
    cy.get(steeperSelector).should("contain.text", 99);
  })
  


 
}) 