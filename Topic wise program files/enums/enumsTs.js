// Enums are the way of defining related constants
//there are three types of enums
// 1.Number enums
// 2.String enums
// 3.Number & String enums mixed
// un-initialized enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["West"] = 2] = "West";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
})(CardinalDirections || (CardinalDirections = {}));
// partially-initialized
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 1] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 2] = "East";
    CardinalDirections1[CardinalDirections1["West"] = 3] = "West";
    CardinalDirections1[CardinalDirections1["South"] = 4] = "South";
})(CardinalDirections1 || (CardinalDirections1 = {}));
console.log(CardinalDirections1.East);
//fully initialized string enum
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2["North"] = "NORTH";
    CardinalDirections2["East"] = "EAST";
    CardinalDirections2["West"] = "WEST";
    CardinalDirections2["South"] = "SOUTH";
})(CardinalDirections2 || (CardinalDirections2 = {}));
//fully initialized string and num Enum
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3[CardinalDirections3["North"] = 0] = "North";
    CardinalDirections3["East"] = "EAST";
    CardinalDirections3["West"] = "WEST";
    CardinalDirections3[CardinalDirections3["South"] = 3] = "South";
})(CardinalDirections3 || (CardinalDirections3 = {}));
console.log(CardinalDirections3.South);
