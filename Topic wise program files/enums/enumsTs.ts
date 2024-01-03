// Enums are the way of defining related constants

//there are three types of enums
// 1.Number enums
// 2.String enums
// 3.Number & String enums mixed

// un-initialized enum
enum CardinalDirections {
  North,
  East,
  West,
  South,
}

// partially-initialized
enum CardinalDirections1 {
  North = 1,
  East,
  West,
  South,
}
console.log(CardinalDirections1.East);

//fully initialized string enum
enum CardinalDirections2 {
  North = "NORTH",
  East = "EAST",
  West = "WEST",
  South = "SOUTH",
}

//fully initialized string and num Enum

enum CardinalDirections3 {
  North = 0,
  East = "EAST",
  West = "WEST",
  South = 3,
}

console.log(CardinalDirections3.South);
