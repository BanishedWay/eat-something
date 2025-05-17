// 餐厅菜品数据
const imagePaths = {
  "皮蛋瘦肉粥": "images/皮蛋瘦肉粥.png",
  "豆浆油条": "images/豆浆油条.png",
  "宫保鸡丁": "images/宫保鸡丁.png",
  "鱼香肉丝盖饭": "images/鱼香肉丝盖饭.png",
  "番茄牛腩": "images/番茄牛腩.png",
  "清炒时蔬": "images/清炒时蔬.png",
  "明湖烤鸭": "images/明湖烤鸭.png",
  "糖醋里脊": "images/糖醋里脊.png",
  "烤鸡腿": "images/烤鸡腿.png",
  "牛奶燕麦粥": "images/牛奶燕麦粥.png",
  "煎饺": "images/煎饺.png",
  // 添加剩余的菜品
  "小笼包": "images/小笼包.png",
  "鸡蛋灌饼": "images/鸡蛋灌饼.png",
  "葱油饼": "images/葱油饼.png",
  "红烧排骨": "images/红烧排骨.png",
  "西红柿炒蛋": "images/西红柿炒蛋.png",
  "青椒土豆丝": "images/青椒土豆丝.png",
  "麻婆豆腐": "images/麻婆豆腐.png",
  "蒜蓉生菜": "images/蒜蓉生菜.png",
  "红烧茄子": "images/红烧茄子.png",
  "豆沙包": "images/豆沙包.png",
  "蛋挞": "images/蛋挞.png",
  "玉米棒": "images/玉米棒.png",
  "鱼香茄子": "images/鱼香茄子.png",
  "青椒肉丝": "images/青椒肉丝.png",
  "土豆炖牛腩": "images/土豆炖牛腩.png",
  "红烧豆腐": "images/红烧豆腐.png",
  "凉拌黄瓜": "images/凉拌黄瓜.png",
  "炒面": "images/炒面.png"
};

const restaurantData = {
  "学苑食堂": {
    breakfast: {
      recommend: [
        { name: "皮蛋瘦肉粥", price: 4, location: "A区", star: 5 },
        { name: "豆浆油条", price: 5, location: "B区", star: 4 }
      ],
      all: [
        { name: "小笼包", price: 4, location: "A区" },
        { name: "鸡蛋灌饼", price: 5, location: "B区" },
        { name: "葱油饼", price: 4, location: "B区" }
      ]
    },
    lunch: {
      recommend: [
        { name: "宫保鸡丁", price: 12, location: "D区", star: 5 },
        { name: "鱼香肉丝盖饭", price: 15, location: "E区", star: 4 }
      ],
      all: [
        { name: "红烧排骨", price: 12, location: "D区" },
        { name: "西红柿炒蛋", price: 8, location: "E区" },
        { name: "青椒土豆丝", price: 6, location: "F区" }
      ]
    },
    dinner: {
      recommend: [
        { name: "番茄牛腩", price: 16.8, location: "G区", star: 5 },
        { name: "清炒时蔬", price: 7, location: "H区", star: 4 }
      ],
      all: [
        { name: "麻婆豆腐", price: 7, location: "G区" },
        { name: "蒜蓉生菜", price: 5, location: "H区" },
        { name: "红烧茄子", price: 6, location: "I区" }
      ]
    }
  },
  "明湖餐厅": {
    breakfast: {
      recommend: [
        { name: "牛奶燕麦粥", price: 6, location: "A区", star: 5 },
        { name: "煎饺", price: 5, location: "B区", star: 4 }
      ],
      all: [
        { name: "豆沙包", price: 3, location: "A区" },
        { name: "蛋挞", price: 4, location: "B区" },
        { name: "玉米棒", price: 2, location: "C区" }
      ]
    },
    lunch: {
      recommend: [
        { name: "明湖烤鸭", price: 23.5, location: "D区", star: 5 },
        { name: "糖醋里脊", price: 14, location: "E区", star: 4 }
      ],
      all: [
        { name: "鱼香茄子", price: 8, location: "D区" },
        { name: "青椒肉丝", price: 10, location: "E区" },
        { name: "土豆炖牛腩", price: 16, location: "F区" }
      ]
    },
    dinner: {
      recommend: [
        { name: "明湖烤鸭", price: 23.5, location: "D区", star: 5 },
        { name: "烤鸡腿", price: 12, location: "G区", star: 4 },
      ],
      all: [
        { name: "红烧豆腐", price: 7, location: "G区" },
        { name: "凉拌黄瓜", price: 4, location: "H区" },
        { name: "炒面", price: 8, location: "I区" }
      ]
    }
  }
};
let currentRestaurant = document.getElementById('current-restaurant').innerText.trim();
let currentMeal = 0; // 0:早餐 1:午餐 2:晚餐

