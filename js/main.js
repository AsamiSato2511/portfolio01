// Project archive navigation and small UI helpers
function generateNavigation() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const navLevel = sidebar.dataset.navLevel || 'root';

  let rootPath = './';
  let docsPath = './docs/';
  let designPath = './design/';
  let promptsPath = './prompts/';

  if (navLevel === 'docs') {
    rootPath = '../';
    docsPath = './';
    designPath = '../design/';
    promptsPath = '../prompts/';
  } else if (navLevel === 'design') {
    rootPath = '../';
    docsPath = '../docs/';
    designPath = './';
    promptsPath = '../prompts/';
  } else if (navLevel === 'prompts') {
    rootPath = '../';
    docsPath = '../docs/';
    designPath = '../design/';
    promptsPath = './';
  }

  const navHTML = `
    <div class="sidebar-header">
      <div class="logo">PROJECT ARCHIVE</div>
      <div class="project-name">Bloom Letter<br>Portfolio Archive</div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-group">
        <div class="nav-group-title">Project</div>
        <a href="${rootPath}index.html"><span class="material-symbols-outlined icon-sm">home</span> トップページ</a>
        <a href="${rootPath}about.html"><span class="material-symbols-outlined icon-sm">person</span> プロフィール</a>
        <a href="${rootPath}works.html"><span class="material-symbols-outlined icon-sm">work</span> 制作物一覧</a>
        <a href="${rootPath}process.html"><span class="material-symbols-outlined icon-sm">assignment</span> 制作プロセス</a>
        <a href="${rootPath}skills.html"><span class="material-symbols-outlined icon-sm">bolt</span> スキルシート</a>
        <a href="${rootPath}contact.html"><span class="material-symbols-outlined icon-sm">mail</span> お問い合わせ</a>
      </div>
      <div class="nav-group">
        <div class="nav-group-title">Documents</div>
        <a href="${docsPath}01-proposal.html"><span class="nav-number">01</span> 企画書</a>
        <a href="${docsPath}02-market-research.html"><span class="nav-number">02</span> マーケットリサーチ</a>
        <a href="${docsPath}03-persona.html"><span class="nav-number">03</span> ペルソナシート</a>
        <a href="${docsPath}04-sitemap.html"><span class="nav-number">04</span> サイトマップ</a>
        <a href="${docsPath}05-wireframe.html"><span class="nav-number">05</span> ワイヤーフレーム</a>
        <a href="${docsPath}06-design-guide.html"><span class="nav-number">06</span> デザインガイドライン</a>
        <a href="${docsPath}10-retrospective.html"><span class="nav-number">10</span> 振り返り・改善案</a>
      </div>
      <div class="nav-group">
        <div class="nav-group-title">Engineering</div>
        <a href="${docsPath}07-specification.html"><span class="nav-number">07</span> 仕様書</a>
        <a href="${docsPath}08-db-design.html"><span class="nav-number">08</span> DB設計書</a>
        <a href="${docsPath}09-test-report.html"><span class="nav-number">09</span> テスト結果書</a>
        <a href="${designPath}system-flow.html"><span class="material-symbols-outlined icon-sm">account_tree</span> システムフロー図</a>
        <a href="${designPath}class-diagram.html"><span class="material-symbols-outlined icon-sm">lan</span> クラス図</a>
        <a href="${designPath}method-list.html"><span class="material-symbols-outlined icon-sm">list_alt</span> メソッド一覧</a>
        <a href="${designPath}logic-explanation.html"><span class="material-symbols-outlined icon-sm">search</span> ロジック解説</a>
      </div>
      <div class="nav-group">
        <div class="nav-group-title">Prompts</div>
        <a href="${promptsPath}prompt-step.html"><span class="material-symbols-outlined icon-sm">format_list_numbered</span> ステップ別プロンプト</a>
        <a href="${promptsPath}prompt-function.html"><span class="material-symbols-outlined icon-sm">extension</span> 機能追加プロンプト</a>
        <a href="${promptsPath}prompt-log.html"><span class="material-symbols-outlined icon-sm">history</span> 開発ログ</a>
      </div>
    </nav>
    <div class="sidebar-footer">
      &copy; Bloom Letter Archive 2026
    </div>
  `;

  sidebar.innerHTML = navHTML;
}

