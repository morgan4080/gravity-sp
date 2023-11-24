const meterFeet = new Map().set(1, 3.281);
const kiloPound = new Map().set(1, 2.205);

const getUnit = (unit: "IMPERIAL" | "METRIC", measure: "HEIGHT" | "WEIGHT") => {
  switch (measure) {
    case "HEIGHT":
      switch (unit) {
        case "IMPERIAL":
          return "FEET";
        case "METRIC":
          return "METER";
      }
      break;
    case "WEIGHT":
      switch (unit) {
        case "IMPERIAL":
          return "LB";
        case "METRIC":
          return "KG";
      }
      break;
  }
};
