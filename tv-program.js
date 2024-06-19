let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};



let h = document.querySelector('div#result');
let a=document.createElement("h1");
a.setAttribute("class","a");
a.textContent="番組表はこちら！！";
h.insertAdjacentElement("beforeend",a);

let a1=document.createElement("h2");
a1.setAttribute("class","taitle");
h.insertAdjacentElement("beforeend",a1);

// let a3=document.createElement("input");
// a3.setAttribute("type","text");
// a3.setAttribute("name","TV1");
// a3.setAttribute("id","syousetu");
// a3.setAttribute("value","g1");
// a3.setAttribute("size","15");
// a1.insertAdjacentElement("beforeend",a3);

let a4=document.createElement("h2");
a4.setAttribute("class","TV2");
h.insertAdjacentElement("beforeend",a4);

let a5=document.createElement("input");
a5.setAttribute("type","radio");
a5.setAttribute("name","TV2");
a5.setAttribute("id","syousetu");
a5.setAttribute("value","g1");
a5.setAttribute("size","0300");
a4.insertAdjacentElement("beforeend",a5);

let a6=document.createElement("label");
a6.setAttribute("for","syousetu");
a6.textContent="朝ドラ";
a4.insertAdjacentElement("beforeend",a6);

let a7=document.createElement("input");
a7.setAttribute("type","radio");
a7.setAttribute("name","TV2");
a7.setAttribute("id","anime");
a7.setAttribute("value","g1");
a7.setAttribute("size","0700");
a4.insertAdjacentElement("beforeend",a7);

let a8=document.createElement("label");
a8.setAttribute("for","anime");
a8.textContent="アニメ";
a4.insertAdjacentElement("beforeend",a8);

let a9=document.createElement("input");
a9.setAttribute("type","radio");
a9.setAttribute("name","TV2");
a9.setAttribute("id","baraet");
a9.setAttribute("value","g1");
a9.setAttribute("size","0502");
a4.insertAdjacentElement("beforeend",a9);

let aa=document.createElement("label");
aa.setAttribute("for","game");
aa.textContent="教養バラエティ";
a4.insertAdjacentElement("beforeend",aa);

let aa1=document.createElement("button");//検索ボタン
aa1.setAttribute("id","answer");
aa1.textContent="検索";
a4.insertAdjacentElement("beforeend",aa1);

let li=document.createElement("p");
li.setAttribute("class","TV2");
h.insertAdjacentElement("beforeend",li);
let aa2=document.createElement("button");//検索ボタン
aa2.setAttribute("id","liset");
aa2.textContent="リセット";
li.insertAdjacentElement("beforeend",aa2);
let kome=document.createElement("h2");
kome.setAttribute("class","tv");
kome.textContent="2件目以降はリセットを押してから検索してください m(--)m";
li.insertAdjacentElement("beforeend",kome);


//mainメソッド
let b = document.querySelector('button#answer');
let Liset = document.querySelector('button#liset');
let kensakuran = document.querySelector('button#answer');



b.addEventListener('click', key);
b.addEventListener('click', kensaku);
Liset.addEventListener('click', kesu1);
Liset.addEventListener('click', kesu2);
Liset.addEventListener('click', kesu3);

b.addEventListener('click', sendRequest);//通信

let keka=document.createElement("h3");
keka.setAttribute("class","d");
// keka.textContent="NHKの番組表（検索結果1件）";
h.insertAdjacentElement("beforeend",keka);
//検索結果１

let kennsaku=document.createElement("h");
kennsaku.setAttribute("class","kennsaku");
kennsaku.textContent="こちらです！！";
h.insertAdjacentElement("beforeend",kennsaku);


  let bugi=document.createElement("table");
  let bugi1=document.createElement("tr");
  let bugi2=document.createElement("td");
  let bugi3=document.createElement("tr");
  let bugi4=document.createElement("td");
  let bugi5=document.createElement("tr");
  let bugi6=document.createElement("td");
  let bugi7=document.createElement("tr");
  let bugi8=document.createElement("td");
  let bugi9=document.createElement("tr");
  let bugi10=document.createElement("td");
  let bugi11=document.createElement("tr");
  let bugi12=document.createElement("td");
  let bugi13=document.createElement("tr");
  let bugi14=document.createElement("td");
  
  let ban=document.createElement("table");
  let ban1=document.createElement("tr");
  let ban2=document.createElement("td");
  let ban3=document.createElement("tr");
  let ban4=document.createElement("td");
  let ban5=document.createElement("tr");
  let ban6=document.createElement("td");
  let ban7=document.createElement("tr");
  let ban8=document.createElement("td");
  let ban9=document.createElement("tr");
  let ban10=document.createElement("td");
  let ban11=document.createElement("tr");
  let ban12=document.createElement("td");
  let ban13=document.createElement("tr");
  let ban14=document.createElement("td");

  let ani=document.createElement("table");
  let ani1=document.createElement("tr");
  let ani2=document.createElement("td");
  let ani3=document.createElement("tr");
  let ani4=document.createElement("td");
  let ani5=document.createElement("tr");
  let ani6=document.createElement("td");
  let ani7=document.createElement("tr");
  let ani8=document.createElement("td");
  let ani9=document.createElement("tr");
  let ani10=document.createElement("td");
  let ani11=document.createElement("tr");
  let ani12=document.createElement("td");
  let ani13=document.createElement("tr");
  let ani14=document.createElement("td");

