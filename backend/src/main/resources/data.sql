INSERT INTO scenes (id, name, slug, description, hero_copy, sort_order, is_active, created_at, updated_at) VALUES
(1, 'Birthday', 'birthday', '誕生日に贈る華やかなフラワーギフト', '大切な一日に、気持ちが伝わる花を。', 1, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Thanks', 'thanks', '感謝の気持ちをやさしく届ける花束', '言葉にしづらい感謝を、花にのせて。', 2, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Celebration', 'celebration', '門出や祝福にふさわしい上品なアレンジ', '晴れの日を彩る、凛とした一束。', 3, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Seasonal Gift', 'seasonal', '季節感を楽しめる限定感のあるブーケ', '季節の空気ごと贈るギフト。', 4, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO admin_users (id, email, password_hash, name, role, enabled, created_at, updated_at) VALUES
(1, 'admin@bloom-letter.jp', '$2a$10$dItIJP60Gp.8l/AS6O3Gb.ehOy21Gdrk9F1skqsgABUq9BcAWpa/a', 'BloomLetter管理者', 'ADMIN', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO products (id, name, slug, price, description, image_path, image_alt, scene_id, stock_status, is_published, is_featured, display_order, created_at, updated_at) VALUES
(1, 'Soft Merci', 'soft-merci', 7400, 'やわらかな色合わせで、やさしい祝福を届けるバースデーの花束。', '/images/Top/scene/Soft Merci.png', 'Soft Merciの商品画像', 1, 'IN_STOCK', TRUE, TRUE, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Blue Hydrangea Air', 'blue-hydrangea-air', 8800, '淡いブルーのあじさいを束ねた、初夏の空気を感じる涼やかな花束。', '/images/Top/scene/2-3.png', 'Blue Hydrangea Airの商品画像', 4, 'IN_STOCK', TRUE, TRUE, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Mimosa Light', 'mimosa-light', 7100, 'ミモザのやさしい黄色が広がる、明るく軽やかな感謝のブーケ。', '/images/Top/scene/2-5.png', 'Mimosa Lightの商品画像', 2, 'IN_STOCK', TRUE, TRUE, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Premium Mix', 'premium-mix', 10900, '門出や成功を祝う、華やかで存在感のあるお祝いのアレンジメント。', '/images/Top/Featured/4.png', 'Premium Mixの商品画像', 3, 'IN_STOCK', TRUE, TRUE, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'Apricot Carnation', 'apricot-carnation', 7400, 'アプリコット色のカーネーションが映える、温かみのある祝福の花束。', '/images/Top/scene/2-8.png', 'Apricot Carnationの商品画像', 3, 'IN_STOCK', TRUE, FALSE, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(6, 'Baby''s Breath Air', 'babys-breath-air', 7600, 'カスミソウの白をふんわり束ねた、軽やかでやさしい感謝のブーケ。', '/images/Top/scene/Baby''s Breath Air.png', 'Baby''s Breath Airの商品画像', 2, 'IN_STOCK', TRUE, FALSE, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(7, 'Birthday Bloom', 'birthday-bloom', 8500, '人気のピンク系の花を束ねた、明るく華やかなバースデーブーケ。', '/images/Top/scene/Birthday Bloom.png', 'Birthday Bloomの商品画像', 1, 'IN_STOCK', TRUE, FALSE, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(8, 'Bloom Letter Pink', 'bloom-letter-pink', 8300, 'やわらかなピンクを束ねた、友人にも贈りやすい軽やかな花束。', '/images/Top/scene/scene1.png', 'Bloom Letter Pinkの商品画像', 1, 'IN_STOCK', TRUE, FALSE, 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(9, 'Celebration Lily Rose', 'celebration-lily-rose', 10600, '白いユリと赤いローズを束ねた、華やかで凛とした祝福の花束。', '/images/Top/scene/scene4.png', 'Celebration Lily Roseの商品画像', 3, 'IN_STOCK', TRUE, FALSE, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(10, 'Coral Gerbera Day', 'coral-gerbera-day', 7900, 'コーラルオレンジのガーベラが映える、明るく華やかなバースデーブーケ。', '/images/Top/scene/2-1.png', 'Coral Gerbera Dayの商品画像', 1, 'IN_STOCK', TRUE, FALSE, 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(11, 'Elegant Rose', 'elegant-rose', 9200, 'ローズを中心にまとめた、上質で落ち着いた存在感のある花束。', '/images/Top/Featured/2.png', 'Elegant Roseの商品画像', 3, 'IN_STOCK', TRUE, FALSE, 11, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(12, 'Fresh Garden', 'fresh-garden', 6500, 'グリーンとホワイトを束ねた、自然なやさしさが伝わる花束。', '/images/Top/Featured/3.png', 'Fresh Gardenの商品画像', 2, 'IN_STOCK', TRUE, FALSE, 12, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(13, 'Lavender Ranunculus', 'lavender-ranunculus', 8400, 'ラナンキュラスを主役にした、やわらかな華やかさを楽しめる花束。', '/images/Top/scene/2-7.png', 'Lavender Ranunculusの商品画像', 1, 'IN_STOCK', TRUE, FALSE, 13, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(14, 'Lily Bell White', 'lily-bell-white', 8900, 'スズランの清らかな白を生かした、上品で可憐なお祝いの花束。', '/images/Top/scene/Lily Bell White.png', 'Lily Bell Whiteの商品画像', 3, 'IN_STOCK', TRUE, FALSE, 14, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(15, 'Lilac Moment', 'lilac-moment', 9600, 'ライラックカラーの花々を束ねた、軽やかで華やかな祝福のブーケ。', '/images/Top/scene/scene5.png', 'Lilac Momentの商品画像', 3, 'IN_STOCK', TRUE, FALSE, 15, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(16, 'Pink Tulip Glow', 'pink-tulip-glow', 8100, 'ピンクのチューリップを束ねた、春らしい軽やかさのある花束。', '/images/Top/scene/2-4.png', 'Pink Tulip Glowの商品画像', 1, 'IN_STOCK', TRUE, FALSE, 16, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(17, 'Quiet Ivory', 'quiet-ivory', 8900, 'アイボリーの花を束ねた、静かな季節感を楽しめるやわらかなブーケ。', '/images/Top/scene/scene2.png', 'Quiet Ivoryの商品画像', 4, 'IN_STOCK', TRUE, FALSE, 17, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(18, 'Silver Lisianthus', 'silver-lisianthus', 7300, '白いトルコキキョウを束ねた、清潔感のあるやさしい感謝の花束。', '/images/Top/scene/2-2.png', 'Silver Lisianthusの商品画像', 2, 'IN_STOCK', TRUE, FALSE, 18, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(19, 'Spring Bouquet', 'spring-bouquet', 7800, '明るく軽やかな色合いで、誕生日をやさしく彩る華やかな花束。', '/images/Top/Featured/1.png', 'Spring Bouquetの商品画像', 1, 'IN_STOCK', TRUE, FALSE, 19, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(20, 'Spring Tulip Meadow', 'spring-tulip-meadow', 8200, 'チューリップと小花を合わせた、春らしい軽やかさのある季節ブーケ。', '/images/Top/scene/scene6.png', 'Spring Tulip Meadowの商品画像', 4, 'IN_STOCK', TRUE, FALSE, 20, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(21, 'Sunflower Ray', 'sunflower-ray', 8700, 'ひまわりの明るい黄色が広がる、夏の光を束ねた季節の花束。', '/images/Top/scene/Sunflower Ray.png', 'Sunflower Rayの商品画像', 4, 'IN_STOCK', TRUE, FALSE, 21, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(22, 'Thanks Harmony', 'thanks-harmony', 7700, 'オレンジとベージュを重ねた、ぬくもりのある感謝のブーケ。', '/images/Top/scene/scene3.png', 'Thanks Harmonyの商品画像', 2, 'IN_STOCK', TRUE, FALSE, 22, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(23, 'Wisteria Veil', 'wisteria-veil', 8600, '藤の花を思わせるやわらかな紫で、初夏の空気を映した季節ブーケ。', '/images/Top/scene/Wisteria Veil.png', 'Wisteria Veilの商品画像', 4, 'LOW_STOCK', TRUE, FALSE, 23, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(24, 'Wine Anemone', 'wine-anemone', 9200, '深いワインレッドのアネモネが映える、冬の空気に似合う季節ブーケ。', '/images/Top/scene/2-6.png', 'Wine Anemoneの商品画像', 4, 'IN_STOCK', TRUE, FALSE, 24, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO contact_inquiries (id, name, email, phone, inquiry_type, message, status, created_at, updated_at) VALUES
(1, '山田 花子', 'hanako@example.com', '09012345678', '商品について', '誕生日向けで優しい雰囲気の花束を探しています。おすすめを相談したいです。', 'UNREAD', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
