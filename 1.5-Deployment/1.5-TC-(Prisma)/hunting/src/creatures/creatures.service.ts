import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CreaturesService {
  constructor(private prisma: PrismaService) { }

  create(createCreatureDto: CreateCreatureDto) {
    return this.prisma.creature.create({ data: createCreatureDto });
  }

  findOne(id: number) {
    return this.prisma.creature.findUnique({ where: { id } });
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.prisma.creature.update({
      where: { id }, data: updateCreatureDto
    });
  }

  remove(id: number) {
    return this.prisma.creature.delete({ where: { id } });
  }

}

