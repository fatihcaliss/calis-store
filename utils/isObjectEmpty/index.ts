// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObjectEmpty = (obj: Record<string, any>): boolean => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

export default isObjectEmpty;
