export type Todo = {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export type Form = {
  reset: () => void;
  resetValidation: () => void;
  validate: () => boolean;
}