var userType;
var searchflg;
var tab;

window.onload = function () {
  //window.addEventListener('DOMContentLoaded', () => {
  const inputkana = document.getElementById("inputkana");
  const inputkana2 = document.getElementById("inputkana2");
  if (inputkana != null) {
  inputkana.addEventListener("change", updateValue);
  //inputkana.addEventListener("input", updateValue);
  }
  if (inputkana2 != null) {
  inputkana2.addEventListener("change", updateValue);
  //inputkana.addEventListener("input", updateValue);
  }
  ckbox()
  tab = 1
  const urlParams = new URL(window.location.href);
  userType = urlParams.searchParams.get("usertype");
  if (userType != null && userType != "null") {
    remHid(userType);
    if (userType == "5") {
      remHid("1")
      remHid("2");
      remHid("3")
      remHid("4");
    }
  }
  //user.setAttribute("hidden",true);
  searchflg = urlParams.searchParams.get("search");
  if (searchflg == 1) {
    remHid("result");
    remHid("but");
  }
}



function ckAll(e) {
const ck = document.getElementsByName("ck" + flg)
const ckAll = document.getElementById("ckAll"  + flg)
if(ck != null && ckAll != null){
for(i = 0; i < ck.length; i++) {
   ck[i].checked = ckAll.checked
}
}
 
}

function updateValue(e) {
  var hkaku = zenkana2Hankana(e.target.value);
  e.target.value=hkaku
 
}


function jump(hre) {
  urlStr = hre + "?search=" + searchflg + "&usertype=" + userType;
  window.location.href = urlStr;

}


function chgData(flg) {
  if (flg == 1) {
    document.getElementById("chgMsg").innerText = "データーを変更します。よろしいですか。";
    remHid("chgBut");
    if (document.getElementById("chgFlg") != null && document.getElementById("chgFlg").value == 1) {
      jump("metainance.html")
    } else {
      document.getElementById("chgFlg").value = ""
    }
  }

  if (flg == 2) {
    document.getElementById("chgMsg").innerText = "データを更新しました。";
    document.getElementById("chgBut").setAttribute("hidden", "hidden");
    document.getElementById("chgFlg").value = 1
  }
}


function search(urlstr) {
  setHid("result1");
  setHid("but1");
  setHid("result2");
  setHid("but2");
  setHid("result3");
  setHid("but3");
  remHid("result" + tab);
  remHid("but" + tab);
 
  remHid("result");
  remHid("but" );

  searchflg = 1;
  var key = ""

  if (document.getElementById("searchKey") != null) {
  key = document.getElementById("searchKey").value

    //if (key.includes(",")) {
    //  jump(urlstr + ".html")
    //} else {
    //  if (urlstr != null && urlstr != "") {
    //    jump(urlstr + "2.html")
    //  }
    //}
  }
}


function chgData(flg) {
  if (flg == 1) {
    document.getElementById("chgMsg").innerText = "データーを変更します。よろしいですか。";
    remHid("chgBut");

  }
  if (flg == 2) {
    document.getElementById("chgMsg").innerText = "データを更新しました。";
    setHid("chgBut");

  }

}
function chgTab(flg) {
  tab = flg
  setHid("result"+ flg);
  setHid("but" + flg);
  //document.getElementById("frm" + flg).reset();

}

function remHid(id) {
  var el = document.getElementById(id);
  if (el != null) {
    el.removeAttribute("hidden");
  }
}

function setHid(id) {
  var el = document.getElementById(id);
  if (el != null) {
    el.setAttribute("hidden", "hidden");
  }
}

function setNumber(number) {

  if (number.substr(7, 1) == 0) {
    if (document.getElementById(number.substr(0, 7) + "1") != null || document.getElementById(number.substr(0, 7) + "2") != null || document.getElementById(number.substr(0, 7) + "3") != null) {
      document.getElementById("delMsg").innerText = "「予約」データが存在しますので「本件」データを削除できません。";
      document.getElementById("delBut").setAttribute("hidden", "hidden");
    } else {
      remHid("delBut");
      document.getElementById("delMsg").innerText = "データを削除します。よろしいですか。";
    }
  } else {
    remHid("delBut");
    document.getElementById("delMsg").innerText = "データを削除します。よろしいですか。";

  }
  document.getElementById("deleteNumber").value = number;

}

function deleteData() {
  var id = document.getElementById("deleteNumber").value
  document.getElementById("deleteNumber").value = ""
  var doc = document.getElementById(id);
  doc.remove();
}

function setSelNumber(id, dis) {
  document.getElementById("selectNumber").value = id;
  var doc = document.getElementById(id);
  str = doc.innerText;
  //disabled="disabled"
  var c = document.getElementsByName("opCk");
  if (c && c.length > 0) {
    for (var i = 0; i < c.length; i++) {
      if (dis.includes(i + 1)) {
        c[i].parentNode.parentNode.removeAttribute("hidden");
      } else {
        c[i].parentNode.parentNode.setAttribute("hidden", "hidden")
      }
      if (str.includes(c[i].value)) {
        c[i].checked = true;
      } else {
        c[i].checked = false;
      }
    }
  }
}

