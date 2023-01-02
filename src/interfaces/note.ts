export interface INote {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INoteCreate extends Pick<INote, "title" | "body"> {}

export interface INoteUpdate extends Partial<INote> {}
