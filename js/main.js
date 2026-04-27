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

const RAW_PRODUCT_CATALOG = [
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
    id: 'early-summer-breeze',
    slug: 'early-summer-breeze',
    name: 'Early Summer Breeze',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 9200,
    description: '白とグリーンに涼やかな彩りを添えた、初夏らしいみずみずしさを感じる花束。',
    longDescription: '爽やかな空気を思わせる、初夏の贈りものにぴったりなブーケ。白やグリーンを中心に、軽やかで清潔感のある印象に仕上げています。',
    occasions: '季節のギフト / 初夏の贈り物 / 爽やかな彩り',
    flowers: 'あじさい、ライムグリーンの花々、レースフラワー',
    shipping: '注文から3営業日以内に発送',
    image: 'images/products/early-summer-breeze.png',
    imageAlt: 'Early Summer Breeze の商品画像',
    imagePosition: 'center 52%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 50%',
    season: ['early-summer', 'summer'],
    relatedBanner: '初夏の花贈り'
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
    id: 'green-grace',
    slug: 'green-grace',
    name: 'Green Grace',
    scene: 'celebration',
    sceneLabel: 'Celebration',
    price: 9400,
    description: '白とグリーンを基調に、やわらかなピンクを添えた、上品で落ち着きのある花束。',
    longDescription: 'ナチュラルなグリーンと白をベースに、淡いピンクをアクセントに加えた洗練されたブーケ。贈る相手やシーンを選びにくく、迷ったときにも選びやすい万能なギフトフラワーです。',
    occasions: 'お祝い / 迷ったときの定番ギフト / 上品な贈り物',
    flowers: 'グリーンマム、ホワイトフリル、淡いピンクの小花',
    shipping: '注文から3営業日以内に発送',
    image: 'images/products/green-grace.png',
    imageAlt: 'Green Grace の商品画像',
    imagePosition: 'center 48%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 48%',
    season: ['spring', 'all-season'],
    relatedBanner: '花選びに迷ったら'
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
    id: 'apricot-merci',
    slug: 'apricot-merci',
    name: 'Apricot Merci',
    scene: 'thanks',
    sceneLabel: 'Thanks',
    price: 8800,
    description: 'アプリコットやクリーム色の花をやさしく束ねた、感謝の気持ちを伝える花束。',
    longDescription: 'あたたかみのあるアプリコットカラーを中心にまとめた、やさしく上品なブーケ。お礼や感謝を伝えたいシーンに自然になじむ、親しみやすい贈りものです。',
    occasions: '感謝 / お礼 / やさしい気持ちを伝える贈り物',
    flowers: 'アプリコットローズ、カーネーション、アルストロメリア',
    shipping: '注文から3営業日以内に発送',
    image: 'images/products/apricot-merci.png',
    imageAlt: 'Apricot Merci の商品画像',
    imagePosition: 'center 50%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 48%',
    season: ['spring', 'all-season'],
    relatedBanner: '感謝を伝える花束'
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
    id: 'spring-letter',
    slug: 'spring-letter',
    name: 'Spring Letter',
    scene: 'seasonal',
    sceneLabel: 'Seasonal Gift',
    price: 8600,
    description: '淡いピンクの花々と小花をやわらかく束ねた、春の訪れを感じる上品な花束。',
    longDescription: 'やさしいピンクとアイボリーを基調に、春らしい軽やかさを表現したブーケ。お祝いにも季節の贈りものにも選びやすい、やわらかな印象の花束です。',
    occasions: '季節のギフト / 春の贈り物 / やわらかな彩り',
    flowers: 'チューリップ、ピンクカーネーション、小花',
    shipping: '注文から3営業日以内に発送',
    image: 'images/products/spring-letter.png',
    imageAlt: 'Spring Letter の商品画像',
    imagePosition: 'center 50%',
    relatedImageSize: '116%',
    relatedImagePosition: 'center 48%',
    season: ['spring'],
    relatedBanner: '春の贈りもの'
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

const PRODUCT_ATTRIBUTE_MAP = {
  'apricot-carnation': { recipient: ['family', 'coworker'], mood: 'soft', colorTone: 'orange', budgetRange: 'mid' },
  'apricot-merci': { recipient: ['friend', 'family', 'coworker'], mood: 'gentle', colorTone: 'apricot', budgetRange: 'mid' },
  'babys-breath-air': { recipient: ['friend', 'coworker'], mood: 'calm', colorTone: 'white', budgetRange: 'mid' },
  'blue-hydrangea-air': { recipient: ['family', 'partner'], mood: 'calm', colorTone: 'purple', budgetRange: 'mid' },
  'birthday-bloom': { recipient: ['friend', 'family'], mood: 'bright', colorTone: 'pink', budgetRange: 'mid' },
  'bloom-letter-pink': { recipient: ['friend', 'partner'], mood: 'soft', colorTone: 'pink', budgetRange: 'mid' },
  'celebration-lily-rose': { recipient: ['partner', 'coworker'], mood: 'elegant', colorTone: 'white', budgetRange: 'high' },
  'coral-gerbera-day': { recipient: ['friend', 'family'], mood: 'bright', colorTone: 'orange', budgetRange: 'mid' },
  'early-summer-breeze': { recipient: ['family', 'friend', 'coworker'], mood: 'calm', colorTone: 'white', budgetRange: 'mid' },
  'elegant-rose': { recipient: ['partner', 'coworker'], mood: 'elegant', colorTone: 'pink', budgetRange: 'mid' },
  'fresh-garden': { recipient: ['coworker', 'family'], mood: 'calm', colorTone: 'white', budgetRange: 'low' },
  'green-grace': { recipient: ['family', 'partner', 'coworker'], mood: 'elegant', colorTone: 'green', budgetRange: 'mid' },
  'lavender-ranunculus': { recipient: ['partner', 'friend'], mood: 'soft', colorTone: 'purple', budgetRange: 'mid' },
  'lily-bell-white': { recipient: ['family', 'partner'], mood: 'elegant', colorTone: 'white', budgetRange: 'mid' },
  'lilac-moment': { recipient: ['partner', 'coworker'], mood: 'elegant', colorTone: 'purple', budgetRange: 'mid' },
  'mimosa-light': { recipient: ['friend', 'family'], mood: 'bright', colorTone: 'yellow', budgetRange: 'mid' },
  'pink-tulip-glow': { recipient: ['friend', 'partner'], mood: 'soft', colorTone: 'pink', budgetRange: 'mid' },
  'premium-mix': { recipient: ['coworker', 'family'], mood: 'elegant', colorTone: 'purple', budgetRange: 'high' },
  'quiet-ivory': { recipient: ['family', 'coworker'], mood: 'calm', colorTone: 'white', budgetRange: 'mid' },
  'silver-lisianthus': { recipient: ['coworker', 'family'], mood: 'calm', colorTone: 'white', budgetRange: 'mid' },
  'soft-merci': { recipient: ['friend', 'partner'], mood: 'soft', colorTone: 'pink', budgetRange: 'mid' },
  'spring-letter': { recipient: ['friend', 'family', 'partner'], mood: 'soft', colorTone: 'pink', budgetRange: 'mid' },
  'spring-bouquet': { recipient: ['friend', 'family'], mood: 'bright', colorTone: 'pink', budgetRange: 'mid' },
  'spring-tulip-meadow': { recipient: ['family', 'friend'], mood: 'bright', colorTone: 'yellow', budgetRange: 'mid' },
  'sunflower-ray': { recipient: ['family', 'friend'], mood: 'bright', colorTone: 'yellow', budgetRange: 'mid' },
  'thanks-harmony': { recipient: ['coworker', 'family'], mood: 'soft', colorTone: 'orange', budgetRange: 'mid' },
  'wisteria-veil': { recipient: ['partner', 'family'], mood: 'calm', colorTone: 'purple', budgetRange: 'mid' },
  'wine-anemone': { recipient: ['partner', 'coworker'], mood: 'elegant', colorTone: 'purple', budgetRange: 'mid' }
};

const PRODUCT_CATALOG = RAW_PRODUCT_CATALOG.map(product => ({
  ...product,
  ...PRODUCT_ATTRIBUTE_MAP[product.id]
}));

const FEATURE_COLLECTION_MAP = {
  'spring-gift': {
    title: '春の贈りもの',
    description: 'やわらかな色合いで、新しい季節に寄り添う花束を集めました。',
    scene: 'seasonal',
    preferredProductIds: ['spring-letter', 'spring-tulip-meadow', 'spring-bouquet']
  },
  'early-summer': {
    title: '初夏の花贈り',
    description: 'みずみずしい彩りで、爽やかな季節を届けるブーケを集めました。',
    scene: 'seasonal',
    preferredProductIds: ['early-summer-breeze', 'blue-hydrangea-air', 'wisteria-veil']
  },
  'thanks-gift': {
    title: '感謝を伝える花束',
    description: 'お礼や感謝の気持ちに合う、上品なフラワーギフトを集めました。',
    scene: 'thanks',
    preferredProductIds: ['apricot-merci', 'thanks-harmony', 'mimosa-light']
  }
};

const PRODUCT_BY_ID = new Map(PRODUCT_CATALOG.map(product => [product.id, product]));
const PRODUCT_BY_SLUG = new Map(PRODUCT_CATALOG.map(product => [product.slug || product.id, product]));
const PRODUCT_BY_NAME = new Map(PRODUCT_CATALOG.map(product => [product.name, product]));
const PRODUCT_RECOMMENDED_PRIORITY_IDS = ['spring-letter', 'early-summer-breeze', 'apricot-merci', 'green-grace'];
const HOME_FEATURED_FALLBACK_IDS = ['spring-letter', 'early-summer-breeze', 'apricot-merci', 'green-grace'];
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
  return PRODUCT_BY_ID.get(productId) || PRODUCT_BY_SLUG.get(productId) || PRODUCT_BY_NAME.get(productId) || null;
}