const PRODUCT_CATALOG = [
  {
    id: 'apricot-carnation',
    name: 'Apricot Carnation',
    scene: 'celebration',
    sceneLabel: 'Celebration',
    price: 7400,
    description: 'アプリコット色のカーネーションが映える、温かみのある祝福の花束。',
    occasions: 'お祝い / 記念日 / 新しい門出',
    flowers: 'カーネーション、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-8.png',
    imagePosition: 'center 44%'
  },
  {
    id: 'babys-breath-air',
    name: "Baby's Breath Air",
    scene: 'thanks',
    sceneLabel: 'Thanks',
    price: 7600,
    description: 'カスミソウの白をふんわり束ねた、軽やかでやさしい感謝のブーケ。',
    occasions: '感謝 / お礼 / さりげない贈り物',
    flowers: 'カスミソウ',
    shipping: '注文から3営業日以内に発送',
    image: "images/Top/scene/Baby's Breath Air.png",
    imagePosition: 'center 40%'
  },
  {
    id: 'blue-hydrangea-air',
    name: 'Blue Hydrangea Air',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 8800,
    description: '淡いブルーのあじさいを束ねた、初夏の空気を感じる涼やかな花束。',
    occasions: '季節のギフト / 初夏の贈り物 / 涼やかな彩り',
    flowers: 'あじさい、ホワイトラッピング',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-3.png',
    imagePosition: 'center 30%',
    relatedImageSize: '112%',
    relatedImagePosition: 'center 38%'
  },
  {
    id: 'birthday-bloom',
    name: 'Birthday Bloom',
    scene: 'birthday',
    sceneLabel: 'Birthday',
    price: 8500,
    description: '人気のピンク系の花を束ねた、明るく華やかなバースデーブーケ。',
    occasions: '誕生日 / お祝い / 華やかなギフト',
    flowers: 'ピンクローズ、チューリップ、小花',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/Birthday Bloom.png',
    imagePosition: 'center 42%'
  },
  {
    id: 'bloom-letter-pink',
    name: 'Bloom Letter Pink',
    scene: 'birthday',
    sceneLabel: 'Birthday',
    price: 8300,
    description: 'やわらかなピンクを束ねた、友人にも贈りやすい軽やかな花束。',
    occasions: '誕生日 / 友人へのギフト / やさしいお祝い',
    flowers: 'チューリップ、ローズ、スイートピー',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/scene1.png',
    imagePosition: 'center 40%'
  },
  {
    id: 'celebration-lily-rose',
    name: 'Celebration Lily Rose',
    scene: 'celebration',
    sceneLabel: 'Celebration',
    price: 10600,
    description: '白いユリと赤いローズを束ねた、華やかで凛とした祝福の花束。',
    occasions: 'お祝い / 記念日 / 節目のギフト',
    flowers: 'ユリ、ローズ、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/scene4.png',
    imagePosition: 'center 40%',
    relatedImageSize: '118%',
    relatedImagePosition: 'center 42%'
  },
  {
    id: 'coral-gerbera-day',
    name: 'Coral Gerbera Day',
    scene: 'birthday',
    sceneLabel: 'Birthday',
    price: 7900,
    description: 'コーラルオレンジのガーベラが映える、明るく華やかなバースデーブーケ。',
    occasions: '誕生日 / 元気を届ける贈り物 / 明るいお祝い',
    flowers: 'ガーベラ、小花、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-1.png',
    imagePosition: 'center 44%'
  },
  {
    id: 'elegant-rose',
    name: 'Elegant Rose',
    scene: 'celebration',
    sceneLabel: 'Celebration',
    price: 9200,
    description: 'ローズを中心にまとめた、上質で落ち着いた存在感のある花束。',
    occasions: '記念日 / お祝い / 上品なギフト',
    flowers: 'ローズ、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/Featured/2.png',
    imagePosition: 'center 42%',
    relatedImageSize: '118%',
    relatedImagePosition: 'center 44%'
  },
  {
    id: 'fresh-garden',
    name: 'Fresh Garden',
    scene: 'thanks',
    sceneLabel: 'Thanks',
    price: 6500,
    description: 'グリーンとホワイトを束ねた、自然なやさしさが伝わる花束。',
    occasions: '感謝 / お礼 / ナチュラルな贈り物',
    flowers: 'ホワイトローズ、グリーン、ユーカリ',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/Featured/3.png',
    imagePosition: 'center 42%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 44%'
  },
  {
    id: 'lavender-ranunculus',
    name: 'Lavender Ranunculus',
    scene: 'birthday',
    sceneLabel: 'Birthday',
    price: 8400,
    description: 'ラナンキュラスを主役にした、やわらかな華やかさを楽しめる花束。',
    occasions: '誕生日 / 春のギフト / 上品なお祝い',
    flowers: 'ラナンキュラス、ラッピングリボン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-7.png',
    imagePosition: 'center 44%'
  },
  {
    id: 'lily-bell-white',
    name: 'Lily Bell White',
    scene: 'celebration',
    sceneLabel: 'Celebration',
    price: 8900,
    description: 'スズランの清らかな白を生かした、上品で可憐なお祝いの花束。',
    occasions: 'お祝い / 清楚な贈り物 / 春の節目',
    flowers: 'スズラン、ホワイトブーケ',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/Lily Bell White.png',
    imagePosition: 'center 40%'
  },
  {
    id: 'lilac-moment',
    name: 'Lilac Moment',
    scene: 'celebration',
    sceneLabel: 'Celebration',
    price: 9600,
    description: 'ライラックカラーの花々を束ねた、軽やかで華やかな祝福のブーケ。',
    occasions: 'お祝い / 記念日 / 華やかなシーン',
    flowers: 'パンジー、ライラックトーンの小花',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/scene5.png',
    imagePosition: 'center 42%',
    relatedImageSize: '114%',
    relatedImagePosition: 'center 40%'
  },
  {
    id: 'mimosa-light',
    name: 'Mimosa Light',
    scene: 'thanks',
    sceneLabel: 'Thanks',
    price: 7100,
    description: 'ミモザのやさしい黄色が広がる、明るく軽やかな感謝のブーケ。',
    occasions: '感謝 / 春のギフト / 明るいお礼',
    flowers: 'ミモザ、レースラッピング',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-5.png',
    imagePosition: 'center 36%',
    relatedImageSize: '112%',
    relatedImagePosition: 'center 34%'
  },
  {
    id: 'pink-tulip-glow',
    name: 'Pink Tulip Glow',
    scene: 'birthday',
    sceneLabel: 'Birthday',
    price: 8100,
    description: 'ピンクのチューリップを束ねた、春らしい軽やかさのある花束。',
    occasions: '誕生日 / 春のギフト / やさしい彩り',
    flowers: 'チューリップ、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-4.png',
    imagePosition: 'center 42%'
  },
  {
    id: 'premium-mix',
    name: 'Premium Mix',
    scene: 'celebration',
    sceneLabel: 'Celebration',
    price: 10900,
    description: '門出や成功を祝う、華やかで存在感のあるお祝いのアレンジメント。',
    occasions: 'お祝い / 華やかな節目 / 特別な日の贈り物',
    flowers: 'バイオレットトーンの花々',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/Featured/4.png',
    imagePosition: 'center 42%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 42%'
  },
  {
    id: 'quiet-ivory',
    name: 'Quiet Ivory',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 8900,
    description: 'アイボリーの花を束ねた、静かな季節感を楽しめるやわらかなブーケ。',
    occasions: '季節のギフト / 穏やかな贈り物 / ナチュラルトーン',
    flowers: 'アイボリーカラーの花々',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/scene2.png',
    imagePosition: 'center 42%',
    relatedImageSize: '118%',
    relatedImagePosition: 'center 44%'
  },
  {
    id: 'silver-lisianthus',
    name: 'Silver Lisianthus',
    scene: 'thanks',
    sceneLabel: 'Thanks',
    price: 7300,
    description: '白いトルコキキョウを束ねた、清潔感のあるやさしい感謝の花束。',
    occasions: '感謝 / お礼 / 清潔感のあるギフト',
    flowers: 'トルコキキョウ、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-2.png',
    imagePosition: 'center 44%'
  },
  {
    id: 'soft-merci',
    name: 'Soft Merci',
    scene: 'birthday',
    sceneLabel: 'Birthday',
    price: 7400,
    description: 'やわらかな色合わせで、やさしい祝福を届けるバースデーの花束。',
    occasions: '誕生日 / やさしいお祝い / 友人へのギフト',
    flowers: 'ベージュローズ、ガーベラ、小花',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/Soft Merci.png',
    imagePosition: 'center 34%'
  },
  {
    id: 'spring-bouquet',
    name: 'Spring Bouquet',
    scene: 'birthday',
    sceneLabel: 'Birthday',
    price: 7800,
    description: '明るく軽やかな色合いで、誕生日をやさしく彩る華やかな花束。',
    occasions: '誕生日 / 感謝 / 季節のギフト',
    flowers: 'ローズ、ラナンキュラス、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/Featured/1.png',
    imagePosition: 'center 42%',
    relatedImageSize: '118%',
    relatedImagePosition: 'center 44%'
  },
  {
    id: 'spring-tulip-meadow',
    name: 'Spring Tulip Meadow',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 8200,
    description: 'チューリップと小花を合わせた、春らしい軽やかさのある季節ブーケ。',
    occasions: '季節のギフト / 春の贈り物 / 軽やかな彩り',
    flowers: 'チューリップ、小花、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/scene6.png',
    imagePosition: 'center 42%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 42%'
  },
  {
    id: 'sunflower-ray',
    name: 'Sunflower Ray',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 8700,
    description: 'ひまわりの明るい黄色が広がる、夏の光を束ねた季節の花束。',
    occasions: '季節のギフト / 夏の贈り物 / 明るい気分転換',
    flowers: 'ひまわり、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/Sunflower Ray.png',
    imagePosition: 'center 40%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 40%'
  },
  {
    id: 'thanks-harmony',
    name: 'Thanks Harmony',
    scene: 'thanks',
    sceneLabel: 'Thanks',
    price: 7700,
    description: 'オレンジとベージュを重ねた、ぬくもりのある感謝のブーケ。',
    occasions: '感謝 / お礼 / あたたかな贈り物',
    flowers: 'オレンジローズ、ベージュトーンの花々',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/scene3.png',
    imagePosition: 'center 42%'
  },
  {
    id: 'wisteria-veil',
    name: 'Wisteria Veil',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 8600,
    description: '藤の花を思わせるやわらかな紫で、初夏の空気を映した季節ブーケ。',
    occasions: '季節のギフト / 初夏の贈り物 / やわらかな彩り',
    flowers: '藤色の花々、グリーン',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/Wisteria Veil.png',
    imagePosition: 'center 40%',
    relatedImageSize: '114%',
    relatedImagePosition: 'center 38%'
  },
  {
    id: 'wine-anemone',
    name: 'Wine Anemone',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 9200,
    description: '深いワインレッドのアネモネが映える、冬の空気に似合う季節ブーケ。',
    occasions: '季節のギフト / 冬の贈り物 / 深みのある彩り',
    flowers: 'アネモネ、ダークトーンの花々',
    shipping: '注文から3営業日以内に発送',
    image: 'images/Top/scene/2-6.png',
    imagePosition: 'center 42%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 42%'
  }
];

