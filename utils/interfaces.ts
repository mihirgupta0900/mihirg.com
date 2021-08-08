export interface Meta {
  title: string;
  date: string;
}

export interface FileMeta extends Omit<Meta, "date"> {
  date: Date;
  slug: string;
}

export interface Post {
  frontmatter: FrontMatter;
  content: string;
  filePath: string;
}
export interface FrontMatter {
  title?: string;
  date?: string;
}