function findCatalogProductMatch(product) {
  if (!product) return null;

  return (
    PRODUCT_BY_SLUG.get(String(product.slug || '')) ||
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
    recipient: catalogProduct?.recipient || ['friend'],
    mood: catalogProduct?.mood || 'soft',
    colorTone: catalogProduct?.colorTone || 'pink',
    budgetRange: catalogProduct?.budgetRange || 'mid',
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

const FAVORITES_STORAGE_KEY = 'bloomLetterFavorites';

function getFavoriteProductId(product) {
  return String(product?.slug || product?.id || '');
}

function readFavoriteIds() {
  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map(item => String(item || '').trim())
      .filter(Boolean);
  } catch (error) {
    return [];
  }
}

function writeFavoriteIds(ids) {
  try {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
  } catch (error) {
    // Ignore storage errors so the page remains usable.
  }
}

function isFavoriteProductId(productId) {
  if (!productId) return false;
  return readFavoriteIds().includes(String(productId));
}

function toggleFavoriteProductId(productId) {
  const normalizedId = String(productId || '').trim();
  if (!normalizedId) return [];

  const currentIds = readFavoriteIds();
  const nextIds = currentIds.includes(normalizedId)
    ? currentIds.filter(id => id !== normalizedId)
    : [...currentIds, normalizedId];

  writeFavoriteIds(nextIds);
  document.dispatchEvent(new CustomEvent('bloomletter:favorites-changed', {
    detail: { favorites: nextIds }
  }));
  return nextIds;
}

function updateFavoriteButtonState(button, isFavorite) {
  if (!button) return;
  button.dataset.favoriteActive = String(isFavorite);
  button.setAttribute('aria-pressed', String(isFavorite));
  button.setAttribute('aria-label', isFavorite ? 'お気に入りから外す' : 'お気に入りに追加する');
  button.textContent = isFavorite ? '♥' : '♡';
}

function bindFavoriteButton(button, productId) {
  if (!button || !productId) return;
  if (button.dataset.favoriteBound === 'true') {
    updateFavoriteButtonState(button, isFavoriteProductId(productId));
    return;
  }

  button.dataset.favoriteBound = 'true';
  button.dataset.favoriteButton = productId;
  updateFavoriteButtonState(button, isFavoriteProductId(productId));

  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    const nextFavorites = toggleFavoriteProductId(productId);
    updateFavoriteButtonState(button, nextFavorites.includes(productId));
  });
}