const PRODUCT_BY_ID = new Map(PRODUCT_CATALOG.map(product => [product.id, product]));
const PRODUCT_BY_NAME = new Map(PRODUCT_CATALOG.map(product => [product.name, product]));
const HOME_FEATURED_FALLBACK_IDS = ['soft-merci', 'blue-hydrangea-air', 'mimosa-light', 'premium-mix'];
const PUBLIC_API_BASE_URL =
  window.location.hostname === 'localhost' && window.location.port === '8080'
    ? ''
    : 'http://localhost:8080';

let cachedPublicProductsPromise = null;

function formatYenPrice(value) {
  return `¥${Number(value).toLocaleString('ja-JP')}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizePublicAssetPath(path) {
  if (!path) return 'images/Top/scene/scene1.png';
  if (path.startsWith('/')) return `.${path}`;
  return path;
}

function getSceneLabel(sceneSlug, sceneName) {
  if (sceneName) return sceneName;
  if (sceneSlug === 'birthday') return 'Birthday';
  if (sceneSlug === 'thanks') return 'Thanks';
  if (sceneSlug === 'celebration') return 'Celebration';
  return 'Seasonal Gift';
}

function getCatalogProductByIdentifier(productId) {
  return PRODUCT_BY_ID.get(productId) || PRODUCT_BY_NAME.get(productId) || null;
}

function findCatalogProductMatch(product) {
  if (!product) return null;

  return (
    PRODUCT_BY_ID.get(String(product.slug || '')) ||
    PRODUCT_BY_ID.get(String(product.id || '')) ||
    PRODUCT_BY_NAME.get(product.name) ||
    null
  );
}

function normalizePublicProduct(product) {
  if (!product) return null;

  const catalogProduct = findCatalogProductMatch(product);
  const sceneLabel = getSceneLabel(product.sceneSlug, product.sceneName);

  return {
    id: String(product.id),
    numericId: product.id,
    name: product.name,
    slug: product.slug,
    scene: product.sceneSlug,
    sceneLabel,
    price: product.price,
    description: product.description || catalogProduct?.description || `${sceneLabel} に寄り添うフラワーギフトです。`,
    occasions: catalogProduct?.occasions || `${sceneLabel} / フラワーギフト / 想いを届ける贈り物`,
    flowers: catalogProduct?.flowers || '季節の花材をバランスよく束ねたブーケ',
    shipping: catalogProduct?.shipping || '注文から3営業日以内に発送',
    image: catalogProduct?.image || normalizePublicAssetPath(product.imagePath),
    imageAlt: product.imageAlt || `${product.name} の商品画像`,
    imagePosition: catalogProduct?.imagePosition || 'center 42%',
    relatedImageSize: catalogProduct?.relatedImageSize || '122%',
    relatedImagePosition: catalogProduct?.relatedImagePosition || catalogProduct?.imagePosition || 'center 42%'
  };
}

function getProductDetailHref(product) {
  const identifier = product?.numericId ?? product?.id;
  return `product-detail.html?product=${encodeURIComponent(identifier)}`;
}

async function fetchPublicProducts() {
  if (!cachedPublicProductsPromise) {
    cachedPublicProductsPromise = fetch(`${PUBLIC_API_BASE_URL}/api/public/products?size=50&sort=recommended`, {
      headers: { Accept: 'application/json' }
    })
      .then(async response => {
        if (!response.ok) {
          throw new Error('商品一覧の取得に失敗しました。');
        }

        const data = await response.json();
        const apiProducts = Array.isArray(data?.items) ? data.items.map(normalizePublicProduct).filter(Boolean) : [];
        return mergeCatalogProducts(apiProducts);
      })
      .catch(error => {
        cachedPublicProductsPromise = null;
        throw error;
      });
  }

  return cachedPublicProductsPromise;
}

function mergeCatalogProducts(apiProducts) {
  const apiBySlug = new Map();
  const mergedCatalog = [];

  apiProducts.forEach(product => {
    if (product?.slug) {
      apiBySlug.set(product.slug, product);
    }
  });

  PRODUCT_CATALOG.forEach(product => {
    const matched = apiBySlug.get(product.id);
    if (matched) {
      mergedCatalog.push({
        ...product,
        ...matched,
        id: matched.id,
        numericId: matched.numericId,
        slug: matched.slug || product.id,
        image: product.image,
        imagePosition: product.imagePosition || matched.imagePosition,
        relatedImageSize: product.relatedImageSize || matched.relatedImageSize,
        relatedImagePosition: product.relatedImagePosition || matched.relatedImagePosition || product.imagePosition
      });
      apiBySlug.delete(product.id);
    } else {
      mergedCatalog.push(product);
    }
  });

  return mergedCatalog;
}

async function fetchHomeData() {
  const response = await fetch(`${PUBLIC_API_BASE_URL}/api/public/home`, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error('ホーム表示用データの取得に失敗しました。');
  }

  return response.json();
}

async function fetchPublicProductDetail(productId) {
  const response = await fetch(`${PUBLIC_API_BASE_URL}/api/public/products/${encodeURIComponent(productId)}`, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error('商品の詳細取得に失敗しました。');
  }

  const data = await response.json();
  return normalizePublicProduct(data);
}

function getSceneImagePath(sceneSlug) {
  if (sceneSlug === 'birthday') return 'images/Top/scene/scene1.png';
  if (sceneSlug === 'thanks') return 'images/Top/scene/scene3.png';
  if (sceneSlug === 'celebration') return 'images/Top/scene/scene4.png';
  return 'images/Top/scene/scene6.png';
}

function getSceneImageAlt(sceneName) {
  return `${sceneName}向けフラワーギフトのイメージ`;
}

function renderSceneCard(scene) {
  return `
    <a class="scene-card" href="products.html?scene=${encodeURIComponent(scene.slug)}">
      <span class="scene-card__image">
        <img class="scene-card__photo" src="${escapeHtml(getSceneImagePath(scene.slug))}" alt="${escapeHtml(getSceneImageAlt(scene.name))}">
      </span>
      <span class="scene-card__body">
        <strong>${escapeHtml(scene.name)}</strong>
      </span>
    </a>
  `;
}

function getDetailEyebrow(scene) {
  if (scene === 'birthday') return 'Birthday Gift';
  if (scene === 'thanks') return 'Thanks Gift';
  if (scene === 'celebration') return 'Celebration Gift';
  return 'Seasonal Gift';
}

function getRecommendedProducts(currentProduct, limit = 4, productCatalog = PRODUCT_CATALOG) {
  const currentId = String(currentProduct.numericId ?? currentProduct.id);
  const others = productCatalog.filter(product => String(product.numericId ?? product.id) !== currentId);
  const byPriceDistance = (a, b) => {
    const distance = Math.abs(a.price - currentProduct.price) - Math.abs(b.price - currentProduct.price);
    return distance !== 0 ? distance : a.name.localeCompare(b.name, 'en');
  };

  const sameScene = others.filter(product => product.scene === currentProduct.scene).sort(byPriceDistance);
  const fallback = others.filter(product => product.scene !== currentProduct.scene).sort(byPriceDistance);
  return [...sameScene, ...fallback].slice(0, limit);
}

function renderRelatedProductCard(product) {
  return `
    <article class="related-product-card">
      <div class="related-product-card__image" style="background-image: url(&quot;${escapeHtml(product.image)}&quot;); --related-size: ${product.relatedImageSize || '122%'}; --related-position: ${product.relatedImagePosition || product.imagePosition || 'center 42%'};" aria-hidden="true"></div>
      <div class="related-product-card__body">
        <h3>${escapeHtml(product.name)}</h3>
        <strong>${formatYenPrice(product.price)}</strong>
        <a href="${getProductDetailHref(product)}">詳細を見る</a>
      </div>
    </article>
  `;
}

function bindClickableCard(card, href, label) {
  card.dataset.href = href;
  card.classList.add('is-clickable');
  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${label}の商品詳細へ移動`);

  if (card.dataset.clickBound === 'true') return;
  card.dataset.clickBound = 'true';

  card.addEventListener('click', event => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('a, button, input, select, textarea, label')) {
      return;
    }
    window.location.href = href;
  });

  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = href;
    }
  });
}

