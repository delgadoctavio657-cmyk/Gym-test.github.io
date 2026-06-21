CREATE DATABASE IF NOT EXISTS powerfit_gym
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_spanish_ci;

USE powerfit_gym;

CREATE TABLE IF NOT EXISTS membresias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(30) NOT NULL UNIQUE,
  nombre VARCHAR(60) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

INSERT INTO membresias (codigo, nombre, precio, descripcion) VALUES
  ('basica', 'Basica', 5.00, 'Acceso al gimnasio en horario regular.'),
  ('estandar', 'Estandar', 25.00, 'Acceso completo mas clases grupales.'),
  ('premium', 'Premium', 40.00, 'Acceso ilimitado, clases y asesoria nutricional.'),
  ('vip', 'VIP', 60.00, 'Entrenador personal y acceso prioritario.')
ON DUPLICATE KEY UPDATE
  nombre = VALUES(nombre),
  precio = VALUES(precio),
  descripcion = VALUES(descripcion);

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) DEFAULT NULL,
  membresia_id INT NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_usuarios_membresias
    FOREIGN KEY (membresia_id) REFERENCES membresias(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

ALTER TABLE usuarios ADD COLUMN IF NOT EXISTS password VARCHAR(255) DEFAULT NULL AFTER correo;
ALTER TABLE usuarios MODIFY correo VARCHAR(255) NOT NULL;
