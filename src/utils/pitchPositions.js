export const formationTypes = [
  "4-4-2",
  "4-1-3-2",
  "4-3-3",
  "4-2-1-3",
  "4-2-2-2",
  "5-3-2",
  "3-3-2-2"
];

export function getPitchFormation(type) {
  switch (type) {
    case "4-2-2-2":
      return [
        { id: 0, name: "GK", bottom: "1%", left: "46%" },
        { id: 1, name: "CB", bottom: "16%", left: "34%" },
        { id: 2, name: "CB", bottom: "16%", left: "58%" },
        { id: 3, name: "LB", bottom: "23%", left: "7%" },
        { id: 4, name: "RB", bottom: "23%", left: "83%" },
        { id: 5, name: "CM", bottom: "47%", left: "34%" },
        { id: 6, name: "CM", bottom: "47%", left: "58%" },
        { id: 7, name: "LM", bottom: "54%", left: "7%" },
        { id: 8, name: "RM", bottom: "54%", left: "83%" },
        { id: 9, name: "CF", bottom: "77%", left: "34%" },
        { id: 10, name: "CF", bottom: "77%", left: "58%" }
      ];
    case "4-4-2":
      return [
        { id: 0, name: "GK", bottom: "1%", left: "46%" },
        { id: 1, name: "CB", bottom: "16%", left: "34%" },
        { id: 2, name: "CB", bottom: "16%", left: "58%" },
        { id: 3, name: "LB", bottom: "23%", left: "7%" },
        { id: 4, name: "RB", bottom: "23%", left: "83%" },
        { id: 5, name: "DM", bottom: "34%", left: "46%" },
        { id: 6, name: "CM", bottom: "47%", left: "46%" },
        { id: 7, name: "CM", bottom: "47%", left: "26%" },
        { id: 8, name: "CM", bottom: "47%", left: "65%" },
        { id: 9, name: "CF", bottom: "77%", left: "34%" },
        { id: 10, name: "CF", bottom: "77%", left: "58%" }
      ];
    case "4-1-3-2":
      return [
        { id: 0, name: "GK", bottom: "1%", left: "46%" },
        { id: 1, name: "CB", bottom: "16%", left: "34%" },
        { id: 2, name: "CB", bottom: "16%", left: "58%" },
        { id: 3, name: "LB", bottom: "23%", left: "7%" },
        { id: 4, name: "RB", bottom: "23%", left: "83%" },
        { id: 5, name: "DM", bottom: "34%", left: "46%" },
        { id: 6, name: "AM", bottom: "65%", left: "46%" },
        { id: 7, name: "LM", bottom: "54%", left: "7%" },
        { id: 8, name: "RM", bottom: "54%", left: "83%" },
        { id: 9, name: "CF", bottom: "77%", left: "34%" },
        { id: 10, name: "CF", bottom: "77%", left: "58%" }
      ];
    case "4-3-3":
      return [
        { id: 0, name: "GK", bottom: "1%", left: "46%" },
        { id: 1, name: "CB", bottom: "16%", left: "34%" },
        { id: 2, name: "CB", bottom: "16%", left: "58%" },
        { id: 3, name: "LB", bottom: "23%", left: "7%" },
        { id: 4, name: "RB", bottom: "23%", left: "83%" },
        { id: 5, name: "DM", bottom: "34%", left: "46%" },
        { id: 6, name: "CM", bottom: "47%", left: "34%" },
        { id: 7, name: "CM", bottom: "47%", left: "58%" },
        { id: 8, name: "LW", bottom: "65%", left: "7%" },
        { id: 9, name: "RW", bottom: "65%", left: "83%" },
        { id: 10, name: "CF", bottom: "77%", left: "46%" }
      ];
    case "4-2-1-3":
      return [
        { id: 0, name: "GK", bottom: "1%", left: "46%" },
        { id: 1, name: "CB", bottom: "16%", left: "34%" },
        { id: 2, name: "CB", bottom: "16%", left: "58%" },
        { id: 3, name: "LB", bottom: "23%", left: "7%" },
        { id: 4, name: "RB", bottom: "23%", left: "83%" },
        { id: 5, name: "DM", bottom: "34%", left: "46%" },
        { id: 6, name: "CM", bottom: "47%", left: "46%" },
        { id: 7, name: "AM", bottom: "65%", left: "46%" },
        { id: 8, name: "LW", bottom: "65%", left: "7%" },
        { id: 9, name: "RW", bottom: "65%", left: "83%" },
        { id: 10, name: "CF", bottom: "77%", left: "46%" }
      ];
    case "5-3-2":
      return [
        { id: 0, name: "GK", bottom: "1%", left: "46%" },
        { id: 1, name: "CB", bottom: "16%", left: "46%" },
        { id: 2, name: "CB", bottom: "16%", left: "26%" },
        { id: 3, name: "CB", bottom: "16%", left: "65%" },
        { id: 4, name: "LB", bottom: "23%", left: "7%" },
        { id: 5, name: "RB", bottom: "23%", left: "83%" },
        { id: 6, name: "DM", bottom: "34%", left: "46%" },
        { id: 7, name: "CM", bottom: "47%", left: "34%" },
        { id: 8, name: "CM", bottom: "47%", left: "58%" },
        { id: 9, name: "CF", bottom: "77%", left: "34%" },
        { id: 10, name: "CF", bottom: "77%", left: "58%" }
      ];
    case "3-3-2-2":
      return [
        { id: 0, name: "GK", bottom: "1%", left: "46%" },
        { id: 1, name: "CB", bottom: "16%", left: "46%" },
        { id: 2, name: "CB", bottom: "16%", left: "26%" },
        { id: 3, name: "CB", bottom: "16%", left: "65%" },
        { id: 4, name: "DM", bottom: "34%", left: "46%" },
        { id: 5, name: "LM", bottom: "54%", left: "7%" },
        { id: 6, name: "RM", bottom: "54%", left: "83%" },
        { id: 7, name: "CM", bottom: "47%", left: "34%" },
        { id: 8, name: "CM", bottom: "47%", left: "58%" },
        { id: 9, name: "CF", bottom: "77%", left: "34%" },
        { id: 10, name: "CF", bottom: "77%", left: "58%" }
      ];
    default:
      console.log("Formation doesn't exist!");
      break;
  }
}
