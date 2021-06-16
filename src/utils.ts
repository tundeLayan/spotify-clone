export const getTokenFromUrl = (): any => {
  // this first splits into an array based on the &, then the
  // reduce splits based on the = on every array position
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: any, item): any => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      // initial here is an object
      return initial;
    }, {});
};
