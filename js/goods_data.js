const GOODS_DATA = [
    {
        id: 1,
        title: 'Стул 1',
        image: './img/chair_1.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 300,
        available: true
    },
    {
        id: 2,
        title: 'Стул 2',
        image: './img/chair_2.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 400,
        available: false
    },
    {
        id: 3,
        title: 'Стул 3',
        image: './img/chair_3.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 600,
        available: true
    },
    {
        id: 4,
        title: 'Стул 4',
        image: './img/chair_4.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 500,
        available: true
    },
    {
        id: 5,
        title: 'Стул 5',
        image: './img/chair_5.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 660,
        available: false
    },
    {
        id: 6,
        title: 'Стул 6',
        image: './img/chair_6.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 530,
        available: true
    },
    {
        id: 7,
        title: 'Стул 7',
        image: './img/chair_7.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 800,
        available: false
    },
    {
        id: 8,
        title: 'Стул 8',
        image: './img/chair_8.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 350,
        available: true
    },
    {
        id: 9,
        title: 'Стул 9',
        image: './img/chair_9.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 750,
        available: true
    },
    {
        id: 10,
        title: 'Стул 10',
        image: './img/chair_10.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 650,
        available: false
    },
    {
        id: 11,
        title: 'Стул 11',
        image: './img/chair_11.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 400,
        available: true
    },
    {
        id: 12,
        title: 'Стул 12',
        image: './img/chair_12.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 450,
        available: true
    },
    {
        id: 13,
        title: 'Стул 13',
        image: './img/chair_13.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 500,
        available: false
    },
    {
        id: 14,
        title: 'Стул 14',
        image: './img/chair_14.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 550,
        available: true
    },
    {
        id: 15,
        title: 'Стул 15',
        image: './img/chair_15.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 720,
        available: false
    },
    {
        id: 16,
        title: 'Стул 16',
        image: './img/chair_16.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 490,
        available: true
    },
    {
        id: 17,
        title: 'Стул 17',
        image: './img/chair_17.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 590,
        available: true
    },
    {
        id: 18,
        title: 'Стул 18',
        image: './img/chair_18.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 610,
        available: false
    },
    {
        id: 19,
        title: 'Стул 19',
        image: './img/chair_19.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 980,
        available: true
    },
    {
        id: 20,
        title: 'Стул 20',
        image: './img/chair_20.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 680,
        available: true
    },
    {
        id: 21,
        title: 'Стул 21',
        image: './img/chair_21.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 1000,
        available: true
    },
    {
        id: 22,
        title: 'Стул 22',
        image: './img/chair_22.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 630,
        available: false
    },
    {
        id: 23,
        title: 'Стул 23',
        image: './img/chair_23.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 590,
        available: true
    },
    {
        id: 24,
        title: 'Стул 24',
        image: './img/chair_24.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 740,
        available: true
    },
    {
        id: 25,
        title: 'Стул 25',
        image: './img/chair_25.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 730,
        available: true
    },
    {
        id: 26,
        title: 'Стул 26',
        image: './img/chair_26.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 640,
        available: false
    },
    {
        id: 27,
        title: 'Стул 27',
        image: './img/chair_27.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 750,
        available: true
    },
    {
        id: 28,
        title: 'Стул 28',
        image: './img/chair_28.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 940,
        available: true
    },
    {
        id: 29,
        title: 'Стул 29',
        image: './img/chair_29.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 380,
        available: true
    },
    {
        id: 30,
        title: 'Стул 30',
        image: './img/chair_30.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 400,
        available: false
    },
    {
        id: 31,
        title: 'Стул 31',
        image: './img/chair_31.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 990,
        available: true
    },
    {
        id: 32,
        title: 'Кресло 1',
        image: './img/armchair_1.JPG',
        descr: 'Кресло из новой коллекции. Стильное, модное, молодежное.',
        price: 2500,
        available: true
    },
    {
        id: 33,
        title: 'Банка 1',
        image: './img/bank_1.JPG',
        descr: 'Банка из новой коллекции. Стильная, модная, молодежная.',
        price: 100,
        available: false
    },
    {
        id: 34,
        title: 'Ветка 1',
        image: './img/branch_1.JPG',
        descr: 'Ветка из новой коллекции. Стильная, модная, молодежная.',
        price: 300,
        available: true
    },
    {
        id: 35,
        title: 'Свеча 1',
        image: './img/candle_1.JPG',
        descr: 'Свеча из новой коллекции. Стильная, модная, молодежная.',
        price: 250,
        available: true
    },
    {
        id: 36,
        title: 'Чашка 1',
        image: './img/cup_1.JPG',
        descr: 'Чашка из новой коллекции. Стильная, модная, молодежная.',
        price: 500,
        available: true
    },
    {
        id: 37,
        title: 'Чашка 2',
        image: './img/cup_2.JPG',
        descr: 'Чашка из новой коллекции. Стильная, модная, молодежная.',
        price: 190,
        available: false
    },
    {
        id: 38,
        title: 'Шкаф 1',
        image: './img/cupboard_1.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 15500,
        available: true
    },
    {
        id: 39,
        title: 'Шкаф 2',
        image: './img/cupboard_2.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 10500,
        available: true
    },
    {
        id: 40,
        title: 'Шкаф 3',
        image: './img/cupboard_3.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 12500,
        available: true
    },
    {
        id: 41,
        title: 'Шкаф 4',
        image: './img/cupboard_4.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 10200,
        available: true
    },
    {
        id: 42,
        title: 'Шкаф 5',
        image: './img/cupboard_5.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 9500,
        available: false
    },
    {
        id: 43,
        title: 'Шкаф 6',
        image: './img/cupboard_6.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 8900,
        available: true
    },
    {
        id: 44,
        title: 'Шкаф 7',
        image: './img/cupboard_7.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 11400,
        available: false
    },
    {
        id: 45,
        title: 'Шкаф 8',
        image: './img/cupboard_8.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 12100,
        available: true
    },
    {
        id: 46,
        title: 'Шкаф 9',
        image: './img/cupboard_9.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 11300,
        available: true
    },
    {
        id: 47,
        title: 'Шкаф 10',
        image: './img/cupboard_10.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 9800,
        available: false
    },
    {
        id: 48,
        title: 'Шкаф 11',
        image: './img/cupboard_11.JPG',
        descr: 'Шкаф из новой коллекции. Стильный, модный, молодежный.',
        price: 6400,
        available: true
    },
    {
        id: 49,
        title: 'Украшение 1',
        image: './img/decoration_1.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 700,
        available: true
    },
    {
        id: 50,
        title: 'Украшение 2',
        image: './img/decoration_2.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 530,
        available: false
    },
    {
        id: 51,
        title: 'Украшение 3',
        image: './img/decoration_3.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 450,
        available: true
    },
    {
        id: 52,
        title: 'Украшение 4',
        image: './img/decoration_4.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 330,
        available: true
    },
    {
        id: 53,
        title: 'Украшение 5',
        image: './img/decoration_5.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 660,
        available: false
    },
    {
        id: 54,
        title: 'Украшение 6',
        image: './img/decoration_6.JPG',
        descr: 'Стул из новой коллекции. Стильный, модный, молодежный.',
        price: 410,
        available: true
    },
    {
        id: 55,
        title: 'Лампа 1',
        image: './img/lamp_1.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 700,
        available: true
    },
    {
        id: 56,
        title: 'Лампа 2',
        image: './img/lamp_2.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 800,
        available: true
    },
    {
        id: 57,
        title: 'Лампа 3',
        image: './img/lamp_3.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 640,
        available: false
    },
    {
        id: 58,
        title: 'Лампа 4',
        image: './img/lamp_4.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 710,
        available: true
    },    {
        id: 59,
        title: 'Лампа 5',
        image: './img/lamp_5.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 660,
        available: true
    },
    {
        id: 60,
        title: 'Лампа 6',
        image: './img/lamp_6.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 980,
        available: false
    },
    {
        id: 61,
        title: 'Лампа 7',
        image: './img/lamp_7.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 320,
        available: true
    },
    {
        id: 62,
        title: 'Лампа 8',
        image: './img/lamp_8.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 470,
        available: true
    },
    {
        id: 63,
        title: 'Лампа 9',
        image: './img/lamp_9.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 680,
        available: false
    },
    {
        id: 64,
        title: 'Лампа 10',
        image: './img/lamp_10.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 440,
        available: true
    },
    {
        id: 65,
        title: 'Лампа 11',
        image: './img/lamp_11.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 620,
        available: true
    },
    {
        id: 66,
        title: 'Лампа 12',
        image: './img/lamp_12.JPG',
        descr: 'Лампа из новой коллекции. Стильная, модная, молодежная.',
        price: 550,
        available: false
    },
    {
        id: 67,
        title: 'Постельное белье 1',
        image: './img/linens_1.JPG',
        descr: 'Постельное белье из новой коллекции. Стильное, модное, молодежное.',
        price: 830,
        available: true
    },
    {
        id: 68,
        title: 'Постельное белье 2',
        image: './img/linens_2.JPG',
        descr: 'Постельное белье из новой коллекции. Стильное, модное, молодежное.',
        price: 950,
        available: true
    },
    {
        id: 69,
        title: 'Коврик 1',
        image: './img/mat_1.JPG',
        descr: 'Коврик из новой коллекции. Стильный, модный, молодежный.',
        price: 1500,
        available: true
    },
    {
        id: 70,
        title: 'Коврик 2',
        image: './img/mat_2.JPG',
        descr: 'Коврик из новой коллекции. Стильный, модный, молодежный.',
        price: 1200,
        available: true
    },
    {
        id: 71,
        title: 'Подставка 1',
        image: './img/napkin_holder_1.JPG',
        descr: 'Подставка из новой коллекции. Стильная, модная, молодежная.',
        price: 100,
        available: false
    },
    {
        id: 72,
        title: 'Салфетки 1',
        image: './img/napkins_1.JPG',
        descr: 'Салфетки из новой коллекции. Стильные, модные, молодежные.',
        price: 120,
        available: true
    },
    {
        id: 73,
        title: 'Подушка 1',
        image: './img/pillow_1.JPG',
        descr: 'Подушка из новой коллекции. Стильная, модная, молодежная.',
        price: 570,
        available: true
    },
    {
        id: 74,
        title: 'Подушка 2',
        image: './img/pillow_2.JPG',
        descr: 'Подушка из новой коллекции. Стильная, модная, молодежная.',
        price: 650,
        available: true
    },
    {
        id: 75,
        title: 'Подушка 3',
        image: './img/pillow_3.JPG',
        descr: 'Подушка из новой коллекции. Стильная, модная, молодежная.',
        price: 630,
        available: false
    },
    {
        id: 76,
        title: 'Подушка 4',
        image: './img/pillow_4.JPG',
        descr: 'Подушка из новой коллекции. Стильная, модная, молодежная.',
        price: 750,
        available: true
    },
    {
        id: 77,
        title: 'Подушка 5',
        image: './img/pillow_5.JPG',
        descr: 'Подушка из новой коллекции. Стильная, модная, молодежная.',
        price: 410,
        available: true
    },
    {
        id: 78,
        title: 'Тарелка 1',
        image: './img/plate_1.JPG',
        descr: 'Тарелка из новой коллекции. Стильная, модная, молодежная.',
        price: 320,
        available: true
    },
    {
        id: 79,
        title: 'Тарелка 2',
        image: './img/plate_2.JPG',
        descr: 'Тарелка из новой коллекции. Стильная, модная, молодежная.',
        price: 380,
        available: true
    },
    {
        id: 80,
        title: 'Тарелка 3',
        image: './img/plate_3.JPG',
        descr: 'Тарелка из новой коллекции. Стильная, модная, молодежная.',
        price: 450,
        available: true
    },
    {
        id: 81,
        title: 'Тарелка 4',
        image: './img/plate_4.JPG',
        descr: 'Тарелка из новой коллекции. Стильная, модная, молодежная.',
        price: 490,
        available: true
    },
    {
        id: 82,
        title: 'Тарелка 5',
        image: './img/plate_5.JPG',
        descr: 'Тарелка из новой коллекции. Стильная, модная, молодежная.',
        price: 360,
        available: false
    },
    {
        id: 84,
        title: 'Ель 1',
        image: './img/spruce_1.JPG',
        descr: 'Ель из новой коллекции. Стильная, модная, молодежная',
        price: 3500,
        available: true
    },
    {
        id: 85,
        title: 'Ель 2',
        image: './img/spruce_2.JPG',
        descr: 'Ель из новой коллекции. Стильная, модная, молодежная',
        price: 2900,
        available: false
    },
    {
        id: 86,
        title: 'Ель 3',
        image: './img/spruce_3.JPG',
        descr: 'Ель из новой коллекции. Стильная, модная, молодежная',
        price: 4500,
        available: false
    },
    {
        id: 87,
        title: 'Ель 4',
        image: './img/spruce_4.JPG',
        descr: 'Ель из новой коллекции. Стильная, модная, молодежная',
        price: 3600,
        available: true
    },
    {
        id: 88,
        title: 'Наклейки 1',
        image: './img/stickers_1.JPG',
        descr: 'Наклейки из новой коллекции. Стильные, модные, молодежные.',
        price: 420,
        available: true
    },
    {
        id: 89,
        title: 'Стол 1',
        image: './img/table_1.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 8500,
        available: true
    },
    {
        id: 90,
        title: 'Стол 2',
        image: './img/table_2.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 9200,
        available: false
    },
    {
        id: 91,
        title: 'Стол 3',
        image: './img/table_3.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 7400,
        available: true
    },
    {
        id: 92,
        title: 'Стол 4',
        image: './img/table_4.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 8200,
        available: false
    },
    {
        id: 93,
        title: 'Стол 5',
        image: './img/table_5.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 6600,
        available: false
    },
    {
        id: 94,
        title: 'Стол 6',
        image: './img/table_6.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 4900,
        available: true
    },
    {
        id: 95,
        title: 'Стол 7',
        image: './img/table_7.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 8200,
        available: true
    },
    {
        id: 96,
        title: 'Стол 8',
        image: './img/table_8.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 7900,
        available: true
    },
    {
        id: 97,
        title: 'Стол 9',
        image: './img/table_9.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 6900,
        available: false
    },
    {
        id: 98,
        title: 'Стол 10',
        image: './img/table_10.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 9800,
        available: true
    },
    {
        id: 99,
        title: 'Стол 11',
        image: './img/table_11.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 7400,
        available: true
    },
    {
        id: 100,
        title: 'Стол 12',
        image: './img/table_12.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 8500,
        available: false
    },
    {
        id: 101,
        title: 'Стол 13',
        image: './img/table_13.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 6300,
        available: true
    },
    {
        id: 102,
        title: 'Стол 14',
        image: './img/table_14.JPG',
        descr: 'Стол из новой коллекции. Стильный, модный, молодежный.',
        price: 4500,
        available: false
    },
    {
        id: 103,
        title: 'Полотенце 1',
        image: './img/towel_1.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 870,
        available: true
    },
    {
        id: 104,
        title: 'Полотенце 2',
        image: './img/towel_2.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 650,
        available: true
    },
    {
        id: 105,
        title: 'Полотенце 3',
        image: './img/towel_3.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 820,
        available: false
    },
    {
        id: 106,
        title: 'Полотенце 4',
        image: './img/towel_4.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 740,
        available: true
    },
    {
        id: 107,
        title: 'Полотенце 5',
        image: './img/towel_5.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 600,
        available: true
    },
    {
        id: 108,
        title: 'Полотенце 6',
        image: './img/towel_6.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 590,
        available: false
    },
    {
        id: 109,
        title: 'Полотенце 7',
        image: './img/towel_7.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 450,
        available: true
    },
    {
        id: 110,
        title: 'Полотенце 8',
        image: './img/towel_8.JPG',
        descr: 'Полотенце из новой коллекции. Стильное, модное, молодежное.',
        price: 840,
        available: false
    },
    {
        id: 111,
        title: 'Игрушка 1',
        image: './img/toy_1.JPG',
        descr: 'Игрушка из новой коллекции. Стильная, модная, молодежная.',
        price: 350,
        available: true
    },
    {
        id: 112,
        title: 'Бокал 1',
        image: './img/wineglass_1.JPG',
        descr: 'Бокал из новой коллекции. Стильный, модный, молодежный.',
        price: 250,
        available: true
    },
];
