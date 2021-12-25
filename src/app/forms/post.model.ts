export interface Post {
  author: string,
  profile_pic?: string,
  post_img?: string,
  post_description?: string,
  title?: string,
  id?: string
}

export interface PostsGetRequestResponseObject {
posts: Post[],
status?: number,
message?: string
}

export interface PostPostRequestObject {
  post: Post,
  message?:string
}

export interface PostPostRequestResponseObject {
  status?: number
  message?:string
}


export interface PostEmissionObject {
  post: Post
}


