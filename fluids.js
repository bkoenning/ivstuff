'use strict'
const compounds = require("./compounds.js");
const fluids = { lactatedRingers: {
        name: "Lactated Ringers",
		possibleNames: ["LR", "Lactated Ringers"],
		//containsCompounds: [ { compound: "Sodium Chloride", amount: 0.6, unit: "g", per: { vol: 100, type: "mL"} },
		//			{ compound: "Sodium Lactate", amount: 0.31, unit: "g", per: { vol: 100, type: "mL"} },
		//			{ compound: "Potassium Chloride", amount: 0.03, unit: "g", per: {vol: 100, type: "mL"} },
		//			{ compound: "Calcium Chloride Dihydrate", amount: 0.02, unit: "g", per: {vol: 100, type:"mL"} }
		//		],
		containsCompounds: {
		    sodiumChloride : {name: "Sodium Chloride", amount: 0.6, unit: "g", perVolume: {amount: 100, unit: "mL"}},
		    sodiumLactate: {name: "Sodium Lactate", amount: 0.31, unit: "g", perVolume: {amount: 100, unit: "mL"}},
		    potassiumChloride: {name: "Potassium Chloride", amount: 0.03, unit: "g", perVolume: {amount: 100, unit: "mL"}},
		    calciumChlorideDihydrate: {name: "Calcium Chloride Dihydrate", amount: 0.02, unit:"g", perVolume: {amount: 100, unit: "mL"}}
		},
		//containsElectrolytes: [ { electrolyte: "Sodium", amount: 130, unit: "mEq", per: {vol: 1, type: "L"} },
		//				{ electrolyte: "Potassium", amount: 4, unit: "mEq", per: {vol: 1, type: "L"} },
		//				{ electrolyte: "Calcium", amount: 3, unit: "mEq", per: {vol: 1, type: "L"} },
		//				{ electrolyte: "Chloride", amount: 110, unit: "mEq", per: {vol: 1, type: "L"} },
		//				{ electrolyte: "Lactate", amount: 28, unit: "mEq", per: {vol: 1, type: "L"} }
		//			],
		containsElectrolytes: {
			sodium: {name: "Sodium", amount: 130, unit: "mEq", perVolume: {amount: 1, unit: "L"}},
			chloride: {name: "Chloride", amount: 110, unit: "mEq", perVolume: {amount: 1, unit: "L"}},
			potassium: {name: "Potassium", amount: 4, unit: "mEq", perVolume: {amount: 1, unit: "L"}},
			calcium: {name: "Calcium", amount: 3, unit: "mEq", perVolume: {amount: 1, unit: "L"}},
			lactate: {name: "Lactate", amount: 28, unit: "mEq", perVolume: {amount: 1, unit: "L"}}
		},
		osmolarity: {value: 275, unit: "mOsm", per: {vol: 1, type: "L"}},
		hasCaloricValue: false
		//getVolumeByCompound: function(compound, amount, volumeType) {
		  //  let convert = this["containsCompounds"][compound];
		    
		//}
	},
	normalSodiumChloride: {
		name: "0.9% Sodium Chloride",
		possibleNames: ["Normal Saline", "0.9% NS", "NS", "0.9%NS", "0.9% Sodium Chloride", "0.9%Sodium Chloride", "FNS"],
		//containsCompounds: [ { compound: "Sodium Chloride", amount: 0.9, unit: "g", per: {vol: 100, type: "mL"} } ],
		containsCompounds: {
			sodiumChloride: {name: "Sodium Chloride", amount: 0.9, unit: "g", perVolume: {amount: 100, unit: "mL"}}
		},
		//containsElectrolytes: [ {electrolyte: "Sodium", amount: 154, unit: "mEq", per: {vol: 1, type: "L"} },
		//				{electrolyte: "Chloride", amount: 154, unit: "mEq", per: {vol: 1, type: "L"} }
		//				],
		containsElectrolytes: {
			sodium: {name: "Sodium", amount: 154, unit: "mEq", perVolume: {amount: 1, unit: "L"}},
			chloride: {name: "Chloride", amount: 154, unit: "mEq", perVolume: {amount: 1, unit: "L"}}
		},
		osmolarity: { value: 308, unit: "mOsm", per: {vol: 1, type: "L"} },
		hasCaloricValue: false
	},
	halfNormalSodiumChloride: {
		name: "0.45% Sodium Chloride",
		possibleNames: ["Half Normal Saline", "0.45% NS", "1/2NS", "0.45%NS", "0.45% Sodium Chloride", "0.45%Sodium Chloride", "Half-Normal Saline", "HNS"],
		//containsCompounds: [ { compound: "Sodium Chloride", amount: 0.45, unit: "g", per: {vol: 100, type: "mL"} } ],
		containsCompounds: {
			sodiumChloride: {name: "Sodium Chloride", amount: 0.45, unit: "g", perVolume: {amount: 100, unit: "mL"}}
		},
		//containsElectrolytes: [ {electrolyte: "Sodium", amount: 77, unit: "mEq", per: {vol: 1, type: "L"} },
		//				{electrolyte: "Chloride", amount: 77, unit: "mEq", per: {vol: 1, type: "L"} }
		//				],
		containsElectrolytes: {
			sodium: {name: "Sodium", amount: 77, unit: "mEq", perVolume: {amount: 1, unit: "L"}},
			chloride: {name: "Chloride", amount: 77, unit: "mEq", perVolume: {amount: 1, unit: "L"}}
		},
		osmolarity: { value: 154, unit: "mOsm", per: {vol: 1, type: "L"} },
		hasCaloricValue: false
	},
	quarterNormalSodiumChloride: {
		name: "0.225% Sodium Chloride",
		possibleNames: ["Quarter Normal Saline", "0.225% NS", "1/4NS", "0.225%NS", "0.225% Sodium Chloride", "0.225%Sodium Chloride", "Quarter-Normal Saline", "QNS"],
		//containsCompounds: [ { compound: "Sodium Chloride", amount: 0.225, unit: "g", per: {vol: 100, type: "mL"} } ],
		containsCompounds: {
			sodiumChloride: {name: "Sodium Chloride", amount: 0.225, unit: "g", perVolume: {amount: 100, unit: "mL"}}
		},
		//containsElectrolytes: [ {electrolyte: "Sodium", amount: 38.5, unit: "mEq", per: {vol: 1, type: "L"} },
		//				{electrolyte: "Chloride", amount: 38.5, unit: "mEq", per: {vol: 1, type: "L"} }
		//				],
		containsElectrolytes: {
			sodium: {name: "Sodium", amount: 38.5, unit: "mEq", perVolume: {amount: 1, unit: "L"}},
			chloride: {name: "Chloride", amount: 38.5, unit: "mEq", perVolume: {amount: 1, unit: "L"}}
		},
		osmolarity: { value: 77, unit: "mOsm", per: {vol: 1, type: "L"} },
		hasCaloricValue: false
	},
	dextrose5: {
		name: "Dextrose 5% in Water",
		possibleNames: ["D5W", "D5%W", "Dextrose 5% in Water", "D5", "D5%", "Dextrose 5%", "Dextrose5%"],
		hasCaloricValue: true
	}
};

//let sampleFluidContents = fluids["lactatedRingers"]["co
console.log(Object.getOwnPropertyNames(fluids)); 


/*
let s = "sodium";
let regS = RegExp(s.trim(), "ig");
console.log(regS);
let array = new Array();

for (let fluid of fluids) {
	if (fluid.hasOwnProperty("possibleNames")) {
		for (let possibleName of fluid.possibleNames) {
			if (regS.test(possibleName)) {
				array.push(fluid.name);
				break;
			}
		}
	}
}
console.log(array);

*/

