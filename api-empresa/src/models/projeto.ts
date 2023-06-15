import {
  Column,
  DataType,
  ForeignKey,
  IsDate,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Departamento from "./departamento";

@Table({
  timestamps: true,
  paranoid: true,
})
class Projeto extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idProjetos!: number;

  @Column({
    type: DataType.STRING,
  })
  nome!: string;

  @IsDate
  @Column({
    type: DataType.DATE,
  })
  dataFinalizacao!: Date;

  @ForeignKey(() => Departamento)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idDepartamentos!: number;
}

export default Projeto;
