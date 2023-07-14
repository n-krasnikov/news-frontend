export interface IPostCard {
  id: number;
  title: string;
  text: string;
  tags: string;
  image?: string;
  author: string;
  authorId: number;
  isLoggedIn: boolean;
}