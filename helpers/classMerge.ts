const classMerge = (...classes: Array<string | boolean | null | undefined>) =>
  classes.filter(Boolean).join(' ');

export default classMerge;
