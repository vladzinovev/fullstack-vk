import { UseGuards } from "@nestjs/common";
import { GoogleAuthGuard } from "./google-auth.guard";

export const AuthGoogle =()=> UseGuards(GoogleAuthGuard);