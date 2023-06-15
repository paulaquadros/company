import {
  Column,
  IsUUID,
  DataType,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import Funcionario from "./funcionario";

@Table({
  timestamps: true,
  paranoid: true,
})
class Departamento extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idDepartamentos!: number;

  @Column({
    type: DataType.STRING,
  })
  nome!: string;

  @Column({
    type: DataType.STRING,
  })
  sigla!: string;

  @ForeignKey(() => Funcionario)
  @Column({
    type: DataType.UUID,
  })
  idFuncionarios!: number;
}

export default Departamento;
