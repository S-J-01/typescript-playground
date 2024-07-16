interface Shape {
    name: string;
    color: string;
    area(): number;
  }
  
 
  function calculateArea(shape: Shape): void {
    console.log(`Calculating area of ${shape.name}...`);
    console.log(`Area: ${shape.area()}`);
  }
  
  
  const circle: Shape = {
    name: "Circle",
    color: "Red",
    area() {
      return 3.14 * 2 * 2;
    },
  };
  
 
  calculateArea(circle);