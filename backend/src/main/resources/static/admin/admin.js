(function () {
  const sessionKey = 'bloomletter-admin-basic-token';
  const userKey = 'bloomletter-admin-user-name';

  function getToken() {
    return window.sessionStorage.getItem(sessionKey);
  }

  function setSession(token, userName) {
    window.sessionStorage.setItem(sessionKey, token);
    if (userName) {
      window.sessionStorage.setItem(userKey, userName);
    }
  }

  function clearSession() {
    window.sessionStorage.removeItem(sessionKey);
    window.sessionStorage.removeItem(userKey);
  }

  function getUserName() {
    return window.sessionStorage.getItem(userKey) || '\u7ba1\u7406\u8005';
  }

  function createBasicToken(email, password) {
    return window.btoa(`${email}:${password}`);
  }

  async function api(path, options = {}) {
    const headers = new Headers(options.headers || {});
    if (!headers.has('Content-Type') && options.body) {
      headers.set('Content-Type', 'application/json');
    }

    const token = getToken();
    if (token && !headers.has('Authorization')) {
      headers.set('Authorization', `Basic ${token}`);
    }

    const response = await fetch(path, {
      ...options,
      headers
    });

    if (response.status === 401) {
      clearSession();
      if (!window.location.pathname.endsWith('/login.html')) {
        window.location.href = '/admin/login.html';
      }
      throw new Error('\u8a8d\u8a3c\u304c\u5fc5\u8981\u3067\u3059\u3002\u518d\u5ea6\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002');
    }

    const contentType = response.headers.get('content-type') || '';
    const data = contentType.includes('application/json') ? await response.json() : null;

    if (!response.ok) {
      const message = toJapaneseMessage(data?.message || '\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002');
      const detail = data?.validationErrors
        ? formatValidationErrors(data.validationErrors)
        : '';
      const error = new Error(detail ? `${message} (${detail})` : message);
      error.validationErrors = data?.validationErrors || {};
      throw error;
    }

    return data;
  }

  function requireSession() {
    if (!getToken()) {
      window.location.href = '/admin/login.html';
      return false;
    }
    return true;
  }

  function setNotice(element, message, isError = false) {
    if (!element) return;
    element.textContent = message || '';
    element.classList.toggle('is-error', Boolean(isError && message));
  }

  function setText(element, value) {
    if (!element) return;
    element.textContent = value;
  }

  function clearFieldErrors(form) {
    if (!form) return;
    Array.from(form.elements).forEach((element) => {
      if (!(element instanceof HTMLElement)) return;
      element.style.borderColor = '';
      element.style.boxShadow = '';
      element.removeAttribute('aria-invalid');
      element.removeAttribute('title');
    });
  }

  function applyFieldErrors(form, validationErrors) {
    if (!form || !validationErrors) return;
    Object.entries(validationErrors).forEach(([field, message]) => {
      const element = form.elements[field];
      if (!(element instanceof HTMLElement)) return;
      element.style.borderColor = '#b86c6c';
      element.style.boxShadow = '0 0 0 4px rgba(184, 108, 108, 0.12)';
      element.setAttribute('aria-invalid', 'true');
      element.setAttribute('title', `${fieldLabel(field)}: ${toJapaneseValidationMessage(field, message)}`);
    });
  }

  function toJapaneseMessage(message) {
    if (!message) return '\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002';
    if (message.startsWith('Product slug already exists:')) {
      const slug = message.split(':').slice(1).join(':').trim();
      return `\u540c\u3058 slug \u304c\u3059\u3067\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u3059: ${slug}`;
    }
    if (message.startsWith('Scene not found:')) {
      return '\u9078\u629e\u3057\u305f\u30b7\u30fc\u30f3\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002';
    }
    if (message.startsWith('Product not found:')) {
      return '\u5bfe\u8c61\u306e\u5546\u54c1\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002';
    }
    if (message.startsWith('Inquiry not found:')) {
      return '\u5bfe\u8c61\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002';
    }
    if (message === 'Invalid email or password') {
      return '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u307e\u305f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9055\u3044\u307e\u3059\u3002';
    }
    if (message === 'Validation failed') {
      return '\u5165\u529b\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002';
    }
    if (message === 'Authentication is required') {
      return '\u8a8d\u8a3c\u304c\u5fc5\u8981\u3067\u3059\u3002';
    }
    if (message === 'Access is denied') {
      return '\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u304c\u3042\u308a\u307e\u305b\u3093\u3002';
    }
    return message;
  }

  function fieldLabel(field) {
    const labels = {
      name: '\u5546\u54c1\u540d',
      slug: 'slug',
      price: '\u4fa1\u683c',
      description: '\u5546\u54c1\u8aac\u660e',
      imagePath: '\u753b\u50cf\u30d1\u30b9',
      imageAlt: '\u753b\u50cf alt',
      sceneId: '\u30b7\u30fc\u30f3',
      stockStatus: '\u5728\u5eab\u72b6\u614b',
      published: '\u516c\u958b\u72b6\u614b',
      featured: '\u7279\u96c6\u8868\u793a',
      displayOrder: '\u8868\u793a\u9806',
      email: '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
      password: '\u30d1\u30b9\u30ef\u30fc\u30c9',
      inquiryType: '\u304a\u554f\u3044\u5408\u308f\u305b\u7a2e\u5225',
      message: '\u672c\u6587',
      status: '\u30b9\u30c6\u30fc\u30bf\u30b9',
      phone: '\u96fb\u8a71\u756a\u53f7'
    };
    return labels[field] || field;
  }

  function toJapaneseValidationMessage(field, message) {
    if (!message) return '\u5165\u529b\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044';

    if (message.includes('must not be blank')) return '\u672a\u5165\u529b\u3067\u3059';
    if (message.includes('must not be null')) return '\u9078\u629e\u304c\u5fc5\u8981\u3067\u3059';
    if (message.includes('must be a well-formed email address')) return '\u6b63\u3057\u3044\u5f62\u5f0f\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044';
    if (message.includes('phone must be a valid phone number')) return '\u96fb\u8a71\u756a\u53f7\u306e\u5f62\u5f0f\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093';
    if (message.includes('slug must contain lowercase letters, numbers, and hyphens only')) return 'slug \u306f\u82f1\u5c0f\u6587\u5b57\u30fb\u6570\u5b57\u30fb\u30cf\u30a4\u30d5\u30f3\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059';
    if (message.includes('status must be UNREAD, IN_PROGRESS, or RESOLVED')) return '\u30b9\u30c6\u30fc\u30bf\u30b9\u306f UNREAD\u3001IN_PROGRESS\u3001RESOLVED \u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044';

    const sizeMatch = message.match(/size must be between (\d+) and (\d+)/);
    if (sizeMatch) {
      return `${sizeMatch[1]}\u301c${sizeMatch[2]}\u6587\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044`;
    }

    const maxMatch = message.match(/size must be between 0 and (\d+)/);
    if (maxMatch) {
      return `${maxMatch[1]}\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044`;
    }

    const minMatch = message.match(/must be greater than or equal to (\d+)/);
    if (minMatch) {
      return `${minMatch[1]}\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044`;
    }

    const maxValueMatch = message.match(/must be less than or equal to (\d+)/);
    if (maxValueMatch) {
      return `${maxValueMatch[1]}\u4ee5\u4e0b\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044`;
    }

    return message;
  }

  function formatValidationErrors(errors) {
    return Object.entries(errors)
      .map(([field, message]) => `${fieldLabel(field)}: ${toJapaneseValidationMessage(field, message)}`)
      .join(' / ');
  }

  function statusBadge(status) {
    if (status === 'PUBLISHED' || status === 'RESOLVED') return 'admin-badge admin-badge--resolved';
    if (status === 'UNREAD') return 'admin-badge admin-badge--unread';
    if (status === 'IN_PROGRESS') return 'admin-badge admin-badge--in-progress';
    if (status === 'DRAFT') return 'admin-badge admin-badge--draft';
    return 'admin-badge admin-badge--published';
  }

  function formatDate(value) {
    if (!value) return '-';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function formatPrice(value) {
    return `JPY ${Number(value || 0).toLocaleString('ja-JP')}`;
  }

  function hydrateUser() {
    document.querySelectorAll('[data-admin-user]').forEach((node) => {
      node.textContent = getUserName();
    });
  }

  function bindLogout() {
    document.querySelectorAll('[data-admin-logout]').forEach((button) => {
      button.addEventListener('click', () => {
        clearSession();
        window.location.href = '/admin/login.html';
      });
    });
  }

  async function initLoginPage() {
    const form = document.querySelector('[data-admin-login-form]');
    if (!form) return;

    const notice = document.querySelector('[data-admin-login-notice]');
    if (getToken()) {
      window.location.href = '/admin/products.html';
      return;
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      clearFieldErrors(form);
      setNotice(notice, 'Checking your credentials...');
      const email = form.elements.email.value.trim();
      const password = form.elements.password.value;

      try {
        const result = await api('/api/admin/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email, password })
        });
        setSession(createBasicToken(email, password), result.name);
        window.location.href = '/admin/products.html';
      } catch (error) {
        applyFieldErrors(form, error.validationErrors);
        setNotice(notice, error.message, true);
      }
    });
  }

  async function initProductsPage() {
    const page = document.querySelector('[data-admin-products-page]');
    if (!page || !requireSession()) return;
    hydrateUser();
    bindLogout();

    const notice = page.querySelector('[data-admin-products-notice]');
    const tableBody = page.querySelector('[data-admin-products-body]');
    const filterForm = page.querySelector('[data-admin-products-filter]');
    const productForm = page.querySelector('[data-admin-product-form]');
    const resetButtons = page.querySelectorAll('[data-admin-product-reset]');
    const totalMetric = page.querySelector('[data-admin-metric="products"]');
    const publishedMetric = page.querySelector('[data-admin-metric="published"]');
    const inquiriesMetric = page.querySelector('[data-admin-metric="inquiries"]');
    const sceneFilter = page.querySelector('[data-admin-scene-filter]');
    const sceneSelect = page.querySelector('[data-admin-scene-select]');
    const formTitle = page.querySelector('[data-admin-form-title]');
    const formSubmitLabel = page.querySelector('[data-admin-form-submit-label]');
    let scenes = [];
    let products = [];

    function fillSceneOptions() {
      if (!sceneFilter || !sceneSelect) return;
      const options = scenes
        .map((scene) => `<option value="${scene.id}">${scene.name}</option>`)
        .join('');
      sceneFilter.innerHTML = `<option value="">\u3059\u3079\u3066\u306e\u30b7\u30fc\u30f3</option>${options}`;
      sceneSelect.innerHTML = `<option value="">\u30b7\u30fc\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044</option>${options}`;
      if (!sceneSelect.value && scenes.length > 0) {
        sceneSelect.value = String(scenes[0].id);
      }
    }

    function fillForm(product) {
      if (!productForm) return;
      productForm.elements.productId.value = product?.id || '';
      productForm.elements.name.value = product?.name || '';
      productForm.elements.slug.value = product?.slug || '';
      productForm.elements.price.value = product?.price || '';
      productForm.elements.description.value = product?.description || '';
      productForm.elements.imagePath.value = product?.imagePath || '';
      productForm.elements.imageAlt.value = product?.imageAlt || '';
      productForm.elements.sceneId.value = product?.sceneId || '';
      productForm.elements.stockStatus.value = product?.stockStatus || 'IN_STOCK';
      productForm.elements.published.value = String(product?.published ?? true);
      productForm.elements.featured.value = String(product?.featured ?? false);
      productForm.elements.displayOrder.value = product?.displayOrder ?? 0;
      setText(formTitle, product ? '\u5546\u54c1\u3092\u7de8\u96c6' : '\u5546\u54c1\u3092\u767b\u9332');
      setText(formSubmitLabel, product ? '\u66f4\u65b0\u3059\u308b' : '\u767b\u9332\u3059\u308b');
    }

    function renderProducts() {
      if (!tableBody) return;
      if (!products.length) {
        tableBody.innerHTML = '<tr><td colspan="6" class="admin-empty">\u6761\u4ef6\u306b\u4e00\u81f4\u3059\u308b\u5546\u54c1\u304c\u3042\u308a\u307e\u305b\u3093\u3002</td></tr>';
        return;
      }

      tableBody.innerHTML = products.map((product) => `
        <tr>
          <td>
            <div class="admin-table__title">
              <strong>${product.name}</strong>
              <span class="admin-table__sub">${product.slug}</span>
            </div>
          </td>
          <td>${product.sceneName || '-'}</td>
          <td>${formatPrice(product.price)}</td>
          <td><span class="${statusBadge(product.published ? 'PUBLISHED' : 'DRAFT')}">${product.published ? '\u516c\u958b\u4e2d' : '\u4e0b\u66f8\u304d'}</span></td>
          <td>${product.stockStatus}</td>
          <td>
            <div class="admin-actions">
              <button type="button" class="admin-button--ghost" data-product-edit="${product.id}">\u7de8\u96c6</button>
              <button type="button" class="admin-button--danger" data-product-delete="${product.id}">\u524a\u9664</button>
            </div>
          </td>
        </tr>
      `).join('');

      tableBody.querySelectorAll('[data-product-edit]').forEach((button) => {
        button.addEventListener('click', () => {
          const product = products.find((item) => item.id === Number(button.dataset.productEdit));
          fillForm(product);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });

      tableBody.querySelectorAll('[data-product-delete]').forEach((button) => {
        button.addEventListener('click', async () => {
          const id = Number(button.dataset.productDelete);
          const product = products.find((item) => item.id === id);
          if (!product || !window.confirm(`\u300c${product.name}\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f`)) return;

          try {
            await api(`/api/admin/products/${id}`, { method: 'DELETE' });
            setNotice(notice, '\u5546\u54c1\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002');
            await loadProducts();
            fillForm(null);
          } catch (error) {
            setNotice(notice, error.message, true);
          }
        });
      });
    }

    async function loadDashboard() {
      const dashboard = await api('/api/admin/dashboard');
      setText(totalMetric, dashboard.productCount);
      setText(publishedMetric, dashboard.publishedProductCount);
      setText(inquiriesMetric, dashboard.contactInquiryCount);
    }

    async function loadScenes() {
      scenes = await api('/api/admin/scenes');
      fillSceneOptions();
    }

    async function loadProducts() {
      const params = new URLSearchParams();
      const query = filterForm.elements.q.value.trim();
      const sceneId = filterForm.elements.sceneId.value;
      const publishStatus = filterForm.elements.publishStatus.value;
      if (query) params.set('q', query);
      if (sceneId) params.set('sceneId', sceneId);
      if (publishStatus !== '') params.set('publishStatus', publishStatus);

      const result = await api(`/api/admin/products${params.toString() ? `?${params.toString()}` : ''}`);
      products = result.items || [];
      renderProducts();
    }

    filterForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      setNotice(notice, '\u5546\u54c1\u4e00\u89a7\u3092\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059\u3002');
      try {
        await loadProducts();
        setNotice(notice, '\u5546\u54c1\u4e00\u89a7\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002');
      } catch (error) {
        setNotice(notice, error.message, true);
      }
    });

    resetButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterForm.reset();
        fillForm(null);
        loadProducts().catch((error) => setNotice(notice, error.message, true));
      });
    });

    productForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      clearFieldErrors(productForm);
      const id = productForm.elements.productId.value;
      const payload = {
        name: productForm.elements.name.value.trim(),
        slug: productForm.elements.slug.value.trim(),
        price: Number(productForm.elements.price.value),
        description: productForm.elements.description.value.trim(),
        imagePath: productForm.elements.imagePath.value.trim(),
        imageAlt: productForm.elements.imageAlt.value.trim(),
        sceneId: Number(productForm.elements.sceneId.value),
        stockStatus: productForm.elements.stockStatus.value,
        published: productForm.elements.published.value === 'true',
        featured: productForm.elements.featured.value === 'true',
        displayOrder: Number(productForm.elements.displayOrder.value)
      };

      try {
        setNotice(notice, id ? '\u5546\u54c1\u3092\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059\u3002' : '\u5546\u54c1\u3092\u767b\u9332\u3057\u3066\u3044\u307e\u3059\u3002');
        await api(id ? `/api/admin/products/${id}` : '/api/admin/products', {
          method: id ? 'PUT' : 'POST',
          body: JSON.stringify(payload)
        });
        setNotice(notice, id ? '\u5546\u54c1\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002' : '\u5546\u54c1\u3092\u767b\u9332\u3057\u307e\u3057\u305f\u3002');
        fillForm(null);
        await Promise.all([loadDashboard(), loadProducts()]);
      } catch (error) {
        applyFieldErrors(productForm, error.validationErrors);
        setNotice(notice, error.message, true);
      }
    });

    fillForm(null);
    setNotice(notice, '\u5546\u54c1\u7ba1\u7406\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002');

    try {
      await Promise.all([loadDashboard(), loadScenes(), loadProducts()]);
      setNotice(notice, '\u5546\u54c1\u7ba1\u7406\u753b\u9762\u306e\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f\u3002');
    } catch (error) {
      setNotice(notice, error.message, true);
    }
  }

  async function initInquiriesPage() {
    const page = document.querySelector('[data-admin-inquiries-page]');
    if (!page || !requireSession()) return;
    hydrateUser();
    bindLogout();

    const notice = page.querySelector('[data-admin-inquiries-notice]');
    const tableBody = page.querySelector('[data-admin-inquiries-body]');
    const filterForm = page.querySelector('[data-admin-inquiries-filter]');
    const statusForm = page.querySelector('[data-admin-inquiry-status-form]');
    const totalMetric = page.querySelector('[data-admin-inquiry-metric="total"]');
    const unreadMetric = page.querySelector('[data-admin-inquiry-metric="unread"]');
    const selectedName = page.querySelector('[data-admin-inquiry-name]');
    const selectedMeta = page.querySelector('[data-admin-inquiry-meta]');
    const selectedMessage = page.querySelector('[data-admin-inquiry-message]');
    const selectedStatus = page.querySelector('[data-admin-inquiry-status]');
    let inquiries = [];
    let selectedInquiry = null;

    function renderSelectedInquiry() {
      if (!selectedInquiry) {
        setText(selectedName, '\u304a\u554f\u3044\u5408\u308f\u305b\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044');
        if (selectedMeta) {
          selectedMeta.innerHTML = '<div><dt>\u72b6\u6cc1</dt><dd>\u4e00\u89a7\u304b\u3089\u9078\u629e\u3059\u308b\u3068\u8a73\u7d30\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002</dd></div>';
        }
        setText(selectedMessage, '\u9078\u629e\u3057\u305f\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u672c\u6587\u304c\u3053\u3053\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002');
        statusForm.elements.inquiryId.value = '';
        statusForm.elements.status.value = 'UNREAD';
        if (selectedStatus) {
          selectedStatus.className = 'admin-badge admin-badge--unread';
          selectedStatus.textContent = 'UNREAD';
        }
        return;
      }

      setText(selectedName, selectedInquiry.name);
      if (selectedMeta) {
        selectedMeta.innerHTML = `
        <div><dt>Email</dt><dd>${selectedInquiry.email}</dd></div>
        <div><dt>Phone</dt><dd>${selectedInquiry.phone || '-'}</dd></div>
        <div><dt>Type</dt><dd>${selectedInquiry.inquiryType}</dd></div>
        <div><dt>Received</dt><dd>${formatDate(selectedInquiry.createdAt)}</dd></div>
      `;
      }
      setText(selectedMessage, selectedInquiry.message);
      statusForm.elements.inquiryId.value = selectedInquiry.id;
      statusForm.elements.status.value = selectedInquiry.status;
      if (selectedStatus) {
        selectedStatus.className = statusBadge(selectedInquiry.status);
        selectedStatus.textContent = selectedInquiry.status;
      }
    }

    function renderInquiries() {
      if (!tableBody) return;
      if (!inquiries.length) {
        tableBody.innerHTML = '<tr><td colspan="5" class="admin-empty">\u6761\u4ef6\u306b\u4e00\u81f4\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b\u304c\u3042\u308a\u307e\u305b\u3093\u3002</td></tr>';
        renderSelectedInquiry();
        return;
      }

      tableBody.innerHTML = inquiries.map((inquiry) => `
        <tr data-inquiry-row="${inquiry.id}" class="${selectedInquiry?.id === inquiry.id ? 'is-active' : ''}">
          <td>
            <div class="admin-table__title">
              <strong>${inquiry.name}</strong>
              <span class="admin-table__sub">${inquiry.email}</span>
            </div>
          </td>
          <td>${inquiry.inquiryType}</td>
          <td><span class="${statusBadge(inquiry.status)}">${inquiry.status}</span></td>
          <td>${formatDate(inquiry.createdAt)}</td>
          <td>${inquiry.message.length > 36 ? `${inquiry.message.slice(0, 36)}...` : inquiry.message}</td>
        </tr>
      `).join('');

      tableBody.querySelectorAll('[data-inquiry-row]').forEach((row) => {
        row.addEventListener('click', async () => {
          try {
            selectedInquiry = await api(`/api/admin/inquiries/${row.dataset.inquiryRow}`);
            renderSelectedInquiry();
            renderInquiries();
          } catch (error) {
            setNotice(notice, error.message, true);
          }
        });
      });

      if (!selectedInquiry) {
        selectedInquiry = inquiries[0];
      }
      renderSelectedInquiry();
    }

    async function loadDashboard() {
      const dashboard = await api('/api/admin/dashboard');
      setText(totalMetric, dashboard.contactInquiryCount);
    }

    async function loadUnreadCount() {
      const result = await api('/api/admin/inquiries?status=UNREAD');
      setText(unreadMetric, result.totalItems);
    }

    async function loadInquiries() {
      const params = new URLSearchParams();
      const query = filterForm.elements.q.value.trim();
      const status = filterForm.elements.status.value;
      if (query) params.set('q', query);
      if (status) params.set('status', status);

      const result = await api(`/api/admin/inquiries${params.toString() ? `?${params.toString()}` : ''}`);
      inquiries = result.items || [];
      if (selectedInquiry) {
        selectedInquiry = inquiries.find((item) => item.id === selectedInquiry.id) || inquiries[0] || null;
      }
      renderInquiries();
    }

    filterForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      setNotice(notice, '\u304a\u554f\u3044\u5408\u308f\u305b\u4e00\u89a7\u3092\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059\u3002');
      try {
        await loadInquiries();
        setNotice(notice, '\u304a\u554f\u3044\u5408\u308f\u305b\u4e00\u89a7\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002');
      } catch (error) {
        setNotice(notice, error.message, true);
      }
    });

    statusForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      clearFieldErrors(statusForm);
      const id = statusForm.elements.inquiryId.value;
      if (!id) {
        setNotice(notice, '\u5148\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002', true);
        return;
      }

      try {
        setNotice(notice, '\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059\u3002');
        selectedInquiry = await api(`/api/admin/inquiries/${id}/status`, {
          method: 'PATCH',
          body: JSON.stringify({ status: statusForm.elements.status.value })
        });
        await Promise.all([loadInquiries(), loadDashboard(), loadUnreadCount()]);
        setNotice(notice, '\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002');
      } catch (error) {
        applyFieldErrors(statusForm, error.validationErrors);
        setNotice(notice, error.message, true);
      }
    });

    setNotice(notice, '\u304a\u554f\u3044\u5408\u308f\u305b\u7ba1\u7406\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002');

    try {
      await Promise.all([loadDashboard(), loadUnreadCount(), loadInquiries()]);
      setNotice(notice, '\u304a\u554f\u3044\u5408\u308f\u305b\u7ba1\u7406\u753b\u9762\u306e\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f\u3002');
    } catch (error) {
      setNotice(notice, error.message, true);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLoginPage();
    initProductsPage();
    initInquiriesPage();
  });
})();
