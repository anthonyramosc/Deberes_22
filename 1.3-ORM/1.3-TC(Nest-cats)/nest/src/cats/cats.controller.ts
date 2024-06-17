import { Controller, Get, Param, HttpCode, Delete } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats'
    }
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
        return `This will delete a cat with the id ${id}`;
    }
}