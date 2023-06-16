CREATE DATABASE departments;

USE departments;

INSERT INTO Departamentos (idDepartamentos, nome, sigla, idFuncionarios, createdAt, updatedAt, deletedAt)
VALUES (1, 'Departamento A', 'DA', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
       (2, 'Departamento B', 'DB', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
       (3, 'Departamento C', 'DC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);

INSERT INTO Funcionarios (idFuncionarios, nome, endereco, telefone, email, idade, idDepartamentos, createdAt, updatedAt, deletedAt)
VALUES
    (1, 'Ana Oliveira', 'Rua D, 789', '555444333', 'ana@example.com', 28, 3, NOW(), NOW(), NULL),
    (2, 'Carlos Mendes', 'Rua E, 456', '999888777', 'carlos@example.com', 32, 2, NOW(), NOW(), NULL),
    (3, 'Sandra Pereira', 'Rua F, 123', '777666555', 'sandra@example.com', 40, 1, NOW(), NOW(), NULL),
    (4, 'Ricardo Souza', 'Rua G, 789', '222333444', 'ricardo@example.com', 27, 3, NOW(), NOW(), NULL),
    (5, 'Juliana Lima', 'Rua H, 456', '666555444', 'juliana@example.com', 33, 2, NOW(), NOW(), NULL)
    ;

INSERT INTO Dependentes (idDependentes, nome, idade, idFuncionarios, createdAt, updatedAt, deletedAt)
VALUES
    (1, 'Pedro Silva', 10, 1, NOW(), NOW(), NULL),
    (2, 'Ana Santos', 8, 1, NOW(), NOW(), NULL),
    (3, 'Mariana Almeida', 6, 3, NOW(), NOW(), NULL)
    ;
