export class VocabularyService {
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
            audio: 'zero.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ຫນຶ່ງ',
            eng: 'nung',
            word : 'one',
            audio: 'outline.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ສອງ',
            eng: 'song',
            word : 'two',
            audio: 'two.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ສາມ',
            eng: 'sahm',
            word : 'three',
            audio: 'three.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ສີ່',
            eng: 'see',
            word : 'four',
            audio: 'four.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ຫ້າ',
            eng: 'haa',
            word : 'five',
            audio: 'five.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ຫົກ',
            eng: 'hok',
            word : 'six',
            audio: 'six.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ເຈັດ',
            eng: 'ghet',
            word : 'seven',
            audio: 'seven.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ແປດ',
            eng: 'bhed',
            word : 'eight',
            audio: 'eight.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ເກົ້າ',
            eng: 'ghao',
            word : 'nine',
            audio: 'nine.mp4',
            cat : 'numbers'
        },
        {
            lao: 'ສິບ',
            eng: 'sib',
            word : 'ten',
            audio: 'ten.mp4',
            cat : 'numbers'
        }
    ];

    daysOfWeek = [
        {
            lao: 'ວັນ ທິດ',
            eng: 'wahn tit',
            word : 'sunday',
            audio: 'sunday.mp4',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ຈັນ',
            eng: 'wahn jaan',
            word : 'monday',
            audio: 'monday.mp4',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ຄັນ',
            eng: 'wahn kaan',
            word : 'tuesday',
            audio: 'tuesday.mp4',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ພຸດ',
            eng: 'wahn puut',
            word : 'wednesday',
            audio: 'wednesday.mp4',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ພະຫັດ',
            eng: 'wahn pahaat',
            word : 'thursday',
            audio: 'thursday.mp4',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ສຸກ',
            eng: 'wahn sook',
            word : 'friday',
            audio: 'friday.mp4',
            cat : 'day-of-week'
        },
        {
            lao: 'ວັນ ເສົາ',
            eng: 'wahn sowel',
            word : 'saturday',
            audio: 'saturday.mp4',
            cat : 'day-of-week'
        }
    ];

    colors = [
        {
            lao: 'ສີແດງ',
            eng: 'si dang',
            word : 'red',
            audio: 'red.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີຂຽວ',
            eng: 'si keo',
            word : 'green',
            audio: 'green.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີຟ້າ',
            eng: 'si fa',
            word : 'blue',
            audio: 'blue.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີດໍມ',
            eng: 'si dum',
            word : 'black',
            audio: 'black.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີຂາວ',
            eng: 'si khao',
            word : 'white',
            audio: 'white.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີເຫຼືອງ',
            eng: 'si leung',
            word : 'yellow',
            audio: 'yellow.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີບົວ',
            eng: 'si bua',
            word : 'pink',
            audio: 'pink.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີນ້ໍາຕານ',
            eng: 'si noatan',
            word : 'brown',
            audio: 'brown.mp4',
            cat : 'colors'
        },
        {
            lao: 'ສີສົ້ມ',
            eng: 'si sourcemaps',
            word : 'orange',
            audio: 'orange.mp4',
            cat : 'colors'
        }
    ]

    getCategories(cat: string){
        if(cat === 'numbers'){
            this.currentSet = this.numbers;
        }else if(cat === 'days-of-week'){
            this.currentSet = this.daysOfWeek;
        }else if(cat === 'colors'){
            this.currentSet = this.colors;
        }

        return this.currentSet;
    }

}
