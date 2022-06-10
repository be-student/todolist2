export const Check = {
  ALL: 0,
  COMPLETED: 1,
  NOTCOMPLETED: 2,
} as const;
export type Check = typeof Check[keyof typeof Check];