function initializeProductLinks() {
  document.querySelectorAll('.product-card, .related-product-card').forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const link = card.querySelector('a[href*="product-detail"]');
    if (!title || !link) return;

    const product = PRODUCT_BY_NAME.get(title);
    if (!product) return;

    const href = getProductDetailHref(product);
    link.href = href;
    bindClickableCard(card, href, product.name);
  });
}

async function initializeProductDetailPage() {
  const detailSummary = document.querySelector('.detail-summary--product');
  if (!detailSummary) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product') || 'spring-bouquet';
  let product = getCatalogProductByIdentifier(productId);

  if (!product && /^\d+$/.test(productId)) {
    try {
      product = await fetchPublicProductDetail(productId);
    } catch (error) {
      product = null;
    }
  }

  if (!product) {
    product = PRODUCT_BY_ID.get('spring-bouquet');
  }
  if (!product) return;

  const breadcrumbCurrent = document.querySelector('.breadcrumb li[aria-current="page"]');
  const detailEyebrow = detailSummary.querySelector('.eyebrow');
  const detailTitle = detailSummary.querySelector('h1');
  const detailPrice = detailSummary.querySelector('.detail-summary__price');
  const detailLead = detailSummary.querySelector('.detail-summary__lead');
  const addToCartButton = detailSummary.querySelector('[data-add-to-cart]');
  const messageCardSelect = detailSummary.querySelector('#message-card');
  const infoItems = detailSummary.querySelectorAll('.detail-info--cards > div dd');
  const galleryMain = document.querySelector('.detail-gallery__main');
  const relatedGrid = document.querySelector('.related-products__grid--wide, .related-products__grid');
  const metaDescription = document.querySelector('meta[name="description"]');

  document.title = `${product.name} | Bloom Letter`;
  if (metaDescription) {
    metaDescription.setAttribute('content', `${product.name}の価格や花材、利用シーンを確認できるBloom Letterの商品詳細ページです。`);
  }

  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;
  if (detailEyebrow) detailEyebrow.textContent = getDetailEyebrow(product.scene);
  if (detailTitle) detailTitle.textContent = product.name;
  if (detailPrice) detailPrice.innerHTML = `${formatYenPrice(product.price)} <span>税込</span>`;
  if (detailLead) detailLead.textContent = product.description;

  if (infoItems[0]) infoItems[0].textContent = product.occasions;
  if (infoItems[1]) infoItems[1].textContent = product.flowers;
  if (infoItems[2]) infoItems[2].textContent = product.shipping;

  if (galleryMain) {
    galleryMain.style.backgroundImage = `url("${product.image}")`;
    galleryMain.style.backgroundPosition = product.imagePosition || 'center 42%';
    galleryMain.setAttribute('aria-label', `${product.name}のメイン画像`);
  }

  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      const params = new URLSearchParams({
        product: product.id,
        messageCard: messageCardSelect?.value || '希望しない'
      });
      window.location.href = `cart.html?${params.toString()}`;
    });
  }

  if (relatedGrid) {
    let relatedProducts = getRecommendedProducts(product, 4);

    if (product.numericId) {
      try {
        const publicProducts = await fetchPublicProducts();
        relatedProducts = getRecommendedProducts(product, 4, publicProducts);
      } catch (error) {
        relatedProducts = getRecommendedProducts(product, 4);
      }
    }

    relatedGrid.innerHTML = relatedProducts.map(renderRelatedProductCard).join('');

    relatedGrid.querySelectorAll('.related-product-card').forEach(card => {
      const title = card.querySelector('h3')?.textContent?.trim();
      const productData = relatedProducts.find(item => item.name === title) || (title ? PRODUCT_BY_NAME.get(title) : null);
      const link = card.querySelector('a[href*="product-detail"]');
      if (!productData || !link) return;

      const href = getProductDetailHref(productData);
      link.href = href;
      bindClickableCard(card, href, productData.name);
    });
  }
}

