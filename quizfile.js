qa = new Array();

qa[85] = ["ｊｓで文字列に使うのはどれでしょう",
            "　’＝シングルコーテーション",
              "85_ダブルクォーテーションも同様に使えます。ただ、HTML内で利用されることが多いので、<br>干渉を避けるため JavaScript 内ではシングルクォーテーションを利用することが多い"];

qa[84] = ["ｊｓで●●●参照エラーのメッセージはどれでしょう",
            "Uncaught ReferenceError: ●●● is not defined   test.js:1",
              "84_uncaught(ｱﾝｺｳﾄ=捉えられない)。referenceError(ﾘﾌｧﾚﾝｽｴﾗｰ=参照ｴﾗｰ)。define(ﾃﾞｨﾌｧｲﾝ=定義する)"];

qa[83] = ["ｊｓでエラーが表示されるところはどこでしょう",
            "Ｃｈｒｏｍｅのデベロッパーツールのconsoleタブ",
              "83_"];

qa[82] = ["ＨＴＭＬでＹｏｕＴｕｂｅ動画の埋め込みに使われるタグはどれでしょう",
            "ｓｃｒｉｐｔタグ",
              "82_&lt;script　src=&quot; &quot;&gt; &lt;/script&gt;　参考_src属性=source(ｿｰｽ=出典・由来)"];

qa[81] = ["ＨＴＭＬでＹｏｕＴｕｂｅ動画の埋め込みに使われるタグはどれでしょう",
            "ｉｆｒａｍｅ（ｱｲﾌﾚｰﾑ）",
              "81_"];

qa[80] = ["ＶＳｃｏｄｅでｕｌタグにｌｉタグを6個入れるＴａｂキー入力はどれでしょう",
            "ｕｌ＞ｌｉ＊６",
              "80_ul>(li>ul>li*2)*2　など。まとめてリストを作成することができます。"];

qa[79] = ["ＨＴＭＬのリストタグはどれでしょう",
            "ｕｌタグ＝unordered list(ｱﾝｵｰﾀﾞｰﾄﾞ･ﾘｽﾄ)、ｏｌタグ＝ordered list（ｵｰﾀﾞｰﾄﾞ･ﾘｽﾄ）",
              "79_&lt;ul&gt; &lt;li&gt;　&lt;/li&gt; &lt;/ul&gt;&nbsp; 参考_li(ｴﾙｱｲ)=list item(ﾘｽﾄｱｲﾃﾑ=項目)。liタグはulタグやolタグの子要素にしなければならない。"];

qa[78] = ["ＨＴＭＬの画像タグはどれでしょう",
            "ｉｍｇタグ＝image（イメージ）",
              "78_&lt;img src=&rdquo;https:～～ &rdquo; alt=&rdquo; &rdquo; /&gt;。参考_src属性=source(ｿｰｽ=出典・由来)  alt属性=alternate(ｵﾙﾀﾈｰﾄ=代替)"];

qa[77] = ["&lt;a href=&quot;https:～～ &quot;&gt;　&lt;/a&gt;の要素と属性はどれでしょう",
            "ａタグ＝要素　ｈｒｅｆ＝属性",
              "77_href(ｴｲﾁﾚﾌ) 属性は、ハイパーリンクのリンク先をａタグ要素に情報を与えることができます。<br>なお、href属性はウェブサイトへリンク。src属性はファイルの場所を指定します"];

qa[76] = ["ＨＴＭＬのリンクタグはどれでしょう",
            "ａタグ＝anchor(アンカー=船のいかり)",
              "76_&lt;a href=&quot;https:～～&quot;　&gt; &lt;/a&gt; 参考_href(ｴｲﾁﾚﾌ)=hypertext reference(ﾊｲﾊﾟｰﾃｷｽﾄﾘﾌｧﾚﾝｽ=ﾊｲﾊﾟｰﾃｷｽﾄの参照)"];

qa[75] = ["ＨＴＭＬの段落タグはどれでしょう",
            "ｐタグ＝paragraph(ﾊﾟﾗｸﾞﾗﾌ=段落)",
              "75_&lt;p&gt;&nbsp;&lt;/p&gt;　参考_&lt;br&gt;タグを文面に入れることで改行できます。br=break(ﾌﾞﾚｰｸ=改行)"];

qa[74] = ["ＨＴＭＬの見出しタグはどれでしょう",
            "ｈタグ＝header(ﾍｯﾀﾞｰ=見出し)",
              "74_&lt;h1&gt;　&lt;/h1&gt;&nbsp;参考_&lt;body&gt; &lt;/body&gt;タグ内に入力します。なお、h1～h6まであります"];