/*let cs = document.querySelectorAll('input[size="0300"]');
  for (let c of cs) {
    if (c.checked) {
      kesu();
      // bugi1.remove()*/

      // console.log(c.value);
      bugi.setAttribute("class","Bugi");
      // bugi.setAttribute("border","1");
      // bugi.setAttribute("width","1400");
      h.insertAdjacentElement("beforeend",bugi);
      bugi1.setAttribute("class","bugi");
      // bugi1.textContent="番組名";
      bugi.insertAdjacentElement("beforeend",bugi1);
      bugi2.setAttribute("class","bugi");
      // bugi2.textContent="ブギウギ";
      bugi.insertAdjacentElement("beforeend",bugi2);
      bugi3.setAttribute("class","bugi1");
      // bugi3.textContent="サブタイトル";
      bugi.insertAdjacentElement("beforeend",bugi3);
      bugi4.setAttribute("class","bugi1");
      // bugi4.textContent="記載なし";
      bugi.insertAdjacentElement("beforeend",bugi4);
      bugi5.setAttribute("class","bugi2");
      // bugi5.textContent="放送時間";
      bugi.insertAdjacentElement("beforeend",bugi5);
      bugi6.setAttribute("class","bugi2");
      // bugi6.textContent="午前８時～８時15分";
      bugi.insertAdjacentElement("beforeend",bugi6);
      bugi7.setAttribute("class","bugi3");
      // bugi7.textContent="番組説明";
      bugi.insertAdjacentElement("beforeend",bugi7);
      bugi8.setAttribute("class","bugi3");
      // bugi8.textContent="戦後を明るく照らしたスター歌手の物語";  
      bugi.insertAdjacentElement("beforeend",bugi8);
      bugi9.setAttribute("class","bugi4");
      // bugi9.textContent="チャンネル名";
      bugi.insertAdjacentElement("beforeend",bugi9);
      bugi10.setAttribute("class","bugi4");
      // bugi10.textContent="NHK";
      bugi.insertAdjacentElement("beforeend",bugi10);
      bugi11.setAttribute("class","bugi5");
      // bugi11.textContent="ジャンル";
      bugi.insertAdjacentElement("beforeend",bugi11);
      bugi12.setAttribute("class","bugi5");
      // bugi12.textContent="連続テレビ小説";
      bugi.insertAdjacentElement("beforeend",bugi12);
      bugi13.setAttribute("class","bugi6");
      // bugi13.textContent="出演者";
      bugi.insertAdjacentElement("beforeend",bugi13);
      bugi14.setAttribute("class","bugi6");
      // bugi14.textContent="・趣里・菊地凛子・清水くるみ・影山泰・蒼井優　など、";
      bugi.insertAdjacentElement("beforeend",bugi14);
      
      /*//検索結果２
      let cs1 = document.querySelectorAll('input[size="0700"]');
      for (let c of cs1) {
        if (cs1.checked) {
          kesu();*/
          ban.setAttribute("class","Ban");
          // ban.setAttribute("border","1");
          // ban.setAttribute("width","1400");
          h.insertAdjacentElement("beforeend",ban);
          ban1.setAttribute("class","ban");
          // ban1.textContent="番組名";
          ban.insertAdjacentElement("beforeend",ban1);
          ban2.setAttribute("class","ban");
          // ban2.textContent="チコちゃんに叱られる！";
          ban.insertAdjacentElement("beforeend",ban2);

          ban3.setAttribute("class","ban1");
          // ban3.textContent="サブタイトル";
          ban.insertAdjacentElement("beforeend",ban3);

          ban4.setAttribute("class","ban1");
          // ban4.textContent="素朴な疑問に、あなたは答えられますか？　いよいよ7年目に突入！";
          ban.insertAdjacentElement("beforeend",ban4);

          ban5.setAttribute("class","ban2");
          // ban5.textContent="放送時間";
          ban.insertAdjacentElement("beforeend",ban5);

          ban6.setAttribute("class","ban2");
          // ban6.textContent="午後７時57分〜午後８時45分";
          ban.insertAdjacentElement("beforeend",ban6);

          ban7.setAttribute("class","ban3");
          // ban7.textContent="番組説明";
          ban.insertAdjacentElement("beforeend",ban7);

          ban8.setAttribute("class","ban3");
          // ban8.textContent="いままで考えたこともなかった疑問と情報が知れる";
          ban.insertAdjacentElement("beforeend",ban8);

          ban9.setAttribute("class","ban4");
          // ban9.textContent="チャンネル名";
          ban.insertAdjacentElement("beforeend",ban9);

          ban10.setAttribute("class","ban4");
          // ban10.textContent="NHK";
          ban.insertAdjacentElement("beforeend",ban10);

          ban11.setAttribute("class","ban5");
          // ban11.textContent="ジャンル";
          ban.insertAdjacentElement("beforeend",ban11);

          ban12.setAttribute("class","ban5");
          // ban12.textContent="教養バラエティ";
          ban.insertAdjacentElement("beforeend",ban12);

          ban13.setAttribute("class","ban6");
          // ban13.textContent="出演者";
          ban.insertAdjacentElement("beforeend",ban13);

          ban14.setAttribute("class","ban6");
          // ban14.textContent="・岡村隆史・高橋みなみ・大竹まこと・木村祐一 など、";
          ban.insertAdjacentElement("beforeend",ban14);

          /*//検索結果3
          let cs2 = document.querySelectorAll('input[size="0502"]');
          for (let c of cs2) {
            if (cs2.checked) {
              kesu();*/
              // ani1.remove()
          ani.setAttribute("class","Ani");
              // ani.setAttribute("border","1");
              // ani.setAttribute("width","1400");
              h.insertAdjacentElement("beforeend",ani);

              ani1.setAttribute("class","ani");
              // ani1.textContent="番組名";
              ani.insertAdjacentElement("beforeend",ani1);

              ani2.setAttribute("class","ani");
              // ani2.textContent="キングダム";
              ani.insertAdjacentElement("beforeend",ani2);

              ani3.setAttribute("class","ani1");
              // ani3.textContent="サブタイトル";
              ani.insertAdjacentElement("beforeend",ani3);

              ani4.setAttribute("class","ani1");
              // ani4.textContent="KINGDOM";
              ani.insertAdjacentElement("beforeend",ani4);

              ani5.setAttribute("class","ani2");
              // ani5.textContent="放送時間";
              ani.insertAdjacentElement("beforeend",ani5);

              ani6.setAttribute("class","ani2");
              // ani6.textContent="午前0時〜午前0時30分";
              ani.insertAdjacentElement("beforeend",ani6);

              ani7.setAttribute("class","ani3");
              // ani7.textContent="番組説明";
              ani.insertAdjacentElement("beforeend",ani7);

              ani8.setAttribute("class","ani3");
              // ani8.textContent="武功をあげて「天下の大将軍」になることを夢見る少年・信（しん）と、後に中華統一を果たすことになる始皇帝・政（せい）の成長と戦いを描く、熱い歴史漫画です";
              ani.insertAdjacentElement("beforeend",ani8);

              ani9.setAttribute("class","ani4");
              // ani9.textContent="チャンネル名";
              ani.insertAdjacentElement("beforeend",ani9);

              ani10.setAttribute("class","ani4");
              // ani10.textContent="NHK";
              ani.insertAdjacentElement("beforeend",ani10);

              ani11.setAttribute("class","ani5");
              // ani11.textContent="ジャンル";
              ani.insertAdjacentElement("beforeend",ani11);

              ani12.setAttribute("class","ani5");
              // ani12.textContent="アニメ";
              ani.insertAdjacentElement("beforeend",ani12);

              ani13.setAttribute("class","ani6");
              // ani13.textContent="出演者";
              ani.insertAdjacentElement("beforeend",ani13);

              ani14.setAttribute("class","ani6");
              // ani14.textContent="・信（森田成一）・政（福山潤）・河了貂（釘宮理恵）など、";
              ani.insertAdjacentElement("beforeend",ani14);