function createFavoriteButton(productId) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'favorite-button';
  bindFavoriteButton(button, productId);
  return button;
}

function mountFavoriteButton(target, productId) {
  if (!target || !productId) return null;

  const existing = target.querySelector(`[data-favorite-button="${CSS.escape(productId)}"]`);
  if (existing instanceof HTMLButtonElement) {
    bindFavoriteButton(existing, productId);
    return existing;
  }

  const button = createFavoriteButton(productId);
  target.appendChild(button);
  return button;
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
  initializeDetailFavoriteButton(product);

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
      const messageCardState = {
        type: messageCardSelect?.value === '希望する' ? 'custom' : 'none',
        text: '',
        confirmedText: '',
        confirmed: false
      };
      const nextParams = createMessageCardParams(product.id, messageCardState);
      window.location.href = `cart.html?${nextParams.toString()}`;
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

function normalizeMessageCardText(value) {
  return String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .trim();
}

function getMessageCardStateFromParams(params) {
  const rawType = params.get('messageCardType');
  const type = rawType === 'attached' ? 'custom' : rawType;
  const confirmedText = normalizeMessageCardText(params.get('messageCardText'));
  const confirmed = params.get('messageCardConfirmed') === 'true' && Boolean(confirmedText);

  if (type === 'none' || type === 'custom') {
    return {
      type,
      text: type === 'none' ? '' : confirmedText,
      confirmedText: type === 'custom' ? confirmedText : '',
      confirmed
    };
  }

  const legacyMessageCard = normalizeMessageCardText(params.get('messageCard'));
  if (!legacyMessageCard || legacyMessageCard === '希望しない') {
    return { type: 'none', text: '', confirmedText: '', confirmed: false };
  }

  if (legacyMessageCard === '希望する' || legacyMessageCard === 'メッセージカードを付ける') {
    return { type: 'custom', text: '', confirmedText: '', confirmed: false };
  }

  return {
    type: 'custom',
    text: legacyMessageCard,
    confirmedText: legacyMessageCard,
    confirmed: true
  };
}

function createMessageCardParams(productId, messageCardState) {
  const params = new URLSearchParams();
  params.set('product', productId);
  params.set('messageCardType', messageCardState.type);
  params.set('messageCardText', messageCardState.type === 'custom' && messageCardState.confirmed ? messageCardState.confirmedText : '');
  params.set('messageCardConfirmed', String(messageCardState.type === 'custom' && messageCardState.confirmed));
  return params;
}

function getMessageCardSummary(messageCardState) {
  if (messageCardState.type !== 'custom') {
    return '希望しない';
  }

  if (messageCardState.confirmed && messageCardState.confirmedText) {
    return '設定済み';
  }

  if (messageCardState.text) {
    return '未確定';
  }

  return '未設定';
}

function getCheckoutMessageSummary(messageCardState) {
  if (messageCardState.type !== 'custom') {
    return '希望しない';
  }

  return messageCardState.confirmedText ? '設定済み' : '未設定';
}

function getMessageCardStatus(state) {
  if (state.type !== 'custom') {
    return { text: '', tone: '' };
  }

  if (state.text.length > 120) {
    return { text: '120文字以内で入力してください。', tone: 'warning' };
  }

  if (state.confirmed && state.confirmedText) {
    return { text: 'メッセージを確定しました', tone: 'confirmed' };
  }

  if (state.text) {
    return { text: '内容を確認して、メッセージを確定してください', tone: 'warning' };
  }

  return { text: '未入力でもカードだけ付けられます。', tone: '' };
}

function shouldDisableCheckoutWithMessageCard(state) {
  if (state.type !== 'custom') {
    return false;
  }

  if (state.text.length > 120) {
    return true;
  }

  return Boolean(state.text) && !state.confirmed;
}

function applyMessageCardPreview(container, messageCardState) {
  if (!container) return;

  const placeholder = container.querySelector('[data-message-card-placeholder]');
  const previewText = container.querySelector('[data-message-card-preview-text]');
  const hasCard = messageCardState.type === 'custom';
  const hasText = hasCard && Boolean(messageCardState.text);
  const alwaysVisible = container.hasAttribute('data-preview-always-visible');

  container.hidden = !hasCard && !alwaysVisible;

  if (placeholder) {
    placeholder.hidden = hasText;
    placeholder.textContent = hasCard
      ? 'まだメッセージは入力されていません。カードだけ添えてお届けします。'
      : 'カードを付けると、ここにメッセージが表示されます。';
  }

  if (previewText) {
    previewText.hidden = !hasText;
    previewText.textContent = hasText ? messageCardState.text : '';
  }
}

function initializeMessageCardBuilder(cartPage, initialMessageCardState) {
  const builder = cartPage.querySelector('[data-message-card-builder]');
  if (!builder) {
    return {
      getState: () => initialMessageCardState,
      isOverLimit: () => false,
      shouldDisableCheckout: () => false,
      updateSummary: () => {}
    };
  }

  const typeInputs = Array.from(builder.querySelectorAll('[data-message-card-type]'));
  const editor = builder.querySelector('[data-message-card-editor]');
  const textarea = builder.querySelector('[data-message-card-text]');
  const counter = builder.querySelector('[data-message-card-counter]');
  const preview = builder.querySelector('[data-message-card-preview]');
  const exampleButtons = Array.from(builder.querySelectorAll('[data-message-card-example]'));
  const confirmButton = builder.querySelector('[data-message-card-confirm]');
  const status = builder.querySelector('[data-message-card-status]');
  const maxLength = 120;
  const state = {
    type: initialMessageCardState.type,
    text: initialMessageCardState.text,
    confirmedText: initialMessageCardState.confirmedText || '',
    confirmed: Boolean(initialMessageCardState.confirmed && initialMessageCardState.confirmedText)
  };
  const subscribers = [];

  const syncStateFromInputs = () => {
    const selectedType = typeInputs.find(input => input.checked)?.value;
    state.type = selectedType === 'custom' ? 'custom' : 'none';

    if (state.type === 'none') {
      state.text = '';
      state.confirmedText = '';
      state.confirmed = false;
      if (textarea) textarea.value = '';
      return;
    }

    state.text = normalizeMessageCardText(textarea?.value || '');
    if (!state.text) {
      state.confirmedText = '';
      state.confirmed = false;
    } else if (state.text !== state.confirmedText) {
      state.confirmedText = '';
      state.confirmed = false;
    }
  };

  const getSnapshot = () => ({
    type: state.type,
    text: state.text,
    confirmedText: state.confirmedText,
    confirmed: state.confirmed
  });

  const notify = () => {
    const snapshot = getSnapshot();
    subscribers.forEach(callback => callback(snapshot));
  };

  const render = () => {
    syncStateFromInputs();

    if (editor) {
      editor.hidden = state.type !== 'custom';
    }

    if (counter) {
      const count = state.text.length;
      counter.textContent = `${count} / ${maxLength}`;
      counter.classList.toggle('is-over-limit', count > maxLength);
    }

    if (confirmButton) {
      confirmButton.hidden = state.type !== 'custom';
      confirmButton.disabled = state.type !== 'custom' || !state.text || state.text.length > maxLength;
    }

    if (status) {
      const nextStatus = getMessageCardStatus(state);
      status.textContent = nextStatus.text;
      status.classList.toggle('is-confirmed', nextStatus.tone === 'confirmed');
      status.classList.toggle('is-warning', nextStatus.tone === 'warning');
      status.hidden = state.type !== 'custom';
    }

    applyMessageCardPreview(preview, state);
    notify();
  };

  typeInputs.forEach(input => {
    input.checked = input.value === state.type;
    input.addEventListener('change', render);
  });

  if (textarea) {
    textarea.value = state.text;
    textarea.addEventListener('input', render);
  }

  exampleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const customInput = typeInputs.find(input => input.value === 'custom');
      if (customInput) {
        customInput.checked = true;
      }
      if (textarea) {
        textarea.value = button.dataset.messageCardExample || '';
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.focus();
      } else {
        render();
      }
    });
  });

  if (confirmButton) {
    confirmButton.addEventListener('click', () => {
      syncStateFromInputs();
      if (state.type !== 'custom' || !state.text || state.text.length > maxLength) return;
      state.confirmed = true;
      state.confirmedText = state.text;
      render();
    });
  }

  render();

  return {
    getState() {
      syncStateFromInputs();
      return getSnapshot();
    },
    isOverLimit() {
      syncStateFromInputs();
      return state.type === 'custom' && state.text.length > maxLength;
    },
    shouldDisableCheckout() {
      syncStateFromInputs();
      return shouldDisableCheckoutWithMessageCard(state);
    },
    updateSummary(callback) {
      subscribers.push(callback);
    }
  };
}

