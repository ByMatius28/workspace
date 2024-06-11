/* export class CreateComboDto {
id:        Int;
name:          String;
description:   String;
items:         String;
createdAt :    DateTime; 
updatedAt:     DateTime ;
} */

import { ApiProperty } from "@nestjs/swagger";
export class CreateComboDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    items: string;
    @ApiProperty()
    price: number
}
