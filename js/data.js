// 餐厅数据模块
export const imagePaths = {
    "皮蛋瘦肉粥": "images/皮蛋瘦肉粥.jfif",
    "豆浆油条": "images/豆浆油条.jfif",
    "宫保鸡丁": "images/宫保鸡丁.jfif",
    "鱼香肉丝盖饭": "images/鱼香肉丝.jfif",
    "番茄牛腩": "images/番茄牛腩.jpg",
    "清炒时蔬": "images/清炒时蔬.jfif",
    "明湖烤鸭": "images/明湖烤鸭.jfif",
    "糖醋里脊": "images/糖醋里脊.jpg",
    "烤鸡腿": "images/烤鸡腿.jfif",
    "牛奶燕麦粥": "images/牛奶燕麦粥.jfif",
    "煎饺": "images/煎饺.jfif"
};

export const restaurantData = {
    "学苑食堂": {
        breakfast: {
            recommend: [
                { name: "皮蛋瘦肉粥", img: "皮蛋瘦肉粥.jfif", price: 4, location: "A区", star: 5 },
                { name: "豆浆油条", img: "豆浆油条.jfif", price: 5, location: "B区", star: 4 }
            ],
            all: [
                { name: "小笼包", price: 4, location: "A区" },
                { name: "鸡蛋灌饼", price: 5, location: "B区" },
                { name: "葱油饼", price: 4, location: "C区" }
            ]
        },
        lunch: {
            recommend: [
                { name: "宫保鸡丁", img: "宫保鸡丁.jfif", price: 12, location: "D区", star: 5 },
                { name: "鱼香肉丝盖饭", img: "鱼香肉丝.jfif", price: 15, location: "E区", star: 4 }
            ],
            all: [
                { name: "红烧排骨", price: 12, location: "D区" },
                { name: "西红柿炒蛋", price: 8, location: "E区" },
                { name: "青椒土豆丝", price: 6, location: "F区" }
            ]
        },
        dinner: {
            recommend: [
                { name: "番茄牛腩", img: "番茄牛腩.jpg", price: 16.8, location: "G区", star: 5 },
                { name: "清炒时蔬", img: "清炒时蔬.jfif", price: 7, location: "H区", star: 4 }
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
                { name: "牛奶燕麦粥", img: "牛奶燕麦粥.jfif", price: 6, location: "A区", star: 5 },
                { name: "煎饺", img: "煎饺.jfif", price: 5, location: "B区", star: 4 }
            ],
            all: [
                { name: "豆沙包", price: 3, location: "A区" },
                { name: "蛋挞", price: 4, location: "B区" },
                { name: "玉米棒", price: 2, location: "C区" }
            ]
        },
        lunch: {
            recommend: [
                { name: "明湖烤鸭", img: "明湖烤鸭.jfif", price: 23.5, location: "D区", star: 5 },
                { name: "糖醋里脊", img: "糖醋里脊.jpg", price: 14, location: "E区", star: 4 }
            ],
            all: [
                { name: "鱼香茄子", price: 8, location: "D区" },
                { name: "青椒肉丝", price: 10, location: "E区" },
                { name: "土豆炖牛腩", price: 16, location: "F区" }
            ]
        },
        dinner: {
            recommend: [
                { name: "明湖烤鸭", img: "明湖烤鸭.jfif", price: 23.5, location: "D区", star: 5 },
                { name: "烤鸡腿", img: "烤鸡腿.jfif", price: 12, location: "G区", star: 4 },
            ],
            all: [
                { name: "红烧豆腐", price: 7, location: "G区" },
                { name: "凉拌黄瓜", price: 4, location: "H区" },
                { name: "炒面", price: 8, location: "I区" }
            ]
        }
    }
};
