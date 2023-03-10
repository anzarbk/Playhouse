export const lengthChecker = (str, min, max) => {
  if (min > max) return false;
  if (str?.length < min) return false;
  if (str?.length > max) return false;
  return true;
};

export const numChecker = (num, min, max) => {
  if (min > max) return false;
  if (num < min) return false;
  if (num > max) return false;
  return true;
};

export const isEmail = (email) => {
  const ver = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  if (!ver) return false;
  return true;
};