function selectRestaurant(name) {
  document.getElementById('current-restaurant').innerText = name;
  document.getElementById('dropdown').classList.remove('active');
  currentRestaurant = name;

  // Clear search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
  }

  // Hide all back buttons
  document.querySelectorAll('.back-from-search-btn').forEach(btn => {
    btn.style.display = 'none';
  });

  // Reset titles and visibility of recommend sections for all meal lists
  const mealLists = document.querySelectorAll('.meal-list');
  mealLists.forEach(list => {
    const sectionTitleContainer = list.querySelector('.section-title-container');
    if (sectionTitleContainer) {
      const sectionTitle = sectionTitleContainer.querySelector('.section-title');
      if (sectionTitle) sectionTitle.textContent = '全部菜品';
    }
    const recommendSection = list.querySelector('.recommend');
    const sectionTitleRecommend = list.querySelector('.section-title-recommend');

    if (recommendSection) recommendSection.style.display = '';
    if (sectionTitleRecommend) sectionTitleRecommend.style.display = '';
  });

  renderMealList();
}
function showMeal(idx) {
  currentMeal = idx;
  const tabs = document.querySelectorAll('.tab');
  const mealLists = document.querySelectorAll('.meal-list'); // Renamed from 'lists' for clarity

  // Toggle active tab and meal list
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === idx);
  });
  mealLists.forEach((list, i) => {
    list.classList.toggle('active', i === idx);
  });

  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    // If there's a search term, search within the new meal type
    searchDish(searchTerm);
  } else {
    // Otherwise, clear search input and reset views
    if (searchInput) {
      searchInput.value = '';
    }

    // Hide all back buttons when switching meals
    document.querySelectorAll('.back-from-search-btn').forEach(btn => {
      btn.style.display = 'none';
    });

    // Reset all meal lists to their default state (title and recommend visibility)
    mealLists.forEach(list => {
      const sectionTitleContainer = list.querySelector('.section-title-container');
      if (sectionTitleContainer) {
        const sectionTitle = sectionTitleContainer.querySelector('.section-title');
        if (sectionTitle) sectionTitle.textContent = '全部菜品';
      }
      const recommendSection = list.querySelector('.recommend');
      const sectionTitleRecommend = list.querySelector('.section-title-recommend');

      if (recommendSection) recommendSection.style.display = ''; // Show recommend section
      if (sectionTitleRecommend) sectionTitleRecommend.style.display = ''; // Show recommend title
    });
    renderMealList(); // Render the content for the newly selected meal type
  }
}

function renderMealList() {
  const mealTypes = ["breakfast", "lunch", "dinner"];
  const meal = restaurantData[currentRestaurant][mealTypes[currentMeal]];
  // 推荐菜品
  let recommendHtml = '';
  meal.recommend.forEach(item => {
    recommendHtml += `
            <div class="recommend-item">
              <img src="${imagePaths[item.name]}" alt="${item.name}">
              <div class="recommend-info">
                <div class="name">${item.name}</div>
                <div class="price">￥${item.price}</div>
                <div class="location">档口：${item.location}</div>
              </div>
              <span class="recommend-stars">${item.star === 5 ? '★★★★★' : '★★★★☆'}</span>
            </div>
          `;
  });
  // 全部菜品（推荐+全部，去重）
  const allDishesMap = {};
  meal.recommend.forEach(item => {
    allDishesMap[item.name] = item;
  });
  meal.all.forEach(item => {
    allDishesMap[item.name] = item;
  });
  let allHtml = '';
  const dishesByLocation = {};
  Object.values(allDishesMap).forEach(item => {
    if (!dishesByLocation[item.location]) {
      dishesByLocation[item.location] = [];
    }
    dishesByLocation[item.location].push(item);
  });

  // Sort locations, e.g., A区, B区, C区 ...
  const sortedLocations = Object.keys(dishesByLocation).sort();

  sortedLocations.forEach(location => {
    allHtml += `<h4 class="dish-location-title">${location}</h4>`;
    dishesByLocation[location].forEach(item => {
      allHtml += `<li class="dish-item"><span class="name">${item.name} </span><span class="price">￥${item.price}</span></li>`;
    });
  });
  // 渲染到当前激活的meal-list
  const mealLists = document.querySelectorAll('.meal-list');
  mealLists.forEach((list, idx) => {
    if (idx === currentMeal) {
      list.querySelector('.recommend').innerHTML = recommendHtml;
      list.querySelector('.dish-list').innerHTML = allHtml;
    }
  });
}
// 页面初始渲染
document.addEventListener('DOMContentLoaded', function () {
  renderMealList();
  // 初始化盲盒功能（如果相关元素存在）
  if (document.getElementById('restaurant-select') && document.getElementById('draw-blind-box-btn')) {
    populateRestaurantSelectBlindBox(); // 重命名以避免与首页的冲突
    document.getElementById('draw-blind-box-btn').addEventListener('click', drawBlindBox);
    // 初始提示
    const resultContainer = document.getElementById('blind-box-result');
    if (resultContainer) {
      resultContainer.innerHTML = '<p>请选择食堂和餐别后，点击“抽取盲盒”按钮。</p>';
    }
  }
});

