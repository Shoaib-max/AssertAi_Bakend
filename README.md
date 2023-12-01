AssertAi_Backend : 
first go to project parent directory and run npm i command in terminal ;
install mongodb in local system 
and create databases = AssertAi
and create two collections 
1 . charts
2 . graph

1 . in first collection insert data following data in charts : 
[
  {
    "id": 1,
    "year": 2016,
    "userGain": 80000,
    "userLost": 823
  },
  {
    "id": 2,
    "year": 2016,
    "userGain": 45677,
    "userLost": 345
  },
  {
    "id": 2,
    "year": 2017,
    "userGain": 45677,
    "userLost": 345
  },
  {
  
    "id": 3,
    "year": 2018,
    "userGain": 78888,
    "userLost": 555
  },
  {
    "id": 4,
    "year": 2019,
    "userGain": 90000,
    "userLost": 4555
  },
  {
    "id": 5,
    "year": 2020,
    "userGain": 4300,
    "userLost": 234
  }
]



2 . in second collecyion insert data following data in graph :
[  {
      "id": 1,
      "year": 2016,
      "userGain": 80000,
      "userLost": 823,
      "name" : "Samsung",
      "city" : "Korea"
    },
    {
      "id": 2,
      "year": 2016,
      "userGain": 45677,
      "userLost": 345,
      "name" : "micromax",
      "city" : "Delhi"
    },
    {
      "id": 2,
      "year": 2017,
      "userGain": 45677,
      "userLost": 345,
      "name" : "tata",
      "city" : "Jasmshedpur"
    },
    {
      "id": 3,
      "year": 2018,
      "userGain": 78888,
      "userLost": 555,
      "name" : "reliance",
      "city" : "Gujrat"
    },
    {
      "id": 4,
      "year": 2019,
      "userGain": 90000,
      "userLost": 4555,
      "name" : "ce info",
      "city" : "Delhi"
    },
    {
      "id": 5,
      "year": 2020,
      "userGain": 4300,
      "userLost": 234,
      "name" : "jio",
      "city" : "Mumbai" 
    }
    
    ]

    after set up this :
    run command npm run dev and is ready to use
