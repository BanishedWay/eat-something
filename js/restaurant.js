import { imagePaths, restaurantData } from './data.js';

let currentRestaurant = document.getElementById('current-restaurant').innerText.trim();
let currentMeal = 0; // 0:早餐 1:午餐 2:晚餐

export function selectRestaurant(name) {
    document.getElementById('current-restaurant').innerText = name;
    document.getElementById('dropdown').classList.remove('active');
    currentRestaurant = name;
    renderMealList();
}

export function showMeal(idx) {
    currentMeal = idx;
    const tabs = document.querySelectorAll('.tab');
    const lists = document.querySelectorAll('.meal-list');
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === idx);
        lists[i].classList.toggle('active', i === idx);
    });
    renderMealList();
}

export function renderMealList() {
    const mealTypes = ["breakfast", "lunch", "dinner"];
    const meal = restaurantData[currentRestaurant][mealTypes[currentMeal]];
    // 推荐菜品
    let recommendHtml = '';
    meal.recommend.forEach(item => {
        recommendHtml += `
            <div class="recommend-item">
                <img src="${imagePaths[item.name]}" alt="${item.name}">
                <div class="recommend-info">
                    <div>${item.name}</div>
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
    Object.values(allDishesMap).forEach(item => {
        allHtml += `<li class="dish-item">${item.name} <span class="price">￥${item.price}</span><span class="location">档口：${item.location}</span></li>`;
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

/**
 * 根据关键字搜索菜品
 * @param {string} keyword - 搜索关键词
 * @returns {Array} - 搜索结果数组
 */
export function searchDish(keyword) {
    if (!keyword) return [];
    keyword = keyword.toLowerCase();

    const results = [];
    const mealTypes = ["breakfast", "lunch", "dinner"];
    const mealTypesChinese = ["早餐", "午餐", "晚餐"];

    // 遍历所有餐厅
    Object.entries(restaurantData).forEach(([restaurantName, restaurantInfo]) => {
        // 遍历所有餐次 (早餐、午餐、晚餐)
        mealTypes.forEach((mealType, mealIndex) => {
            if (restaurantInfo[mealType]) {
                const meal = restaurantInfo[mealType];

                // 搜索所有菜品（包括推荐和全部）
                const allDishes = [...meal.recommend, ...meal.all];

                // 去重
                const uniqueDishes = [];
                const seenNames = new Set();

                allDishes.forEach(dish => {
                    if (!seenNames.has(dish.name)) {
                        seenNames.add(dish.name);
                        uniqueDishes.push(dish);
                    }
                });

                // 在所有菜品中搜索关键词
                uniqueDishes.forEach(dish => {
                    if (dish.name.toLowerCase().includes(keyword)) {
                        results.push({
                            dishName: dish.name,
                            price: dish.price,
                            restaurantName: restaurantName,
                            sectionName: dish.location, // 使用档口位置作为分区
                            mealType: mealTypesChinese[mealIndex]
                        });
                    }
                });
            }
        });
    });

    return results;
}