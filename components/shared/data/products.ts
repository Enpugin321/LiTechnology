export const products = {
  drones: [
    {
      "id": 0,
      "name": "XAG P100 Pro",
      "price": "$34,000",
      "previewImage": "/images/products/drones/P100/p100Preview.png",
      "images": [
        "/images/products/drones/P100/p100-1.png",
        "/images/products/drones/P100/p100-2.png",
        "/images/products/drones/P100/p100-3.png",
        "/images/products/drones/P100/p100-4.png",
        "/images/products/drones/P100/p100-5.png",
        "/images/products/drones/P100/p100-6.png",
      ],
      "description":
        "XAG P100 Pro — передовой агродрон с улучшенной системой опрыскивания RevoSpray 3 и разбрасывания RevoCast 3. Обладает защитой IPX6K, поддерживает RTK-навигацию, 4D-радар, камеру обзора и высокую мощность моторов. Предназначен для высокоточной обработки сельскохозяйственных культур в автономном и ручном режимах.",
      "volume": "50л",
      "batteryCapacity": "962 Вт⋅ч",
      "maxDistance": "2000м",
      "specs": {
        "Основные характеристики": [
          {
            "param": "Размеры",
            "value":
              "2927 × 2868 × 323 мм (в разложенном виде); 893 × 1095 × 345 мм (в сложенном виде)",
          },
          { "param": "Диагональ моторов", "value": "2094 мм" },
          {
            "param": "Вес",
            "value": "46 кг (без полезной нагрузки, с батареей)",
          },
          { "param": "Класс защиты", "value": "IPX6K" },
          {
            "param": "Материал корпуса",
            "value": "Стекловолокно и углеродное волокно",
          },
          { "param": "Макс. взлётный вес", "value": "до 96 кг" },
          {
            "param": "Рекомендуемая температура эксплуатации",
            "value": "0 ~ 40 ℃",
          },
        ],
        "Система распыления RevoSpray 3": [
          { "param": "Размер модуля", "value": "737 × 734 × 497 мм" },
          { "param": "Ёмкость бака", "value": "50 л" },
          { "param": "Количество форсунок", "value": "2" },
          { "param": "Скорость дисков", "value": "1000–16000 об/мин" },
          { "param": "Размер капель", "value": "60–400 мкм" },
          { "param": "Ширина распыления", "value": "5–10 м" },
          { "param": "Макс. расход жидкости", "value": "22 л/мин" },
          {
            "param": "Насос",
            "value": "Две перистальтические помпы, до 11 л/мин каждая",
          },
        ],
        "Система разбрасывания RevoCast 3": [
          { "param": "Размер модуля", "value": "1059 × 728 × 651 мм" },
          { "param": "Объём бункера", "value": "80 л" },
          { "param": "Максимальная нагрузка", "value": "50 кг" },
          { "param": "Макс. скорость разбрасывания", "value": "150 кг/мин" },
          { "param": "Размер гранул", "value": "1–6 мм" },
          { "param": "Ширина разбрасывания", "value": "3–7 м" },
        ],
        "Полётные характеристики": [
          { "param": "Макс. скорость полета", "value": "13.8 м/с" },
          { "param": "Макс. расстояние полета", "value": "2000 м" },
          {
            "param": "Точность зависания (RTK)",
            "value": "±10 см по горизонтали и вертикали",
          },
          {
            "param": "Без RTK",
            "value": "±0.6 м (горизонталь), ±0.3 м (вертикаль)",
          },
        ],
        "Система обнаружения и навигации": [
          {
            "param": "Радар",
            "value": "4D Imaging Radar, до 80 м, угол обзора ±40°",
          },
          { "param": "Камера PSL", "value": "1920×1080, 30 fps, угол 3.2 мм" },
          { "param": "Навигация", "value": "RTK + GNSS, высокая точность" },
          { "param": "Контроллер", "value": "SuperX 4 Pro" },
        ],
        "Питание и зарядка": [
          { "param": "Батарея", "value": "B13960S, 962 Вт⋅ч, 48.1 В/120 А" },
          { "param": "Зарядка", "value": "CM13600, до 3400 Вт, 56.6 В/80 А" },
          {
            "param": "Станция",
            "value": "GC4000+, мощность до 5.1 кВт, объём бака 15 л",
          },
        ],
        "Управление": [
          {
            "param": "Пульт",
            "value": "XAG ARC3 Pro, до 1 км, 6 часов работы",
          },
          {
            "param": "Контроллер ACS2",
            "value": "До 800 м, совместим с P100 Pro",
          },
        ],
      },
    },
  ],
  vacuums: [
    {
      id: 0,
      name: "Phantas",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Phantas/phantasPreview.avif",
      images: ["/images/products/vacuums/Phantas/phantasPreview.avif"],
      description:
        "Phantas — универсальный робот-пылесос с несколькими режимами уборки, включая сухую, влажную и пылесос. Оснащён интеллектуальными сенсорами.",
      batteryCapacity: "до 14 ч",
      volume: "6 л",
      maxDistance: "410 мм",
      specs: {
        "Габариты и масса": [
          { param: "Длина", value: "540 мм" },
          { param: "Ширина", value: "440 мм" },
          { param: "Высота", value: "617 мм" },
          { param: "Вес", value: "48 кг" },
        ],
        "Уборка": [
          { param: "Ширина пылесоса", value: "410 мм" },
          { param: "Ширина мытья пола", value: "330 мм" },
          { param: "Макс. эффективность", value: "1180 ㎡/ч" },
          { param: "Практическая эффективность", value: "350–700 ㎡/ч" },
          {
            param: "Объём баков (чистая/грязная вода)",
            value: "11.5 / 10.5 л",
          },
          { param: "Мешок для пыли", value: "6 л" },
          { param: "Контейнер для мусора", value: "0.7 л" },
        ],
        "Передвижение": [
          { param: "Преодоление уклонов", value: "8°" },
          { param: "Макс. скорость", value: "0.8 м/с" },
          { param: "Мин. проходимая ширина", value: "600 мм" },
        ],
        "Питание": [
          {
            param: "Макс. время работы",
            value: "до 14 ч (в зависимости от режима)",
          },
          { param: "Время зарядки", value: "≈ 2 ч" },
        ],
        "Сенсоры": [
          {
            param: "Сенсоры",
            value: "2D LiDAR, 3D камера, RGB, анти-падение, анти-столкновение",
          },
        ],
      },
    },
    {
      id: 1,
      name: "Scrubber 50",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Scrubber50/scrubber50Preview.png",
      images: [
        "/images/products/vacuums/Scrubber50/Scrubber50-1.png",
        "/images/products/vacuums/Scrubber50/Scrubber50-2.png",
        "/images/products/vacuums/Scrubber50/Scrubber50-3.png",
        "/images/products/vacuums/Scrubber50/Scrubber50-4.png",
        "/images/products/vacuums/Scrubber50/Scrubber50-5.png",
      ],
      description:
        "Scrubber 50 — многофункциональный уборочный робот с возможностью выбора щёток. Подходит для различных типов полов.",
      batteryCapacity: "до 8 ч",
      volume: "24 л",
      maxDistance: "460 мм",
      specs: {
        "Габариты и масса": [
          { param: "Длина", value: "810 мм" },
          { param: "Ширина", value: "700 мм" },
          { param: "Высота", value: "1070 мм" },
          { param: "Вес", value: "157 кг (диск), 148 кг (ролик)" },
        ],
        "Уборка": [
          { param: "Ширина чистки", value: "460 мм (диск), 406 мм (ролик)" },
          {
            param: "Макс. эффективность",
            value: "1987 ㎡/ч (диск), 1754 ㎡/ч (ролик)",
          },
          { param: "Практическая эффективность", value: "500–1300 ㎡/ч" },
          { param: "Давление щётки", value: "25 кг (диск), 18 кг (ролик)" },
          { param: "Объём баков (чистая/грязная вода)", value: "30 / 24 л" },
        ],
        "Передвижение": [
          { param: "Преодоление уклонов", value: "4.6°" },
          { param: "Макс. скорость", value: "1.2 м/с" },
          { param: "Мин. ширина прохода", value: "800 мм" },
        ],
        "Питание": [
          { param: "Батарея", value: "60 А⋅ч, 24 В" },
          { param: "Время зарядки", value: "2 ч" },
          { param: "Макс. время работы", value: "до 8 ч" },
        ],
        "Сенсоры": [
          {
            param: "Сенсоры",
            value: "2D LiDAR, 3D камера, RGB, анти-столкновение",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Scrubber 75",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Scrubber75/scrubber75Preview.png",
      images: [
        "/images/products/vacuums/Scrubber75/Scrubber75-1.png",
        "/images/products/vacuums/Scrubber75/Scrubber75-2.png",
        "/images/products/vacuums/Scrubber75/Scrubber75-3.png",
        "/images/products/vacuums/Scrubber75/Scrubber75-4.png",
        "/images/products/vacuums/Scrubber75/Scrubber75-5.png",
      ],
      description:
        "Scrubber 75 — высокопроизводительный автономный поломоечный робот для уборки больших помещений.",
      batteryCapacity: "4–6 ч",
      volume: "50 л",
      maxDistance: "750 мм",
      specs: {
        "Габариты и масса": [
          { param: "Длина", value: "1370 мм" },
          { param: "Ширина", value: "962 мм" },
          { param: "Высота", value: "1417 мм" },
          { param: "Вес", value: "400 кг" },
        ],
        "Уборка": [
          { param: "Ширина чистки", value: "750 мм" },
          { param: "Макс. эффективность", value: "3000 ㎡/ч" },
          { param: "Практическая эффективность", value: "700–1400 ㎡/ч" },
          { param: "Объём баков (чистая/грязная вода)", value: "75 / 50 л" },
        ],
        "Передвижение": [
          { param: "Преодоление уклонов", value: "3° (уборка), 8° (движение)" },
          { param: "Макс. скорость", value: "1.1 м/с" },
          { param: "Мин. ширина прохода", value: "1400 мм" },
        ],
        "Питание": [
          { param: "Батарея", value: "200 А⋅ч, 24 В" },
          { param: "Время зарядки", value: "≈ 5 ч" },
          { param: "Время работы", value: "4–6 ч" },
        ],
        "Сенсоры": [
          {
            param: "Сенсоры",
            value:
              "3D LiDAR, 2D LiDAR, 3D камера, анти-столкновение, анти-падение",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Vacuum 40",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Vacuum40/vacuum40Preview.png",
      images: [
        "/images/products/vacuums/Vacuum40/Vacuum40-1.png",
        "/images/products/vacuums/Vacuum40/Vacuum40-2.png",
        "/images/products/vacuums/Vacuum40/Vacuum40-3.png",
        "/images/products/vacuums/Vacuum40/Vacuum40-4.png",
        "/images/products/vacuums/Vacuum40/Vacuum40-5.png",
      ],
      description:
        "Vacuum 40 — автономный пылесос для коммерческих помещений. Имеет вместительный мешок для пыли и высокую эффективность.",
      batteryCapacity: "до 18 ч",
      volume: "12 л",
      maxDistance: "720 мм",
      specs: {
        "Габариты и масса": [
          { param: "Длина", value: "800 мм" },
          { param: "Ширина", value: "690 мм" },
          { param: "Высота", value: "890 мм" },
          { param: "Вес", value: "91 кг" },
        ],
        "Уборка": [
          { param: "Ширина уборки", value: "720 мм" },
          { param: "Макс. эффективность", value: "2300 ㎡/ч" },
          { param: "Практическая эффективность", value: "400–800 ㎡/ч" },
          { param: "Макс. воздушный поток", value: "120 м³/ч" },
          { param: "Пылесборник", value: "12 л" },
          { param: "Контейнер для мусора", value: "2.5 л" },
          { param: "Макс. давление всасывания", value: "24 кПа" },
        ],
        "Передвижение": [
          { param: "Преодоление уклонов", value: "4° / 8°" },
          { param: "Макс. скорость", value: "0.9 м/с" },
          { param: "Мин. радиус разворота", value: "1100 мм" },
        ],
        "Питание": [
          { param: "Батарея", value: "60 А⋅ч, 24 В" },
          { param: "Время зарядки", value: "≈ 2.5 ч" },
          { param: "Макс. время работы", value: "до 18 ч" },
        ],
        "Сенсоры": [
          {
            param: "Сенсоры",
            value: "LiDAR, 3D камера, анти-падение, датчик столкновений",
          },
        ],
      },
    },
  ],
};
