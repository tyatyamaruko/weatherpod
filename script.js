let windowSize = window.innerWidth;

let baseURL = "https://weather.tsukumijima.net/api/forecast/city/"

let prefCodes = {
    1: "017010",
    2: "021000",
    3: "030010",
    4: "040010",
    5: "050010",
    6: "060010",
    7: "070010",
    8: "080010",
    9: "090010",
    10: "100010",
    11: "110010",
    12: "120010",
    13: "130010",
    14: "140010",
    15: "150010",
    16: "160010",
    17: "170010",
    18: "180010",
    19: "190010",
    20: "200010",
    21: "210010",
    22: "220010",
    23: "230010",
    24: "240010",
    25: "250010",
    26: "260010",
    27: "270010",
    28: "280010",
    29: "290010",
    30: "300010",
    31: "310010",
    32: "320010",
    33: "330010",
    34: "340010",
    35: "350010",
    36: "360010",
    37: "370010",
    38: "380010",
    39: "390010",
    40: "400010",
    41: "410010",
    42: "420010",
    43: "430010",
    44: "440010",
    45: "450010",
    46: "460010",
    47: "471010",
}

var d = new jpmap.japanMap(document.getElementById("map"), {
  areas: [
    { code: 1, name: "北海道", color: "#7f7eda", hoverColor: "#b3b2ee" },
    { code: 2, name: "青森", color: "#759ef4", hoverColor: "#98b9ff" },
    { code: 3, name: "岩手", color: "#759ef4", hoverColor: "#98b9ff" },
    { code: 4, name: "宮城", color: "#759ef4", hoverColor: "#98b9ff" },
    { code: 5, name: "秋田", color: "#759ef4", hoverColor: "#98b9ff" },
    { code: 6, name: "山形", color: "#759ef4", hoverColor: "#98b9ff" },
    { code: 7, name: "福島", color: "#759ef4", hoverColor: "#98b9ff" },
    { code: 8, name: "茨城", color: "#7ecfea", hoverColor: "#b7e5f4" },
    { code: 9, name: "栃木", color: "#7ecfea", hoverColor: "#b7e5f4" },
    { code: 10, name: "群馬", color: "#7ecfea", hoverColor: "#b7e5f4" },
    { code: 11, name: "埼玉", color: "#7ecfea", hoverColor: "#b7e5f4" },
    { code: 12, name: "千葉", color: "#7ecfea", hoverColor: "#b7e5f4" },
    { code: 13, name: "東京", color: "#7ecfea", hoverColor: "#b7e5f4" },
    { code: 14, name: "神奈川", color: "#7ecfea", hoverColor: "#b7e5f4" },
    { code: 15, name: "新潟", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 16, name: "富山", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 17, name: "石川", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 18, name: "福井", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 19, name: "山梨", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 20, name: "長野", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 21, name: "岐阜", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 22, name: "静岡", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 23, name: "愛知", color: "#7cdc92", hoverColor: "#aceebb" },
    { code: 24, name: "三重", color: "#ffe966", hoverColor: "#fff19c" },
    { code: 25, name: "滋賀", color: "#ffe966", hoverColor: "#fff19c" },
    { code: 26, name: "京都", color: "#ffe966", hoverColor: "#fff19c" },
    { code: 27, name: "大阪", color: "#ffe966", hoverColor: "#fff19c" },
    { code: 28, name: "兵庫", color: "#ffe966", hoverColor: "#fff19c" },
    { code: 29, name: "奈良", color: "#ffe966", hoverColor: "#fff19c" },
    { code: 30, name: "和歌山", color: "#ffe966", hoverColor: "#fff19c" },
    { code: 31, name: "鳥取", color: "#ffcc66", hoverColor: "#ffe0a3" },
    { code: 32, name: "島根", color: "#ffcc66", hoverColor: "#ffe0a3" },
    { code: 33, name: "岡山", color: "#ffcc66", hoverColor: "#ffe0a3" },
    { code: 34, name: "広島", color: "#ffcc66", hoverColor: "#ffe0a3" },
    { code: 35, name: "山口", color: "#ffcc66", hoverColor: "#ffe0a3" },
    { code: 36, name: "徳島", color: "#fb9466", hoverColor: "#ffbb9c" },
    { code: 37, name: "香川", color: "#fb9466", hoverColor: "#ffbb9c" },
    { code: 38, name: "愛媛", color: "#fb9466", hoverColor: "#ffbb9c" },
    { code: 39, name: "高知", color: "#fb9466", hoverColor: "#ffbb9c" },
    { code: 40, name: "福岡", color: "#ff9999", hoverColor: "#ffbdbd" },
    { code: 41, name: "佐賀", color: "#ff9999", hoverColor: "#ffbdbd" },
    { code: 42, name: "長崎", color: "#ff9999", hoverColor: "#ffbdbd" },
    { code: 43, name: "熊本", color: "#ff9999", hoverColor: "#ffbdbd" },
    { code: 44, name: "大分", color: "#ff9999", hoverColor: "#ffbdbd" },
    { code: 45, name: "宮崎", color: "#ff9999", hoverColor: "#ffbdbd" },
    { code: 46, name: "鹿児島", color: "#ff9999", hoverColor: "#ffbdbd" },
    { code: 47, name: "沖縄", color: "#eb98ff", hoverColor: "#f5c9ff" },
  ],
  showsPrefectureName: true,
  width: windowSize,
  movesIslands: true,
  lang: "ja",
  onSelect: async function (data) {
    await fetch(baseURL + prefCodes[data.area.code])
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
        // データを入れていく
        $('.pref-name').text(json.location.prefecture)
        $('.date-label').text(json.forecasts[0].dateLabel)
        $('.weather-img').attr('src', json.forecasts[0].image.url)
        $('.weather-img').attr('alt', json.forecasts[0].image.title)
        $('.min').text(json.forecasts[0].temperature.min.celsius)
        $('.max').text(json.forecasts[0].temperature.max.celsius)
        $(".modal-back").css('display', 'block')
    })
    
  },
});

$(".modal-back").on('click', function() {
    $(this).css('display', 'none')
})