function fitDetailTitleToSingleLine() {
  const detailTitle = document.querySelector('.detail-summary--product h1');
  if (!detailTitle) return;

  detailTitle.style.fontSize = '';
  detailTitle.style.letterSpacing = '';

  const computedStyle = window.getComputedStyle(detailTitle);
  const baseFontSize = parseFloat(computedStyle.fontSize);
  const minFontSize = 30;
  let nextFontSize = baseFontSize;

  while (detailTitle.scrollWidth > detailTitle.clientWidth && nextFontSize > minFontSize) {
    nextFontSize -= 1;
    detailTitle.style.fontSize = `${nextFontSize}px`;
  }

  if (detailTitle.scrollWidth > detailTitle.clientWidth) {
    detailTitle.style.letterSpacing = '0.01em';
  }
}

async function initializeCartPage() {
  const cartPage = document.querySelector('[data-cart-page]');
  if (!cartPage) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product') || 'spring-bouquet';
  const messageCard = params.get('messageCard') || '希望しない';
  let product = getCatalogProductByIdentifier(productId);

  if (!product && /^\d+$/.test(productId)) {
    try {
      product = await fetchPublicProductDetail(productId);
    } catch (error) {
      product = null;
    }
  }

  if (!product) {
    product = PRODUCT_BY_ID.get('spring-bouquet');
  }
  if (!product) return;

  const heroTitle = cartPage.querySelector('.cart-hero h1');
  const heroLead = cartPage.querySelector('.cart-hero p');
  const itemImage = cartPage.querySelector('.cart-item__image');
  const itemScene = cartPage.querySelector('.cart-item__scene');
  const itemTitle = cartPage.querySelector('.cart-item__title');
  const itemLead = cartPage.querySelector('.cart-item__lead');
  const itemPrice = cartPage.querySelector('.cart-item__price');
  const itemMessage = cartPage.querySelector('.cart-item__message');
  const itemShipping = cartPage.querySelector('.cart-item__shipping');
  const summaryPrice = cartPage.querySelector('.cart-summary__price');
  const checkoutAction = cartPage.querySelector('.cart-summary__checkout');
  const consultAction = cartPage.querySelector('.cart-summary__consult');
  const backAction = cartPage.querySelector('.cart-summary__back');
  const breadcrumbCurrent = cartPage.querySelector('.breadcrumb li[aria-current="page"]');
  const metaDescription = document.querySelector('meta[name="description"]');

  document.title = `Cart | ${product.name} | Bloom Letter`;
  if (metaDescription) {
    metaDescription.setAttribute('content', `${product.name}をカートに追加した状態を確認できるBloom Letterのページです。`);
  }

  if (breadcrumbCurrent) breadcrumbCurrent.textContent = 'Cart';
  if (heroTitle) heroTitle.textContent = 'カートに追加しました';
  if (heroLead) heroLead.innerHTML = '<span>商品内容をご確認のうえ、このまま決済へ進むか、</span><span>ご相談しながら進めるかをお選びいただけます。</span>';
  if (itemScene) itemScene.textContent = product.sceneLabel || getDetailEyebrow(product.scene);
  if (itemTitle) itemTitle.textContent = product.name;
  if (itemLead) itemLead.textContent = product.description;
  if (itemPrice) itemPrice.textContent = formatYenPrice(product.price);
  if (itemMessage) itemMessage.textContent = messageCard;
  if (itemShipping) itemShipping.textContent = product.shipping;
  if (summaryPrice) summaryPrice.textContent = formatYenPrice(product.price);

  if (itemImage) {
    itemImage.style.backgroundImage = `url("${product.image}")`;
    itemImage.style.backgroundPosition = product.imagePosition || 'center 42%';
  }

  if (consultAction) {
    consultAction.href = `contact.html?product=${encodeURIComponent(product.id)}`;
  }

  if (backAction) {
    backAction.href = `product-detail.html?product=${encodeURIComponent(product.id)}`;
  }
}

