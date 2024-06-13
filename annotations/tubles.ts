const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const boycottPepsi: [string, boolean, number] = ['brown', true, 40];
// boycottPepsi[0] = 40; => error because in tubles ordering is a must.

// Type alias
type Drink = [string, boolean, number];

const boycottCocaCola: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];

// Why Tubles is not using much?
//Not obvious enough
const carSpecs: [number, number] = [400, 3354];
// More obvious
const carStats = {
  horsePower: 400,
  weight: 3354,
};
