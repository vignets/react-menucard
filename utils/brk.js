var breakpoints = {
  sm: true,
  md: false,
  lg: false,
  xl: false,
};

// (function brk(params = { default: "11", sm: "12", md: "13" }) {
//   breakpoints.default = true;
//   result = false;

//   Object.keys(params)
//     .reverse()
//     .forEach(function (key) {
//       result = result || (breakpoints[key] && params[key]);
//     });
//   console.log(result);
// })();

export function brk(params, breakpoints) {
  breakpoints.default = true;
  const result = false;

  Object.keys(params)
    .reverse()
    .forEach(function (key) {
      result = result || (breakpoints[key] && params[key]);
    });
  return result;
}
