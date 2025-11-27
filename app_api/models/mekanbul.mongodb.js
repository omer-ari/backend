const database = 'mekanbul';
use(database);
db.venues.insertOne(
{
  "name": "bunna",
  "address": "Iyaş",
  "rating": 5,
  "foodanddrink": [
    "kruvasan",
    "çay",
    "kahve",
    "pasta"
  ],
  "coordinates": [
    37.76440123987801,
    30.55200587463379
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "9:00",
      "close": "00:00",
      "isClosed": false
    },
    {
      "days": "Cumartesi-Pazar",
      "open": "10:00",
      "close": "22:00",
      "isClosed": false
    }
  ]
}
 );

 db.venues.insertOne(
{
  "name": "ateş döner",
  "address": "Iyaş",
  "rating": 4,
  "foodanddrink": [
    "döner",
    "patates kızartması",
    "kolaa"
  ],
  "coordinates": [
    37.8315,
    30.5235
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "10:00",
      "close": "01:00",
      "isClosed": false
    }
  ]
}
    );
 db.venues.insertOne(
  { 
  "name": "baskent lokantası",
  "address": "carşı",
  "rating": 3,
  "foodanddrink": [
    "lahmacun",
    "sulu yemek",
    "ayran"
  ],
  "coordinates": [
    37.8317,
    30.5237
  ],
  "hours": [
    {
      "days": "Pazartesi-pazar",
      "open": "9:00",
      "close": "20:00",
      "isClosed": false
    }
  ]
}
    );

 db.venues.insertOne(
{
  "name": "boston",
  "address": "Iyaş",
  "rating": 2,
  "foodanddrink": [
    "waffle",
    "tatlı",
    "kahve",
    "çay"
  ],
  "coordinates": [
    37.8319,
    30.5239
  ],
  "hours": [
    {
      "days": "Salı-Pazar",
      "open": "12:00",
      "close": "01:00",
      "isClosed": false
    }
  ]
}
    ); 

 db.venues.insertOne(
{
  "name": "lilyum",
  "address": "Iyaş",
  "rating": 4,
  "foodanddrink": [
    "çay",
    "oralet",
    "muhallebi",
    "kivi"
  ],
  "coordinates": [
    37.8321,
    30.5241
  ],
  "hours": [
    {
      "days": "Pazartesi-Cumartesi",
      "open": "09:00",
      "close": "23:00",
      "isClosed": false
    }
  ]
}
 );