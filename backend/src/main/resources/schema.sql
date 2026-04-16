DROP TABLE IF EXISTS contact_inquiries;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS scenes;
DROP TABLE IF EXISTS admin_users;

CREATE TABLE scenes (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  slug VARCHAR(80) NOT NULL UNIQUE,
  description VARCHAR(255),
  hero_copy VARCHAR(120),
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(160) NOT NULL UNIQUE,
  price INT NOT NULL DEFAULT 0,
  description TEXT NOT NULL,
  image_path VARCHAR(255) NOT NULL,
  image_alt VARCHAR(150),
  scene_id BIGINT NOT NULL,
  stock_status VARCHAR(20) NOT NULL DEFAULT 'IN_STOCK',
  is_published BOOLEAN NOT NULL DEFAULT TRUE,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_products_scene FOREIGN KEY (scene_id) REFERENCES scenes(id)
);

CREATE TABLE admin_users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(80) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'ADMIN',
  enabled BOOLEAN NOT NULL DEFAULT TRUE,
  last_login_at TIMESTAMP NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_inquiries (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30),
  inquiry_type VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'UNREAD',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_scenes_sort_order ON scenes(sort_order);
CREATE INDEX idx_products_scene_publish ON products(scene_id, is_published, display_order);
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_featured ON products(is_featured, is_published, display_order);
CREATE INDEX idx_contact_inquiries_status_created ON contact_inquiries(status, created_at);

