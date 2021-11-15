const isUrl = (string: string) => {
  try {
    return Boolean(new URL(string));
  } catch (e) {
    return false;
  }
};

export default isUrl;
