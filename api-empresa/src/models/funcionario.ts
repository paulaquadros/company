import {
  Column,
  DataType,
  ForeignKey,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Departamento from "./departamento";
import { Col } from "sequelize/types/utils";
import Dependente from "./dependente";

@Table({
  timestamps: true,
  paranoid: true,
})
class Funcionario extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idFuncionarios!: number;

  @Column({
    type: DataType.STRING,
  })
  nome!: string;

  @Column({
    type: DataType.STRING,
  })
  endereco!: string;

  @Column({
    type: DataType.STRING,
  })
  telefone!: string;

  @IsEmail
  @Column({
    type: DataType.STRING,
  })
  email!: string;

  @Column({
    type: DataType.INTEGER,
  })
  idade!: number;

  @ForeignKey(() => Departamento)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idDepartamentos!: number;
}

export default Funcionario;
