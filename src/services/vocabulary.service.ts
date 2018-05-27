export class VocabularyService {
    alphabetAudio = new Audio();

    currentSet:{
        lao: string,
        eng: string,
        word : string,
        audio: string,
        cat : string
    }[] = []

    categories = [
        {
            name: 'numbers',
            lao: 'ເລກ'
        },
        {
            name: 'days-of-week',
            lao: 'ມື້'
        },
        {
            name: 'month',
            lao: 'ເດືອນ'
        },
        {
            name: 'colors',
            lao: 'ສີ'
        }
    ];

    numbers = [
        {
            lao: 'ສູນ',
            eng: 'suhn',
            word : 'zero',
            audio: 'zero.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ຫນຶ່ງ',
            eng: 'nung',
            word : 'one',
            audio: 'one.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ສອງ',
            eng: 'song',
            word : 'two',
            audio: 'two.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ສາມ',
            eng: 'sahm',
            word : 'three',
            audio: 'three.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ສີ່',
            eng: 'see',
            word : 'four',
            audio: 'four.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ຫ້າ',
            eng: 'haa',
            word : 'five',
            audio: 'five.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ຫົກ',
            eng: 'hok',
            word : 'six',
            audio: 'six.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ເຈັດ',
            eng: 'ghet',
            word : 'seven',
            audio: 'seven.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ແປດ',
            eng: 'bhed',
            word : 'eight',
            audio: 'eight.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ເກົ້າ',
            eng: 'ghao',
            word : 'nine',
            audio: 'nine.m4a',
            cat : 'numbers'
        },
        {
            lao: 'ສິບ',
            eng: 'sib',
            word : 'ten',
            audio: 'ten.m4a',
            cat : 'numbers'
        }
    ];

    daysOfWeek = [
        {
            lao: 'ວັນ ທິດ',
            eng: 'wahn tit',
            word : 'sunday',
            audio: 'sunday.m4a',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ຈັນ',
            eng: 'wahn jaan',
            word : 'monday',
            audio: 'monday.m4a',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ຄັນ',
            eng: 'wahn kaan',
            word : 'tuesday',
            audio: 'tuesday.m4a',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ພຸດ',
            eng: 'wahn puut',
            word : 'wednesday',
            audio: 'wednesday.m4a',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ພະຫັດ',
            eng: 'wahn pahaat',
            word : 'thursday',
            audio: 'thursday.m4a',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ສຸກ',
            eng: 'wahn sook',
            word : 'friday',
            audio: 'friday.m4a',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ເສົາ',
            eng: 'wahn sowel',
            word : 'saturday',
            audio: 'saturday.m4a',
            cat : 'day-of-week'
        }
    ];

    colors = [
        {
            lao: 'ສີແດງ',
            eng: 'si dang',
            word : 'red',
            audio: 'red.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີຂຽວ',
            eng: 'si keo',
            word : 'green',
            audio: 'green.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີຟ້າ',
            eng: 'si fa',
            word : 'blue',
            audio: 'blue.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີດໍມ',
            eng: 'si dum',
            word : 'black',
            audio: 'black.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີຂາວ',
            eng: 'si khao',
            word : 'white',
            audio: 'white.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີເຫຼືອງ',
            eng: 'si leung',
            word : 'yellow',
            audio: 'yellow.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີບົວ',
            eng: 'si bua',
            word : 'pink',
            audio: 'pink.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີນ້ໍາຕານ',
            eng: 'si noatan',
            word : 'brown',
            audio: 'brown.m4a',
            cat : 'colors'
        },
        {
            lao: 'ສີສົ້ມ',
            eng: 'si som',
            word : 'orange',
            audio: 'orange.m4a',
            cat : 'colors'
        }
    ]

    month = [];

    getCategories(cat: string){
        if(cat === 'numbers'){
            this.currentSet = this.numbers;
        }else if(cat === 'days-of-week'){
            this.currentSet = this.daysOfWeek;
        }else if(cat === 'colors'){
            this.currentSet = this.colors;
        }else if (cat === 'month'){
            this.currentSet = this.month;
        }

        return this.currentSet;
    }

}
