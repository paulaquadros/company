import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  Unique,
  ForeignKey,
  HasOne,
  Length,
  HasMany,
} from "sequelize-typescript";
import { Projetos } from "./projeto";
import { Funcionarios } from "./funcionario";

@Table({
  timestamps: true,
})
export class Departamentos extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
  })
  id!: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  sigla!: string;

  @HasMany(() => Funcionarios)
  departamentos!: Funcionarios[];

  @HasMany(() => Projetos)
  projetos!: Projetos[];
}