/////////////////// 課題3-2 はここから書き始めよう
function kensaku(){
  let cs = document.querySelectorAll('input[size="0300"]');
  let cs2 = document.querySelectorAll('input[size="0700"]');
  let cs3 = document.querySelectorAll('input[size="0502"]');
  for (let c of cs) {
    if (c.checked) {
      keka.textContent="NHKの番組表（検索結果1件）";
      bugi.setAttribute("border","1");
      bugi.setAttribute("width","1400");
      bugi1.textContent="番組名";
      bugi2.textContent="ブギウギ";
      bugi3.textContent="サブタイトル";
      bugi4.textContent="記載なし";
      bugi5.textContent="放送時間";
      bugi6.textContent="午前８時～８時15分";
      bugi7.textContent="番組説明";
      bugi8.textContent="戦後を明るく照らしたスター歌手の物語";  
      bugi9.textContent="チャンネル名";
      bugi10.textContent="NHK";
      bugi11.textContent="ジャンル";
      bugi12.textContent="連続テレビ小説";
      bugi13.textContent="出演者";
      bugi14.textContent="・趣里・菊地凛子・清水くるみ・影山泰・蒼井優　など、";
      kesu2();
    }
  }
  for (let c of cs2) {
    if (c.checked) {
      //結果２
      keka.textContent="NHKの番組表（検索結果1件）";
      ban.setAttribute("border","1");
      ban.setAttribute("width","1400");
      ban1.textContent="番組名";
      ban2.textContent="チコちゃんに叱られる！";
      ban3.textContent="サブタイトル";
      ban4.textContent="素朴な疑問に、あなたは答えられますか？　いよいよ7年目に突入！";
      ban5.textContent="放送時間";
      ban6.textContent="午後７時57分〜午後８時45分";
      ban7.textContent="番組説明";
      ban8.textContent="いままで考えたこともなかった疑問と情報が知れる";
      ban9.textContent="チャンネル名";
      ban10.textContent="NHK";
      ban11.textContent="ジャンル";
      ban12.textContent="教養バラエティ";
      ban13.textContent="出演者";
      ban14.textContent="・岡村隆史・高橋みなみ・大竹まこと・木村祐一 など、";
    }
  }
  for (let c of cs3) {
    if (c.checked) {
      //結果３
      keka.textContent="NHKの番組表（検索結果1件）";
      ani.setAttribute("border","1");
      ani.setAttribute("width","1400");
      ani1.textContent="番組名";
      ani2.textContent="キングダム";
      ani3.textContent="サブタイトル";
      ani4.textContent="KINGDOM";
      ani5.textContent="放送時間";
      ani6.textContent="午前0時〜午前0時30分";
      ani7.textContent="番組説明";
      ani8.textContent="武功をあげて「天下の大将軍」になることを夢見る少年・信（しん）と、後に中華統一を果たすことになる始皇帝・政（せい）の成長と戦いを描く、熱い歴史漫画です";
      ani9.textContent="チャンネル名";
      ani10.textContent="NHK";
      ani11.textContent="ジャンル";
      ani12.textContent="アニメ";
      ani13.textContent="出演者";
      ani14.textContent="・信（森田成一）・政（福山潤）・河了貂（釘宮理恵）など、";
    }
  }
}



