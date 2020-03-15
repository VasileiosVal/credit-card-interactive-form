type stylesType = {
  readonly [key: string]: string;
};

type applyClassesType = (
  styles: stylesType
) => (classesArray: string[]) => string;

export const applyClasses: applyClassesType = styles => classesArray =>
  classesArray.map(className => styles[className]).join(" ");
