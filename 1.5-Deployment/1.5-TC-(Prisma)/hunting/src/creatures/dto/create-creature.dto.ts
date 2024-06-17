import { ApiProperty } from "@nestjs/swagger";

export class CreateCreatureDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    lastSee: string;

    @ApiProperty({ required: false, default: false })
    extinct?: boolean = false;
}
