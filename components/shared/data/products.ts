export const products = {
  drones: [
    {
      id: 0, // Изменил id на 0, чтобы соответствовать URL
      name: "XAG P100",
      price: "$28,000",
      previewImage: "/images/products/drones/P100/p100Preview.png",
      images: [
        "/images/products/drones/P100/p100-1.jpg",
        "/images/products/drones/P100/p100-2.jpg",
        "/images/products/drones/P100/p100-3.jpg",
        "/images/products/drones/P100/p100-4.jpg",
        "/images/products/drones/P100/p100-5.jpg",
        "/images/products/drones/P100/p100-6.jpg",
      ],
      description:
        "XAG P100 — мощный агродрон для точного опрыскивания и разбрасывания удобрений. Оснащён модульной конструкцией, интеллектуальной системой управления, RTK‑навигацией и системой распознавания препятствий. Поддерживает автономный и ручной режимы, имеет защиту IPX7 и высокую эффективность благодаря системам RevoSpray 2 и RevoCast 2.",
      volume: "40л",
      batteryCapacity: "962 Вт-ч",
      maxDistance: "2000м",
      specs: {
        "Основные характеристики": [
          {
            param: "Размеры",
            value:
              "2927 × 2868 × 323 мм (в разложенном виде); 893 × 1095 × 345 мм (в сложенном виде)",
          },
          { param: "Вес", value: "46 кг (без нагрузки, с батареей)" },
          { param: "Макс. взлётный вес", value: "до 88 кг" },
          { param: "Скорость полета", value: "до 13.8 м/с" },
          { param: "Макс. высота полета", value: "до 2000 м" },
          {
            param: "Время полета",
            value: "16 мин (без нагрузки); 6 мин (полная нагрузка)",
          },
          {
            param: "Точность зависания (RTK)",
            value: "±10 см по горизонтали и вертикали",
          },
        ],
        "Система распыления RevoSpray 2": [
          { param: "Объём бака", value: "40 л" },
          { param: "Количество форсунок", value: "2" },
          { param: "Скорость вращения дисков", value: "1000–16000 об/мин" },
          { param: "Размер капель", value: "60–400 мкм" },
          { param: "Ширина распыления", value: "5–10 м" },
          { param: "Макс. расход жидкости", value: "12 л/мин" },
        ],
        "Система разбрасывания RevoCast 2": [
          { param: "Объём бункера", value: "60 л" },
          { param: "Максимальная нагрузка", value: "40 кг" },
          { param: "Размер гранул", value: "1–6 мм" },
          { param: "Ширина разбрасывания", value: "3–6 м" },
          { param: "Точность разбрасывания", value: "±10 %" },
        ],
        "Управление и навигация": [
          { param: "Полётный контроллер", value: "SuperX 4 Pro" },
          { param: "Приложение", value: "XAG One App (Android и iOS)" },
          { param: "Режимы управления", value: "Автономный и ручной" },
          {
            param: "Система позиционирования",
            value: "RTK с точностью до сантиметра",
          },
          { param: "Обнаружение препятствий", value: "4D радар, до 40 м" },
        ],
        "Питание": [
          { param: "Батарея", value: "B13960S Smart Battery (962 Вт⋅ч)" },
          { param: "Полная зарядка", value: "11 мин (GC4000+)" },
          {
            param: "Зарядная станция",
            value: "GC4000+ Auto SuperCharge Station, расход: 0.6 л/кВт⋅ч",
          },
        ],
        "Дополнительные особенности": [
          { param: "Класс защиты", value: "IPX7 (водонепроницаемость)" },
          {
            param: "Материал корпуса",
            value: "Стекловолокно и углеродное волокно",
          },
          { param: "Модульность", value: "Быстрая замена компонентов" },
          {
            param: "Охлаждение батареи",
            value: "Жидкостное охлаждение для быстрой зарядки",
          },
        ],
      },
    },
    {
      id: 1,
      name: "XAG P150",
      price: "$35,000",
      previewImage: "/images/products/drones/P150/p150Preview.png",
      images: [
        "/images/products/drones/P150/p150-1.jpg",
        "/images/products/drones/P150/p150-2.jpg",
      ],
      description:
        "XAG P150 — высокопроизводительный агродрон нового поколения, предназначенный для масштабного опрыскивания и разбрасывания гранул. Отличается увеличенной грузоподъёмностью, модульной системой RevoSpray 4 и RevoCast 4, а также точной системой навигации и управления.",
      volume: "60л",
      batteryCapacity: "975 Вт-ч",
      maxDistance: "2000м",
      specs: {
        "Основные характеристики": [
          {
            param: "Размеры (сложенный/разложенный)",
            value: "1072×1102×788 мм / 3110×3118×764 мм",
          },
          { param: "Вес", value: "54 кг (с RevoSpray 4 и батареей)" },
          { param: "Макс. взлётный вес", value: "до 128 кг" },
          { param: "Диагональ между моторами", value: "2203 мм" },
          { param: "Материал корпуса", value: "Алюминиевый сплав" },
          { param: "Класс защиты", value: "IPX6K" },
        ],
        "Параметры полёта": [
          { param: "Макс. расстояние полёта", value: "2000 м" },
          { param: "Макс. скорость", value: "18 м/с" },
          {
            param: "Точность зависания (RTK)",
            value: "±10 см (RTK), ±0.6 м (без RTK)",
          },
          { param: "Макс. высота полёта", value: "30 м" },
          { param: "Температура эксплуатации", value: "0 ~ 40 ℃" },
        ],
        "Система распыления RevoSpray 4": [
          { param: "Объём бака", value: "60 л (макс. 70 л)" },
          { param: "Макс. нагрузка", value: "70 кг" },
          { param: "Форсунки", value: "2 центробежные" },
          { param: "Размер капель", value: "60 ~ 500 мкм" },
          { param: "Скорость дисков", value: "1500 ~ 16000 об/мин" },
          { param: "Ширина распыления", value: "5 ~ 10 м" },
          { param: "Макс. расход (2 насоса)", value: "30 л/мин" },
        ],
        "Система разбрасывания RevoCast 4": [
          { param: "Объём бункера", value: "115 л" },
          { param: "Нагрузка", value: "70 кг" },
          { param: "Ширина разбрасывания", value: "3 ~ 8 м" },
          { param: "Размер гранул", value: "1 ~ 10 мм" },
          { param: "Макс. скорость подачи", value: "280 кг/мин" },
        ],
        "Энергосистема": [
          { param: "Батарея", value: "M1PPA13970BH, 20000 мАч" },
          { param: "Макс. ток зарядки", value: "100 A" },
          { param: "Зарядное устройство", value: "XAG CM13600BH, 3400 Вт" },
          {
            param: "Станция зарядки",
            value: "GC4000+ с охлаждением, бак: 15 л",
          },
        ],
        "Сенсоры и навигация": [
          {
            param: "Обнаружение препятствий",
            value: "4D Imaging Radar RD2488, дальность до 100 м",
          },
          { param: "Радар высоты", value: "TR24S100_24, диапазон 0.5–100 м" },
          { param: "FPV Камера", value: "1920x1080, 30 fps, CMOS 2 МП" },
          {
            param: "RTK станция",
            value: "XRTK6 Pro, точность до 5 см (по горизонтали)",
          },
        ],
        "Управление": [
          { param: "Пульт управления", value: "XAG ACS4, радиус до 400 м" },
          { param: "Умный контроллер", value: "XAG SRC4, радиус до 2 км" },
          { param: "Связь", value: "DL1, частоты 2.4 и 5.8 ГГц, IP65" },
        ],
      },
    },
    {
      id: 2,
      name: "XAG P60",
      price: "$24,000",
      previewImage: "/images/products/drones/P60/p60Preview.png",
      images: ["/images/products/drones/P60/p60-1.png"],
      description:
        "XAG P60 — компактный, но мощный агродрон нового поколения с высокоточной RTK-навигацией, усовершенствованной системой распыления RevoSpray 4 и возможностью разбрасывания гранул через RevoCast 4. Обеспечивает эффективную работу в различных условиях благодаря лёгкому алюминиевому корпусу, интеллектуальному управлению и быстрой зарядке.",
      volume: "30л",
      batteryCapacity: "20000 мАч",
      maxDistance: "2000м",
      specs: {
        "Основные характеристики": [
          {
            param: "Размеры",
            value: "2517×2575×615 мм (в разложенном виде)",
          },
          {
            param: "Размеры (сложенный)",
            value: "901×1082×635 мм (с RevoSpray 4)",
          },
          { param: "Вес", value: "37.5 кг (с RevoSpray 4 и батареей)" },
          { param: "Макс. взлётный вес", value: "67.5 кг (при распылении)" },
          { param: "Диагональ между моторами", value: "1850 мм" },
          { param: "Материал корпуса", value: "Алюминиевый сплав" },
          { param: "Класс защиты", value: "IPX6K" },
        ],
        "Параметры полёта": [
          { param: "Макс. расстояние полёта", value: "2000 м" },
          { param: "Макс. скорость", value: "13.8 м/с" },
          {
            param: "Точность зависания (RTK)",
            value: "±10 см (RTK), ±0.6 м (без RTK)",
          },
          { param: "Макс. высота полёта", value: "30 м" },
          { param: "Температура эксплуатации", value: "0 ~ 40 ℃" },
        ],
        "Система распыления RevoSpray 4": [
          { param: "Объём бака", value: "30 л" },
          { param: "Макс. нагрузка", value: "30 кг" },
          { param: "Форсунки", value: "2 центробежные" },
          { param: "Размер капель", value: "60 ~ 500 мкм" },
          { param: "Скорость дисков", value: "1500 ~ 16000 об/мин" },
          { param: "Ширина распыления", value: "5 ~ 8 м" },
          { param: "Макс. расход (2 насоса)", value: "30 л/мин" },
        ],
        "Система разбрасывания RevoCast 4": [
          { param: "Объём бункера", value: "45 л" },
          { param: "Нагрузка", value: "25 кг" },
          { param: "Ширина разбрасывания", value: "3 ~ 8 м" },
          { param: "Размер гранул", value: "1 ~ 10 мм" },
          { param: "Макс. скорость подачи", value: "190 кг/мин" },
        ],
        "Энергосистема": [
          { param: "Батарея", value: "M1PPA13970BH, 20000 мАч" },
          { param: "Макс. ток зарядки", value: "100 A" },
          { param: "Зарядное устройство", value: "XAG CM13600BH, 3400 Вт" },
          { param: "Станция зарядки", value: "GC4000+, бак 15 л" },
        ],
        "Сенсоры и навигация": [
          {
            param: "Обнаружение препятствий",
            value: "4D Imaging Radar RD2488, до 100 м",
          },
          { param: "Радар высоты", value: "TR24S100_1, диапазон 0.5–100 м" },
          { param: "FPV Камера", value: "1920x1080, 30 fps, CMOS 2 МП" },
          {
            param: "RTK станция",
            value: "XRTK6 Pro, точность до 5 см (по горизонтали)",
          },
        ],
        "Управление": [
          { param: "Пульт управления", value: "XAG ACS4, радиус до 400 м" },
          { param: "Умный контроллер", value: "XAG SRC4, радиус до 2 км" },
          { param: "Связь", value: "DL1, частоты 2.4 и 5.8 ГГц, IP65" },
        ],
      },
    },
  ],
  vacuums: [
    {
      id: 0,
      name: "Beetle",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Beetle/beetlePreview.png",
      images: ["/images/products/vacuums/Beetle/beetlePreview.png"],
      description:
        "Beetle — компактный уборочный робот с высокой производительностью и вместительным мусорным баком. Подходит для чистки крупных площадей.",
      batteryCapacity: "3 ч",
      volume: "45 л",
      maxDistance: "750 мм",
      specs: {
        "Габариты и масса": [
          { param: "Длина", value: "990 мм" },
          { param: "Ширина", value: "750 мм" },
          { param: "Высота", value: "1510 мм" },
          { param: "Вес", value: "102 кг" },
        ],
        "Уборка": [
          { param: "Ширина уборки", value: "750 мм" },
          { param: "Макс. эффективность", value: "3240 ㎡/ч" },
          { param: "Объём мусорного бака", value: "45 л" },
          { param: "Макс. объём воздушного потока", value: "1320 м³/ч" },
        ],
        "Передвижение": [
          { param: "Преодоление уклонов", value: "4.6°" },
          { param: "Макс. скорость", value: "1.2 м/с" },
          { param: "Мин. радиус разворота", value: "1250 мм" },
        ],
        "Питание": [
          { param: "Ёмкость аккумулятора", value: "40 А⋅ч" },
          { param: "Время работы", value: "3 ч" },
          { param: "Время зарядки", value: "< 2.5 ч" },
        ],
      },
    },
    {
      id: 1,
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
      id: 2,
      name: "Omnie",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Omnie/omniePreview.png",
      images: ["/images/products/vacuums/Omnie/omniePreview.png"],
      description:
        "Omnie — промышленный робот-уборщик с высокой производительностью и большим объёмом баков. Подходит для крупных объектов.",
      batteryCapacity: "до 8 ч",
      volume: "24 л",
      maxDistance: "715 мм",
      specs: {
        "Габариты и масса": [
          { param: "Длина", value: "810 мм" },
          { param: "Ширина", value: "700 мм" },
          { param: "Высота", value: "1070 мм" },
          { param: "Вес", value: "157 кг" },
        ],
        "Уборка": [
          { param: "Ширина скраба", value: "520 мм" },
          { param: "Ширина мопа", value: "715 мм" },
          { param: "Макс. эффективность", value: "3604 ㎡/ч" },
          { param: "Объём баков (чистая/грязная вода)", value: "33 / 24 л" },
        ],
        "Передвижение": [
          { param: "Преодоление уклонов", value: "4.6°" },
          { param: "Макс. скорость", value: "1.4 м/с" },
          { param: "Мин. ширина прохода", value: "800 мм" },
        ],
        "Питание": [
          { param: "Батарея", value: "60 А⋅ч, 24 В" },
          { param: "Макс. время работы", value: "до 8 ч" },
          { param: "Время зарядки", value: "2 ч" },
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
      name: "Scrubber 50",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Scrubber50/scrubber50Preview.png",
      images: [
        "/images/products/vacuums/Scrubber50/scrubber50-1.jpg",
        "/images/products/vacuums/Scrubber50/scrubber50-2.jpg",
        "/images/products/vacuums/Scrubber50/scrubber50-3.jpg",
        "/images/products/vacuums/Scrubber50/scrubber50-4.jpg",
        "/images/products/vacuums/Scrubber50/scrubber50-5.jpg",
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
      id: 4,
      name: "Scrubber 75",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Scrubber75/scrubber75Preview.png",
      images: [
        "/images/products/vacuums/Scrubber75/Scrubber75-1.jpg",
        "/images/products/vacuums/Scrubber75/Scrubber75-2.jpg",
        "/images/products/vacuums/Scrubber75/Scrubber75-3.jpg",
        "/images/products/vacuums/Scrubber75/Scrubber75-4.jpg",
        "/images/products/vacuums/Scrubber75/Scrubber75-5.jpg",
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
      id: 5,
      name: "Vacuum 40",
      price: "$35,000",
      previewImage: "/images/products/vacuums/Vacuum40/vacuum40Preview.png",
      images: [
        "/images/products/vacuums/Vacuum40/vacuum40-1.jpeg",
        "/images/products/vacuums/Vacuum40/vacuum40-2.jpeg",
        "/images/products/vacuums/Vacuum40/vacuum40-3.jpeg",
        "/images/products/vacuums/Vacuum40/vacuum40-4.jpeg",
        "/images/products/vacuums/Vacuum40/vacuum40-5.jpeg",
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
