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

function initializeProductFilter() {
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.product-card[data-scene]');
  const pageLinks = document.querySelectorAll('[data-page-link]');
  const nextLink = document.querySelector('[data-page-next]');
  if (!cards.length) return;

  let currentPage = 1;
  const perPage = 8;

  const updatePagination = visibleCards => {
    const totalPages = Math.max(1, Math.ceil(visibleCards.length / perPage));
    if (currentPage > totalPages) currentPage = totalPages;

    cards.forEach(card => {
      if (card.classList.contains('is-filtered-out')) {
        card.classList.add('is-page-hidden');
      }
    });

    visibleCards.forEach((card, index) => {
      const page = Math.floor(index / perPage) + 1;
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

  const getVisibleCards = () => Array.from(cards).filter(card => !card.classList.contains('is-filtered-out'));

  const applyFilter = filter => {
    cards.forEach(card => {
      const normalizedScene = card.dataset.scene === 'anniversary' ? 'celebration' : card.dataset.scene;
      const matches = filter === 'all' || normalizedScene === filter;
      card.classList.toggle('is-filtered-out', !matches);
    });
    chips.forEach(chip => chip.classList.toggle('is-active', chip.dataset.filter === filter));
    currentPage = 1;
    updatePagination(getVisibleCards());
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => applyFilter(chip.dataset.filter));
  });

  pageLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      currentPage = Number(link.dataset.pageLink);
      updatePagination(getVisibleCards());
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
      }
    });
  }

  const params = new URLSearchParams(window.location.search);
  const initial = params.get('scene') || 'all';
  applyFilter(initial);
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

document.addEventListener('DOMContentLoaded', () => {
  initializeSiteNavigation();
  initializeProductFilter();
  initializeContactForm();
  initializeHeroSlides();
});
