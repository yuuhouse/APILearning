//import Vue from 'vue'
//import VueRouter from 'vue-router'
let city = 'Taipei, TW'
function print_value() {
  //將 select 的值在印出
  city = document.getElementById('number').value
  console.log(city + '內容已改變')
  makeRequest() //重新發動函式 更新API內容
}
let urlFront = 'https://api.openweathermap.org/data/2.5/forecast?q='
let urlBack = '&APPID=yourAPI&lang=zh-tw&units=metric'

function makeRequest() {
  //六都天氣
  //製作一個function
  xhr = new XMLHttpRequest()

  xhr.onload = function () {
    let response = JSON.parse(this.responseText) //轉換格式
    //console.log(response) //顯示轉換後的內容

    let city = response.city.name + ', ' + response.city.country //城市名稱+國家
    let weatherTitle = response.list[0].weather[0].main //雲量
    let temp = response.list[0].main.temp + '°' //天氣

    let weatherContainer = document.querySelector('#weather') //選取ID這樣才知道要寫入哪裡
    weatherContainer.innerHTML = city + '<br/>' + weatherTitle + '<br/>' + temp //寫入以上的內容進html
  }

  xhr.open('GET', urlFront + city + urlBack, true) //${variableName}
  /* xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/forecast?q=taipei,tw&APPID=yourAPI&lang=zh-tw&lang=zh_tw&units=metric',
    true,
  ) */

  /* xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/forecast?q=%city&APPID=yourAPI&lang=zh-tw&lang=zh_tw&units=metric',
    true,
  ) */
  xhr.send() //api key 記得要改成自己的
}
//function結尾

makeRequest() //啟動function

function makeTaiwanRequest() {
  //本島天氣
  //製作一個function
  xhr = new XMLHttpRequest()

  xhr.onload = function () {
    var response = JSON.parse(this.responseText) //轉換格式
    //console.log(response) //顯示轉換後的內容

    var city = response.city.name + ', ' + response.city.country //城市名稱+國家
    var weatherTitle = response.list[0].weather[0].main //雲量
    var temp = response.list[0].main.temp + '°' //天氣

    var weatherContainer = document.querySelector('#weatherTaiwan') //選取ID這樣才知道要寫入哪裡
    weatherContainer.innerHTML = city + '<br/>' + weatherTitle + '<br/>' + temp //寫入以上的內容進html
  }

  xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/forecast?q=Taiwan,tw&APPID=70c39d518ced5d61d33cdc9295f08f83&lang=zh-tw&lang=zh_tw&units=metric',
    true,
  )
  /* xhr.open('GET', urlFront + city + urlBack, true) //${variableName} */
  /* xhr.open(
      'GET',
      'https://api.openweathermap.org/data/2.5/forecast?q=%city&APPID=70c39d518ced5d61d33cdc9295f08f83&lang=zh-tw&lang=zh_tw&units=metric',
      true,
    ) */
  xhr.send() //api key 記得要改成自己的
}
makeTaiwanRequest()
console.log(city + '開頭API測試')
