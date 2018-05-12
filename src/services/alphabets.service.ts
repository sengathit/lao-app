export class AlphabetsService {
    consonants = [
			{
				name : 'gaw',
				order: 1,
				glyph : 'ກ',
				sound : 'k',
				audio : 'gaw.m4a',
				cat : 'consonant-1',
				example : {
					lao : 'ໄກ່',
					eng : 'gai',
					word : 'chicken'
				},
				description : 'the first letter of the alphabets'
			},
			{
				name : 'jaw',
				glyph : 'ຈ',
				sound : 'j',
				audio : 'jaw.m4a',
				cat : 'consonant-1',
				example : {
					lao : 'ຈານ',
					eng : 'jahn',
					word : 'dish'
				},
				description: 'lorem ipsum lao'
			},
			{
				name : 'daw',
				glyph : 'ດ',
				sound : 'd',
				audio : 'daw.m4a',
				cat : 'consonant-1',
				example : {
					lao : 'ດາວ',
					eng : 'dao',
					word : 'star'
				},
				description: 'lorem ipsum lao'
			},
			{
				name : 'dtaw',
				glyph : 'ຕ',
				sound : 'dt',
				audio : 'dtaw.m4a',
				cat : 'consonant-1',
				example : {
					lao : 'ຕະຫຼາດ',
					eng : 'dtalaat',
					word : 'market'
				},
				description: 'lorem ipsum lao dfgfhds'
			},
			{
				name : 'baw',
				glyph : 'ບ',
				sound : 'b',
				audio : 'baw.m4a',
				cat : 'consonant-2',
				example : {
					lao : 'ແບ້',
					eng : 'bae',
					word : 'goat'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'bpaw',
				glyph : 'ປ',
				sound : 'b',
				audio : 'bpaw.m4a',
				cat : 'consonant-2',
				example : {
					lao : 'ປາ',
					eng : 'bpah',
					word : 'fish'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'yaw',
				glyph : 'ຢ',
				sound : 'y',
				audio : 'yaw.m4a',
				cat : 'consonant-2',
				example : {
					lao : 'ຢາ',
					eng : 'yah',
					word : 'medicine'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'aw',
				glyph : 'ອ',
				sound : 'aw',
				audio : 'aw.m4a',
				cat : 'consonant-2',
				example : {
					lao : 'ໂອ',
					eng : 'oh',
					word : 'ceremonial bowl'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'kaw',
				order : 3,
				glyph : 'ຄ',
				sound : 'k',
				audio : 'kaw.m4a',
				cat : 'consonant-3',
				example : {
					lao : 'ຄວາຍ',
					eng : 'khauen',
					word : 'water buffalo'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'ngaw',
				order : 4,
				glyph : 'ງ',
				sound : 'ng',
				audio : 'ngaw.m4a',
				cat : 'consonant-3',
				example : {
					lao : 'ງົວ',
					eng : 'ngua',
					word : 'cow'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'saw',
				order : 7,
				glyph : 'ຊ',
				sound : 's',
				audio : 'saw.m4a',
				cat : 'consonant-3',
				example : {
					lao : 'ຊ້າງ',
					eng : 'zahng',
					word : 'elephant'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'nyaw',
				order : 8,
				glyph : 'ຍ',
				sound : 'ny',
				audio : 'nyaw.m4a',
				cat : 'consonant-3',
				example : {
					lao : 'ຍຸງ',
					eng : 'yoong',
					word : 'misquito'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'taw',
				order : 12,
				glyph : 'ທ',
				sound : 't',
				audio : 'taw.m4a',
				cat : 'consonant-3',
				example : {
					lao : 'ທງ',
					eng : 'toong',
					word : 'flag'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'naw',
				order : 13,
				glyph : 'ນ',
				sound : 'n',
				audio : 'naw.m4a',
				cat : 'consonant-3',
				example : {
					lao : 'ນົກ',
					eng : 'nok',
					word : 'bird'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'paw',
				order : 18,
				glyph : 'ພ',
				sound : 'p',
				audio : 'paw.m4a',
				cat : 'consonant-4',
				example : {
					lao : 'ພູ',
					eng : 'poo',
					word : 'mountain'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'faw',
				order : 19,
				glyph : 'ຟ',
				sound : 'f',
				audio : 'faw.m4a',
				cat : 'consonant-4',
				example : {
					lao : 'ໄຟ',
					eng : 'fai',
					word : 'fire'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'maw',
				order : 20,
				glyph : 'ມ',
				sound : 'm',
				audio : 'maw.m4a',
				cat : 'consonant-4',
				example : {
					lao : 'ແມວ',
					eng : 'maew',
					word : 'cat'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'law',
				order : 22,
				glyph : 'ລ',
				sound : 'l',
				audio : 'law.m4a',
				cat : 'consonant-4',
				example : {
					lao : 'ລິງ',
					eng : 'ling',
					word : 'monkey'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'waw',
				order : 23,
				glyph : 'ວ',
				sound : 'w',
				audio : 'waw.m4a',
				cat : 'consonant-4',
				example : {
					lao : 'ວີ',
					eng : 'wee',
					word : 'hand fan'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'haw',
				order : 32,
				glyph : 'ຮ',
				sound : 'h',
				audio : 'haw.m4a',
				cat : 'consonant-4',
				example : {
					lao : 'ເຮືອນ',
					eng : 'heun',
					word : 'house'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'khaw',
				order : 2,
				glyph : 'ຂ',
				sound : 'kh',
				audio : 'khaw.m4a',
				cat : 'consonant-5',
				example : {
					lao : 'ໄຂ່',
					eng : 'kai',
					word : 'egg'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'saw',
				order : 6,
				glyph : 'ສ',
				sound : 's',
				audio : 'saw.m4a',
				cat : 'consonant-5',
				example : {
					lao : 'ເສືອ',
					eng : 'seua',
					word : 'tiger'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'thaw',
				order : 11,
				glyph : 'ຖ',
				sound : 'th',
				audio : 'thaw.m4a',
				cat : 'consonant-5',
				example : {
					lao : 'ຖົງ',
					eng : 'tuoung',
					word : 'bag'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'phaw',
				order : 16,
				glyph : 'ຜ',
				sound : 'ph',
				audio : 'phaw.m4a',
				cat : 'consonant-5',
				example : {
					lao : 'ເຜື້ງ',
					eng : 'phaung',
					word : 'bee'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'faw',
				order : 17,
				glyph : 'ຝ',
				sound : 'f',
				audio : 'faw.m4a',
				cat : 'consonant-5',
				example : {
					lao : 'ຝົນ',
					eng : 'fone',
					word : 'rain'
				},
				description: 'lorem ipsumizzle'
			},
			{
				name : 'haw',
				order : 24,
				glyph : 'ຫ',
				sound : 'h',
				audio : 'haw.m4a',
				cat : 'consonant-5',
				example : {
					lao : 'ຫ່ານ',
					eng : 'hahn',
					word : 'goose'
				},
				description: 'lorem ipsumizzle'
			}
		];

	vowels = [
			{
				name : 'a',
				order : 1,
				glyph : '◌ະ',
				sound : 'a',
				audio : 'a.m4a',
				cat : 'vowel-1',
				example : {
					lao : 'ກະດານ',
					eng : 'gah-darn',
					word : 'black board'
				},
				description: 'right side vowels'
			},
			{
				name : 'aa',
				order : 3,
				glyph : '◌າ',
				sound : 'aa',
				audio : 'aa.m4a',
				cat : 'vowel-1',
				example : {
					lao : 'ປາ',
					eng : 'bpah',
					word : 'fish'
				},
				description: 'right side vowels'
			},
			{
				name : 'aam',
				order : 32,
				glyph : '◌ຳ',
				sound : 'aam',
				audio : 'aam.m4a',
				cat : 'vowel-1',
				example : {
					lao : 'ດຳ',
					eng : 'dum',
					word : 'dark/black'
				},
				description: 'right side vowels'
			},
			{
				name : 'a',
				order : 2,
				glyph : '◌ັ',
				sound : 'ah',
				audio : 'a.m4a',
				cat : 'vowel-2',
				example : {
					lao : 'ຕີເປັຍ',
					eng : 'thee-bpia',
					word : 'hit'
				},
				description: 'top vowels'
			},
			{
				name : 'o',
				order : 17,
				glyph : '◌ົ',
				sound : 'o',
				audio : 'o.m4a',
				cat : 'vowel-2',
				example : {
					lao : 'ງົວ',
					eng : 'ngua',
					word : 'cow'
				},
				description: 'top vowels'
			},
			{
				name : 'i',
				order : '4',
				glyph : '◌ິ',
				sound : 'i',
				audio : 'i.m4a',
				cat : 'vowel-2',
				example : {
					lao : 'ກະປິ',
					eng : 'gah-bphee',
					word : 'shrimp paste'
				},
				description: 'top vowels'
			},
			{
				name : 'ii',
				order : 5,
				glyph : '◌ີ',
				sound : 'ii',
				audio : 'ii.m4a',
				cat : 'vowel-2',
				example : {
					lao : 'ປີກ້ວຍ',
					eng : 'bhee-guen',
					word : 'banana blossom'
				},
				description: 'top vowels'
			},
			{
				name : 'uh',
				order : 6,
				glyph : '◌ຶ',
				sound : 'uh',
				audio : 'uh.m4a',
				cat : 'vowel-2',
				example : {
					lao : 'ໝາກອຶ',
					eng : 'mahk-ue',
					word : 'pumpkin'
				},
				description: 'top vowels'
			},
			{
				name : 'uhh',
				order : 7,
				glyph : '◌ື',
				sound : 'uhh',
				audio : 'uhh.m4a',
				cat : 'vowel-2',
				example : {
					lao : 'ມື',
					eng : 'mue',
					word : 'hand'
				},
				description: 'top vowels'
			},
			{
				name : 'aw',
				order : 20,
				glyph : '◌ໍ',
				sound : 'aw',
				audio : 'aw.m4a',
				cat : 'vowel-2',
				example : {
					lao : 'ຊໍ',
					eng : 'zaw',
					word : 'violin'
				},
				description: 'top vowels'
			},
			{
				name : 'u',
				order : 8,
				glyph : '◌ຸ',
				sound : 'u',
				audio : 'u.m4a',
				cat : 'vowel-3',
				example : {
					lao : 'ຄຸ',
					eng : 'koo',
					word : 'bucket'
				},
				description: 'bottom vowels'
			},
			{
				name : 'uu',
				order : 8,
				glyph : '◌ູ',
				sound : 'uu',
				audio : 'uu.m4a',
				cat : 'vowel-3',
				example : {
					lao : 'ກະປູ',
					eng : 'gah-bpoo',
					word : 'crab'
				},
				description: 'bottom vowels'
			},
			{
				name : 'aw',
				order : 21,
				glyph : '◌ອ◌',
				sound : 'aw',
				audio : 'aw.m4a',
				cat : 'vowel-4',
				example : {
					lao : 'ຂອງ',
					eng : 'kong',
					word : 'river side'
				},
				description: 'in between vowels'
			},
			{
				name : 'ia',
				order : 27,
				glyph : '◌ຽ◌',
				sound : 'ia',
				audio : 'ia.m4a',
				cat : 'vowel-4',
				example : {
					lao : 'ຮຽນ',
					eng : 'heun',
					word : 'house'
				},
				description: 'in between vowels'
			},
			{
				name : 'eei',
				order : 12,
				glyph : 'ເ◌',
				sound : 'eei',
				audio : 'eei.m4a',
				cat : 'vowel-5',
				example : {
					lao : 'ເປ',
					eng : 'bpay',
					word : 'hammock'
				},
				description: 'left side vowels'
			},
			{
				name : 'aae',
				order : 15,
				glyph : 'ແ◌',
				sound : 'aae',
				audio : 'aae.m4a',
				cat : 'vowel-5',
				example : {
					lao : 'ແກ',
					eng : 'gae',
					word : 'horn'
				},
				description: 'left side vowels'
			},
			{
				name : 'oo',
				order : 18,
				glyph : 'ໂ◌',
				sound : 'oo',
				audio : 'oo.m4a',
				cat : 'vowel-5',
				example : {
					lao : 'ໝ້າກໂມ',
					eng : 'mahk-moh',
					word : 'watermelon'
				},
				description: 'left side vowels'
			},
			{
				name : 'ai',
				order : 35,
				glyph : 'ໃ◌',
				sound : 'ai',
				audio : 'ai.m4a',
				cat : 'vowel-5',
				example : {
					lao : 'ໃບໄມ້',
					eng : 'bai-mai',
					word : 'leaf'
				},
				description: 'left side vowels'
			},
			{
				name : 'ai',
				order : 36,
				glyph : 'ໄ◌',
				sound : 'ai',
				audio : 'ai.m4a',
				cat : 'vowel-5',
				example : {
					lao : 'ໃບໄມ້',
					eng : 'bai-mai',
					word : 'leaf'
				},
				description: 'left side vowels'
			}
	];

    tonalMarks = [
        {
            name : 'mai ek',
            glyph : '◌່',
            audio : 'mai-ek.m4a',
            cat : 'tonal-mark',
            description: 'left side vowels'
        },
        {
            name : 'mai tho',
            glyph : '◌້',
            audio : 'mai-tho.m4a',
            cat : 'tonal-mark',
            description: 'left side vowels'
        },
        {
            name : 'mai catawa',
            glyph : '◌໋',
            audio : 'mai-catawa.m4a',
            cat : 'tonal-mark',
            description: 'left side vowels'
        },
        {
            name : 'mai thi',
            glyph : '◌໊',
            audio : 'mai-thi.m4a',
            cat : 'tonal-mark',
            description: 'left side vowels'
        }
    ]
}