qa[73] = ["ＨＴＭＬは何の略でしょう",
            "Hyper Text Markup Language（ﾊｲﾊﾞｰﾃｷｽﾄﾏｰｸｱｯﾌﾟﾗﾝｹﾞｰｼﾞ）",
              "73_文字や画像などを組み合わせ、文書を表示するための言語（マークアップランゲージ）の一種。なお、マークアップとは機械が読めるように目印をつけることです"];

qa[72] = ["ｔｒｕｔｈｙな値で正しいのはどれでしょう",
            "ｉｆ文でｔｒｕｅで実行される",
              "72_反対はfalsy(ﾌｫｰﾙｼｰ)な値で6種類。それ以外はtruthy(ﾄｩﾙｰｼｰ)な値。　false,0,&quot;&quot;（1 文字も含まれていない文字列(string)）,null,undefined,NaN"];

qa[71] = ["ｐｒｏｃｅｓｓ．ａｒｇｖの最初の引数はなんでしょう",
            "[２]",
              "71_const number = process.argv[2] || 0;　参考_添字が2の理由は、[0]番はnodeコマンドのファイルのパスが入り、<br>[1]番には実行しているプログラムのファイルのパスが入る決まりがあるため"];

qa[70] = ["Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列はなんでしょう",
            "ｐｒｏｃｅｓｓ．ａｒｇｖ",
              "70"];

qa[69] = ["ＲＥＰＬ（レプル）を終了するコマンドはなんでしょう",
            "「ＣＴＲＬ」＋「ｃ」を2回",
              "69"];

qa[68] = ["入力したコードをその場で実行して、結果を表示するツールはなんでしょう",
            "ＲＥＰＬ（レプル）＝ Read-Eval-Print Loop（リード・イーバル・プリント・ループ）",
              "68"];

qa[67] = ["Node.js のバージョンを管理するツールはなんでしょう",
            "ｎｖｍ=Node Version Manager",
              "67"];

qa[66] = ["JavaScript でプログラミングすることのできる、サーバーサイド向けのプラットフォームはどれでしょう",
            "Ｎｏｄｅ．ｊｓ（ノードジェイエス）",
              "66"];

qa[65] = ["ガード句はどれでしょう？",
            "ｉｆ (userName.length === 0)｛ｒｅｔｒｅｎ：｝",
              "65"];

qa[64] = ["アロー関数の記述はどれでしょう",
            "＝（）＝＞｛　｝",
              "64"];

　　qa[63] = ["htmlとjsの実行手順で正しいのはどれでしょう",
                "上から下にプログラムは実行される",
                  "63"];

