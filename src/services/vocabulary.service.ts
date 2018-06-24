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
        },
        {
            name: 'adjective',
            lao: ''
        },
        {
            name: 'transportation',
            lao: ''
        },
        {
            name: 'verb',
            lao: ''
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

    month = [
        {
            lao: 'ເດືອນ ຫນຶ່ງ',
            eng: 'deuon nung',
            word : 'january',
            audio: 'january.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ສອງ',
            eng: 'deuon song',
            word : 'febraury',
            audio: 'febraury.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ສາມ',
            eng: 'deuon sahm',
            word : 'march',
            audio: 'march.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ສີ່',
            eng: 'deuon si',
            word : 'april',
            audio: 'april.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ສີ່',
            eng: 'deuon see',
            word : 'april',
            audio: 'april.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ຫ້າ',
            eng: 'deuon haa',
            word : 'may',
            audio: 'may.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ຫົກ',
            eng: 'deuon hok',
            word : 'june',
            audio: 'june.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ເຈັດ',
            eng: 'deuon ghet',
            word : 'july',
            audio: 'july.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ແປດ',
            eng: 'deuon bhed',
            word : 'august',
            audio: 'august.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ເກົ້າ',
            eng: 'deuon ghao',
            word : 'september',
            audio: 'september.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ສິບ',
            eng: 'deuon sib',
            word : 'october',
            audio: 'october.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ສິບເອັດ',
            eng: 'deuon sibeate',
            word : 'november',
            audio: 'november.m4a',
            cat : 'month'
        },
        {
            lao: 'ເດືອນ ສິບສອງ',
            eng: 'deuon sibsong',
            word : 'december',
            audio: 'december.m4a',
            cat : 'month'
        }
    ];

    adjective = [
        {
            lao: 'ດີ',
            eng: 'dii',
            word : 'good',
            audio: 'good.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ບໍ່ ດີ',
            eng: 'baw dii',
            word : 'bad',
            audio: 'bad.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ສັ້ນ',
            eng: 'sahn',
            word : 'short',
            audio: 'short.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ສູງ',
            eng: 'suong',
            word : 'tall',
            audio: 'tall.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ເໝັນ',
            eng: 'maen',
            word : 'stink',
            audio: 'stink.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ໃຫຍ່',
            eng: 'nyai',
            word : 'big',
            audio: 'big.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ນ້ອຍ',
            eng: 'noi',
            word : 'small',
            audio: 'small.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ອ່ອນ',
            eng: 'awn',
            word : 'soft',
            audio: 'soft.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ໜັກ',
            eng: 'kang',
            word : 'hard',
            audio: 'hard.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ຍາກ',
            eng: 'nyak',
            word : 'difficult',
            audio: 'difficult.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ງ່າຍ',
            eng: 'ngai',
            word : 'easy',
            audio: 'easy.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ຮ້ອນ',
            eng: 'hon',
            word : 'hot',
            audio: 'hot.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ເຢັນ',
            eng: 'yaen',
            word : 'cold',
            audio: 'cold.m4a',
            cat : 'adjective'
        },
        {
            lao: 'ເຄັມ',
            eng: 'khem',
            word : 'salty',
            audio: 'salty.m4a',
            cat : 'adjective'
        }



    ]

    transportation = [
        {
            lao: 'ລົດ',
            eng: 'lote',
            word : 'car',
            audio: 'car.m4a',
            cat : 'transportation'
        },
        {
            lao: 'ລົດ ​ຖີບ',
            eng: 'lote tib',
            word : 'bicycle',
            audio: 'bicycle.m4a',
            cat : 'transportation'
        },
        {
            lao: 'XXX',
            eng: 'lote fai',
            word : 'train',
            audio: 'train.m4a',
            cat : 'transportation'
        },
        {
            lao: 'ລົດ ເມ',
            eng: 'lote mey',
            word : 'bus',
            audio: 'bus.m4a',
            cat : 'transportation'
        },
        {
            lao: 'XXX',
            eng: 'yohn',
            word : 'air plane',
            audio: 'air-plane.m4a',
            cat : 'transportation'
        },
        {
            lao: 'ລົດ ຈັກ',
            eng: 'lote jahk',
            word : 'motorcycle',
            audio: 'motorcycle.m4a',
            cat : 'transportation'
        },
        {
            lao: 'ເຮືອ',
            eng: 'huah',
            word : 'boat',
            audio: 'boat.m4a',
            cat : 'transportation'
        }
    ];

    verb = [
        {
            lao: 'ຍ່າງ',
            eng: 'nyang',
            word : 'walk',
            audio: 'walk.m4a',
            cat : 'verb'
        },
        {
            lao: 'ແລ່ນ',
            eng: 'lan',
            word : 'run',
            audio: 'run.m4a',
            cat : 'verb'
        },
        {
            lao: 'ເບິ່ງ',
            eng: 'beung',
            word : 'see',
            audio: 'see.m4a',
            cat : 'verb'
        },
        {
            lao: 'ຟັງ',
            eng: 'fahng',
            word : 'listen',
            audio: 'listen.m4a',
            cat : 'verb'
        },
        {
            lao: 'ເວົ້າ',
            eng: 'whowel',
            word : 'speak',
            audio: 'speak.m4a',
            cat : 'verb'
        },
        {
            lao: 'ນັ່ງ',
            eng: 'neang',
            word : 'sit',
            audio: 'sit.m4a',
            cat : 'verb'
        },
        {
            lao: 'ອ່ານ',
            eng: 'ahn',
            word : 'read',
            audio: 'read.m4a',
            cat : 'verb'
        },
        {
            lao: 'ມາ',
            eng: 'mah',
            word : 'come',
            audio: 'come.m4a',
            cat : 'verb'
        },
        {
            lao: 'ໄປ',
            eng: 'bpai',
            word : 'go',
            audio: 'go.m4a',
            cat : 'verb'
        },
        {
            lao: 'ຊອກ​ຫາ',
            eng: 'sock ha',
            word : 'look',
            audio: 'look.m4a',
            cat : 'verb'
        }
    ];

    getCategories(cat: string){
        if(cat === 'numbers'){
            this.currentSet = this.numbers;
        }else if(cat === 'days-of-week'){
            this.currentSet = this.daysOfWeek;
        }else if(cat === 'colors'){
            this.currentSet = this.colors;
        }else if (cat === 'month'){
            this.currentSet = this.month;
        }else if (cat === 'adjective'){
            this.currentSet = this.adjective;
        }else if (cat === 'transportation'){
            this.currentSet = this.transportation;
        }else if (cat === 'verb'){
            this.currentSet = this.verb;
        }

        return this.currentSet;
    }

}
