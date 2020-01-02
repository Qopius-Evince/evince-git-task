//Model to get the data from the github API
export interface RepoDetails {
    sha?:string,
    commit?:CommitObject,
}
export class CommitObject {
    committer?:CommiterObject;
    message?:string;
}

export class CommiterObject {
    name?:string;
    date?:string;
}