// --- 盲盒功能开始 ---
function populateRestaurantSelectBlindBox() {
  const restaurantSelect = document.getElementById('restaurant-select');
  if (!restaurantSelect) return;
  // 清空现有选项，防止重复添加
  restaurantSelect.innerHTML = '';

  // 添加“全部食堂”选项
  const allRestaurantsOption = document.createElement('option');
  allRestaurantsOption.value = 'all'; // 使用 'all' 作为特殊值
  allRestaurantsOption.textContent = '全部食堂';
  restaurantSelect.appendChild(allRestaurantsOption);

  // 添加默认的“请选择食堂”选项，并让其在“全部食堂”之后
  // 不过HTML中已经添加了，这里确保 populate 时不会覆盖掉
  // 如果HTML中的 selected disabled 选项因为 innerHTML = '' 被清除了，需要重新添加
  if (restaurantSelect.options.length === 1 && restaurantSelect.options[0].value === 'all') { // 确保只有“全部食堂”时才添加
    const placeholderOption = document.createElement('option');
    placeholderOption.value = "";
    placeholderOption.textContent = "请选择食堂";
    placeholderOption.disabled = true;
    placeholderOption.selected = true; // 默认选中“请选择食堂”
    // 将“请选择食堂”插入到“全部食堂”之前
    restaurantSelect.insertBefore(placeholderOption, allRestaurantsOption);
  }

  // 动态填充其他食堂选项
  for (const restaurantName in restaurantData) {
    const option = document.createElement('option');
    option.value = restaurantName;
    option.textContent = restaurantName;
    restaurantSelect.appendChild(option);
  }
}

let drawButtonClickCount = 0;
const funnyTexts = [
  "再选选看，总有你喜欢的！",
  "这个不合口味？换一个试试！",
  "别灰心，好吃的还在后头！",
  "你的餐盘你做主，再来一次！",
  "换个心情，换道菜！"
];

