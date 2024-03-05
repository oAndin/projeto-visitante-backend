-- CreateTable
CREATE TABLE `visitante` (
    `visitante_id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitante_nome` VARCHAR(100) NOT NULL,
    `visitante_genero` VARCHAR(20) NOT NULL,
    `visitante_profissao` VARCHAR(50) NOT NULL,
    `visitante_cpf` VARCHAR(20) NOT NULL,
    `visitante_idade` INTEGER NOT NULL,
    `visitante_cidade` VARCHAR(20) NOT NULL,
    `visitante_bairro` VARCHAR(20) NOT NULL,
    `visitante_data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`visitante_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `usuario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_email` VARCHAR(100) NOT NULL,
    `usuario_senha` VARCHAR(255) NOT NULL,
    `usuario_token` VARCHAR(255) NOT NULL,
    `usuario_data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuario_usuario_email_key`(`usuario_email`),
    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
