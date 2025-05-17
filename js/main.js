import {
  selectRestaurant,
  showMeal,
  renderMealList,
  searchDish
} from './restaurant.js';

// 全局函数绑定
const globalFunctions = {
  toggleDropdown: () => {
    document.getElementById('dropdown').classList.toggle('active');
  },

  showMap: () => {
    const mapContainer = document.createElement('div');
    mapContainer.innerHTML = `
        <div style="padding:20px;text-align:center;">
          <h3>餐厅地图</h3>
          <img src="images/map-placeholder.jpg" 
               style="max-width:100%;border-radius:8px;">
        </div>
      `;
    showPopup(mapContainer);
  },

  showPage: (page) => {
    const homePage = document.getElementById('home-page');
    const profilePage = document.getElementById('profile-page');
    const navHome = document.getElementById('nav-home');
    const navProfile = document.getElementById('nav-profile');

    if (page === 'home') {
      homePage.style.display = '';
      profilePage.style.display = 'none';
      navHome.classList.add('active');
      navProfile.classList.remove('active');
    } else {
      homePage.style.display = 'none';
      profilePage.style.display = '';
      navHome.classList.remove('active');
      navProfile.classList.add('active');
    }
  },

  showPopup: (content) => {
    const popup = document.createElement('div');
    popup.className = 'popup-mask';
    popup.innerHTML = `
        <div class="popup-content">
          <span class="popup-close" onclick="this.parentElement.parentElement.remove()">×</span>
          ${content.innerHTML}
        </div>
      `;
    document.body.appendChild(popup);
  },

  closePopup: () => {
    const popup = document.querySelector('.popup-mask');
    if (popup) popup.remove();
  },

  // 处理搜索结果的显示
  displaySearchResults: (results) => {
    if (results.length === 0) {
      const noResultsContainer = document.createElement('div');
      noResultsContainer.innerHTML = `
          <div style="padding:20px;text-align:center;">
            <h3>未找到匹配的菜品</h3>
            <p>请尝试其他搜索关键词</p>
          </div>
        `;
      showPopup(noResultsContainer);
      return;
    }

    const resultsContainer = document.createElement('div');
    resultsContainer.innerHTML = `
        <div style="padding:20px;">
          <h3>搜索结果</h3>
          <div class="search-results">
            ${results.map(item => `
              <div class="search-result-item">
                <h4>${item.dishName}</h4>
                <p>食堂: ${item.restaurantName}</p>
                <p>分区: ${item.sectionName}</p>
                <p>餐次: ${item.mealType}</p>
                <p>价格: ¥${item.price}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    showPopup(resultsContainer);
  },

  // 搜索处理函数
  handleSearch: () => {
    const searchInput = document.getElementById('search-input');
    if (!searchInput || !searchInput.value.trim()) return;

    const keyword = searchInput.value.trim();
    const results = searchDish(keyword);
    globalFunctions.displaySearchResults(results);
    searchInput.value = '';
  }
};

// 初始化事件
document.addEventListener('DOMContentLoaded', () => {
  renderMealList();

  // 点击外部关闭下拉
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.restaurant-select')) {
      document.getElementById('dropdown').classList.remove('active');
    }
  });

  // 绑定搜索框事件
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  if (searchInput && searchButton) {
    // 点击搜索按钮时搜索
    searchButton.addEventListener('click', globalFunctions.handleSearch);

    // 按回车键时搜索
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        globalFunctions.handleSearch();
      }
    });
  }
});

// 暴露全局方法
Object.entries(globalFunctions).forEach(([name, fn]) => {
  window[name] = fn;
});

// 特殊导出
window.selectRestaurant = selectRestaurant;
window.showMeal = showMeal;
window.searchDish = searchDish;
window.handleSearch = globalFunctions.handleSearch;