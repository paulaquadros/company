import {
  Column,
  DataType,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

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
}

export default Funcionario;