function drawBlindBox() {
  const restaurantSelect = document.getElementById('restaurant-select');
  const mealTypeSelect = document.getElementById('meal-type-select');
  const resultContainer = document.getElementById('blind-box-result');
  const drawButton = document.getElementById('draw-blind-box-btn');

  const selectedRestaurant = restaurantSelect.value;
  const selectedMealType = mealTypeSelect.value;

  if (!selectedRestaurant || !selectedMealType) {
    resultContainer.innerHTML = '<p>Oops！请先选择食堂和餐别哦！</p>';
    return;
  }

  // 更新按钮文本
  drawButtonClickCount++; // 先将点击次数加一

  if (drawButtonClickCount <= funnyTexts.length && funnyTexts.length > 0) {
    // 如果点击次数在 funnyTexts 数组长度范围内，并且数组不为空
    drawButton.textContent = funnyTexts[drawButtonClickCount - 1];
  } else if (funnyTexts.length > 0) {
    // 如果点击次数超过数组长度，但数组不为空，则随机选择一个
    drawButton.textContent = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
  } else {
    // 如果 funnyTexts 为空，则保持默认或设置一个通用文本
    drawButton.textContent = '抽取盲盒';
  }


  let allDishes = [];

  if (selectedRestaurant === 'all') {
    // 遍历所有食堂
    for (const restaurantName in restaurantData) {
      const restaurant = restaurantData[restaurantName];
      if (restaurant && restaurant[selectedMealType]) {
        const meal = restaurant[selectedMealType];
        allDishes.push(...(meal.recommend || []).map(dish => ({ ...dish, canteen: restaurantName })));
        allDishes.push(...(meal.all || []).map(dish => ({ ...dish, canteen: restaurantName })));
      }
    }
  } else {
    // 单个食堂逻辑
    const restaurant = restaurantData[selectedRestaurant];
    if (!restaurant || !restaurant[selectedMealType]) {
      resultContainer.innerHTML = '<p>选择的食堂或餐别没有数据。</p>';
      return;
    }
    const meal = restaurant[selectedMealType];
    allDishes.push(...(meal.recommend || []).map(dish => ({ ...dish, canteen: selectedRestaurant })));
    allDishes.push(...(meal.all || []).map(dish => ({ ...dish, canteen: selectedRestaurant })));
  }

  const uniqueDishes = [];
  const seenNames = new Set();
  allDishes.forEach(dish => {
    if (dish && dish.name && !seenNames.has(dish.name)) { // 确保 dish 和 dish.name 存在
      seenNames.add(dish.name);
      uniqueDishes.push(dish);
    }
  });

  if (uniqueDishes.length === 0) {
    resultContainer.innerHTML = '<p>该食堂和餐别下没有可抽取的菜品。</p>';
    return;
  }

  const randomIndex = Math.floor(Math.random() * uniqueDishes.length);
  const selectedDish = uniqueDishes[randomIndex];
  const dishCanteen = selectedDish.canteen || selectedRestaurant; // 获取菜品所属食堂，优先用菜品自带的，否则用选中的

  // 直接使用imagePaths获取图片路径
  let imageUrl = imagePaths[selectedDish.name] || 'images/placeholder.png'; // 默认图片

  resultContainer.innerHTML = `
        <div class="blind-box-item">
            <img src="${imageUrl}" alt="${selectedDish.name}">
            <div class="blind-box-info">
                <h3>${selectedDish.name}</h3>
                <p><strong>食堂：</strong>${dishCanteen}</p>
                <p><strong>档口：</strong>${selectedDish.location}</p>
                <p><strong>价格：</strong>￥${selectedDish.price}</p>
            </div>
        </div>
    `;
}
// --- 盲盒功能结束 ---
function toggleDropdown() {
  document.getElementById('dropdown').classList.toggle('active');
}
function showMap() {
  alert('这里可以弹出地图，或跳转到地图页面');
}
// 点击外部关闭下拉
document.addEventListener('click', function (e) {
  if (!e.target.closest('.restaurant-select')) {
    document.getElementById('dropdown').classList.remove('active');
  }
});
function showPage(page) {
  //首页
  if (page === 'home') {
    document.getElementById('home-page').style.display = '';
    document.getElementById('profile-page').style.display = 'none';
    document.getElementById('row-page').style.display = 'none';
    document.getElementById('row-page').style.display = 'none';//todo
    document.getElementById('nav-home').classList.add('active');
    document.getElementById('nav-profile').classList.remove('active');
    document.getElementById('nav-row').classList.remove('active');
  }
  //个人中心
  else if (page === 'profile') {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('row-page').style.display = 'none';
    document.getElementById('profile-page').style.display = '';
    document.getElementById('nav-home').classList.remove('active');
    document.getElementById('nav-row').classList.remove('active');
    document.getElementById('nav-profile').classList.add('active');
  }
  //盲盒
  else {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('profile-page').style.display = 'none';
    document.getElementById('row-page').style.display = '';
    document.getElementById('nav-home').classList.remove('active');
    document.getElementById('nav-profile').classList.remove('active');
    document.getElementById('nav-row').classList.add('active');
  }
}
function showRechargePopup() {
  document.getElementById('recharge-popup').style.display = 'flex';
}
function closeRechargePopup() {
  document.getElementById('recharge-popup').style.display = 'none';
}
function showPaidOrders() {
  document.getElementById('order-popup-content').innerHTML = '<div style="font-size:1.3em;color:#888;font-weight:bold;">无订单信息</div>';
  document.getElementById('order-popup').style.display = 'flex';
}
function showRefundOrders() {
  document.getElementById('order-popup-content').innerHTML = '<div style="font-size:1.3em;color:#888;font-weight:bold;">无订单信息</div>';
  document.getElementById('order-popup').style.display = 'flex';
}
function showAllOrders() {
  document.getElementById('order-popup-content').innerHTML = `
          <div style="display:flex;gap:56px;justify-content:center;align-items:flex-start;">
            <div style="text-align:center;min-width:90px;">
              <div style="font-weight:bold;color:#43a047;margin-bottom:18px;font-size:1.15em;">已付款</div>
              <div style="font-size:1.15em;color:#888;font-weight:bold;">无订单信息</div>
            </div>
            <div style="text-align:center;min-width:90px;">
              <div style="font-weight:bold;color:#43a047;margin-bottom:18px;font-size:1.15em;">退款/售后</div>
              <div style="font-size:1.15em;color:#888;font-weight:bold;">无订单信息</div>
            </div>
          </div>
        `;
  document.getElementById('order-popup').style.display = 'flex';
}
function closeOrderPopup() {
  document.getElementById('order-popup').style.display = 'none';
}
function searchDish(keyword) {
  console.log('searchDish triggered with keyword:', keyword);
  const currentRestaurantResults = [];
  const otherRestaurantResults = [];
  const mealTypes = ["breakfast", "lunch", "dinner"];
  const selectedMealType = mealTypes[currentMeal]; // Determine current meal type

  let processedKeyword = keyword.trim().toLowerCase();
  const activeMealList = document.querySelector('#home-page .meal-list.active');
  const backButton = activeMealList ? activeMealList.querySelector(`#back-btn-${currentMeal}`) : null;

  if (!processedKeyword) { // If search term is empty or only whitespace
    if (activeMealList) {
      const sectionTitleContainer = activeMealList.querySelector('.section-title-container');
      if (sectionTitleContainer) {
        const sectionTitle = sectionTitleContainer.querySelector('.section-title');
        if (sectionTitle) sectionTitle.textContent = '全部菜品';
      }
      const recommendSection = activeMealList.querySelector('.recommend');
      const sectionTitleRecommend = activeMealList.querySelector('.section-title-recommend');

      if (recommendSection) recommendSection.style.display = '';
      if (sectionTitleRecommend) sectionTitleRecommend.style.display = '';
      if (backButton) backButton.style.display = 'none';

      renderMealList(); // Restore default view for the current meal
    }
    return;
  }

  // Proceed with search if keyword is not empty
  try {
    Object.entries(restaurantData).forEach(([canteen, data]) => {
      if (data[selectedMealType]) {
        const mealData = data[selectedMealType];
        const dishesToSearchInMeal = [];

        if (mealData.recommend && Array.isArray(mealData.recommend)) {
          mealData.recommend.forEach(d => {
            if (d && d.name) dishesToSearchInMeal.push(d);
          });
        }
        if (mealData.all && Array.isArray(mealData.all)) {
          mealData.all.forEach(d => {
            if (d && d.name) dishesToSearchInMeal.push(d);
          });
        }

        const uniqueDishesForMeal = [];
        const seenDishNamesInMeal = new Set();
        dishesToSearchInMeal.forEach(dish => {
          if (!seenDishNamesInMeal.has(dish.name)) {
            seenDishNamesInMeal.add(dish.name);
            uniqueDishesForMeal.push(dish);
          }
        });

        uniqueDishesForMeal.forEach(dish => {
          if (dish.name.toLowerCase().includes(processedKeyword)) {
            if (canteen === currentRestaurant) {
              currentRestaurantResults.push({ ...dish, canteen, mealType: selectedMealType });
            } else {
              otherRestaurantResults.push({ ...dish, canteen, mealType: selectedMealType });
            }
          }
        });
      } else {
        console.warn(`Data for ${canteen} - ${selectedMealType} is missing.`);
      }
    });
  } catch (error) {
    console.error('Error in searchDish logic:', error);
  }
  const results = [...currentRestaurantResults, ...otherRestaurantResults];
  showSearchResults(results, processedKeyword !== ''); // Pass a flag indicating if it's a search
}

