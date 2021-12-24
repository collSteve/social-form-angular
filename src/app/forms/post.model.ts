export interface Post {
  author: string,
  profile_pic?: string,
  post_img?: string,
  post_description?: string,
  title?: string
}

export interface PostEmissionObject {
  post: Post
}
