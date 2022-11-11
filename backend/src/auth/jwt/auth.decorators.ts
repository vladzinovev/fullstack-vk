import { UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "./auth.guard";

export const Auth =()=> UseGuards(AuthenticatedGuard);