async function initializeCheckoutPage() {
  const checkoutPage = document.querySelector('[data-checkout-page]');
  if (!checkoutPage) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product') || 'spring-bouquet';
  const messageCard = params.get('messageCard') || '希望しない';
  let product = getCatalogProductByIdentifier(productId);

  if (!product && /^\d+$/.test(productId)) {
    try {
      product = await fetchPublicProductDetail(productId);
    } catch (error) {
      product = null;
    }
  }

  if (!product) {
    product = PRODUCT_BY_ID.get('spring-bouquet');
  }
  if (!product) return;

  const heroTitle = checkoutPage.querySelector('.cart-hero h1');
  const itemImage = checkoutPage.querySelector('.cart-item__image');
  const itemScene = checkoutPage.querySelector('.cart-item__scene');
  const itemTitle = checkoutPage.querySelector('.cart-item__title');
  const itemLead = checkoutPage.querySelector('.cart-item__lead');
  const itemPrice = checkoutPage.querySelector('.cart-item__price');
  const itemMessage = checkoutPage.querySelector('.cart-item__message');
  const itemShipping = checkoutPage.querySelector('.cart-item__shipping');
  const summaryPrice = checkoutPage.querySelector('.cart-summary__price');
  const backAction = checkoutPage.querySelector('.cart-summary__back');
  const consultAction = checkoutPage.querySelector('.cart-summary__checkout');
  const metaDescription = document.querySelector('meta[name="description"]');

  document.title = `Checkout | ${product.name} | Bloom Letter`;
  if (metaDescription) {
    metaDescription.setAttribute('content', `${product.name}の決済内容を確認するBloom Letterのページです。`);
  }

  if (heroTitle) heroTitle.textContent = `${product.name}の決済内容を確認してください`;
  if (itemScene) itemScene.textContent = product.sceneLabel || getDetailEyebrow(product.scene);
  if (itemTitle) itemTitle.textContent = product.name;
  if (itemLead) itemLead.textContent = product.description;
  if (itemPrice) itemPrice.textContent = formatYenPrice(product.price);
  if (itemMessage) itemMessage.textContent = messageCard;
  if (itemShipping) itemShipping.textContent = product.shipping;
  if (summaryPrice) summaryPrice.textContent = formatYenPrice(product.price);

  if (itemImage) {
    itemImage.style.backgroundImage = `url("${product.image}")`;
    itemImage.style.backgroundPosition = product.imagePosition || 'center 42%';
  }

  if (backAction) {
    backAction.href = `cart.html?product=${encodeURIComponent(product.id)}&messageCard=${encodeURIComponent(messageCard)}`;
  }

  if (consultAction) {
    consultAction.href = `contact.html?product=${encodeURIComponent(product.id)}`;
  }
}

