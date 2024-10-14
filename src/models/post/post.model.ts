export class Post {
  id: number;
  title: string;
  image: string;
  description: string;

  constructor(
    id: number = 0,
    title: string = "",
    image: string = "",
    description: string = ""
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
  }
}