function selectOption() {
  var c = document.getElementsByName("opCk");
  var str = "";
  if (c && c.length > 0) {
    for (var i = 0; i < c.length; i++) {
      if (c[i].checked) {
        if (str != "") {
          str = str + " , "
        }
        str = str + c[i].value;
      }
    }
  }
  if (str == "") { str = "オプションなし"; }
  var id = document.getElementById("selectNumber").value;
  document.getElementById("selectNumber").value = "";
  var doc = document.getElementById(id);
  doc.innerText = str;
}

function insertData(flg) {
  if (flg == 1) {
    document.getElementById("chgMsg").innerText = "データーを登録します。よろしいですか。";
    remHid("chgBut");
  }
  if (flg == 2) {
    document.getElementById("chgMsg").innerText = "データを登録しました。";
    document.getElementById("chgBut").setAttribute("hidden", "hidden");
  }

}

function zenkana2Hankana(str) {
    var kanaMap = {
         "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
         "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
         "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
         "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
         "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
         "ヴ": "ｳﾞ", "ヷ": "ﾜﾞ", "ヺ": "ｦﾞ",
         "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
         "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
         "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
         "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
         "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
         "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
         "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
         "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
         "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
         "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
         "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
         "ッ": "ｯ", "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ",
         "が": "ｶﾞ", "ぎ": "ｷﾞ", "ぐ": "ｸﾞ", "げ": "ｹﾞ", "ご": "ｺﾞ",
         "ざ": "ｻﾞ", "じ": "ｼﾞ", "ず": "ｽﾞ", "ぜ": "ｾﾞ", "ぞ": "ｿﾞ",
         "だ": "ﾀﾞ", "ぢ": "ﾁﾞ", "じ": "ﾂﾞ", "で": "ﾃﾞ", "ど": "ﾄﾞ",
         "ば": "ﾊﾞ", "び": "ﾋﾞ", "ぶ": "ﾌﾞ", "べ": "ﾍﾞ", "ぼ": "ﾎﾞ",
         "ぱ": "ﾊﾟ", "ぴ": "ﾋﾟ", "ぷ": "ﾌﾟ", "ぺ": "ﾍﾟ", "ぽ": "ﾎﾟ",
         "あ": "ｱ", "い": "ｲ", "う": "ｳ", "え": "ｴ", "お": "ｵ",
         "か": "ｶ", "き": "ｷ", "く": "ｸ", "け": "ｹ", "こ": "ｺ",
         "さ": "ｻ", "し": "ｼ", "す": "ｽ", "せ": "ｾ", "そ": "ｿ",
         "た": "ﾀ", "ち": "ﾁ", "つ": "ﾂ", "て": "ﾃ", "と": "ﾄ",
         "な": "ﾅ", "に": "ﾆ", "ぬ": "ﾇ", "ね": "ﾈ", "の": "ﾉ",
         "は": "ﾊ", "ひ": "ﾋ", "ふ": "ﾌ", "へ": "ﾍ", "ほ": "ﾎ",
         "ま": "ﾏ", "み": "ﾐ", "む": "ﾑ", "め": "ﾒ", "も": "ﾓ",
         "や": "ﾔ", "ゆ": "ﾕ", "よ": "ﾖ",
         "ら": "ﾗ", "り": "ﾘ", "る": "ﾙ", "れ": "ﾚ", "ろ": "ﾛ",
         "わ": "ﾜ", "を": "ｦ", "ん": "ﾝ",
         "ぁ": "ｧ", "ぃ": "ｨ", "ぅ": "ｩ", "ぇ": "ｪ", "ぉ": "ｫ",
         "っ": "ｯ", "ゃ": "ｬ", "ゅ": "ｭ", "ょ": "ｮ"
    }
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    //console.log(Object.keys(kanaMap).join('|'))
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/゛/g, 'ﾞ')
            .replace(/゜/g, 'ﾟ');
};

function ckbox() {
   
    $('#ckAll1').on('click', function() {
      $("input[name='ck1']").prop('checked', this.checked);
    });

    $("input[name='ck1']").on('click', function() {
      if ($('#boxes1 :checked').length == $('#boxes1 :input').length) {
        $('#ckAll1').prop('checked', true);
      } else {
        $('#ckAll1').prop('checked', false);
      }
    });
    $('#ckAll2').on('click', function() {
      $("input[name='ck2']").prop('checked', this.checked);
    });

    $("input[name='ck2']").on('click', function() {
      if ($('#boxes2 :checked').length == $('#boxes2 :input').length) {
        $('#ckAll2').prop('checked', true);
      } else {
        $('#ckAll2').prop('checked', false);
      }
    });
    $('#ckAll3').on('click', function() {
      $("input[name='ck3']").prop('checked', this.checked);
    });

    $("input[name='ck3']").on('click', function() {
      if ($('#boxes3 :checked').length == $('#boxes3 :input').length) {
        $('#ckAll3').prop('checked', true);
      } else {
        $('#ckAll3').prop('checked', false);
      }
    });
  }