async function initializeHomePage() {
  const featuredGrid = document.querySelector('#home-featured-grid');
  const sceneGrid = document.querySelector('#home-scene-grid');
  if (!featuredGrid && !sceneGrid) return;

  try {
    const homeData = await fetchHomeData();

    if (sceneGrid && Array.isArray(homeData?.scenes) && homeData.scenes.length) {
      sceneGrid.innerHTML = homeData.scenes
        .slice(0, 4)
        .map(renderSceneCard)
        .join('');
    }

    if (featuredGrid && Array.isArray(homeData?.featuredProducts) && homeData.featuredProducts.length) {
      const featuredProducts = homeData.featuredProducts
        .map(normalizePublicProduct)
        .filter(Boolean);

      if (featuredProducts.length < 4) {
        const fallbackProducts = HOME_FEATURED_FALLBACK_IDS
          .map(id => PRODUCT_BY_ID.get(id))
          .filter(Boolean)
          .filter(product => !featuredProducts.some(item => item.slug === product.id || item.name === product.name));

        fallbackProducts.forEach(product => {
          if (featuredProducts.length < 4) {
            featuredProducts.push(product);
          }
        });
      }

      featuredGrid.innerHTML = featuredProducts.slice(0, 4).map(renderProductCard).join('');

      featuredGrid.querySelectorAll('.product-card').forEach(card => {
        const link = card.querySelector('a[href*="product-detail"]');
        const title = card.querySelector('h3')?.textContent?.trim();
        if (link && title) {
          bindClickableCard(card, link.getAttribute('href'), title);
        }
      });
    }
  } catch (error) {
    window.console?.warn?.(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateNavigation();

  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', event => {
      if (
        sidebar.classList.contains('open') &&
        !sidebar.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        sidebar.classList.remove('open');
      }
    });

    sidebar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
        }
      });
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href.endsWith(currentPage) || (currentPage === 'index.html' && href === './index.html'))) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.prompt-box').forEach(box => {
    const promptText = box.querySelector('.prompt-text');
    if (!promptText) return;

    promptText.style.cursor = 'pointer';
    promptText.title = 'クリックしてコピー';

    promptText.addEventListener('click', () => {
      const text = promptText.textContent;
      navigator.clipboard.writeText(text).then(() => {
        const originalBg = promptText.style.background;
        promptText.style.background = '#d1fae5';
        promptText.style.transition = 'background 0.3s';
        setTimeout(() => {
          promptText.style.background = originalBg || '#fff';
        }, 500);
      });
    });
  });

  document.querySelectorAll('.toc-list a').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

function initializeSiteNavigation() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;

  const toggle = header.querySelector('.site-nav-toggle');
  const nav = header.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function renderProductCard(product) {
  return `
    <article class="product-card" data-scene="${escapeHtml(product.scene)}">
      <span class="product-card__badge">${escapeHtml(product.sceneLabel)}</span>
      <div class="product-card__image" style="background-image: url(&quot;${escapeHtml(product.image)}&quot;); background-position: ${product.imagePosition || 'center 42%'};" aria-label="${escapeHtml(product.imageAlt || `${product.name} の商品画像`)}"></div>
      <div class="product-card__content">
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description)}</p>
        <div class="product-card__footer">
          <strong>${formatYenPrice(product.price)}</strong>
          <a href="${getProductDetailHref(product)}">詳細を見る</a>
        </div>
      </div>
    </article>
  `;
}