　　qa[62] = ["ｂｏｄｙタグの色を変更するｃｓｓのコードはどれでしょう",
                "ｂｏｄｙ {ｃｏｌｏｒ： #ffffff}",
                  "62"];

    qa[61] = ["htmlの中で実行手順を考慮してtest.jsの記述を行うのに最適な場所はどこでしょう",
                "＜body＞＜／body＞の一番最後",
                  "61"];

    qa[60] = ["htmlの中でtest.jsを呼び出すコードはどれでしょう",
                "＜script src=\"test.js\"＞ ＜／script＞",
                  "60"];

    qa[59] = ["Linuxの特徴で間違っているのは？",
                "WindowsやmacOSと異なり、マウスは使えずコマンドでしか操作できない",
                  "59"];

    qa[58] = ["コンソールなどの文字だけによるインタフェースを何という？",
                "ＣＬＩ＝Command Line Interface（ｺﾏﾝﾄﾞﾗｲﾝｲﾝﾀｰﾌｪｰｽ）",
                  "58"];

    qa[57] = ["コンピュータにおける作業台にたとえられるものは？",
                "メモリ",
                  "57"];

    qa[56] = ["Linuxにおいてファイルやディレクトリの削除するコマンドは？",
                "ｒｍ",
                  "56"];

    qa[55] = ["コマンドプロセスの入出力について正しいものを選択して下さい",
                "標準入力を受け取り、標準出力と標準エラー出力を出す",
                  "55"];

    qa[54] = ["標準入力の中に指定した単語が含まれるかを判定して出力するコマンドは？",
                "ｇｒｅｐ",
                  "54"];
    
    qa[53] = ["Vimで文字をファイルに入力するためのインサートモードに入るための入力文字は？",
                "ｉ",
                  "53"];
    
    qa[52] = ["Vimでファイルに保存するための入力文字は？",
                "：ｗ",
                  "52"];
    
    qa[51] = ["シェルの説明で間違っているものは？",
                "ＶＳｃｏｄｅはシェルの１つ",
                  "51"];
    
    qa[50] = ["指定された文字列を標準出力に表示するコマンドは？",
                "ｅｃｈｏ",
                  "50"];
    
    qa[49] = ["パケットを発行しネットワーク疎通を確認したいホストに対し調査できるコマンドは？",
                "Ｐｉｎｇ",
                  "49"];
    
    qa[48] = ["http通信で誤った説明は？",
                "httpはデフォルトで8000番ポートを利用する",
                  "48"];
    
    qa[47] = ["システム全体を管理するソフトウェアのことを何という",
                "ＯＳ=Operating System （オペレーティング・システム）",
                  "47"];
    
    qa[46] = ["OSの中核部分のことを指す言葉を何という",
                "Ｌｉｎｕｘ ｶｰﾈﾙ",
                  "46"];

    qa[45] = ["Linuxカーネルを車の部品に例えるとどれでしょう",
                "エンジン",
                  "45"];
    
    qa[44] = ["Linuxカーネルと各種ソフトウェアを「おすすめセット」のような形式で配布されているもの",
                "Ｌｉｎｕｘ ﾃﾞｨｽﾄﾘﾋﾞｭｰｼｮﾝ",
                  "44"];
    
    qa[43] = ["サーバー向けディストリビューションの１つは次のうちどれでしょう。",
                "Ｕｂｕｎｔｕ（ｳﾌﾞﾝﾄｩ）",
                  "43"];
                
    qa[42] = ["英語で管理者は次のうちどれでしょう",
                "Ａｄｍｉｎｉｓｔｒａｔｏｒ",
                  "42"];
    
    qa[41] = ["コマンドや他のアプリケーションを呼び出すことができる特別な環境は次のうちどれでしょう",
                "コンソール",
                  "41"];
    
    qa[40] = ["ユーザのホームディレクトリを示すチルダとはどれでしょう",
                "～",
                  "40"];
    
    qa[39] = ["現在開いているディレクトリはどれでしょう",
                "カレントディレクトリ",
                  "39"];
    
    qa[38] = ["仮想環境（仮想マシン）を英語でいうとどれでしょう",
                "ＶＭ＝Virtual Machine",
                  "38"];
    
    qa[37] = ["最新版ではなく特定のバージョンを指定してインストールしたり、複数のバージョンを同時に使い分けたりする<br>面倒なことを簡単に実行してくれるツールを何という？",
                "パッケージマネージャ",
                  "37"];
    
    qa[36] = ["パッケージマネージャでないものはどれでしょう",
                "ＶＳｃｏｄｅ（ﾌﾞｲｴｽｺｰﾄﾞ）",
                  "36"];
    
    qa[35] = ["コマンド入力ソフトでないものはどれでしょう",
                "Ｌｉｎｕｘカーネル",
                  "35"];
        
    qa[34] = ["仮想環境を構築するためのソフトはどれでしょう？",
                "ＶｉｒｔｕａｌＢｏｘ（ﾊﾞｰﾁｬﾙﾎﾞｯｸｽ）",
                  "34"];
    
    qa[33] = ["VirtualBox の操作を簡単にしてくれるツールを何というでしょう",
                "Ｖａｇｒａｎｔ（ﾍﾞｲｸﾞﾗﾝﾄ）",
                  "33"];
    
    qa[32] = ["仮想マシンを立ち上げるVagrantのコマンドはなんでしょう？",
                "Ｖａｇｒａｎｔ　ｕｐ",
                  "32"];
        
    qa[31] = ["仮想マシンを閉じるVagrantのコマンドはなんでしょう？",
                "Ｖａｇｒａｎｔ　ｈａｌｔ",
                  "31"];
    
    qa[30] = ["Linux を操作する通信プロトコルを何という？",
                "ＳＳＨ＝Secure Shell（ｾｷｭｱｼｪﾙ）",
                  "30"];
    
    qa[29] = ["jsのfor文でエラーのないコードはどれでしょう",
                "for(var i=0; i <= 10; i++){}",
                  "29"];

    qa[28] = ["Linuxのコマンドで現在のディレクトリを表示するものは",
                "ｐｗｄ=Print Working Directory",
                  "28"];

    qa[27] = ["Linuxのコマンドでファイルディレクトリを検索するものは",
                "ｆｉｎｄ",
                  "27"];

    qa[26] = ["jsのfor文でエラーのないコードはどれでしょう",
                "for(var i=0; i <= 10; i++){aleat(i);}",
                  "26"];

    qa[25] = ["ルートディレクトリからのパスを何という",
                "絶対パス /home/vagrant",
                  "25"];

    qa[24] = ["現在のディレクトリ（カレントディレクトリ）からのパスを何という",
                "相対パス ./vagrant(又は ./を省略可能)",
                  "24"];

    qa[23] = ["Linuxのコマンドで現在のディレクトリのファイルとディレクトリを表示するものは",
                "ｌｓ=Ｌｉｓｔの略",
                  "23"];

    qa[22] = ["Linuxのコマンドで現在のディレクトリから別のディレクトリに移動するものは",
                "ｃｄ=Change Directoryの略",
                  "22"];

    qa[21] = ["Linuxのコマンドで１つ上のディレクトリに移動するものは",
                "ｃｄ　．．",
                  "21"];

    qa[20] = ["Linuxのコマンドでルートディレクトリに移動するものは",
                "ｃｄ ／",
                  "20"];

    qa[19] = ["Linuxのコマンドでホームディレクトリに移動するものは",
                "ｃｄ ～",
                  "19"];

    qa[18] = ["Linuxのコマンドで入力を助けてくれる機能は",
                "Ｔａｂ補完",
                  "18"];

    qa[17] = ["Linuxのコマンドでディレクトリやファイルを作成するものは",
                "ｍｋｄｉｒ=MaKe DIRectory",
                  "17"];

    qa[16] = ["プログラミングで一時的にディレクトリやファイルを使用するためによく使われるものは",
                "ｔｍｐ=temporary",
                  "16"];

    qa[15] = ["Linuxのコマンドでディレクトリやファイルを削除するものは",
                "ｒｍ=ReMove",
                  "15"];

    qa[14] = ["Linuxのコマンドで〇〇ディレクトリを削除できないものは",
                "ｒｍ 〇〇",
                  "14"];

    qa[13] = ["Linuxのコマンドでファイルやディレクトリをコピーするものは",
                "ｃｐ=CoPy",
                  "13"];

    qa[12] = ["Linuxのコマンドで中身を含めてディレクトリをコピーするものは",
                "ｃｐ　－ｒ ",
                  "12"];

    qa[11] = ["Linuxのコマンドでファイルやディレクトリを移動するものは",
                "ｍｖ=Move",
                  "11"];

    qa[10] = ["Linuxのコマンドで[mv b c]で移動先にディレクトリがない場合の処理はどれ",
                "ディレクトリbが移動し、ディレクトリcに名前が変わる",
                  "10"];

    qa[9] = ["Linuxのコマンドで[mv b c]で移動先にディレクトリcがある場合の処理はどれ",
              "ディレクトリｃの中に、ディレクトリｂが移動する",
                "9"];

    qa[8] = ["Linuxのコマンド[mv b c]で移動先ディレクトリがc/bである場合の処理はどれ",
                "ディレクトリｃが重複するためエラー表示がでる",
                  "8"];

    qa[7] = ["Linuxのコマンド[mv tmp/c workspace/tmp]でディレクトリがworkspace/tmpまでの場合の処理はどれ",
              "ディレクトリworkspace/tmpの中に、ディレクトリcが移動される",
                "7"];

    qa[6] = ["Linuxのコマンドでファイルやディレクトリを探すものは",
              "ｆｉｎｄ",
                "6"];

    qa[5] = ["Linuxのコマンドで引数について合っているものはどれでしょう",
              "コマンドにもオプションにも引数はある",
                "5"];

    qa[4] = ["Vagrantfileの説明をしているものはどれでしょう",
              "ｖａｇｒａｎｔのコンフィグファイル(設定ファイル)",
                "4"];

    qa[3] = ["Linuxのコマンドでリダイレクト(標準出力をファイルに書き出す)の処理はどれでしょう",
              "ｌｓ　＞　ｔｍｐ／ｌｓ．ｏｕｔｐｕｔ．ｔｘｔ",
                "3"];

    qa[2] = ["Linuxのコマンドでリダイレクト(標準出力をファイルに追記して書き出す)のコードはどれでしょう",
              "ｌｓ　＞＞　ｔｍｐ／ｌｓ－ｏｕｔｐｕｔ．ｔｘｔ",
                "2"];

    qa[1] = ["Linuxのコマンドでリダイレクト(標準エラー出力をファイルに書き出す)のコードはどれでしょう",
              "ｌｓ　２＞　ｔｍｐ／ｓｌ－ｏｕｔｐｕｔ．ｔｘｔ",
                "1"];

    qa[0] = ["Linuxのコマンドでリダイレクト(標準出力と標準エラー出力をファイルに書き出す)のコードはどれでしょう",
              "ｌｓ　２＞＆１　ｔｍｐ／ｌｓ－ｏｕｔｐｕｔ．ｔｘｔ",
                "0"];
