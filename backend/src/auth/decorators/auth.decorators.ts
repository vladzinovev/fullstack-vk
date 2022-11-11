import { UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "../guards/auth.guard";

export const Auth =()=> UseGuards(AuthenticatedGuard);