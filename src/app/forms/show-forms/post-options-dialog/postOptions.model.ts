export enum PostReturnAction {
  Edit,
  Delete,
  None
}

export interface PostOptionsDialogInitData {
  post_id:string
}

export interface PostOptionsDialogReturnData {
  action: PostReturnAction
}
