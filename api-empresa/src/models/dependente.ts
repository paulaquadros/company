import {
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Funcionario from "./funcionario";

@Table({
  timestamps: true,
  paranoid: true,
})
class Dependente extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idDependentes!: number;

  @Column({
    type: DataType.STRING,
  })
  nome!: string;

  @Column({
    type: DataType.INTEGER,
  })
  idade!: number;

  @ForeignKey(() => Funcionario)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idFuncionarios!: number;
}

export default Dependente;
