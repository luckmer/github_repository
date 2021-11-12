class Constants {
  clearSpacer = (word: string) => word.replace(/ /g, "").split(",").shift();
}

const constants = new Constants();

export default constants;