async function initializeProductFilter() {
  const chips = document.querySelectorAll('[data-filter]');
  const priceCheckboxes = document.querySelectorAll('[data-price-range]');
  const productGrid = document.querySelector('#product-grid');
  const productGridTitle = document.querySelector('#product-grid-title');
  const pageLinks = document.querySelectorAll('[data-page-link]');
  const nextLink = document.querySelector('[data-page-next]');
  const sortSelect = document.querySelector('#sort-products');
  if (!productGrid) return;

  try {
    const publicProducts = await fetchPublicProducts();
    if (publicProducts.length) {
      productGrid.innerHTML = publicProducts.map(renderProductCard).join('');
    }
  } catch (error) {
    window.console?.warn?.(error);
  }

  let cards = Array.from(document.querySelectorAll('.product-card[data-scene]'));
  if (!cards.length) return;

  let currentPage = 1;
  let currentSceneFilter = 'all';
  const perPage = 8;
  const originalOrder = Array.from(cards);
  const params = new URLSearchParams(window.location.search);
  const storageKey = 'bloom-letter-product-grid-state';

  const readStoredState = () => {
    try {
      const raw = window.sessionStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  };

  const writeStoredState = () => {
    try {
      window.sessionStorage.setItem(
        storageKey,
        JSON.stringify({
          page: currentPage,
          scene: currentSceneFilter,
          sort: sortSelect?.value || 'recommended'
        })
      );
    } catch (error) {
      // Ignore storage failures and keep URL sync as fallback.
    }
  };

  const syncProductsUrl = () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (currentSceneFilter && currentSceneFilter !== 'all') {
      nextParams.set('scene', currentSceneFilter);
    } else {
      nextParams.delete('scene');
    }

    if (currentPage > 1) {
      nextParams.set('page', String(currentPage));
    } else {
      nextParams.delete('page');
    }

    if (sortSelect && sortSelect.value && sortSelect.value !== 'recommended') {
      nextParams.set('sort', sortSelect.value);
    } else {
      nextParams.delete('sort');
    }

    const nextQuery = nextParams.toString();
    const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ''}${productGridTitle ? '#product-grid-title' : ''}`;
    window.history.replaceState({}, '', nextUrl);
    writeStoredState();
  };

  const getCardPrice = card => {
    const priceText = card.querySelector('.product-card__footer strong')?.textContent || '';
    return Number(priceText.replace(/[^\d]/g, ''));
  };

  const sortCards = sortType => {
    if (!productGrid) return;

    const sortedCards = [...originalOrder];

    if (sortType === 'price-asc') {
      sortedCards.sort((a, b) => getCardPrice(a) - getCardPrice(b));
    } else if (sortType === 'price-desc') {
      sortedCards.sort((a, b) => getCardPrice(b) - getCardPrice(a));
    }

    sortedCards.forEach(card => productGrid.appendChild(card));
  };

  const updatePagination = visibleCards => {
    const totalPages = Math.max(1, Math.ceil(visibleCards.length / perPage));
    if (currentPage > totalPages) currentPage = totalPages;

    cards.forEach(card => {
      if (card.classList.contains('is-filtered-out')) {
        card.classList.add('is-page-hidden');
        delete card.dataset.page;
      }
    });

    visibleCards.forEach((card, index) => {
      const page = Math.floor(index / perPage) + 1;
      card.dataset.page = String(page);
      card.classList.toggle('is-page-hidden', page !== currentPage);
    });

    pageLinks.forEach(link => {
      const page = Number(link.dataset.pageLink);
      link.classList.toggle('is-current', page === currentPage);
      link.style.display = page <= totalPages ? 'inline-flex' : 'none';
    });

    if (nextLink) {
      const hasNext = currentPage < totalPages;
      nextLink.style.display = totalPages > 1 ? 'inline-flex' : 'none';
      nextLink.setAttribute('aria-disabled', String(!hasNext));
      nextLink.style.opacity = hasNext ? '1' : '0.45';
      nextLink.style.pointerEvents = hasNext ? 'auto' : 'none';
    }
  };

  const getVisibleCards = () => {
    const orderedCards = productGrid
      ? Array.from(productGrid.querySelectorAll('.product-card[data-scene]'))
      : Array.from(cards);
    return orderedCards.filter(card => !card.classList.contains('is-filtered-out'));
  };

  const scrollToProductGrid = () => {
      const target = productGridTitle || productGrid;
      if (!target) return;

      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const headerHeight = document.querySelector('[data-site-header]')?.offsetHeight || 0;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
      const visualGap = viewportWidth >= 768 ? 20 : 0;
      const offsetTop = Math.max(0, targetTop - headerHeight - visualGap);

      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    };

  const matchesPriceRange = card => {
    const selectedRanges = Array.from(priceCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.dataset.priceRange);

    if (!selectedRanges.length) return true;

    const price = getCardPrice(card);

    return selectedRanges.some(range => {
      if (range === 'low') return price <= 7000;
      if (range === 'mid') return price >= 7001 && price <= 10000;
      if (range === 'high') return price >= 10001;
      return false;
    });
  };

  const applyFilters = (filter, options = {}) => {
    const { preservePage = false } = options;
    currentSceneFilter = filter;

    cards.forEach(card => {
      const normalizedScene = card.dataset.scene === 'anniversary' ? 'celebration' : card.dataset.scene;
      const matchesScene = filter === 'all' || normalizedScene === filter;
      const matches = matchesScene && matchesPriceRange(card);
      card.classList.toggle('is-filtered-out', !matches);
    });

    chips.forEach(chip => chip.classList.toggle('is-active', chip.dataset.filter === filter));
    if (!preservePage) currentPage = 1;
    updatePagination(getVisibleCards());
    syncProductsUrl();
  };

  cards.forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const product = title ? PRODUCT_BY_NAME.get(title) : null;
    const link = card.querySelector('a[href*="product-detail"]');
    const href = link?.getAttribute('href');
    if (href && title) {
      bindClickableCard(card, href, title);
    } else if (product) {
      bindClickableCard(card, getProductDetailHref(product), product.name);
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => applyFilters(chip.dataset.filter));
  });

  priceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => applyFilters(currentSceneFilter));
  });

  pageLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      currentPage = Number(link.dataset.pageLink);
      updatePagination(getVisibleCards());
      syncProductsUrl();
      scrollToProductGrid();
    });
  });

  if (nextLink) {
    nextLink.addEventListener('click', event => {
      event.preventDefault();
      const visibleCards = getVisibleCards();
      const totalPages = Math.max(1, Math.ceil(visibleCards.length / perPage));
      if (currentPage < totalPages) {
        currentPage += 1;
        updatePagination(visibleCards);
        syncProductsUrl();
        scrollToProductGrid();
      }
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortCards(sortSelect.value);
      currentPage = 1;
      updatePagination(getVisibleCards());
      syncProductsUrl();
    });
  }

  const storedState = readStoredState();
  const initial = params.get('scene') || storedState?.scene || 'all';
  const requestedPage = Number(params.get('page') || storedState?.page || '1');
  const initialPage = Number.isFinite(requestedPage) && requestedPage >= 1 ? requestedPage : 1;
  const initialSort = params.get('sort') || storedState?.sort;

  if (sortSelect && initialSort) {
    const hasOption = Array.from(sortSelect.options).some(option => option.value === initialSort);
    if (hasOption) sortSelect.value = initialSort;
  }

  if (sortSelect) {
    sortCards(sortSelect.value);
  }

  currentPage = initialPage;
  applyFilters(initial, { preservePage: true });

  let shouldAdjustOnEntry = window.location.hash === '#product-grid' || window.location.hash === '#product-grid-title';
  if (!shouldAdjustOnEntry) {
    try {
      const referrerUrl = document.referrer ? new URL(document.referrer) : null;
      const currentPath = window.location.pathname.split('/').pop();
      const referrerPath = referrerUrl?.pathname?.split('/').pop();
      shouldAdjustOnEntry = Boolean(referrerPath && referrerPath !== currentPath);
    } catch (error) {
      shouldAdjustOnEntry = false;
    }
  }

  if (shouldAdjustOnEntry) {
    window.requestAnimationFrame(() => {
      scrollToProductGrid();
      window.setTimeout(scrollToProductGrid, 80);
    });
  }
}

function initializeContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      const original = button.textContent;
      button.textContent = '送信ありがとうございました';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        form.reset();
      }, 1800);
    }
  });
}

function initializeHeroSlides() {
  const slideContainer = document.querySelector('[data-hero-slides]');
  if (!slideContainer) return;

  const slides = Array.from(slideContainer.querySelectorAll('.hero__image'));
  const dots = Array.from(document.querySelectorAll('.hero__dot'));
  if (slides.length < 2) return;

  let currentIndex = 0;

  const showSlide = index => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === index);
    });
    currentIndex = index;
  };

  window.setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 4500);
}

function initializeFaqAccordion() {
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-item__question');
    if (!button) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      faqItems.forEach(otherItem => {
        otherItem.classList.remove('is-open');
        const otherButton = otherItem.querySelector('.faq-item__question');
        if (otherButton) {
          otherButton.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSiteNavigation();
  initializeHomePage();
  initializeProductLinks();
  initializeProductDetailPage();
  fitDetailTitleToSingleLine();
  initializeCartPage();
  initializeCheckoutPage();
  initializeProductFilter();
  initializeContactForm();
  initializeHeroSlides();
  initializeFaqAccordion();
});

window.addEventListener('resize', fitDetailTitleToSingleLine);
