import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { InjectModel } from "nestjs-typegoose";
import { UserModel } from "src/user/user.model";
import { ModelType } from "typegoose";

export type Done = (err: Error, user: UserModel) => void;

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @InjectModel(UserModel) private readonly UserModel:ModelType<UserModel>
  ) {
    super();
  }

  serializeUser(user: UserModel, done: Done) {
    done(null, user);
  }

  async deserializeUser(user: UserModel, done: Done) {
    const userDb = await this.UserModel.findOne({email: user.email});
    return userDb ? done(null, userDb) : done(null, null);
  }
}