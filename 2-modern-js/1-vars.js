{
  // Block Scope
  {
    // Nested Block Scope
    // the scope will protect the vatiables if we use let or const
  }
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope
}
//i can be read outside, should use let

function sum(a, b) {
  // Function Scope
  var result = a + b;
}

sum(4 + 3);

// var in ducntion scope are not usable outside, but the ones in blick scope are
