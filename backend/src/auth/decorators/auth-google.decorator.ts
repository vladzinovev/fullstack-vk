import { UseGuards } from "@nestjs/common";
import {AuthGuard} from '@nestjs/passport';
import { GoogleAuthGuard } from "../guards/google-auth.guard";

export const AuthGoogle =()=> UseGuards(GoogleAuthGuard);