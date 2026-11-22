/* =====================================================================
   GALATA — MENÜLER (şube bazında)
   galata: Galata Cafe & Bistro panolarından aktarıldı (Kasım 2026)
   rheidol: boş → menü sayfasında "çok yakında" görünür

   Ürün alanları:
     name  { en, tr }           ürün adı
     desc  { en, tr }           açıklama (isteğe bağlı)
     price 12.95 | "+50p"       tek fiyat (sayı → £12.95 olarak yazılır)
     prices [{label:{en,tr}, price}]  çoklu fiyat (175ml/250ml/şişe, küçük/büyük...)
     tags  ["v","vg","gf"]      v=vejetaryen, vg=vegan, gf=glutensiz
     extra true                 ekstra/ilave satırı (daha sade gösterilir)
   Kategori: id, group ("food"|"drinks"), title, note (isteğe bağlı), price (tüm ürünler aynı fiyatsa)
   ===================================================================== */
window.GALATA_MENU = {
 "galata": [
  {
   "id": "breakfasts",
   "group": "food",
   "title": {
    "en": "Breakfasts",
    "tr": "Kahvaltılar"
   },
   "items": [
    {
     "name": {
      "en": "Mediterranean Breakfast",
      "tr": "Akdeniz Kahvaltısı"
     },
     "desc": {
      "en": "Halloumi, sucuk (Turkish beef garlic sausage), tomatoes, cucumber, mixed olives, fried egg, feta cheese, butter, jam, honey & a basket of bread",
      "tr": "Hellim, sucuk, domates, salatalık, karışık zeytin, sahanda yumurta, beyaz peynir, tereyağı, reçel, bal ve sepet ekmek"
     },
     "price": 16.5
    },
    {
     "name": {
      "en": "Full English Breakfast",
      "tr": "İngiliz Kahvaltısı"
     },
     "desc": {
      "en": "Bacon, sausage, 2 eggs, beans, 2 hash browns, mushroom, tomatoes & 2 slices of bread. Halal option available – turkey rashers.",
      "tr": "Bacon, sosis, 2 yumurta, kuru fasulye, 2 patates köftesi (hash brown), mantar, domates ve 2 dilim ekmek. Helal seçenek: hindi füme."
     },
     "price": 16.5
    },
    {
     "name": {
      "en": "Jacket Breakfast",
      "tr": "Fırın Patates Kahvaltısı"
     },
     "desc": {
      "en": "Jacket potato with Cumberland sausage, bacon, egg and baked beans",
      "tr": "Fırın patates; Cumberland sosis, bacon, yumurta ve kuru fasulye ile"
     },
     "price": 16
    },
    {
     "name": {
      "en": "Vegan Breakfast",
      "tr": "Vegan Kahvaltı"
     },
     "desc": {
      "en": "Hummus, mixed olives, fried tomatoes, mushroom, bell pepper, avocado & a basket of bread",
      "tr": "Humus, karışık zeytin, kızarmış domates, mantar, biber, avokado ve sepet ekmek"
     },
     "price": 14.95,
     "tags": [
      "vg"
     ]
    },
    {
     "name": {
      "en": "Quick Breakfast",
      "tr": "Hızlı Kahvaltı"
     },
     "desc": {
      "en": "2 bacon, 1 sausage, 1 egg, beans, hash brown & 2 slices of bread. Halal option available – turkey rashers.",
      "tr": "2 bacon, 1 sosis, 1 yumurta, kuru fasulye, hash brown ve 2 dilim ekmek. Helal seçenek: hindi füme."
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Egg on Toast",
      "tr": "Kızarmış Ekmekte Yumurta"
     },
     "desc": {
      "en": "Fried, scrambled or poached — your choice — on sourdough bread",
      "tr": "Sahanda, çırpılmış ya da poşe — tercihiniz — ekşi maya ekmek üzerinde"
     },
     "price": 7.95,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Egg Royale",
      "tr": "Egg Royale"
     },
     "desc": {
      "en": "2 poached eggs with Hollandaise sauce on muffin bread, smashed avocado and smoked salmon, served with salad",
      "tr": "Muffin ekmeği üzerinde Hollandez soslu 2 poşe yumurta, ezilmiş avokado ve füme somon; salata ile"
     },
     "price": 13.95
    },
    {
     "name": {
      "en": "Egg Benedict",
      "tr": "Egg Benedict"
     },
     "desc": {
      "en": "2 poached eggs with Hollandaise sauce on muffin bread & 2 slices of bacon, served with salad. Halal option available – turkey rashers.",
      "tr": "Muffin ekmeği üzerinde Hollandez soslu 2 poşe yumurta ve 2 dilim bacon; salata ile. Helal seçenek: hindi füme."
     },
     "price": 13.95
    },
    {
     "name": {
      "en": "Avocado Toast",
      "tr": "Avokado Tost"
     },
     "desc": {
      "en": "With sourdough bread",
      "tr": "Ekşi maya ekmek ile"
     },
     "price": 7.95,
     "tags": [
      "vg"
     ]
    },
    {
     "name": {
      "en": "Extra toppings",
      "tr": "Ekstralar"
     },
     "desc": {
      "en": "Egg (fried / scrambled / poached), bacon, beans or turkey rashers",
      "tr": "Yumurta (sahanda / çırpılmış / poşe), bacon, kuru fasulye veya hindi füme"
     },
     "price": 2.95,
     "extra": true
    }
   ],
   "note": {
    "en": "Gluten-free bread available +£1",
    "tr": "Glutensiz ekmek mevcut +£1"
   }
  },
  {
   "id": "menemen",
   "group": "food",
   "title": {
    "en": "Menemen",
    "tr": "Menemen"
   },
   "items": [
    {
     "name": {
      "en": "Menemen",
      "tr": "Menemen"
     },
     "desc": {
      "en": "Turkish scrambled eggs with tomatoes, Charleston peppers and olive oil, served with sourdough bread",
      "tr": "Domates, yumurta, çarliston biber ve zeytinyağı; ekşi maya ekmek ile"
     },
     "price": 12.95,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Extra toppings",
      "tr": "Ekstralar"
     },
     "desc": {
      "en": "Feta cheese, sucuk or spinach",
      "tr": "Beyaz peynir, sucuk veya ıspanak"
     },
     "price": 2.95,
     "extra": true
    }
   ]
  },
  {
   "id": "omelette",
   "group": "food",
   "title": {
    "en": "Omelette",
    "tr": "Omlet"
   },
   "items": [
    {
     "name": {
      "en": "Omelette",
      "tr": "Omlet"
     },
     "desc": {
      "en": "Served with a side of salad or fries",
      "tr": "Yanında salata veya patates kızartması"
     },
     "price": 9,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Vegetable toppings (each)",
      "tr": "Sebze ekstraları (her biri)"
     },
     "desc": {
      "en": "Spinach, tomato, mushroom, peppers, onion",
      "tr": "Ispanak, domates, mantar, biber, soğan"
     },
     "price": 2,
     "extra": true
    },
    {
     "name": {
      "en": "Meat & dairy toppings (each)",
      "tr": "Et ve peynir ekstraları (her biri)"
     },
     "desc": {
      "en": "Ham, cheese, bacon, chicken, Cumberland sausage, halloumi, feta",
      "tr": "Jambon, peynir, bacon, tavuk, Cumberland sosis, hellim, beyaz peynir"
     },
     "price": 2.95,
     "extra": true
    }
   ]
  },
  {
   "id": "pancakes",
   "group": "food",
   "title": {
    "en": "Pancakes",
    "tr": "Pankekler"
   },
   "items": [
    {
     "name": {
      "en": "American",
      "tr": "Amerikan"
     },
     "desc": {
      "en": "Served with sausage, 2 bacon, egg, fresh cream & maple syrup",
      "tr": "Sosis, 2 bacon, yumurta, taze krema ve akçaağaç şurubu ile"
     },
     "price": 11.95
    },
    {
     "name": {
      "en": "Fruit",
      "tr": "Meyveli"
     },
     "desc": {
      "en": "Pancake with strawberry, blueberry and banana, served with fresh cream & maple syrup",
      "tr": "Çilek, yaban mersini ve muzlu pankek; taze krema ve akçaağaç şurubu ile"
     },
     "price": 11.95,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Nutella",
      "tr": "Nutella"
     },
     "desc": {
      "en": "Nutella with mixed fruit (strawberry, blueberries, banana) & fresh cream",
      "tr": "Nutella, karışık meyve (çilek, yaban mersini, muz) ve taze krema"
     },
     "price": 13.45,
     "tags": [
      "v"
     ]
    }
   ]
  },
  {
   "id": "ciabatta",
   "group": "food",
   "title": {
    "en": "Ciabatta sandwiches",
    "tr": "Ciabatta sandviçler"
   },
   "items": [
    {
     "name": {
      "en": "Cheese & tomato with green pesto",
      "tr": "Peynir, domates ve yeşil pesto"
     },
     "price": 7.95,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Egg, bacon & sausage",
      "tr": "Yumurta, bacon ve sosis"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Mushroom, fried onions, egg",
      "tr": "Mantar, kavrulmuş soğan, yumurta"
     },
     "price": 9.95,
     "tags": [
      "v"
     ]
    }
   ]
  },
  {
   "id": "jacket",
   "group": "food",
   "title": {
    "en": "Jacket potato",
    "tr": "Fırın patates"
   },
   "items": [
    {
     "name": {
      "en": "Plain jacket potato",
      "tr": "Sade fırın patates"
     },
     "price": 7.5,
     "tags": [
      "v",
      "vg"
     ]
    },
    {
     "name": {
      "en": "Veggie & dairy toppings (each)",
      "tr": "Sebze ve peynir ekstraları (her biri)"
     },
     "desc": {
      "en": "Cheese, baked beans, mushroom, sweetcorn, coleslaw, olives, feta cheese, avocado",
      "tr": "Peynir, kuru fasulye, mantar, mısır, coleslaw, zeytin, beyaz peynir, avokado"
     },
     "price": 2,
     "extra": true
    },
    {
     "name": {
      "en": "Meat toppings (each)",
      "tr": "Etli ekstralar (her biri)"
     },
     "desc": {
      "en": "Chicken, tuna & mayo, bacon, sucuk",
      "tr": "Tavuk, ton balığı ve mayonez, bacon, sucuk"
     },
     "price": 2.95,
     "extra": true
    },
    {
     "name": {
      "en": "Jacket Breakfast",
      "tr": "Fırın Patates Kahvaltısı"
     },
     "desc": {
      "en": "Cumberland sausage, bacon, egg and baked beans",
      "tr": "Cumberland sosis, bacon, yumurta ve kuru fasulye"
     },
     "price": 16
    }
   ]
  },
  {
   "id": "wraps",
   "group": "food",
   "title": {
    "en": "Wraps",
    "tr": "Dürümler"
   },
   "items": [
    {
     "name": {
      "en": "Chicken salad",
      "tr": "Tavuk salatalı"
     },
     "price": 12.95
    },
    {
     "name": {
      "en": "Halloumi",
      "tr": "Hellimli"
     },
     "price": 12.95,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Falafel & hummus",
      "tr": "Falafel ve humus"
     },
     "price": 12.95,
     "tags": [
      "vg"
     ]
    },
    {
     "name": {
      "en": "Extra toppings",
      "tr": "Ekstralar"
     },
     "desc": {
      "en": "Halloumi, chicken or falafel",
      "tr": "Hellim, tavuk veya falafel"
     },
     "price": 4.5,
     "extra": true
    }
   ],
   "note": {
    "en": "All wraps contain a mixed salad",
    "tr": "Tüm dürümlerde karışık salata vardır"
   }
  },
  {
   "id": "salads",
   "group": "food",
   "title": {
    "en": "Salads",
    "tr": "Salatalar"
   },
   "items": [
    {
     "name": {
      "en": "Feta salad",
      "tr": "Beyaz peynirli salata"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Chicken salad",
      "tr": "Tavuklu salata"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Halloumi salad",
      "tr": "Hellimli salata"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Falafel salad",
      "tr": "Falafelli salata"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Extra toppings",
      "tr": "Ekstralar"
     },
     "desc": {
      "en": "Halloumi, chicken, falafel or feta cheese",
      "tr": "Hellim, tavuk, falafel veya beyaz peynir"
     },
     "price": 4.5,
     "extra": true
    }
   ]
  },
  {
   "id": "seafood",
   "group": "food",
   "title": {
    "en": "Seafood",
    "tr": "Deniz ürünleri"
   },
   "items": [
    {
     "name": {
      "en": "Calamari (6 pcs)",
      "tr": "Kalamar (6 adet)"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Calamari, chips & soft drink",
      "tr": "Kalamar, patates kızartması ve meşrubat"
     },
     "price": 15.95
    },
    {
     "name": {
      "en": "Tiger prawns (6 pcs), fried",
      "tr": "Kaplan karides (6 adet), kızarmış"
     },
     "price": 10.95
    },
    {
     "name": {
      "en": "Tiger prawns (6 pcs), fried, & chips",
      "tr": "Kaplan karides (6 adet), kızarmış, patates ile"
     },
     "price": 15.95
    },
    {
     "name": {
      "en": "Garlic tiger prawns",
      "tr": "Sarımsaklı kaplan karides"
     },
     "desc": {
      "en": "Mixed bell pepper, spring onion, tomato, garlic sauce, mixed herbs and double cream",
      "tr": "Karışık biber, taze soğan, domates, sarımsak sos, karışık otlar ve krema"
     },
     "price": 16.95
    },
    {
     "name": {
      "en": "Sea bass",
      "tr": "Levrek"
     },
     "prices": [
      {
       "label": {
        "en": "In Turkish bread",
        "tr": "Ekmek arası"
       },
       "price": 13.95
      },
      {
       "label": {
        "en": "Portion",
        "tr": "Porsiyon"
       },
       "price": 21.95
      }
     ]
    },
    {
     "name": {
      "en": "Mackerel",
      "tr": "Uskumru"
     },
     "prices": [
      {
       "label": {
        "en": "In Turkish bread",
        "tr": "Ekmek arası"
       },
       "price": 13.95
      },
      {
       "label": {
        "en": "Portion",
        "tr": "Porsiyon"
       },
       "price": 21.95
      }
     ]
    },
    {
     "name": {
      "en": "Salmon",
      "tr": "Somon"
     },
     "prices": [
      {
       "label": {
        "en": "In Turkish bread",
        "tr": "Ekmek arası"
       },
       "price": 15.95
      },
      {
       "label": {
        "en": "Portion",
        "tr": "Porsiyon"
       },
       "price": 23.95
      }
     ]
    },
    {
     "name": {
      "en": "Octopus",
      "tr": "Ahtapot"
     },
     "prices": [
      {
       "label": {
        "en": "In Turkish bread",
        "tr": "Ekmek arası"
       },
       "price": 19.95
      },
      {
       "label": {
        "en": "Portion",
        "tr": "Porsiyon"
       },
       "price": 25.95
      }
     ]
    }
   ]
  },
  {
   "id": "burgers",
   "group": "food",
   "title": {
    "en": "Burgers",
    "tr": "Burgerler"
   },
   "items": [
    {
     "name": {
      "en": "Angus burger & chips",
      "tr": "Angus burger ve patates"
     },
     "desc": {
      "en": "Onion, gherkin, burger sauce, cheese",
      "tr": "Soğan, turşu, burger sos, peynir"
     },
     "price": 14.95
    },
    {
     "name": {
      "en": "Dirty burger & chips",
      "tr": "Dirty burger ve patates"
     },
     "desc": {
      "en": "2 slices bacon, fried egg, onion, lettuce, tomato, burger sauce, gherkin, cheese",
      "tr": "2 dilim bacon, sahanda yumurta, soğan, marul, domates, burger sos, turşu, peynir"
     },
     "price": 18.95
    },
    {
     "name": {
      "en": "Chicken fillet burger & chips",
      "tr": "Tavuk fileto burger ve patates"
     },
     "desc": {
      "en": "Lettuce, onion, gherkin, burger sauce, cheese",
      "tr": "Marul, soğan, turşu, burger sos, peynir"
     },
     "price": 13.95
    },
    {
     "name": {
      "en": "Halloumi burger & chips",
      "tr": "Hellim burger ve patates"
     },
     "desc": {
      "en": "Hummus, onion, gherkin, roasted bell pepper",
      "tr": "Humus, soğan, turşu, közlenmiş biber"
     },
     "price": 13.95,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Vegetarian burger & chips",
      "tr": "Vejetaryen burger ve patates"
     },
     "desc": {
      "en": "Roasted bell pepper, hummus, lettuce, tomato, gherkin & onion",
      "tr": "Közlenmiş biber, humus, marul, domates, turşu ve soğan"
     },
     "price": 13.95,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Falafel & hummus portion",
      "tr": "Falafel ve humus porsiyon"
     },
     "desc": {
      "en": "Served with salad, chips & nachos",
      "tr": "Salata, patates kızartması ve nachos ile"
     },
     "price": 16.95,
     "tags": [
      "vg"
     ]
    },
    {
     "name": {
      "en": "Extra toppings",
      "tr": "Ekstralar"
     },
     "desc": {
      "en": "Mozzarella, cheese, egg",
      "tr": "Mozzarella, peynir, yumurta"
     },
     "price": 2.95,
     "extra": true
    }
   ]
  },
  {
   "id": "lunch",
   "group": "food",
   "title": {
    "en": "Lunch deals",
    "tr": "Öğle menüleri"
   },
   "items": [
    {
     "name": {
      "en": "Calamari",
      "tr": "Kalamar"
     },
     "desc": {
      "en": "With chips, salad & soft drink",
      "tr": "Patates kızartması, salata ve meşrubat ile"
     }
    },
    {
     "name": {
      "en": "Sea bass fillet",
      "tr": "Levrek fileto"
     },
     "desc": {
      "en": "With chips, salad & soft drink",
      "tr": "Patates kızartması, salata ve meşrubat ile"
     }
    },
    {
     "name": {
      "en": "Mackerel fillet",
      "tr": "Uskumru fileto"
     },
     "desc": {
      "en": "With chips, salad & soft drink",
      "tr": "Patates kızartması, salata ve meşrubat ile"
     }
    },
    {
     "name": {
      "en": "Falafel & hummus",
      "tr": "Falafel ve humus"
     },
     "desc": {
      "en": "With chips, salad & soft drink",
      "tr": "Patates kızartması, salata ve meşrubat ile"
     }
    }
   ],
   "price": 16.95
  },
  {
   "id": "sides",
   "group": "food",
   "title": {
    "en": "Sides",
    "tr": "Yan lezzetler"
   },
   "items": [
    {
     "name": {
      "en": "Olive bowl",
      "tr": "Zeytin tabağı"
     },
     "desc": {
      "en": "Served with nachos",
      "tr": "Nachos ile"
     },
     "price": 7.95
    },
    {
     "name": {
      "en": "Cheese plate",
      "tr": "Peynir tabağı"
     },
     "desc": {
      "en": "Feta, halloumi, mixed nuts, cheddar and blue cheese, served with nachos",
      "tr": "Beyaz peynir, hellim, karışık kuruyemiş, cheddar ve rokfor; nachos ile"
     },
     "price": 11.95
    },
    {
     "name": {
      "en": "Chips",
      "tr": "Patates kızartması"
     },
     "prices": [
      {
       "label": {
        "en": "Small",
        "tr": "Küçük"
       },
       "price": 4.95
      },
      {
       "label": {
        "en": "Large",
        "tr": "Büyük"
       },
       "price": 5.95
      }
     ],
     "tags": [
      "gf"
     ]
    },
    {
     "name": {
      "en": "Hummus",
      "tr": "Humus"
     },
     "desc": {
      "en": "Served with nachos",
      "tr": "Nachos ile"
     },
     "price": 6.95,
     "tags": [
      "vg"
     ]
    },
    {
     "name": {
      "en": "Falafel",
      "tr": "Falafel"
     },
     "desc": {
      "en": "4 pcs, served with a spoon of hummus",
      "tr": "4 adet, bir kaşık humus ile"
     },
     "price": 7.95,
     "tags": [
      "vg"
     ]
    }
   ]
  },
  {
   "id": "kids",
   "group": "food",
   "title": {
    "en": "Kids menu",
    "tr": "Çocuk menüsü"
   },
   "items": [
    {
     "name": {
      "en": "Chicken nuggets with chips",
      "tr": "Tavuk nugget ve patates"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Fish finger & chips",
      "tr": "Balık kroket ve patates"
     },
     "price": 9.95
    },
    {
     "name": {
      "en": "Chips & cheese",
      "tr": "Peynirli patates"
     },
     "price": 8.95
    }
   ]
  },
  {
   "id": "hot",
   "group": "drinks",
   "title": {
    "en": "Hot drinks",
    "tr": "Sıcak içecekler"
   },
   "items": [
    {
     "name": {
      "en": "Espresso (single)",
      "tr": "Espresso (tek)"
     },
     "price": 2.9
    },
    {
     "name": {
      "en": "Espresso (double)",
      "tr": "Espresso (duble)"
     },
     "price": 3.1
    },
    {
     "name": {
      "en": "Americano",
      "tr": "Americano"
     },
     "price": 3.4
    },
    {
     "name": {
      "en": "Macchiato",
      "tr": "Macchiato"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Cortado",
      "tr": "Cortado"
     },
     "price": 3.6
    },
    {
     "name": {
      "en": "Cappuccino",
      "tr": "Cappuccino"
     },
     "price": 4.1
    },
    {
     "name": {
      "en": "Latte",
      "tr": "Latte"
     },
     "price": 4.1
    },
    {
     "name": {
      "en": "Flat White",
      "tr": "Flat White"
     },
     "price": 3.8
    },
    {
     "name": {
      "en": "Mocha",
      "tr": "Mocha"
     },
     "price": 4.4
    },
    {
     "name": {
      "en": "Turkish Coffee",
      "tr": "Türk Kahvesi"
     },
     "price": 3.9
    },
    {
     "name": {
      "en": "Hot Chocolate",
      "tr": "Sıcak Çikolata"
     },
     "price": 4.3
    },
    {
     "name": {
      "en": "Babychino",
      "tr": "Babychino"
     },
     "price": 1.0
    },
    {
     "name": {
      "en": "Matcha Latte",
      "tr": "Matcha Latte"
     },
     "price": 4.3
    },
    {
     "name": {
      "en": "Chai Latte",
      "tr": "Chai Latte"
     },
     "price": 4.3
    },
    {
     "name": {
      "en": "Breakfast Tea",
      "tr": "Kahvaltı Çayı (siyah çay)"
     },
     "price": 3.1
    },
    {
     "name": {
      "en": "Herbal Tea",
      "tr": "Bitki Çayı"
     },
     "price": 3.6
    }
   ]
  },
  {
   "id": "iced",
   "group": "drinks",
   "title": {
    "en": "Iced drinks",
    "tr": "Soğuk kahve ve içecekler"
   },
   "items": [
    {
     "name": {
      "en": "Iced Latte",
      "tr": "Iced Latte"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Iced Cappuccino",
      "tr": "Iced Cappuccino"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Iced Americano",
      "tr": "Iced Americano"
     },
     "price": 3.9
    },
    {
     "name": {
      "en": "Iced Mocha",
      "tr": "Iced Mocha"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Iced Chocolate",
      "tr": "Soğuk Çikolata"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Iced Chai Latte",
      "tr": "Iced Chai Latte"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Iced Flat White",
      "tr": "Iced Flat White"
     },
     "price": 4.3
    },
    {
     "name": {
      "en": "Iced Matcha Latte",
      "tr": "Iced Matcha Latte"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Non-dairy milk",
      "tr": "Bitkisel süt"
     },
     "price": "+50p",
     "extra": true
    },
    {
     "name": {
      "en": "Syrups",
      "tr": "Şuruplar"
     },
     "price": "+50p",
     "extra": true
    },
    {
     "name": {
      "en": "Ice cup",
      "tr": "Buzlu bardak"
     },
     "price": 1,
     "extra": true
    }
   ]
  },
  {
   "id": "juice",
   "group": "drinks",
   "title": {
    "en": "Fresh juice",
    "tr": "Taze sıkma"
   },
   "items": [
    {
     "name": {
      "en": "Orange juice",
      "tr": "Portakal suyu"
     },
     "price": 6.5
    },
    {
     "name": {
      "en": "Lemonade",
      "tr": "Limonata"
     },
     "price": 6
    }
   ]
  },
  {
   "id": "smoothies",
   "group": "drinks",
   "title": {
    "en": "Smoothies",
    "tr": "Smoothie'ler"
   },
   "items": [
    {
     "name": {
      "en": "Avo Go-Go",
      "tr": "Avo Go-Go"
     },
     "desc": {
      "en": "Mango, spinach, broccoli, avocado, coconut, ginger",
      "tr": "Mango, ıspanak, brokoli, avokado, hindistancevizi, zencefil"
     }
    },
    {
     "name": {
      "en": "Pash N' Shot",
      "tr": "Pash N' Shot"
     },
     "desc": {
      "en": "Mango, passion fruit, pineapple",
      "tr": "Mango, çarkıfelek, ananas"
     }
    },
    {
     "name": {
      "en": "Coco Loco",
      "tr": "Coco Loco"
     },
     "desc": {
      "en": "Mango, pineapple, coconut, lime, mint",
      "tr": "Mango, ananas, hindistancevizi, misket limonu, nane"
     }
    },
    {
     "name": {
      "en": "Strawberry Split",
      "tr": "Strawberry Split"
     },
     "desc": {
      "en": "Strawberry, banana",
      "tr": "Çilek, muz"
     }
    },
    {
     "name": {
      "en": "Big 5",
      "tr": "Big 5"
     },
     "desc": {
      "en": "Pineapple, mango, strawberry, kiwi",
      "tr": "Ananas, mango, çilek, kivi"
     }
    },
    {
     "name": {
      "en": "Kale Kick",
      "tr": "Kale Kick"
     },
     "desc": {
      "en": "Mango, spinach, kale",
      "tr": "Mango, ıspanak, kara lahana"
     }
    },
    {
     "name": {
      "en": "Detox Zing",
      "tr": "Detox Zing"
     },
     "desc": {
      "en": "Banana, blueberry, carrot, courgette, ginger",
      "tr": "Muz, yaban mersini, havuç, kabak, zencefil"
     }
    },
    {
     "name": {
      "en": "Berry Go",
      "tr": "Berry Go"
     },
     "desc": {
      "en": "Strawberry, blueberry, raspberry",
      "tr": "Çilek, yaban mersini, ahududu"
     }
    }
   ],
   "price": 7.5
  },
  {
   "id": "milkshakes",
   "group": "drinks",
   "title": {
    "en": "Milkshakes",
    "tr": "Milkshake"
   },
   "items": [
    {
     "name": {
      "en": "Milkshake",
      "tr": "Milkshake"
     },
     "desc": {
      "en": "Choose from: banana, strawberry, chocolate, Oreo, Kinder, Lotus Biscoff, coffee",
      "tr": "Seçenekler: muz, çilek, çikolata, Oreo, Kinder, Lotus Biscoff, kahve"
     }
    }
   ],
   "price": 6.95
  },
  {
   "id": "soft",
   "group": "drinks",
   "title": {
    "en": "Soft drinks",
    "tr": "Meşrubatlar"
   },
   "items": [
    {
     "name": {
      "en": "Coca-Cola / Diet / Zero",
      "tr": "Coca-Cola / Diet / Zero"
     },
     "price": 2.75
    },
    {
     "name": {
      "en": "Fanta / Fanta Lemon / 7UP",
      "tr": "Fanta / Fanta Limon / 7UP"
     },
     "price": 2.75
    },
    {
     "name": {
      "en": "San Pellegrino",
      "tr": "San Pellegrino"
     },
     "desc": {
      "en": "Lemon, pomegranate, aranciata rossa",
      "tr": "Limon, nar, kan portakalı"
     },
     "price": 2.75
    },
    {
     "name": {
      "en": "Lipton Ice Tea",
      "tr": "Lipton Ice Tea"
     },
     "desc": {
      "en": "Peach, lemon, raspberry, mango",
      "tr": "Şeftali, limon, ahududu, mango"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Appletiser",
      "tr": "Appletiser"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Schweppes Tonic Water",
      "tr": "Schweppes Tonik"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Red Bull",
      "tr": "Red Bull"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Sparkling water",
      "tr": "Maden suyu"
     },
     "desc": {
      "en": "San Pellegrino, Perrier, Highland",
      "tr": "San Pellegrino, Perrier, Highland"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Still water",
      "tr": "Su"
     },
     "price": 2.5
    }
   ]
  },
  {
   "id": "beer",
   "group": "drinks",
   "title": {
    "en": "Beer",
    "tr": "Bira"
   },
   "items": [
    {
     "name": {
      "en": "Efes Pilsner",
      "tr": "Efes Pilsner"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Peroni",
      "tr": "Peroni"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Peroni 0%",
      "tr": "Peroni %0"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Heineken 0%",
      "tr": "Heineken %0"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Peroni (gluten free)",
      "tr": "Peroni (glutensiz)"
     },
     "price": 5,
     "tags": [
      "gf"
     ]
    },
    {
     "name": {
      "en": "Moretti",
      "tr": "Moretti"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Corona",
      "tr": "Corona"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Desperados",
      "tr": "Desperados"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Crabbie's Ginger Beer",
      "tr": "Crabbie's Ginger Beer"
     },
     "price": 6
    },
    {
     "name": {
      "en": "Estrella",
      "tr": "Estrella"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Madri",
      "tr": "Madri"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Guinness",
      "tr": "Guinness"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Punk IPA",
      "tr": "Punk IPA"
     },
     "price": 5
    }
   ]
  },
  {
   "id": "draught",
   "group": "drinks",
   "title": {
    "en": "Draught beer",
    "tr": "Fıçı bira"
   },
   "items": [
    {
     "name": {
      "en": "Asahi",
      "tr": "Asahi"
     },
     "prices": [
      {
       "label": {
        "en": "½ pint",
        "tr": "½ pint"
       },
       "price": 4.5
      },
      {
       "label": {
        "en": "Pint",
        "tr": "Pint"
       },
       "price": 7.5
      }
     ]
    },
    {
     "name": {
      "en": "Peroni",
      "tr": "Peroni"
     },
     "prices": [
      {
       "label": {
        "en": "½ pint",
        "tr": "½ pint"
       },
       "price": 4.5
      },
      {
       "label": {
        "en": "Pint",
        "tr": "Pint"
       },
       "price": 7.5
      }
     ]
    },
    {
     "name": {
      "en": "Meantime IPA",
      "tr": "Meantime IPA"
     },
     "prices": [
      {
       "label": {
        "en": "½ pint",
        "tr": "½ pint"
       },
       "price": 4.5
      },
      {
       "label": {
        "en": "Pint",
        "tr": "Pint"
       },
       "price": 7.5
      }
     ]
    },
    {
     "name": {
      "en": "Efes",
      "tr": "Efes"
     },
     "prices": [
      {
       "label": {
        "en": "½ pint",
        "tr": "½ pint"
       },
       "price": 4.5
      },
      {
       "label": {
        "en": "Pint",
        "tr": "Pint"
       },
       "price": 7.5
      }
     ]
    }
   ]
  },
  {
   "id": "cider",
   "group": "drinks",
   "title": {
    "en": "Cider",
    "tr": "Elma şarabı (cider)"
   },
   "items": [
    {
     "name": {
      "en": "Magners",
      "tr": "Magners"
     },
     "price": 6.5
    },
    {
     "name": {
      "en": "Bulmers",
      "tr": "Bulmers"
     },
     "price": 6.5
    },
    {
     "name": {
      "en": "Kopparberg Strawberry & Lime",
      "tr": "Kopparberg Çilek ve Misket Limonu"
     },
     "price": 6.5
    },
    {
     "name": {
      "en": "Old Mout Cider",
      "tr": "Old Mout Cider"
     },
     "desc": {
      "en": "Berries & cherries, pineapple & raspberry, kiwi & lime, mango & passionfruit",
      "tr": "Orman meyveli ve kirazlı, ananas ve ahududu, kivi ve misket limonu, mango ve çarkıfelek"
     },
     "price": 6.5
    },
    {
     "name": {
      "en": "Non-alcoholic cider",
      "tr": "Alkolsüz cider"
     },
     "price": 6.5
    }
   ]
  },
  {
   "id": "cocktails",
   "group": "drinks",
   "title": {
    "en": "Cocktails",
    "tr": "Kokteyller"
   },
   "items": [
    {
     "name": {
      "en": "Aperol Spritz",
      "tr": "Aperol Spritz"
     },
     "price": 12.5
    },
    {
     "name": {
      "en": "Pimm's",
      "tr": "Pimm's"
     },
     "price": 14
    },
    {
     "name": {
      "en": "Mojito",
      "tr": "Mojito"
     },
     "price": 12.5
    },
    {
     "name": {
      "en": "Bloody Mary",
      "tr": "Bloody Mary"
     },
     "price": 14
    },
    {
     "name": {
      "en": "Espresso Martini",
      "tr": "Espresso Martini"
     },
     "price": 12.5
    },
    {
     "name": {
      "en": "Margarita",
      "tr": "Margarita"
     },
     "price": 12.5
    },
    {
     "name": {
      "en": "Negroni",
      "tr": "Negroni"
     },
     "price": 13
    },
    {
     "name": {
      "en": "Pornstar Martini",
      "tr": "Pornstar Martini"
     },
     "price": 13
    },
    {
     "name": {
      "en": "Long Island",
      "tr": "Long Island"
     },
     "price": 14.5
    },
    {
     "name": {
      "en": "Campari Spritz",
      "tr": "Campari Spritz"
     },
     "price": 12.5
    },
    {
     "name": {
      "en": "Limoncello Spritz",
      "tr": "Limoncello Spritz"
     },
     "price": 12.5
    },
    {
     "name": {
      "en": "Virgin Mojito",
      "tr": "Alkolsüz Mojito"
     },
     "price": 9
    },
    {
     "name": {
      "en": "All spirits available as shots",
      "tr": "Tüm sert içkiler shot olarak"
     },
     "prices": [
      {
       "label": {
        "en": "Single",
        "tr": "Tek"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "Double",
        "tr": "Duble"
       },
       "price": 10
      }
     ],
     "extra": true
    },
    {
     "name": {
      "en": "Any mix with soft drink",
      "tr": "Meşrubatla karışım"
     },
     "price": "+£1",
     "extra": true
    }
   ]
  },
  {
   "id": "sparkling",
   "group": "drinks",
   "title": {
    "en": "Sparkling wine",
    "tr": "Köpüklü şarap"
   },
   "items": [
    {
     "name": {
      "en": "Prosecco 20cl · Italy",
      "tr": "Prosecco 20cl · İtalya"
     },
     "desc": {
      "en": "Bright and fresh — apple and citrus, lively bubbles, crisp finish",
      "tr": "Canlı ve taze — elma ve narenciye, hareketli kabarcıklar, ferah bitiş"
     },
     "price": 9.9
    },
    {
     "name": {
      "en": "Prosecco Rosé 20cl · Italy",
      "tr": "Prosecco Rosé 20cl · İtalya"
     },
     "desc": {
      "en": "Soft pink — strawberry and raspberry, light elegant sparkle",
      "tr": "Açık pembe — çilek ve ahududu, hafif ve zarif köpük"
     },
     "price": 9.9
    },
    {
     "name": {
      "en": "Paladin Prosecco Dry Tondo · Italy",
      "tr": "Paladin Prosecco Dry Tondo · İtalya"
     },
     "desc": {
      "en": "Smooth and lively — orchard fruit, gentle floral notes, clean finish",
      "tr": "Yumuşak ve canlı — bahçe meyveleri, hafif çiçeksi notalar, temiz bitiş"
     },
     "price": 34.5
    },
    {
     "name": {
      "en": "Paladin Prosecco Rosé Brut DOC · Italy",
      "tr": "Paladin Prosecco Rosé Brut DOC · İtalya"
     },
     "desc": {
      "en": "Elegant and vibrant — red berries, fine bubbles",
      "tr": "Zarif ve canlı — kırmızı meyveler, ince kabarcıklar"
     },
     "price": 34.5
    },
    {
     "name": {
      "en": "Zonin Prosecco Spumante · Italy",
      "tr": "Zonin Prosecco Spumante · İtalya"
     },
     "desc": {
      "en": "Fresh orchard fruit, citrus lift, celebratory sparkle",
      "tr": "Taze bahçe meyveleri, narenciye ferahlığı, kutlama köpüğü"
     },
     "price": 44.5
    }
   ]
  },
  {
   "id": "white",
   "group": "drinks",
   "title": {
    "en": "White wine",
    "tr": "Beyaz şarap"
   },
   "items": [
    {
     "name": {
      "en": "Cape Ridge Sauvignon Blanc · South Africa",
      "tr": "Cape Ridge Sauvignon Blanc · Güney Afrika"
     },
     "desc": {
      "en": "Crisp — citrus and stone fruit, bright acidity",
      "tr": "Ferah — narenciye ve çekirdekli meyveler, canlı asidite"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Paladin Pinot Grigio · Italy",
      "tr": "Paladin Pinot Grigio · İtalya"
     },
     "desc": {
      "en": "Light and elegant — orchard fruit, subtle floral notes",
      "tr": "Hafif ve zarif — bahçe meyveleri, ince çiçeksi notalar"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Fishbone Chardonnay · Australia",
      "tr": "Fishbone Chardonnay · Avustralya"
     },
     "desc": {
      "en": "Ripe peach and dried fruit, hints of cedar and almond",
      "tr": "Olgun şeftali ve kuru meyve, sedir ve badem dokunuşu"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Biscaye Baie Sauvignon Blanc · France",
      "tr": "Biscaye Baie Sauvignon Blanc · Fransa"
     },
     "desc": {
      "en": "Aromatic and zesty — citrus, tropical fruit, mineral lift",
      "tr": "Aromatik — narenciye, tropik meyve, mineral ferahlık"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Clos Malverne Chenin Blanc · South Africa",
      "tr": "Clos Malverne Chenin Blanc · Güney Afrika"
     },
     "desc": {
      "en": "Rounded and fruit-forward — ripe pear and stone fruit",
      "tr": "Yuvarlak ve meyvemsi — olgun armut ve çekirdekli meyveler"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Château la Freynelle Blanc · France",
      "tr": "Château la Freynelle Blanc · Fransa"
     },
     "desc": {
      "en": "Refined white Bordeaux — citrus, stone fruit, elegant finish",
      "tr": "Rafine beyaz Bordeaux — narenciye, çekirdekli meyve, zarif bitiş"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 12
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 15.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 44.5
      }
     ]
    }
   ]
  },
  {
   "id": "red",
   "group": "drinks",
   "title": {
    "en": "Red wine",
    "tr": "Kırmızı şarap"
   },
   "items": [
    {
     "name": {
      "en": "Terre di Rai Vino Rosso · Italy",
      "tr": "Terre di Rai Vino Rosso · İtalya"
     },
     "desc": {
      "en": "Soft and rounded — cherry, blackberry and plum",
      "tr": "Yumuşak — kiraz, böğürtlen ve erik"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Raíz de Chile Merlot · Chile",
      "tr": "Raíz de Chile Merlot · Şili"
     },
     "desc": {
      "en": "Ripe strawberry and plum, soft tannins",
      "tr": "Olgun çilek ve erik, yumuşak tanen"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Vino Malbec · Argentina",
      "tr": "Vino Malbec · Arjantin"
     },
     "desc": {
      "en": "Dark berry fruit, soft spice, medium-bodied",
      "tr": "Koyu orman meyveleri, hafif baharat, orta gövde"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Fishbone Shiraz · Australia",
      "tr": "Fishbone Shiraz · Avustralya"
     },
     "desc": {
      "en": "Blackberry, spice and subtle pepper, soft tannins",
      "tr": "Böğürtlen, baharat ve hafif biber, yumuşak tanen"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Château Claud Bellevue · France",
      "tr": "Château Claud Bellevue · Fransa"
     },
     "desc": {
      "en": "Fuller-bodied premium red — layered dark fruit, long finish",
      "tr": "Dolgun premium kırmızı — katmanlı koyu meyve, uzun bitiş"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 16
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 21.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 59.5
      }
     ]
    }
   ]
  },
  {
   "id": "rose",
   "group": "drinks",
   "title": {
    "en": "Rosé wine",
    "tr": "Roze şarap"
   },
   "items": [
    {
     "name": {
      "en": "Paladin Pinot Grigio Rosé · Italy",
      "tr": "Paladin Pinot Grigio Rosé · İtalya"
     },
     "desc": {
      "en": "Wild strawberries, pear and dried fruit, dry and easy-drinking",
      "tr": "Yaban çileği, armut ve kuru meyve; sek ve içimi kolay"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Fishbone Ruby Rosé · Australia",
      "tr": "Fishbone Ruby Rosé · Avustralya"
     },
     "desc": {
      "en": "Pale pink — rose petal, juniper and red berries, silky dry finish",
      "tr": "Açık pembe — gül yaprağı, ardıç ve kırmızı meyve, ipeksi sek bitiş"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 34.5
      }
     ]
    },
    {
     "name": {
      "en": "Diamarine Provence Rosé · France",
      "tr": "Diamarine Provence Rosé · Fransa"
     },
     "desc": {
      "en": "Summer berries, citrus freshness, dry Provençal finish",
      "tr": "Yaz meyveleri, narenciye ferahlığı, sek Provence bitişi"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 12.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 15.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 44.5
      }
     ]
    }
   ]
  }
 ],
 "rheidol": []
};