function showSearchResults(results, isSearchResult) {
  console.log('showSearchResults called with results:', results);
  const activeMealList = document.querySelector('#home-page .meal-list.active');
  if (!activeMealList) return;

  const dishList = activeMealList.querySelector('.dish-list');
  const sectionTitle = activeMealList.querySelector('.section-title');
  const recommendSection = activeMealList.querySelector('.recommend');
  const sectionTitleRecommend = activeMealList.querySelector('.section-title-recommend');

  if (!dishList) return;

  let resultsHTML = '';
  const resultsByCanteen = {};
  // Group results by canteen
  results.forEach(item => {
    if (!resultsByCanteen[item.canteen]) {
      resultsByCanteen[item.canteen] = [];
    }
    resultsByCanteen[item.canteen].push(item);
  });

  // 1. Display current restaurant's section (results or "no results" message)
  resultsHTML += `<h3>${currentRestaurant}</h3>`;
  if (resultsByCanteen[currentRestaurant] && resultsByCanteen[currentRestaurant].length > 0) {
    resultsByCanteen[currentRestaurant].forEach(item => {
      resultsHTML += `
            <li class="dish-item">
              ${item.name} 
              <span class="price">￥${item.price}</span>
              <span class="location">档口：${item.location}</span>
            </li>
          `;
    });
  } else {
    resultsHTML += `<li class="dish-item no-results" style="text-align: center; color: #888; padding: 10px 0;">本餐厅无此菜品</li>`;
  }

  // 2. Display other restaurants that have results
  for (const canteen in resultsByCanteen) {
    if (canteen !== currentRestaurant) {
      if (resultsByCanteen[canteen] && resultsByCanteen[canteen].length > 0) {
        resultsHTML += `<h3>${canteen}</h3>`;
        resultsByCanteen[canteen].forEach(item => {
          resultsHTML += `
                <li class="dish-item">
                  ${item.name} 
                  <span class="price">￥${item.price}</span>
                  <span class="location">档口：${item.location}</span>
                </li>
              `;
        });
      }
    }
  }

  dishList.innerHTML = resultsHTML;

  const backButton = activeMealList ? activeMealList.querySelector(`#back-btn-${currentMeal}`) : null;

  if (isSearchResult && results.length > 0) {
    if (sectionTitle) sectionTitle.textContent = '搜索结果';
    if (recommendSection) recommendSection.style.display = 'none';
    if (sectionTitleRecommend) sectionTitleRecommend.style.display = 'none';
    if (backButton) backButton.style.display = 'inline-block'; // Show back button
  } else if (!isSearchResult) { // Clearing search or initial load
    if (sectionTitle) sectionTitle.textContent = '全部菜品';
    if (recommendSection) recommendSection.style.display = '';
    if (sectionTitleRecommend) sectionTitleRecommend.style.display = '';
    if (backButton) backButton.style.display = 'none'; // Hide back button
    // If results is empty but it was a search attempt, show "no results" and the back button
  } else if (isSearchResult && results.length === 0) {
    if (sectionTitle) sectionTitle.textContent = '搜索结果';
    if (recommendSection) recommendSection.style.display = 'none';
    if (sectionTitleRecommend) sectionTitleRecommend.style.display = 'none';
    if (backButton) backButton.style.display = 'inline-block'; // Show back button even for no results
  }


  console.log('showSearchResults finished');
}

function handleBackFromSearch() {
  const searchInput = document.getElementById('search-input');
  console.log('searchInput:', searchInput);
  if (searchInput) {
    console.log('Back button clicked');
    console.log(searchInput.value);
    searchInput.value = ''; // Clear search input
  }

  const activeMealList = document.querySelector('#home-page .meal-list.active');
  if (activeMealList) {
    const backButton = activeMealList.querySelector(`#back-btn-${currentMeal}`);
    if (backButton) {
      backButton.style.display = 'none'; // Hide the back button
    }

    const sectionTitleContainer = activeMealList.querySelector('.section-title-container');
    if (sectionTitleContainer) {
      const sectionTitle = sectionTitleContainer.querySelector('.section-title');
      if (sectionTitle) sectionTitle.textContent = '全部菜品'; // Reset title
    }
    const recommendSection = activeMealList.querySelector('.recommend');
    const sectionTitleRecommend = activeMealList.querySelector('.section-title-recommend');

    if (recommendSection) recommendSection.style.display = ''; // Show recommend section
    if (sectionTitleRecommend) sectionTitleRecommend.style.display = ''; // Show recommend title
  }

  renderMealList(); // Restore default view for the current meal
}

// Initial load: Show breakfast by default
showMeal(0);