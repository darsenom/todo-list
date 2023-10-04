export class Task {
  id: number;
  title: string;
  note: string;
  status: string;
  difficulty: number = 1;

  constructor(title: string = '', note: string = '', id: number = null, status: string = '', difficulty: number = 1) {
    this.title = title;
    this.note = note;
    this.status = status;
    this.id = id;
    this.difficulty = difficulty;
  }
}