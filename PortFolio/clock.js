function updateClock() {
    let now = new Date();                                           //現在の日時と時刻を取る
    let hours = now.getHours();                                     //現在の時を取る。 現在の時刻（24時間制）を0から23の値を返す
    let minutes = now.getMinutes();                                 //現在の分を取る。 0から59の値を返す
    let seconds = now.getSeconds();                                 //現在の秒を取る。 0から59の値を返す

    // 2桁の数字に整える
    // hours.toString():数値を文字列に変換する（数字をそろえるため）
    // .padStart(targetLength, padString):文字列の先頭に指定した文字(padString)を埋めて、指定した長さ(targetLength)になるようにする。
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // 表示する内容を作成する
    let nowTime = `${hours}:${minutes}:${seconds}`;                 //変数hours、変数minutes、変数secondsを取得し、それぞれを：で区切る。区切ったものを変数nowTimeに入れる
    // ID属性が "nowTime" に設定されている要素を取得する
    // .textContent:テキストを取得する(ID属性が "nowTime" に設定されている要素のテキストを取得する)
    // 変数nowTimeにID属性が "nowTime" に設定されている要素のテキストを代入する
    document.getElementById("nowTime").textContent = nowTime;

    //
    if(seconds < 20){
        // 変数nowTimeにID属性が "nowTime" に設定されている要素のフォントのカラーにする
        document.getElementById("nowTime").style.color = "#e64d00";
        document.getElementById("nowTime").style.backgroundColor = "#e6cfe6";
    }else if(20 <= seconds && seconds <= 39){
        // 変数nowTimeにID属性が "nowTime" に設定されている要素のフォントのカラーにする
        document.getElementById("nowTime").style.color = "#e69900";
        document.getElementById("nowTime").style.backgroundColor = "#b8dee6";
    }else if(40 <= seconds && seconds <= 59){
        // 変数nowTimeにID属性が "nowTime" に設定されている要素のフォントのカラーにする
        document.getElementById("nowTime").style.color = "#00e600";
        document.getElementById("nowTime").style.backgroundColor = "#cfb8e6";
    }

    // 時がちょうどであれば音声を再生
    if (minutes == 59 && seconds > 57) {
        const audio = document.getElementById("sound");
        audio.play();
    }

        const Sectctk = document.getElementById("Sectctk");
        Sectctk.play();

}

    // 初期表示と1秒ごとの更新
    setInterval(updateClock, 1000);
    updateClock(); // 初回表示を即座に更新
