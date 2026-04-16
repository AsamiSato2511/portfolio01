INSERT INTO scenes (id, name, slug, description, hero_copy, sort_order, is_active, created_at, updated_at) VALUES
(1, 'Birthday', 'birthday', '誕生日に贈る華やかなフラワーギフト', '大切な一日に、気持ちが伝わる花を。', 1, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Thanks', 'thanks', '感謝の気持ちをやさしく届ける花束', '言葉にしづらい感謝を、花にのせて。', 2, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Celebration', 'celebration', '門出や祝福にふさわしい上品なアレンジ', '晴れの日を彩る、凛とした一束。', 3, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Seasonal Gift', 'seasonal', '季節感を楽しめる限定感のあるブーケ', '季節の空気ごと贈るギフト。', 4, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO admin_users (id, email, password_hash, name, role, enabled, created_at, updated_at) VALUES
(1, 'admin@bloom-letter.jp', '$2a$10$dItIJP60Gp.8l/AS6O3Gb.ehOy21Gdrk9F1skqsgABUq9BcAWpa/a', 'BloomLetter管理者', 'ADMIN', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO products (id, name, slug, price, description, image_path, image_alt, scene_id, stock_status, is_published, is_featured, display_order, created_at, updated_at) VALUES
(1, 'Soft Merci', 'soft-merci', 7400, 'やわらかな色合わせで、やさしい祝福を届けるバースデーの花束。', '/images/Top/scene/Soft Merci.png', 'Soft Merciの商品画像', 1, 'IN_STOCK', TRUE, TRUE, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Baby''s Breath Air', 'babys-breath-air', 7600, 'カスミソウの白をふんわり束ねた、軽やかでやさしい感謝のブーケ。', '/images/Top/scene/Baby''s Breath Air.png', 'Baby''s Breath Airの商品画像', 2, 'IN_STOCK', TRUE, TRUE, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Celebration Lily Rose', 'celebration-lily-rose', 10600, '白いユリと赤いローズを束ねた、華やかで凛とした祝福の花束。', '/images/Top/scene/scene5.png', 'Celebration Lily Roseの商品画像', 3, 'IN_STOCK', TRUE, TRUE, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Wisteria Veil', 'wisteria-veil', 8600, '藤の花を思わせるやわらかな紫で、初夏の空気を映した季節ブーケ。', '/images/Top/scene/Wisteria Veil.png', 'Wisteria Veilの商品画像', 4, 'LOW_STOCK', TRUE, FALSE, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO contact_inquiries (id, name, email, phone, inquiry_type, message, status, created_at, updated_at) VALUES
(1, '山田 花子', 'hanako@example.com', '09012345678', '商品について', '誕生日向けで優しい雰囲気の花束を探しています。おすすめを相談したいです。', 'UNREAD', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