async function initializeCartPage() {
  const cartPage = document.querySelector('[data-cart-page]');
  if (!cartPage) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product') || 'spring-bouquet';
  const initialMessageCardState = getMessageCardStateFromParams(params);
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

  const messageCardBuilder = initializeMessageCardBuilder(cartPage, initialMessageCardState);
  const updateMessageCardSummary = messageCardState => {
    if (itemMessage) {
      itemMessage.textContent = getMessageCardSummary(messageCardState);
    }
    if (checkoutAction) {
      checkoutAction.disabled = messageCardBuilder.shouldDisableCheckout();
    }
  };

  updateMessageCardSummary(messageCardBuilder.getState());
  messageCardBuilder.updateSummary(updateMessageCardSummary);

  if (checkoutAction) {
    checkoutAction.addEventListener('click', () => {
      const messageCardState = messageCardBuilder.getState();
      if (messageCardBuilder.shouldDisableCheckout()) return;

      const nextParams = createMessageCardParams(product.id, messageCardState);
      window.location.href = `checkout.html?${nextParams.toString()}`;
    });
  }
}

async function initializeCheckoutPage() {
  const checkoutPage = document.querySelector('[data-checkout-page]');
  if (!checkoutPage) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product') || 'spring-bouquet';
  const messageCardState = getMessageCardStateFromParams(params);
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
  const readonlyPreview = checkoutPage.querySelector('[data-message-card-preview-readonly]');
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
  if (itemMessage) itemMessage.textContent = getCheckoutMessageSummary(messageCardState);
  if (itemShipping) itemShipping.textContent = product.shipping;
  if (summaryPrice) summaryPrice.textContent = formatYenPrice(product.price);
  applyMessageCardPreview(readonlyPreview, messageCardState);

  if (itemImage) {
    itemImage.style.backgroundImage = `url("${product.image}")`;
    itemImage.style.backgroundPosition = product.imagePosition || 'center 42%';
  }

  if (backAction) {
    backAction.href = `cart.html?${createMessageCardParams(product.id, messageCardState).toString()}`;
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
  const favoriteId = getFavoriteProductId(product);
  const favoriteSymbol = isFavoriteProductId(favoriteId) ? '♥' : '♡';
  return `
    <article class="product-card" data-scene="${escapeHtml(product.scene)}" data-product-id="${escapeHtml(favoriteId)}">
      <span class="product-card__badge">${escapeHtml(product.sceneLabel)}</span>
      <div class="product-card__image" style="background-image: url(&quot;${escapeHtml(product.image)}&quot;); background-position: ${product.imagePosition || 'center 42%'};" aria-label="${escapeHtml(product.imageAlt || `${product.name} の商品画像`)}">
        <button class="favorite-button" type="button" data-favorite-button="${escapeHtml(favoriteId)}" aria-pressed="${String(isFavoriteProductId(favoriteId))}" aria-label="${isFavoriteProductId(favoriteId) ? 'お気に入りから外す' : 'お気に入りに追加する'}">${favoriteSymbol}</button>
      </div>
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

function syncProductGridFavoriteButtons() {
  document.querySelectorAll('#product-grid .product-card').forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const product = title ? PRODUCT_BY_NAME.get(title) : null;
    const productId = card.dataset.productId || getFavoriteProductId(product);
    if (!productId) return;

    card.dataset.productId = productId;
    const image = card.querySelector('.product-card__image');
    if (!image) return;

    const button = mountFavoriteButton(image, productId);
    updateFavoriteButtonState(button, isFavoriteProductId(productId));
  });
}

function syncFavoriteSummary(count, favoritesOnly) {
  const toggle = document.querySelector('[data-favorites-toggle]');
  const message = document.querySelector('[data-favorites-message]');
  if (!toggle || !message) return;

  if (favoritesOnly) {
    toggle.textContent = 'すべての商品を見る';
    toggle.disabled = false;
    message.textContent = count
      ? 'お気に入りに追加した花束だけを表示しています。'
      : 'お気に入りはまだありません。';
    return;
  }

  toggle.textContent = `お気に入り ${count}件`;
  toggle.disabled = count === 0;
  message.textContent = count
    ? '気になる花束をあとで見返せます。'
    : '気になる花束をお気に入りに追加できます。';
}

function initializeDetailFavoriteButton(product) {
  const actions = document.querySelector('.detail-summary__actions--stacked');
  if (!actions || !product) return;

  const productId = getFavoriteProductId(product);
  if (!productId) return;

  let button = actions.querySelector('[data-detail-favorite-button]');
  const updateButton = () => {
    const active = isFavoriteProductId(productId);
    button.dataset.detailFavoriteButton = productId;
    button.textContent = active ? '♥ お気に入り済み' : '♡ お気に入りに追加';
    button.setAttribute('aria-pressed', String(active));
  };

  if (!(button instanceof HTMLButtonElement)) {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-secondary detail-summary__favorite';

    button.addEventListener('click', event => {
      event.preventDefault();
      toggleFavoriteProductId(productId);
      updateButton();
    });

    actions.appendChild(button);

    document.addEventListener('bloomletter:favorites-changed', updateButton);
  }

  updateButton();
}

function updateFeatureCollectionBanner(featureKey) {
  const section = document.querySelector('[data-feature-collection]');
  const title = document.querySelector('[data-feature-title]');
  const description = document.querySelector('[data-feature-description]');
  if (!section || !title || !description) return;

  const feature = FEATURE_COLLECTION_MAP[featureKey];
  if (!feature) {
    section.hidden = true;
    return;
  }

  title.textContent = feature.title;
  description.textContent = feature.description;
  section.hidden = false;
}

function getGiftFinderRecipientLabel(value) {
  if (value === 'partner') return 'パートナー';
  if (value === 'family') return '家族';
  if (value === 'coworker') return '職場の方';
  return '友人';
}

function getGiftFinderSceneLabel(value) {
  if (value === 'thanks') return '感謝';
  if (value === 'celebration') return 'お祝い';
  if (value === 'seasonal') return '季節の贈りもの';
  return '誕生日';
}

function getGiftFinderMoodLabel(value) {
  if (value === 'bright') return '明るい';
  if (value === 'elegant') return '上品';
  if (value === 'calm') return '落ち着いた';
  if (value === 'gentle') return 'やさしい';
  return 'やさしい';
}

function getGiftFinderBudgetLabel(value) {
  if (value === 'high') return 'しっかり贈りたい価格帯';
  if (value === 'mid') return '選びやすい価格帯';
  return '気軽に贈りやすい価格帯';
}

function getGiftFinderMoodColorBonus(mood, colorTone) {
  if (mood === 'gentle' && ['apricot', 'pink', 'white'].includes(colorTone)) return 2;
  if (mood === 'soft' && ['pink', 'white'].includes(colorTone)) return 2;
  if (mood === 'bright' && ['yellow', 'orange'].includes(colorTone)) return 2;
  if (mood === 'elegant' && ['purple', 'white'].includes(colorTone)) return 2;
  if (mood === 'elegant' && colorTone === 'green') return 2;
  if (mood === 'calm' && ['white', 'purple'].includes(colorTone)) return 2;
  return 0;
}

function scoreGiftFinderProduct(product, selection) {
  let score = 0;
  const recipients = Array.isArray(product.recipient) ? product.recipient : [product.recipient];

  if (recipients.includes(selection.recipient)) score += 4;
  if (product.scene === selection.scene) score += 4;
  if (product.mood === selection.mood) score += 3;
  if (product.budgetRange === selection.budgetRange) {
    score += 3;
  } else if (
    (selection.budgetRange === 'mid' && ['low', 'high'].includes(product.budgetRange)) ||
    (selection.budgetRange === 'low' && product.budgetRange === 'mid') ||
    (selection.budgetRange === 'high' && product.budgetRange === 'mid')
  ) {
    score += 1;
  }

  score += getGiftFinderMoodColorBonus(selection.mood, product.colorTone);

  if (selection.scene === 'birthday' && recipients.includes('friend')) score += 1;
  if (selection.scene === 'thanks' && ['white', 'yellow'].includes(product.colorTone)) score += 1;
  if (selection.scene === 'celebration' && product.price >= 8500) score += 1;
  if (selection.scene === 'seasonal' && product.scene === 'seasonal') score += 2;

  return score;
}

function buildGiftFinderFallbackReason(selection, product) {
  return `${getGiftFinderRecipientLabel(selection.recipient)}への${getGiftFinderSceneLabel(selection.scene)}ギフトとして、${getGiftFinderMoodLabel(selection.mood)}雰囲気と${getGiftFinderBudgetLabel(selection.budgetRange)}に寄り添いやすい花束です。`;
}

async function fetchGiftFinderReasons(selection, products) {
  const response = await fetch(`${PUBLIC_API_BASE_URL}/api/ai/gift-recommendations/reasons`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      selection,
      products: products.map(product => ({
        productId: String(product.slug || product.id),
        name: product.name,
        scene: product.scene,
        mood: product.mood,
        colorTone: product.colorTone,
        budgetRange: product.budgetRange,
        description: product.description,
        price: product.price
      }))
    })
  });

  if (!response.ok) {
    throw new Error('おすすめ理由の取得に失敗しました。');
  }

  return response.json();
}

function renderGiftFinderResultCard(product, reason) {
  return `
    <article class="gift-chat-card">
      <div class="gift-chat-card__image" style="background-image: url(&quot;${escapeHtml(product.image)}&quot;); background-position: ${product.imagePosition || 'center 42%'};" aria-label="${escapeHtml(product.imageAlt || `${product.name} の商品画像`)}"></div>
      <div class="gift-chat-card__body">
        <span class="gift-chat-card__badge">${escapeHtml(product.sceneLabel)}</span>
        <h4>${escapeHtml(product.name)}</h4>
        <strong>${formatYenPrice(product.price)}</strong>
        <p class="gift-chat-card__description">${escapeHtml(product.description)}</p>
        <p class="gift-chat-card__reason">${escapeHtml(reason)}</p>
        <a class="text-link" href="${getProductDetailHref(product)}">詳細を見る</a>
      </div>
    </article>
  `;
}

function initializeGiftFinderWithCatalog(productCatalog = PRODUCT_CATALOG) {
  const chat = document.querySelector('[data-gift-chat]');
  if (!chat || chat.dataset.giftChatInitialized === 'true') return;
  chat.dataset.giftChatInitialized = 'true';
  initializeGiftFinder(productCatalog);
}

function initializeGiftFinder(productCatalog) {
  const chat = document.querySelector('[data-gift-chat]');
  if (!chat) return;

  const toggle = chat.querySelector('[data-gift-chat-toggle]');
  const close = chat.querySelector('[data-gift-chat-close]');
  const panel = chat.querySelector('[data-gift-chat-panel]');
  const lead = chat.querySelector('.gift-chat__lead');
  const summary = chat.querySelector('[data-gift-chat-summary]');
  const question = chat.querySelector('[data-gift-chat-question]');
  const step = chat.querySelector('[data-gift-chat-step]');
  const title = chat.querySelector('[data-gift-chat-question-title]');
  const hint = chat.querySelector('[data-gift-chat-question-hint]');
  const options = chat.querySelector('[data-gift-chat-options]');
  const results = chat.querySelector('[data-gift-chat-results]');
  const status = chat.querySelector('[data-gift-chat-status]');
  const grid = chat.querySelector('[data-gift-chat-result-grid]');
  const restart = chat.querySelector('[data-gift-chat-restart]');
  if (!toggle || !close || !panel || !lead || !summary || !question || !step || !title || !hint || !options || !results || !status || !grid || !restart) {
    return;
  }

  const questions = [
    {
      id: 'recipient',
      title: '贈る相手を教えてください',
      hint: 'いちばん近い相手をひとつ選んでください。',
      options: [
        { value: 'friend', label: '友人' },
        { value: 'partner', label: 'パートナー' },
        { value: 'family', label: '家族' },
        { value: 'coworker', label: '職場の方' }
      ]
    },
    {
      id: 'scene',
      title: 'どんなシーンで贈りますか？',
      hint: '今回はどんな気持ちを届けたいか選んでください。',
      options: [
        { value: 'birthday', label: '誕生日' },
        { value: 'thanks', label: '感謝を伝える' },
        { value: 'celebration', label: 'お祝い' },
        { value: 'seasonal', label: '季節の贈りもの' }
      ]
    },
    {
      id: 'mood',
      title: '花束の雰囲気はどれが近いですか？',
      hint: 'Bloom Letterらしいトーンから選べます。',
      options: [
        { value: 'soft', label: 'やさしい' },
        { value: 'bright', label: '明るい' },
        { value: 'elegant', label: '上品' },
        { value: 'calm', label: '落ち着いた' }
      ]
    },
    {
      id: 'budgetRange',
      title: 'ご予算のイメージを教えてください',
      hint: '大まかな価格帯で大丈夫です。',
      options: [
        { value: 'low', label: '¥7,000 前後まで' },
        { value: 'mid', label: '¥7,000〜¥10,000' },
        { value: 'high', label: '¥10,000 以上' }
      ]
    }
  ];

  const answers = {};
  let currentStep = 0;
  let requestToken = 0;

  const openPanel = () => {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  };

  const closePanel = () => {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };

  const renderSummary = () => {
    const items = [];
    if (answers.recipient) items.push(`相手: ${getGiftFinderRecipientLabel(answers.recipient)}`);
    if (answers.scene) items.push(`シーン: ${getGiftFinderSceneLabel(answers.scene)}`);
    if (answers.mood) items.push(`雰囲気: ${getGiftFinderMoodLabel(answers.mood)}`);
    if (answers.budgetRange) items.push(`予算: ${getGiftFinderBudgetLabel(answers.budgetRange)}`);

    lead.hidden = items.length > 0;
    summary.hidden = items.length === 0;
    summary.replaceChildren(
      ...items.map(item => {
        const chip = document.createElement('span');
        chip.className = 'gift-chat__summary-item';
        chip.textContent = item;
        return chip;
      })
    );
  };

  const renderQuestion = () => {
    const config = questions[currentStep];
    if (!config) return;

    question.hidden = false;
    results.hidden = true;
    step.textContent = `STEP ${currentStep + 1} / ${questions.length}`;
    title.textContent = config.title;
    hint.textContent = config.hint;
    options.innerHTML = config.options
      .map(option => `<button class="gift-chat__option" type="button" data-gift-chat-option="${escapeHtml(option.value)}">${escapeHtml(option.label)}</button>`)
      .join('');

    options.querySelectorAll('[data-gift-chat-option]').forEach(button => {
      button.addEventListener('click', event => {
        event.stopPropagation();
        answers[config.id] = button.dataset.giftChatOption;
        renderSummary();

        if (currentStep < questions.length - 1) {
          currentStep += 1;
          renderQuestion();
          return;
        }

        currentStep = questions.length;
        step.textContent = '';
        title.textContent = '';
        hint.textContent = '';
        options.replaceChildren();
        showResults();
      });
    });
  };

  const showResults = async () => {
    const activeRequestToken = ++requestToken;
    const selection = {
      recipient: answers.recipient || 'friend',
      scene: answers.scene || 'birthday',
      mood: answers.mood || 'soft',
      budgetRange: answers.budgetRange || 'mid'
    };

    question.hidden = true;
    results.hidden = false;
    grid.innerHTML = '';
    status.textContent = 'おすすめを選んでいます。少しだけお待ちください。';

    const ranked = [...productCatalog]
      .map(product => ({
        product,
        score: scoreGiftFinderProduct(product, selection)
      }))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return Math.abs(a.product.price - 8500) - Math.abs(b.product.price - 8500);
      })
      .slice(0, 3)
      .map(entry => entry.product);

    let reasonsById = new Map();
    try {
      const data = await fetchGiftFinderReasons(selection, ranked);
      if (activeRequestToken !== requestToken) return;
      reasonsById = new Map((data?.items || []).map(item => [item.productId, item.reason]));
    } catch (error) {
      if (activeRequestToken !== requestToken) return;
      reasonsById = new Map();
    }

    if (activeRequestToken !== requestToken) return;
    status.textContent = '選んだ条件に合わせて、贈りものに合う花束を選びました。';
    grid.innerHTML = ranked
      .map(product => renderGiftFinderResultCard(
        product,
        reasonsById.get(String(product.slug || product.id)) || buildGiftFinderFallbackReason(selection, product)))
      .join('');

    grid.querySelectorAll('.gift-chat-card').forEach(card => {
      const productName = card.querySelector('h4')?.textContent?.trim();
      const product = productName ? productCatalog.find(item => item.name === productName) : null;
      const link = card.querySelector('a[href*="product-detail"]');
      if (!product || !link) return;
      bindClickableCard(card, getProductDetailHref(product), product.name);
    });
  };

  const resetChat = () => {
    requestToken += 1;
    currentStep = 0;
    Object.keys(answers).forEach(key => delete answers[key]);
    question.hidden = false;
    results.hidden = true;
    grid.innerHTML = '';
    status.textContent = '選んだ条件に合わせて、贈りものに合う花束を選びました。';
    renderSummary();
    renderQuestion();
  };

  toggle.addEventListener('click', () => {
    if (panel.hidden) {
      openPanel();
      return;
    }
    closePanel();
  });

  toggle.addEventListener('click', event => {
    event.stopPropagation();
  });

  panel.addEventListener('click', event => {
    event.stopPropagation();
  });

  close.addEventListener('click', event => {
    event.stopPropagation();
    closePanel();
  });

  restart.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    resetChat();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) {
      closePanel();
    }
  });

  document.addEventListener('click', event => {
    if (panel.hidden) return;
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest('[data-gift-chat-panel], [data-gift-chat-toggle]')) return;
    closePanel();
  });

  resetChat();
}

async function initializeProductFilter() {
  const chips = document.querySelectorAll('[data-filter]');
  const priceCheckboxes = document.querySelectorAll('[data-price-range]');
  const productGrid = document.querySelector('#product-grid');
  const productGridTitle = document.querySelector('#product-grid-title');
  const productGridSection = document.querySelector('.product-listing__grid-section');
  const favoritesToggle = document.querySelector('[data-favorites-toggle]');
  const pageLinks = document.querySelectorAll('[data-page-link]');
  const nextLink = document.querySelector('[data-page-next]');
  const sortSelect = document.querySelector('#sort-products');
  if (!productGrid) return;
  if (productGridSection) {
    productGridSection.classList.add('is-pending');
  }
  let availableProducts = PRODUCT_CATALOG;

  try {
    const publicProducts = await fetchPublicProducts();
    if (publicProducts.length) {
      availableProducts = publicProducts;
      productGrid.innerHTML = publicProducts.map(renderProductCard).join('');
    }
  } catch (error) {
    window.console?.warn?.(error);
  }

  initializeGiftFinderWithCatalog(availableProducts);

  let cards = Array.from(document.querySelectorAll('.product-card[data-scene]'));
  if (!cards.length) {
    if (productGridSection) {
      productGridSection.classList.remove('is-pending');
    }
    return;
  }

  let currentPage = 1;
  let currentSceneFilter = 'all';
  let favoritesOnly = false;
  let currentFeatureKey = '';
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

    if (currentFeatureKey && FEATURE_COLLECTION_MAP[currentFeatureKey]) {
      nextParams.set('feature', currentFeatureKey);
    } else {
      nextParams.delete('feature');
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
    const featurePreferredIds = currentFeatureKey && FEATURE_COLLECTION_MAP[currentFeatureKey]
      ? FEATURE_COLLECTION_MAP[currentFeatureKey].preferredProductIds || []
      : PRODUCT_RECOMMENDED_PRIORITY_IDS;
    const featureOrder = new Map(featurePreferredIds.map((id, index) => [id, index]));

    const getCardProductId = card => {
      const dataId = String(card.dataset.productId || '').trim();
      if (dataId) return dataId;
      const title = card.querySelector('h3')?.textContent?.trim();
      return title ? getFavoriteProductId(PRODUCT_BY_NAME.get(title)) : '';
    };

    if (sortType === 'price-asc') {
      sortedCards.sort((a, b) => getCardPrice(a) - getCardPrice(b));
    } else if (sortType === 'price-desc') {
      sortedCards.sort((a, b) => getCardPrice(b) - getCardPrice(a));
    } else if (featureOrder.size) {
      sortedCards.sort((a, b) => {
        const aIndex = featureOrder.has(getCardProductId(a)) ? featureOrder.get(getCardProductId(a)) : Number.POSITIVE_INFINITY;
        const bIndex = featureOrder.has(getCardProductId(b)) ? featureOrder.get(getCardProductId(b)) : Number.POSITIVE_INFINITY;
        return aIndex - bIndex;
      });
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

  const matchesFavorites = card => {
    if (!favoritesOnly) return true;
    return isFavoriteProductId(card.dataset.productId);
  };

  const applyFilters = (filter, options = {}) => {
    const { preservePage = false, keepFeature = true } = options;
    currentSceneFilter = filter;
    if (!keepFeature) {
      currentFeatureKey = '';
      updateFeatureCollectionBanner('');
      if (sortSelect) {
        sortCards(sortSelect.value);
      }
    }

    cards.forEach(card => {
      const normalizedScene = card.dataset.scene === 'anniversary' ? 'celebration' : card.dataset.scene;
      const matchesScene = filter === 'all' || normalizedScene === filter;
      const matches = matchesScene && matchesPriceRange(card) && matchesFavorites(card);
      card.classList.toggle('is-filtered-out', !matches);
    });

    chips.forEach(chip => chip.classList.toggle('is-active', chip.dataset.filter === filter));
    if (!preservePage) currentPage = 1;
    updatePagination(getVisibleCards());
    syncProductsUrl();
    syncFavoriteSummary(readFavoriteIds().length, favoritesOnly);
  };

  cards.forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const product = title ? PRODUCT_BY_NAME.get(title) : null;
    const productId = getFavoriteProductId(product);
    if (productId) {
      card.dataset.productId = productId;
    }
    const link = card.querySelector('a[href*="product-detail"]');
    const href = link?.getAttribute('href');
    if (href && title) {
      bindClickableCard(card, href, title);
    } else if (product) {
      bindClickableCard(card, getProductDetailHref(product), product.name);
    }
  });

  syncProductGridFavoriteButtons();
  syncFavoriteSummary(readFavoriteIds().length, favoritesOnly);

  chips.forEach(chip => {
    chip.addEventListener('click', () => applyFilters(chip.dataset.filter, { keepFeature: false }));
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
      syncProductGridFavoriteButtons();
      currentPage = 1;
      updatePagination(getVisibleCards());
      syncProductsUrl();
    });
  }

  if (favoritesToggle) {
    favoritesToggle.addEventListener('click', () => {
      const favoriteCount = readFavoriteIds().length;
      if (!favoritesOnly && favoriteCount === 0) return;

      favoritesOnly = !favoritesOnly;
      applyFilters(currentSceneFilter);
      scrollToProductGrid();
    });
  }

  const storedState = readStoredState();
  const featureKey = params.get('feature') || '';
  const feature = FEATURE_COLLECTION_MAP[featureKey];
  currentFeatureKey = feature ? featureKey : '';
  updateFeatureCollectionBanner(currentFeatureKey);
  const initial = feature?.scene || params.get('scene') || storedState?.scene || 'all';
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
  if (productGridSection) {
    productGridSection.classList.remove('is-pending');
  }

  document.addEventListener('bloomletter:favorites-changed', () => {
    syncProductGridFavoriteButtons();
    if (favoritesOnly && readFavoriteIds().length === 0) {
      favoritesOnly = false;
    }
    applyFilters(currentSceneFilter, { preservePage: true });
  });

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
  if (!document.querySelector('#product-grid')) {
    initializeGiftFinderWithCatalog();
  }
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