function kesu1(){
  let cs = document.querySelectorAll('input[size="0300"]');
  for (let c of cs) {
    if (c.checked) {
  let w = document.querySelector('tr[class="bugi1"]');
  let sa= document.querySelector('td[class="bugi1"]');
    let w1 = document.querySelector('tr[class="bugi2"]');
  let sa1 = document.querySelector('td[class="bugi2"]');
    let w2 = document.querySelector('tr[class="bugi3"]');
  let sa2 = document.querySelector('td[class="bugi3"]');
    let w3 = document.querySelector('tr[class="bugi4"]');
  let sa3 = document.querySelector('td[class="bugi4"]');
    let w4 = document.querySelector('tr[class="bugi5"]');
  let sa4= document.querySelector('td[class="bugi5"]');
    let w5 = document.querySelector('tr[class="bugi6"]');
  let sa5= document.querySelector('td[class="bugi6"]');
  let w6 = document.querySelector('tr[class="bugi"]');
  let sa6= document.querySelector('td[class="bugi"]');
  w.remove(); 
  sa.remove(); 
    w1.remove(); 
  sa1.remove(); 
    w2.remove(); 
  sa2.remove(); 
    w3.remove(); 
  sa3.remove(); 
    w4.remove(); 
  sa4.remove(); 
    w5.remove(); 
  sa5.remove(); 
  w6.remove(); 
  sa6.remove(); 
    }
  }
}
function kesu2(){
  let cs2 = document.querySelectorAll('input[size="0700"]');
  for (let c of cs2) {
    if (c.checked) {
let w = document.querySelector('tr[class="ban1"]');
let sa= document.querySelector('td[class="ban1"]');
  let w1 = document.querySelector('tr[class="ban2"]');
let sa1 = document.querySelector('td[class="ban2"]');
  let w2 = document.querySelector('tr[class="ban3"]');
let sa2 = document.querySelector('td[class="ban3"]');
  let w3 = document.querySelector('tr[class="ban4"]');
let sa3 = document.querySelector('td[class="ban4"]');
  let w4 = document.querySelector('tr[class="ban5"]');
let sa4= document.querySelector('td[class="ban5"]');
  let w5 = document.querySelector('tr[class="ban6"]');
let sa5= document.querySelector('td[class="ban6"]');
let w6 = document.querySelector('tr[class="ban"]');
let sa6= document.querySelector('td[class="ban"]');
w.remove(); 
sa.remove(); 
  w1.remove(); 
sa1.remove(); 
  w2.remove(); 
sa2.remove(); 
  w3.remove(); 
sa3.remove(); 
  w4.remove(); 
sa4.remove(); 
  w5.remove(); 
sa5.remove(); 
w6.remove(); 
sa6.remove(); 
    }
  }
}
function kesu3(){
  let cs3 = document.querySelectorAll('input[size="0502"]');
  for (let c of cs3) {
    if (c.checked) {
let w = document.querySelector('tr[class="ani1"]');
let sa= document.querySelector('td[class="ani1"]');
  let w1 = document.querySelector('tr[class="ani2"]');
let sa1 = document.querySelector('td[class="ani2"]');
  let w2 = document.querySelector('tr[class="ani3"]');
let sa2 = document.querySelector('td[class="ani3"]');
  let w3 = document.querySelector('tr[class="ani4"]');
let sa3 = document.querySelector('td[class="ani4"]');
  let w4 = document.querySelector('tr[class="ani5"]');
let sa4= document.querySelector('td[class="ani5"]');
  let w5 = document.querySelector('tr[class="ani6"]');
let sa5= document.querySelector('td[class="ani6"]');
let w6 = document.querySelector('tr[class="ani"]');
let sa6= document.querySelector('td[class="ani"]');
w.remove(); 
sa.remove(); 
  w1.remove(); 
sa1.remove(); 
  w2.remove(); 
sa2.remove(); 
  w3.remove(); 
sa3.remove(); 
  w4.remove(); 
sa4.remove(); 
  w5.remove(); 
sa5.remove(); 
w6.remove(); 
sa6.remove(); 
    }
  }
}

