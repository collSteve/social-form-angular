export interface Post {
  author: string,
  profile_pic?: string,
  post_img?: string,
  post_description?: string,
  title?: string,
  id: string|null
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
  addedPostSuccessful: boolean
  status?: number,
  message?:string,
  post_id?: string
}

export interface PostDeleteRequestResponseObject {

}

export interface PostGetRequestResponseObject {
  post?: Post,
  fetchSucceed: boolean,
  status: number,
  message?: string
}

export interface PostPutRequestObject {
  post: Post
}

export interface PostPutRequestResponseObject {
  post?: Post,
  putSucceed: boolean,
  status: number,
  message?: string
}

export interface PostEmissionObject {
  post: Post
}


