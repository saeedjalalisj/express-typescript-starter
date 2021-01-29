import { Controller, Get, Param } from 'routing-controllers';
import {Service} from "typedi";

@Service()
@Controller('/users')
export class UserController {
    @Get()
    getAll(): string {
        return 'This action returns all users';
    }

    @Get('/:id')
    getOne(@Param('id') id: number): string {
        return 'This action returns user #' + id;
    }
}