function key(){
//   let cs = document.querySelectorAll('input#syousetu');
//   for (let c of cs) {//ドラマ
//       if (c.checked) {
//           console.log(c.size);
//           bugi.setAttribute("border","1");
//           bugi.setAttribute("width","1400");
//           keka.textContent="NHKの番組表（検索結果1件）";
//           kennsaku.textContent="こちらです！！";

// bugi1.textContent="番組名";


// bugi2.textContent="ブギウギ";

// bugi3.textContent="サブタイトル";

// bugi4.textContent="記載なし";

// bugi5.textContent="放送時間";

// bugi6.textContent="午前８時～８時15分";

// bugi7.textContent="番組説明";

// bugi8.textContent="戦後を明るく照らしたスター歌手の物語";

// bugi9.textContent="チャンネル名";

// bugi10.textContent="NHK";

// bugi11.textContent="ジャンル";

// bugi12.textContent="連続テレビ小説";

// bugi13.textContent="出演者";

// bugi14.textContent="・趣里・菊地凛子・清水くるみ・影山泰・蒼井優　など、";
//       }
//   }
//   let animecs = document.querySelectorAll('input#anime');
//   for (let c of animecs) {//アニメ
//       if (c.checked) {
//           console.log(c.size);
//           ban.setAttribute("border","1");
//           ban.setAttribute("width","1400");
//           keka.textContent="NHKの番組表（検索結果1件）";
//           kennsaku2.textContent="こちらです！！";

// ban1.textContent="番組名";

// ban2.textContent="チコちゃんに叱られる！";

// ban3.textContent="サブタイトル";

// ban4.textContent="素朴な疑問に、あなたは答えられますか？　いよいよ7年目に突入！";

// ban5.textContent="放送時間";

// ban6.textContent="午後７時57分〜午後８時45分";

// ban7.textContent="番組説明";

// ban8.textContent="いままで考えたこともなかった疑問と情報が知れる";

// ban9.textContent="チャンネル名";

// ban10.textContent="NHK";

// ban11.textContent="ジャンル";

// ban12.textContent="教養バラエティ";

// ban13.textContent="出演者";

// ban14.textContent="・岡村隆史・高橋みなみ・大竹まこと・木村祐一 など、";


//       }
//   }
//   let gamecs = document.querySelectorAll('input#baraet');
//   for (let c of gamecs) {//バラエティ
//       if (c.checked) {
//           console.log(c.size);
//           ani.setAttribute("border","1");
//           ani.setAttribute("width","1400");
//           keka.textContent="NHKの番組表（検索結果1件）";
//           kennsaku3.textContent="こちらです！！";

// ani1.textContent="番組名";

// ani2.textContent="キングダム";

// ani3.textContent="サブタイトル";

// ani4.textContent="KINGDOM";

// ani5.textContent="放送時間";

// ani6.textContent="午前0時〜午前0時30分";

// ani7.textContent="番組説明";

// ani8.textContent="武功をあげて「天下の大将軍」になることを夢見る少年・信（しん）と、後に中華統一を果たすことになる始皇帝・政（せい）の成長と戦いを描く、熱い歴史漫画です";

// ani9.textContent="チャンネル名";

// ani10.textContent="NHK";

// ani11.textContent="ジャンル";

// ani12.textContent="アニメ";

// ani13.textContent="出演者";

// ani14.textContent="・信（森田成一）・政（福山潤）・河了貂（釘宮理恵）など、";

//       }
//   }
  }
