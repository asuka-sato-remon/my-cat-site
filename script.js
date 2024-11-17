$(function() {
    
    // datepicker表示イベント
    $('#date').pickadate(); /*#dateというIDにpickdateのプラグインを適用*/
    
    // timepicker表示イベント
    $('#time').pickatime({
        format: 'HH:i', // 24時間表記
        interval: 30,   // 表示間隔
        min: [10,0],   // 予約開始時間
        max: [20,0]    // 予約終了時間 
    });

    // 予約ボタン押下イベント
    $('#submit').click(onClickSubmit);
    /*予約ボタンが押されたときonClickSubmitを呼び出す*/

    //予約ボタン押下処理
    function onClickSubmit(){
        $('#submit_result').remove();
        /*前回の結果を削除*/
        var date = $('#date').val();
        var time = $('#time').val();
        /*#dateと#timeに入力された値を変数に格納*/
        
        if(date!='' && time !=''){
            /*日付と時間がどちらも空でなければ予約*/

            //予約をサーバに送信
            // params={};
            // prams.date=date;
            // params.time=time;
            // $.post("hoge.php",params,function(data){
                // ここにサーバ送信後の処理結果を書く
            // });

            /*サーバーに予約情報を送信するコードです（コメントアウトされています）。paramsというオブジェクトにdateとtimeを設定し、$.post()でhoge.phpに送信することを想定しています。$.postの第3引数でサーバーからの応答処理を記述できます。*/


            //予約完了メッセージ
            $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p><strong>'+date+time+'〜</strong><br>予約受け付けました。</p></div>');            

        }else{
            //予約失敗メッセージ
            $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>予約日・予約時間を選択してください。</p></div>');            
        }
    }

});