document.querySelectorAll('.debug').forEach(function(element) {
    const computedStyle = window.getComputedStyle(element);
    console.log(computedStyle); // Logs the CSSStyleDeclaration object
    // To log specific properties, for example 'backgroundColor':
    // console.log(`Background Color: ${computedStyle.backgroundColor}`);
    // Add more properties as needed
  });
  