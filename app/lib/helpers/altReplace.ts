export const altReplace = (image: string): string =>
  image.match(/[^.png|.svg]/gi)?.join("") as string;