// let b = document.querySelector('button#answer');
// b.addEventListener('click', greeting);
// b.addEventListener('click', sendRequest);
// b.addEventListener('click', addivent);

// function greeting() {
// let a = document.querySelector('input[name="TV1"]');
// let w = document.querySelector('h3[class="d"]'); 


// let TV1 = a.value;
// // w.remove();
// // if(a.value==='NHK'){
// //   a.value==="g1";
// // console.log('検索結果は'+a.value+'です！！');
// // }
// console.log('検索結果は'+TV1+'です！！');


// let w = document.querySelector('h3[class="d"]'); 
// if (a === undefined || a === null) {//未定義の場合
//   w.remove();
// }

// let cs = document.querySelectorAll('input[name="TV2"]');
// for (let c of cs) {
//     if (c.checked) {
//         console.log(c.value);
//     }
// }
// }
// function addivent(){
//   let ivent1 =document.querySelector('');

// }


// 通信を開始する処理
function sendRequest() {
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0300-j.json';
let url2= 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+'-'+'-j.json';
  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}
// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

console.log(data.list.g1[0].start_time); 
console.log(data.list.g1[0].end_time); 
console.log(data.list.g1[0].service.name); 
console.log(data.list.g1[0].title); 
console.log(data.list.g1[0].subtitle); 
console.log(data.list.g1[0].content); 
console.log(data.list.g1[0].act);
console.log(data.list.g1[0].id);
console.log(data.list.g1[0].genres);


// let pp = document.querySelector('p');
// let p = document.createElement('p');  

// p.textContent =(data.list.g1[0].genres); 
// pp.insertAdjacentElement('afterend',p);
  
// p.textContent =(data.list.g1[0].id); 
// pp.insertAdjacentElement('afterend',p);

// p.textContent =(data.list.g1[0].act); 
// pp.insertAdjacentElement('afterend',p);
  
// p.textContent =(data.list.g1[0].content); 
// pp.insertAdjacentElement('afterend',p);

// p.textContent =(data.list.g1[0].subtitle); 
// pp.insertAdjacentElement('afterend',p);

// p.textContent =(data.list.g1[0].title); 
// pp.insertAdjacentElement('afterend',p);

// p.textContent =(data.list.g1[0].service.name); 
// pp.insertAdjacentElement('afterend',p);

// p.textContent =(data.list.g1[0].end_time); 
// pp.insertAdjacentElement('afterend',p);

// p.textContent =(data.list.g1[0].start_time); 
// pp.insertAdjacentElement('afterend',p);