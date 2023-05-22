export interface IObjectType {
  [key: string]: unknown;
}

export const cx = (...args: IObjectType[]) => {
  const mergedObject: IObjectType = {};

  args.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        mergedObject[key] = obj[key];
      }
    });
  });

  return mergedObject;
};
