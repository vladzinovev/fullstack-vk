type TypeEmail={
    value:string
    verified:boolean
}

type TypePhoto={
    value:string
}

export interface IGoogleProfile{
  id: string;
  displayName: string;
  name: {
    familyName:string
    givenName:string
  };
  emails: TypeEmail[];
  photos: TypePhoto[];
}

export interface IResGoogleUser{
    email:string
    name:string
    avatarPath:string
} 