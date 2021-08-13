qa = new Array();
//
// qa[110] = ["",  "",""];

// qa[110] = ["",  "", ""];
// qa[110] = ["",  "", ""];
// qa[110] = ["",  "",""];
// qa[110] = ["",  "", ""];
// qa[110] = ["", "", ""];


qa[174] = ["は",
           "",
           "174_14/94.3-07._"];

qa[180] = ["let cost=100をﾃﾝﾌﾟﾚｰﾄﾘﾃﾗﾙ使った記述は",
           "&#x27;金額は${cost}円です&#x27;",
           "180_14/94.3-06.HubotとSlackｱﾀﾞﾌﾞﾀ_&#x27;(ﾊﾞｯｸｸｫｰﾃﾝｼｮﾝ)で囲むと文字列に${変数}を組込める"];

qa[179] = ["様々な文字列を一つの文字列で表現する表記法は",
           "正規表現",
           "179_14/94.3-06.HubotとSlackｱﾀﾞﾌﾞﾀ_(例 私は.です。など)ﾒﾀ文字「.」「*」「[」「]」「|」「(」「)」「^」「$」など使って表す"];

qa[178] = ["ﾊﾞｰﾃｨｶﾙﾊﾞｰは",
           "|",
           "178_14/94.3-06.HubotとSlackｱﾀﾞﾌﾞﾀ_ﾊﾟｲﾌﾟ(例 ls|more)前の出力を次の入力へ渡す仕組み。論理和(例 a||b)。正規表現(例 IBM|Apple|Sony)各単語に合致"];

qa[177] = ["配列 lots=[11,22,33]からﾗﾝﾀﾞﾑな1つをlotへ代入するｺｰﾄﾞは",
           "lot = lots[Math.floor(Math.random() * lots.length)];",
           "177_14/94.3-07.HubotとSlackｱﾀﾞﾌﾟﾀ_Math.floor=切捨。Math.random()=乱数生成。lots.length=3個。lots[ｲﾝﾃﾞｯｸｽ]を作っている"];

qa[176] = ["Yeomanを利用したﾎﾞｯﾄの作成ﾂｰﾙ(ｼﾞｪﾈﾚｰﾀｰ)は",
           "generator-hubot",
           "176_14/94.3-06.HubotとSlackｱﾀﾞﾌﾞﾀ_Hubotを使うための設定を対話式で行ってくれる"];

qa[175] = ["Googleが作成したひな形作成ﾂｰﾙ(ｼﾞｪﾈﾚｰﾀｰ)は",
           "yo",
           "175_14/94.3-06.HubotとSlackｱﾀﾞﾌﾞﾀ_yo=yeoman(ﾖｰﾏﾝ)。ひな形を対話的なﾌﾟﾛｸﾞﾗﾑで実現してくれる"];

qa[173] = ["Slackでｿｰｽｺｰﾄﾞをｼﾝﾀｯｸｽﾊｲﾗｲﾄ(可視性のため色や字体を強調)と行番号で投稿する機能は",
           "ｽﾆﾍﾟｯﾄ",
           "173_14/94.3-06.Slackのﾎﾞｯﾄ開発_雷ﾏｰｸ「ｺｰﾄﾞまたはﾃｷｽﾄのｽﾆﾍﾟｯﾄを作成する」から使える"];

qa[64] =  ["Slackでｺｰﾄﾞが文字で表示される機能は",
           "ｺｰﾄﾞﾌﾞﾛｯｸ",
           "64_14/94.3-06.Slackのﾎﾞｯﾄ開発_ｺｰﾄﾞﾌﾞﾛｯｸではﾘﾏｲﾝﾀﾞなどの機能は動かないため、ｺｰﾄﾞを活かしたいときはｺｰﾄﾞﾌﾞﾛｯｸは解除する必要がある"];

qa[83] = ["Slackでﾘﾝｸを貼る記号は",
           "#(ｼｬｰﾌﾟ)",
           "83_14/94.3-06.Slackのﾎﾞｯﾄ開発_(例#ﾌﾟﾛｹﾞｼﾞｭ)でﾘﾝｸが貼れる。ﾒﾝｼｮﾝも可能(例@●●●●)でされた人はﾒﾝｼｮﾝﾊﾞｯﾁが表示される。remindも使える機能。"];

qa[169] = ["ﾗｲﾌﾞﾗﾘを使う側でﾗｲﾌﾞﾗﾘ(階層は../sum内の関数test1)に新たに追加された関数(test2)をsum-appﾃﾞｨﾚｸﾄﾘ(既にｲﾝｽﾄｰﾙ済)で使うには",
           "yarn remove sum → yarn add ../sum",
           "169_14/94.3-05.ﾗｲﾌﾞﾗﾘ_使う側のﾃﾞｨﾚｸﾄﾘ作業。2回目のadd時は、旧ﾗｲﾌﾞﾗﾘ削除後に新ﾗｲﾌﾞﾗﾘｲﾝｽﾄｰﾙが必要。自動的にnode_modulesが更新されないため入れ直す"];

qa[168] = ["ﾗｲﾌﾞﾗﾘを作る側で自作関数test1,test2(階層は../sum)を他のﾌﾟﾛｼﾞｪｸﾄで使える設定のｺｰﾄﾞは",
           "module.exports = {test1,test2};",
           "164_14/94.3-05.ﾗｲﾌﾞﾗﾘ_yarn。自作関数側の作業。{呼出名:実行関数}左右同じなら{1つ}のみで良い。関数が複数あれば「,」で複数を区切れる"];

qa[167] = ["ﾃﾞｨﾚｸﾄﾘで一つ上の階層のsumをcatで実行するｺﾏﾝﾄﾞは",
           "cat ../sum",
           "167_14/94.3-05.ﾗｲﾌﾞﾗﾘ_"];

qa[166] = ["ﾃﾞｨﾚｸﾄﾘで一つ上の階層のﾘｽﾄを見るｺﾏﾝﾄﾞは",
           "ls ..",
           "166_14/94.3-05.ﾗｲﾌﾞﾗﾘ_"];

qa[165] = ["ﾗｲﾌﾞﾗﾘを使う側で他のﾃﾞｨﾚｸﾄﾘにある関数test(階層は../sum)を使う(初ｲﾝｽﾄｰﾙ時)ためにまずやる事は",
           "yarn init",
           "165_14/94.3-05.ﾗｲﾌﾞﾗﾘ_yarn。使う側の作業。1.使うﾃﾞｨﾚｸﾄﾘへ移動→2.ﾗｲﾌﾞﾗﾘの設定ﾌｧｲﾙを作成(今回の問題)→3.(yarn add ../sum)package.jsonのdependenciesにtestを追加するとﾗｲﾌﾞﾗﾘ使える→4.const s=require(\'sum\');console.log(s.test)で使える"];

qa[164] = ["ﾗｲﾌﾞﾗﾘを作る側で自作関数test(階層は../sum)を他のﾌﾟﾛｼﾞｪｸﾄで使える設定のｺｰﾄﾞは",
           "module.exports = {test:test};",
           "164_14/94.3-05.ﾗｲﾌﾞﾗﾘ_yarn。自作側の作業。{左側testは呼出名:右側testは実行されるﾌﾟﾛｸﾞﾗﾑ}。左右同じなら{test}のみで省略可能"];

qa[163] = ["yarnでpackage.jsonを作るｺﾏﾝﾄﾞは",
           "yarn init",
           "163_14/94.3-05.ﾗｲﾌﾞﾗﾘ_ﾛｰｶﾙｲﾝｽﾄｰﾙは、1.関数作るﾃﾞｨﾚｸﾄﾘへ移動→2.ﾗｲﾌﾞﾗﾘの設定ﾌｧｲﾙを作成(今回の問題)→3.ﾌｧｲﾙを作成しmodule.exports{test}。作る側も使う側もyarn initは必要です。"];

qa[171] = ["for分で配列kenMap=[長崎:[1,2,3],熊本:[4,5,6]]を全て回す記述は",
           "for (let [key,date] of kenMap);",
           "171_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_for-of構文。MapやArrayの中身をofの前の変数に順番に代入する。添字を使わない時に便利"];

qa[170] = ["for分で配列array=[1,2,3]を全て回す記述は",
           "for (let date of array);",
           "170_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_for-of構文。MapやArrayの中身をofの前の変数に順番に代入する。添字を使わない時に便利"];

qa[162] = ["配列で初期化が必要な理由は",
           "undefinedでは代入時にｴﾗｰになるため",
           "162_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_nullにすると配列でも利用可能"];

qa[161] = ["nodeでrlｵﾌﾞｼﾞｪｸﾄのlineｲﾍﾞﾝﾄを全て読込んだ後に走らせるｺｰﾄﾞは",
           "rl.on(\'close\', ( ) => { });",
           "161_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_"];

qa[161] = ["nodeでrlｵﾌﾞｼﾞｪｸﾄのlineｲﾍﾞﾝﾄを発生させるｺｰﾄﾞは",
           "rl.on(\'line\', lineString => {console.log(lineString);});",
           "161_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_lineｲﾍﾞﾝﾄは1行ずつ処理。配列が10あれば1行目~10行目までﾙｰﾌﾟのように繰り返す"];

qa[160] = ["nodeでconst fs=require(\'fs\') const readline=require(\'readline\') → const rs=fs.createReadStream(\'./test\');の後にconst rl = readline.createInterface({input\: rs, output\:{} })。その後にﾛｸﾞを表示するｺｰﾄﾞは",
           "rl.on(\'line\', lineString => {console.log(lineString); ",
           "160_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_linestringは引数。node.jsに登録されたﾓｼﾞｭｰﾙで覚えるｺｰﾄﾞではない"];

qa[159] = ["nodeでconst fs=require(\'fs\') const readline=require(\'readline\') → const rs=fs.createReadStream(\'./test\');後にreadlineﾓｼﾞｭｰﾙにtestﾌｧｲﾙを設定するｺｰﾄﾞは",
           "const rl = readline.createInterface({input\: rs, output\:{} }); ",
           "159_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_{inputとoutput}の枠は必須につき、outputをしない時は{}空の記述をする"];

qa[158] = ["nodeでconst fs=require(\'fs\')後にtestﾌｧｲﾙを読込む状態にｾｯﾄするｺｰﾄﾞは",
           "const rs = fs.createReadStream(\'./test\'); ",
           "158_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_creatReadStreamがｾｯﾄするｺﾏﾝﾄﾞ"];

qa[157] = ["nodeでﾌｧｲﾙを1行ずつ読込むためのﾓｼﾞｭｰﾙは",
           "readline",
           "157_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_rd = require(\'readline\'))。()内のreadline(ﾘｰﾄﾞﾗｲﾝ)ﾓｼﾞｭｰﾙをrequireでﾒﾓﾘに読込み無駄なく使えるようにする"];

qa[156] = ["nodeでﾌｧｲﾙを扱うためのﾓｼﾞｭｰﾙは",
           "fs",
           "156_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_(例fs = require(\'fs\'))。()内のfs(ﾌｧｲﾙｼｽﾃﾑ)=FileSystemﾓｼﾞｭｰﾙをrequireでﾒﾓﾘに読込み無駄なく使えるようにする"];

qa[155] = ["gitでﾘﾓｰﾄのﾌﾞﾗﾝﾁaをﾛｰｶﾙで同名のﾌﾞﾗﾝﾁにして同時にﾁｪｯｸｱｳﾄするｺﾏﾝﾄﾞは",
           "git checkout a",
           "155_14/94.3-04.集計処理を行うﾌﾟﾛｸﾞﾗﾑ_本来はgit branch a →git checkout a だが、省略可能"];

qa[154] = ["ES6で利用できるMapの値を取得するｺｰﾄﾞは",
           "etoMap.set(key,value);",
           "154_14/94.3-03.ｱﾙｺﾞﾘｽﾞﾑの改善_連想配列。(例value etoMap.get(key,「1」や「子」など))で取得可能"];

qa[153] = ["ES6で利用できるMapを定義するｺｰﾄﾞは",
           "let etoMap = new Map();",
           "153_14/94.3-03.ｱﾙｺﾞﾘｽﾞﾑの改善_連想配列。添字を「ｷｰ(key)」と呼び、数字も利用可能。(例etoMap(\"子\",\'mouse\') 例caleMap(1,\'January\')"];

qa[152] = ["ｺﾏﾝﾄﾞﾗｲﾝで計算中のﾌﾟﾛｸﾞﾗﾑを停止させる入力は",
           "CTRL+C",
           "152_14/94.3-03.ｱﾙｺﾞﾘｽﾞﾑの改善_"];

qa[151] = ["Nodeをｲﾝｽﾄｰﾙすると出来ることは",
           "nodeｺﾏﾝﾄﾞを使える",
           "151_14/94.3-02.Node.js_Node.jsはjavaScriptを実行できる環境でﾌﾟﾛｸﾞﾗﾑ言語ではない。Nodeをｲﾝｽﾄｰﾙするとnodeｺﾏﾝﾄﾞを使えるようになる"];

qa[106] = ["javaScriptのif文でif(a){}を実行するとどうなる？",
          "Uncaught ReferenceError: a is not defined",
          "106_38/94.3-02.Node.js_truthy(ﾄｩﾙｰｼｰ)な値なら実行される。aが変数であり定義されていないというｴﾗｰ。\"a\"であれば文字列となり実行される"];

qa[105] = ["truthyな値で正しいのは",
          "if文でtrueで実行される",
          "105_38/94.3-02.Node.js_反対はfalsy(ﾌｫｰﾙｼｰ)な値で6種類。それ以外はtruthy(ﾄｩﾙｰｼｰ)な値。false,0,&quot;&quot;（1 文字も含まれていない文字列(string)）,null,undefined,NaN"];

qa[104] = ["nodeでｺﾏﾝﾄﾞﾗｲﾝ引数の指定あればnumberに代入。なければ0を代入するｺｰﾄﾞは",
          "const number = process.argv[2] || 0;",
          "104_38/94.3-02.Node.js_(ｺﾏﾝﾄﾞ引数例node app.js 100)なら100が引数。「||」→選択的代入(例「null || 0 =0」「1||0」=1)を使っている。添字が[2]の理由は、[0]番はnodeｺﾏﾝﾄﾞのﾌｧｲﾙのﾊﾟｽが入り、<br>[1]番には実行しているﾌﾟﾛｸﾞﾗﾑのﾌｧｲﾙのﾊﾟｽが入る決まりあり。"];

qa[103] = ["Node.js がﾃﾞﾌｫﾙﾄで提供してくれる、ｺﾏﾝﾄﾞﾗｲﾝの引数が入った配列は",
          "process.argv",
          "103_38/94.3-02.Node.js_"];

qa[102] = ["REPL(ﾚﾌﾟﾙ)を終了するｺﾏﾝﾄﾞは",
          "CTRL+cを2回押す",
          "102_38/94.3-02.Node.js_"];

qa[101] = ["入力したｺｰﾄﾞをその場で実行して、結果を表示するﾂｰﾙは",
          "REPL(ﾚﾌﾟﾙ)= Read-Eval-Print Loop(ﾘｰﾄﾞ ｲｰﾊﾞﾙ ﾌﾟﾘﾝﾄ ﾙｰﾌﾟ)",
          "101_38/94.3-02.Node.js_"];

qa[100] = ["Node.js のﾊﾞｰｼﾞｮﾝを管理するﾂｰﾙは",
          "nvm=Node Version Manager",
          "100_38/94.3-02.Node.js_"];

qa[99] = ["JavaScript でﾌﾟﾛｸﾞﾗﾐﾝｸﾞすることのできる、ｻｰﾊﾞｰｻｲﾄﾞ向けのﾌﾟﾗｯﾄﾎｰﾑは",
          "Node.js(ﾉｰﾄﾞｼﾞｪｲｴｽ)",
          "99_38/94.3-02.Node.js_Node.jsはjavaScriptを実行できる環境でﾌﾟﾛｸﾞﾗﾑ言語ではない。Nodeをｲﾝｽﾄｰﾙするとnodeｺﾏﾝﾄﾞを使えるようになる"];

qa[150] = ["gitで差分を表示させるｺﾏﾝﾄﾞは",
           "git diff 変更前ﾌｧｲﾙ..変更後ﾌｧｲﾙ",
           "150_14/94.2-17.ｿｰｼｬﾙｺｰﾃﾞｨﾝｸﾞ_(例git diff fix/remove-ni)追加行が+。削除行が-。使える"];

qa[149] = ["gitで違うﾌﾞﾗﾝﾁﾌｧｲﾙのｺﾐｯﾄによりｺﾝﾌﾘｸﾄが生じたときの対処は",
           "手動でｺｰﾄﾞ修正",
           "149_14/94.2-17.ｿｰｼｬﾙｺｰﾃﾞｨﾝｸﾞ_(例git commit -am \" \")手動で修正後に再度ｺﾐｯﾄが必要です"];

qa[148] = ["gitで、一度addしたﾌｧｲﾙをcommitに含めるｵﾌﾟｼｮﾝは",
           "-am",
           "148_14/94.2-17.ｿｰｼｬﾙｺｰﾃﾞｨﾝｸﾞ_一度、git add してｺﾐｯﾄしたことがあるﾌｧｲﾙは再度のaddは不要"];

qa[147] = ["gitで他のﾌﾞﾗﾝﾁの情報を取込むｺﾏﾝﾄﾞは",
           "git merge ﾌﾞﾗﾝﾁ名",
           "147_14/94.2-16.Gitのﾌﾞﾗﾝﾁ_(例git merge gh-pages)。取込む側のﾌﾞﾗﾝﾁにﾁｪｯｸｱｳﾄしておき、取込むﾌﾞﾗﾝﾁをﾏｰｼﾞする"];

qa[146] = ["gitでｶﾚﾝﾄﾃﾞｨﾚｸﾄﾘにある全てのﾌｧｲﾙをｲﾝﾃﾞｯｸｽに追加するｺﾏﾝﾄﾞは",
           "git add .",
           "146_14/94.2-16.Gitのﾌﾞﾗﾝﾁ_ﾊﾟｽにおける「.」と同じもので全て指定している"];

qa[145] = ["gitでﾌﾞﾗﾝﾁを切り替えるｺﾏﾝﾄﾞは",
           "git checkout ﾌﾞﾗﾝﾁ名 ",
           "145_14/94.2-16.Gitのﾌﾞﾗﾝﾁ_checkout(ﾁｪｯｸｱｳﾄ)=ﾌﾞﾗﾝﾁを切替え使用できる状況にすること"];

qa[144] = ["GitHub Pagesに自動でWabﾍﾟｰｼﾞとしてﾘﾎﾟｼﾞﾄﾘが公開される特別なﾌﾞﾗﾝﾁ名は",
           "gh-pages",
           "144_14/94.2-16.Gitのﾌﾞﾗﾝﾁ_GitHub Pagesはｿﾌﾄｳｪｱｴﾝｼﾞﾆｱが自己開発ﾌﾟﾛﾀﾞｸﾄ一覧を紹介するﾎﾟｰﾄﾌｫﾘｵｻｲﾄをこれでよく公開する"];

qa[143] = ["gitでﾘﾎﾟｼﾞﾄﾘのﾌﾞﾗﾝﾁを一覧表示するｺﾏﾝﾄﾞは",
           "git branch",
           "143_14/94.2-16.Gitのﾌﾞﾗﾝﾁ_(例* main)。現在利用のﾌﾞﾗﾝﾁには*(ｱｽﾀﾘｽｸ)がついている。新しくﾌﾞﾗﾝﾁ作るならgit branch (例gh-pagesなど)"];

qa[142] = ["gitで特定のｺﾐｯﾄの状態に別の名前をつけるｺﾏﾝﾄﾞは",
           "git tag 名前",
           "142_14/94.2-15.GitHubへのpush_ﾀｸﾞはGitHubで特定のﾊﾞｰｼﾞｮﾝのｿﾌﾄｳｪｱをﾘﾘｰｽするために使われる"];

qa[141] = ["gitでｲﾝﾃﾞｯｸｽにｽﾃｰｼﾞﾝｸﾞされていないﾌｧｲﾙ達のある場所は",
           "ﾜｰｸﾂﾘｰ",
           "141_14/94.2-15.GitHubへのpush_ｲﾝﾃﾞｯｸｽ=commit前のｾｯﾄされたもの。ﾜｰｸﾂﾘｰ=add前のもの。"];

qa[140] = ["ﾛｰｶﾙのﾘﾎﾟｼﾞﾄﾘをﾘﾓｰﾄに適用させるｺﾏﾝﾄﾞは",
           "git push -u origin main",
           "140_14/94.2-15.GitHubへのpush_add→commit→pushまで必要。-uは、originとmainを省略したときに自動でこの値にするためのもの"];

qa[139] = ["GitHub上でGitのﾘﾎﾟｼﾞﾄﾘを置くために最初にやることは",
           "ﾘﾎﾟｼﾞﾄﾘを作成する",
           "139_14/94.2-15.GitHubへのpush_作成後にgit側でｺﾋﾟｰしたｺﾏﾝﾄﾞでpush。ﾘﾎﾟｼﾞﾄﾘの名前がGitHubとGitで違っていてもpushは可能だが一緒がよさそう。"];

qa[138] = ["Gitでﾘﾎﾟｼﾞﾄﾘにｺﾐｯﾄした内容を表示するｺﾏﾝﾄﾞは",
           "git log",
           "138_14/94.2-15.GitHubへのpush_"];

qa[137] = ["Gitでﾘﾎﾟｼﾞﾄﾘにｺﾐｯﾄするｺﾏﾝﾄﾞは",
           "git commit -m \"はじめてのｺﾐｯﾄ\"",
           "137_14/94.2-15.GitHubへのpush_ｺﾐｯﾄｺﾒﾝﾄが必ず必要。-m(ﾒｯｾｰｼﾞ)はｵﾌﾟｼｮﾝ。ないとｺﾐｯﾄできない"];

qa[136] = ["Gitでﾌｧｲﾙをﾘﾎﾟｼﾞﾄﾘにｺﾐｯﾄする前の変更情報登録ｺﾏﾝﾄﾞは",
           "git add ﾌｧｲﾙ名 ",
           "136_14/94.2-15.GitHubへのpush_(例git add README.md)。ｾｯﾄすることをｽﾃｰｼﾞﾝｸﾞといいgit statusでｺﾐｯﾄ前の一覧を確認できる"];

qa[135] = ["GitHubでﾄｯﾌﾟﾍﾟｰｼﾞに自動的に表示される特別なﾌｧｲﾙは",
           "README.md",
           "135_14/94.2-15.GitHubへのpush_"];

qa[134] = ["Gitで空のﾘﾎﾟｼﾞﾄﾘを作成するｺﾏﾝﾄﾞは",
           "git init",
           "134_14/94.2-15.GitHubへのpush_mkdirでﾃﾞｨﾚｸﾄﾘ作成し、そこをｶﾚﾝﾄﾃﾞｨﾚｸﾄﾘとしてgit initｺﾏﾝﾄﾞで作成される"];

qa[133] = ["Gitのｺﾏﾝﾄﾞでgit pull originのoriginは何のこと",
           "GitHub上のﾘﾎﾟｼﾞﾄﾘ",
           "133_14/94.2-14.GitとGitHubの連携_gitのｺﾏﾝﾄﾞはgitを最初に入力しその後ろにｻﾌﾞｺﾏﾝﾄﾞ(この例だと pull）を入力。さらにその後ろへ引数を与える仕組"];

qa[132] = ["GitにGitHubの最新のﾘﾎﾟｼﾞﾄﾘの変更を受取るｺﾏﾝﾄﾞは",
           "git pull origin",
           "132_14/94.2-14.GitとGitHubの連携_ﾛｰｶﾙﾘﾎﾟｼﾞﾄﾘのﾃﾞｨﾚｸﾄﾘ内で実行が必要。最新であれば、「Already up-to-date.」(すでに最新ですよ)が表示される"];

qa[131] = ["GitHubからcloneしたﾘﾎﾟｼﾞﾄﾘは",
           "ﾛｰｶﾙﾘﾎﾟｼﾞﾄﾘ",
           "131_14/94.2-14.GitとGitHubの連携_自分のﾏｼﾝのことをﾛｰｶﾙ。外部にあるﾏｼﾝをﾘﾓｰﾄという。今回はGitHubがﾘﾓｰﾄとなる"];

qa[130] = ["GitHubのﾘﾎﾟｼﾞﾄﾘをｺﾋﾟｰし、Linux内にGitHubのようなﾘﾎﾟｼﾞﾄﾘを作ることを",
           "clone(ｸﾛｰﾝ)",
           "130_14/94.2-14.GitとGitHubの連携_(ｺﾏﾝﾄﾞ例 GIt clone url)(urlは、codeのSSHのｱﾄﾞﾚｽをｺﾋﾟｰする)GitHubではFork。ただ、Forkの中で内部的にはcloneが行われている"];

qa[129] = ["GitHubにGitの連携のために登録するのは",
           "公開鍵",
           "129_14/94.2-14.GitとGitHubの連携_(例ubuntu@ubuntu-bionic)titleには公開鍵が作成されたﾕｰｻﾞｰ名@ﾏｼﾝ名をつける"];

qa[128] = ["SSHで公開鍵認証を行うｺﾏﾝﾄﾞは",
           "ssh-keygen",
           "128_14/94.2-14.GitとGitHubの連携_公開鍵が漏れると悪意ある変更や削除をされてしまうリスクがある"];

qa[127] = ["Gitでﾊﾞｰｼﾞｮﾝ管理のために使われているものはなに",
           "ｺﾒﾝﾄのﾊｯｼｭ",
           "127_14/94.2-14.GitとGitHubの連携_(例d879a30)16進数の値"];

qa[126] = ["基本的なHTMLを簡略化して書く方法は",
           "Markdown記法",
           "126_14/94.2-12.GitHubでWebｻｲﾄ公開_興味のある方は「Markdown GitHub 記法」などで検索"];

qa[125] = ["GitHubでｲｼｭｰをｸﾛｰｽﾞするｺﾒﾝﾄにつける16進数の7桁情報は",
           "ｺﾐｯﾄのﾊｯｼｭ",
           "125_14/94.2-12.GitHubでWebｻｲﾄ公開_「d879a30 で対応されました」自分自身のｺﾐｯﾄﾛｸﾞから見れるｺﾐｯﾄのﾊｯｼｭ値を使う。また、ﾊｯｼｭ値と日本語の間には必ず空白が必要"];

qa[124] = ["GitHubでﾘﾎﾟｼﾞﾄﾘのﾌｧｲﾙへｲｼｭｰの要望に対応した時のｺﾒﾝﾄの記載ﾙｰﾙは",
           "#●● ××に対応しました。",
           "124_14/94.2-12.ｲｼｭｰ管理とwikiによるﾄﾞｷｭﾒﾝﾄ作成_#1(数字)はGitHub における番号を指す ID。ｲｼｭ-作成の都度自動で通し番号が振られる"];

qa[123] = ["GitHubでﾘﾎﾟｼﾞﾄﾘに変更を加えることは",
           "Commit(ｺﾐｯﾄ)",
           "123_14/94.2-12.GitHubでWebｻｲﾄ公開_"];

qa[122] = ["URLの表示のみでなく、SNSやﾁｬｯﾄｱﾌﾟﾘ上に画像入れて目立たせる技術は",
           "OGP=Open Graph Protocol(ｵｰﾌﾟﾝｸﾞﾗﾌﾌﾟﾛﾄｺﾙ)",
           "122_14/94.2-12.GitHubでWebｻｲﾄ公開_"];

qa[121] = ["GitHubでﾘﾎﾟｼﾞﾄﾘに新しくﾌｧｲﾙを追加する方法は",
           "Add File → Create new file",
           "121_14/94.2-12.GitHubでWebｻｲﾄ公開_Name your file に「ﾌｧｲﾙ名.拡張子」。[Edit new file]にｺｰﾄﾞを記述する"];

qa[120] = ["GitHubでﾘﾎﾟｼﾞﾄﾘをｺﾋﾟｰして自分のﾘﾎﾟｼﾞﾄﾘを作る方法は",
           "Fork(ﾌｫｰｸ)",
           "120_14/94.2-12.GitHubでWebｻｲﾄ公開_"];

qa[119] = ["GitHubでｿﾌﾄｳｪｱ開発においてｿｰｽｺｰﾄﾞや開発に関わるﾃﾞｰﾀをまとめて管理するためのﾃﾞｰﾀ置き場は",
           "ﾘﾎﾞｼﾞﾄﾘ",
           "119_14/94.2-12.GitHubでWebｻｲﾄ公開_GitHub では何かしらのｿﾌﾄｳｪｱを作る際、必ずﾘﾎﾟｼﾞﾄﾘを利用します"];

qa[118] = ["自動的に何かしらの処理を行ってくれるﾌﾟﾛｸﾞﾗﾑは",
           "bot(ﾎﾞｯﾄ)",
           "118_14/94.2-11.通信をするﾎﾞｯﾄの開発_ﾆｺ生ﾗﾝｷﾝｸﾞなど、決められた日時に定期的に取得するﾌﾟﾛｾｽではcron(ｸﾛﾝ)を使う"];

qa[117] = ["ｲﾝﾀｰﾈｯﾄでﾃﾞｰﾀ通信の安全性を高めるためのﾌﾟﾛﾄｺﾙは", 
           "TCP(ﾃｨｰｼｰﾋﾟｰ)=Transmission Control Protocol",
           "117_14/94.2-10.HTTP通信_日本語訳で「伝送制御ﾌﾟﾛﾄｺﾙ」。IPによるﾊﾟｹｯﾄを使った通信で、相手の通信状況を確認して接続を確立し、ﾃﾞｰﾀの転送が終わったら切断するというﾌﾟﾛﾄｺﾙ"];

qa[116] = ["0~255 の整数 4 つで構成された 32bitｻｲｽﾞのｲﾝﾀｰﾈｯﾄ上の住所は",
           "IPｱﾄﾞﾚｽ",
           "116_14/94.2-10.HTTP通信_IP=Internet Protocol(ｲﾝﾀｰﾈｯﾄﾌﾟﾛﾄｺﾙ）の略称。IPｱﾄﾞﾚｽはｲﾝﾀｰﾈｯﾄの契約における住所。また Protocol は通信をする際の取り決めとなる規則のこと"];

qa[115] = ["HTTPをSSLやTLSという方式で暗号し通信を行うﾌﾟﾛﾄｺﾙは",
          "HTTPS",
          "115_14/94.2-10.HTTP通信_Webｻｲﾄで流出していけないﾊﾟｽﾜｰﾄﾞ情報や、個人情報をやりとりするﾍﾟｰｼﾞではHTTPSで通信する必要があります。ﾃﾞﾌｫﾙﾄのﾎﾟｰﾄは、443番が利用されている"];

qa[114] = ["HTMLなどのHyperTextを受け渡すためのTCP/IP上で実現するﾌﾟﾛﾄｺﾙの1つは",
          "HTTP",
          "114_14/94.2-10.HTTP通信_"];

qa[113] = ["id属性testからhtml要素を取得し変数aaに代入するｺｰﾄﾞは",
           "let aa = document.getElementById('test');",
           "113_14/94.1-14.CSSを使ったﾌﾟﾛｸﾞﾗﾐﾝｸﾞ_使い方はcssならaa.styleｵﾌﾞｪｸﾄ内にﾌﾞﾛﾊﾟﾃｨと値をいれる。(id属性のhtml要素.css要素ならstyle.ﾌﾟﾛﾊﾞﾃｨ名='値';) 使用例_aa.style.transform = 'rotateX(60deg)'; "];

qa[112] = ["cssでclass名testを指定するｺｰﾄﾞは",
           ".test｛｝",
           "112_14/94.1-14.CSSを使ったﾌﾟﾛｸﾞﾗﾐﾝｸﾞ_.(ﾄﾞｯﾄ) の後にclass名(例_test)です。id属性はｵﾝﾘｰﾜﾝで使う。"];

qa[111] = ["htmlでcssで見た目を一括指定できる属性は",
           "class", 
           "111_14/94.1-14.CSSを使ったﾌﾟﾛｸﾞﾗﾐﾝｸﾞ_class 属性は、その名前にもとづいて HTMLﾀｸﾞを分類する機能"];

qa[110] = ["Webｻｲﾄでcssのﾌﾟﾛﾊﾟﾃｨをみる方法は",
           "HTMLで右ｸﾘｯｸして検証ﾎﾞﾀﾝ",
           "110_13/94.1-13.はじめてのCSS_ﾃﾞﾍﾞﾛｯﾊﾟｰﾂｰﾙが開き、要素にどのような CSS が適用されているのかを表示させることができます。"];

qa[109] = ["htmlで別ﾌｧｲﾙのtest.cssを読み込ませる記述は",
          "&lt; link rel = &quot;stylesheet&quot;href = &quot;test.css&quot; / &gt;",
          "109_13/94.1-13.はじめてのCSS_link:css と入力して Tab を押すことで、 link 要素のﾃﾝﾌﾟﾚｰﾄが利用可能。PCで作成するなら外部ﾘﾝｸを使うのが効率よいのでstyle要素は使わない"];

qa[108] = ["htmlの中で、見た目を設定するcssの要素は",
          "&lt;style&gt; &lt;/style&gt;",
          "108_13/94.1-13.はじめてのCSS_head 要素の中に style 要素を記述します。ただ、外部ﾘﾝｸを使うのが一般的なのでﾋﾟﾝﾎﾟｲﾝﾄでの利用や外部ﾘﾝｸを使えないｶﾞﾗｹｰｻｲﾄなどで使われる"];

qa[107] = ["ﾌﾟﾛｸﾞﾗﾐﾝｸﾞで一時的にﾃﾞｨﾚｸﾄﾘやﾌｧｲﾙを使用するときによく使われる単語は",
          "tmp=temporary(ﾃﾝﾎﾟﾗﾘｰ)",
          "107"];

qa[98] = ["HTTP通信の説明は",
          "HTTPはﾃﾞﾌｫﾙﾄで80番ﾎﾟｰﾄが利用される",
          "98_30/94.02-10.HTTP通信_"];

qa[97] = ["Tmuxの説明は",
          "仮想端末ｿﾌﾄと呼ばれるｿﾌﾄｳｪｱ",
          "97_28/94.02-09.ｻｰﾊﾞｰとｸﾗｲｱﾝﾄ_"];

qa[96] = ["ﾊﾟｹｯﾄを発行しﾈｯﾄﾜｰｸ疎通を確認したいﾎｽﾄに対し調査できるｺﾏﾝﾄﾞは",
          "ping(ﾋﾟﾝｸﾞ)",
          "96_28/94.02-08.通信とネットワーク_ping www.google.co.jp など。第一引数にIPｱﾄﾞﾚｽ又はﾎｽﾄ名。応答時間の調査にも使えるもの"];
 
qa[95] = ["ｼｪﾙの説明は",
          "OSの中核となる部分(ｶｰﾈﾙ)を包み込み、OSとの対話をする機能をもつ",
          "95_27/94.02-07.ｼｪﾙﾌﾟﾛｸﾞﾗﾐﾝｸﾞ_"];
    
qa[94] = ["指定された文字列を標準出力に表示するｺﾏﾝﾄﾞは？",
          "echo(ｴｺｰ)",
          "94_27/94.02-07.ｼｪﾙﾌﾟﾛｸﾞﾗﾐﾝｸﾞ_「echo ｺﾒﾝﾄ入力下さい」。「こだま・反響」。第一引数で与えられた文字列をそのまま標準出力に出力するｺﾏﾝﾄﾞです"];
  
qa[93] = ["Vimで文字をﾌｧｲﾙに入力するためｲﾝｻｰﾄﾓｰﾄﾞに変更する入力文字は",
          "i",
          "93_26/94.02-06.vi_"];
    
qa[92] = ["Vimでﾌｧｲﾙに保存するための入力文字は",
          ":w",
          "92_26/94.02-06.vi_"];
    
qa[91] = ["ｺﾏﾝﾄﾞﾌﾟﾛｾｽの入出力について正しいものを選択して下さい",
          "標準入力を受け取り、標準出力と標準ｴﾗｰ出力を出す",
          "91_25/94.02-05.標準出力_"];

qa[90] = ["CLI(ｼｰｴﾙｱｲ)のｴﾃﾞｨﾀは",
          "Vim(ｳﾞｨﾑ)",
          "90_25/94.02-06.vi_SLIのｴﾃﾞｨﾀなら、SSH(ｴｽｴｽｴｲﾁ)を介して地球の裏側のﾏｼﾝをﾌﾟﾛｸﾞﾗﾐﾝｸﾞ可能。なお、GUI(ｼﾞｰﾕｰｱｲ)のｴﾃﾞｨﾀはVSCodeです。"];
  
qa[89] = ["標準入力の中に指定した単語が含まれるかを判定して出力するLinuxｺﾏﾝﾄﾞは",
          "grep(ｸﾞﾚｯﾌﾟ)",
          "89_25/94.02-05.標準出力_ﾌｧｲﾙや標準入力の中から特定の単語を検索する。第一引数に「含まれるかどうかを判定する単語」、第二引数に「検索したいﾌｧｲﾙ名」。標準入力あれば第二引数省略可能"];
    
qa[88] = ["Linuxのｺﾏﾝﾄﾞで引数について合っているものは",
         "ｺﾏﾝﾄﾞにもｵﾌﾟｼｮﾝにも引数はある",
         "88_24/94.02-05.標準出力_"];

qa[87] = ["Linuxのｺﾏﾝﾄﾞでﾘﾀﾞｲﾚｸﾄ(標準出力をﾌｧｲﾙに書き出す)の処理は",
         "ls > tmp/ls-output.txt",
         "87_24/94.02-05.標準出力_"];

qa[86] = ["Linuxのｺﾏﾝﾄﾞでﾘﾀﾞｲﾚｸﾄ(標準出力をﾌｧｲﾙに追記して書き出す)のｺｰﾄﾞは",
         "ls 2>> tmp/ls-output.txt",
         "86_24/94.02-05.標準出力_"];

qa[85] = ["Linuxのｺﾏﾝﾄﾞでﾘﾀﾞｲﾚｸﾄ(標準ｴﾗｰ出力をﾌｧｲﾙに書き出す)のｺｰﾄﾞは",
         "ls 2> tmp/ls-output.txt",
         "85_24/94.02-05.標準出力_"];

qa[84] = ["Linuxのｺﾏﾝﾄﾞでﾘﾀﾞｲﾚｸﾄ(標準出力と標準ｴﾗｰ出力をﾌｧｲﾙに書き出す)のｺｰﾄﾞは",
         "ls 2>&1 tmp/ls-output.txt",
         "84_24/94.02-05.標準出力_"];

qa[82] = ["Linuxのｺﾏﾝﾄﾞで現在のﾃﾞｨﾚｸﾄﾘを絶対ﾊﾟｽで表示するものは",
          "pwd=Print Working Directory(ﾌﾟﾘﾝﾄ･ﾜｰｷﾝｸﾞ･ﾃﾞｨﾚｸﾄﾘ)",
          "82_23/94.02-04.ファイル操作_絶対ﾊﾟｽ=ﾙｰﾄﾃﾞｨﾚｸﾄﾘからのﾊﾟｽ。相対ﾊﾟｽ=ｶﾚﾝﾄﾃﾞｨﾚｸﾄﾘからのﾊﾟｽ"];

qa[81] = ["Linuxのｺﾏﾝﾄﾞでﾌｧｲﾙﾃﾞｨﾚｸﾄﾘを検索するものは",
          "find",
          "81_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[80] = ["ﾙｰﾄﾃﾞｨﾚｸﾄﾘからのﾊﾟｽは",
          "絶対パス /home/vagrant",
          "80_23/94.02-04.ファイル操作_ﾙｰﾄﾃﾞｨﾚｸﾄﾘ=一番上の階層"];

qa[79] = ["現在のﾃﾞｨﾚｸﾄﾘ(ｶﾚﾝﾄﾃﾞｨﾚｸﾄﾘ)からのパスは",
          "相対パス ./vagrant(又は ./を省略可能)",
          "79_23/94.02-04.ファイル操作_"];

qa[78] = ["Linuxで現在のﾃﾞｨﾚｸﾄﾘのﾌｧｲﾙとﾃﾞｨﾚｸﾄﾘを表示ｺﾏﾝﾄﾞは",
          "ls=List(ﾘｽﾄ)",
          "78_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[77] = ["Linuxで現在のﾃﾞｨﾚｸﾄﾘから別のﾃﾞｨﾚｸﾄﾘに移動するｺﾏﾝﾄﾞは",
          "cd=Change Directory(ﾁｪﾝｼﾞﾃﾞｨﾚｸﾄﾘ)",
          "77_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[76] = ["Linuxで１つ上のﾃﾞｨﾚｸﾄﾘに移動するｺﾏﾝﾄﾞは",
          "cd ../",
          "76_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[75] = ["Linuxでﾙｰﾄﾃﾞｨﾚｸﾄﾘに移動するｺﾏﾝﾄﾞは",
          "cd /",
          "75_23/94.02-04.ﾌｧｲﾙ操作_ﾙｰﾄﾃﾞｨﾚｸﾄﾘ=一番上の階層"];

qa[74] = ["Linuxでﾎｰﾑﾃﾞｨﾚｸﾄﾘに移動するｺﾏﾝﾄﾞは",
          "cd ~",
          "74_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[73] = ["Linuxのｺﾏﾝﾄﾞで入力を助けてくれる便利な機能は",
          "Tab補完",
          "73_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[72] = ["Linuxでﾃﾞｨﾚｸﾄﾘを作成するｺﾏﾝﾄﾞは",
          "mkdir=MaKe Directory(ﾒｲｸﾃﾞｨﾚｸﾄﾘ)",
          "72_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[71] = ["Linuxでtest.textﾌｧｲﾙを削除するｺﾏﾝﾄﾞは",
          "rm test.text",
          "71_23/94.02-04.ﾌｧｲﾙ操作_rm=ReMove(ﾘﾑｰﾌﾞ)。ｵﾌﾟｼｮﾝなし=ﾌｧｲﾙのみ。ﾃﾞｨﾚｸﾄﾘ含む削除は-rのｵﾌﾟｼｮﾝが必要"];

qa[70] = ["Linuxでdirﾃﾞｨﾚｸﾄﾘを削除するｺﾏﾝﾄﾞは",
          "rm -r dir",
          "70_23/94.02-04.ﾌｧｲﾙ操作_rm=ReMove(ﾘﾑｰﾌﾞ)。ｵﾌﾟｼｮﾝなし=ﾌｧｲﾙのみ。ﾃﾞｨﾚｸﾄﾘ含む削除は-rのｵﾌﾟｼｮﾝが必要"];

qa[69] = ["Linuxでdirﾃﾞｨﾚｸﾄﾘをｺﾋﾟｰするｺﾏﾝﾄﾞは",
          "cp -r dir dir_copy",
          "69_23/94.02-04.ﾌｧｲﾙ操作_cp=Copy(ｺﾋﾟｰ)。ﾌｧｲﾙのみはｵﾌﾟｼｮﾝ不要。同じﾃﾞｨﾚｸﾄﾘ内なら(cd test test_1)。違うﾃﾞｨﾚｸﾄﾘへｺﾋﾟｰなら(cd test dir/test_1)。cpの後にｺﾋﾟｰ元→ｺﾋﾟｰ後の名称"];

qa[68] = ["Linuxで中身を含めてﾃﾞｨﾚｸﾄﾘをｺﾋﾟｰするｺﾏﾝﾄﾞは",
          "cp -r",
          "68_23/94.02-04.ﾌｧｲﾙ操作_cp=Copy(ｺﾋﾟｰ)。ﾌｧｲﾙのみはｵﾌﾟｼｮﾝ不要。同じﾃﾞｨﾚｸﾄﾘ内なら(cd test test_1)。違うﾃﾞｨﾚｸﾄﾘへｺﾋﾟｰなら(cd test dir/test_1)。cpの後にｺﾋﾟｰ元→ｺﾋﾟｰ後の名称"];

qa[67] = ["Linuxでﾌｧｲﾙtest1.textをtest2.textに名称変更するｺﾏﾝﾄﾞは",
          "mv test1.text test2.text",
          "67_23/94.02-04.ﾌｧｲﾙ操作_mv=Move(ﾑｰﾌﾞ)。移動と名称変更。ﾃﾞｨﾚｸﾄﾘも同じﾙｰﾙ。複数のﾌｧｲﾙをﾃﾞｨﾚｸﾄﾘに移動させるならmv test1.text test2.text dir(ﾃﾞｨﾚｸﾄﾘ名)。元ﾌｧｲﾙを残したいならcpｺﾏﾝﾄﾞ"];

qa[66] = ["Linuxでtest1.textﾌｧｲﾙをtest2.textに名称変更しつつdir1ﾃﾞｨﾚｸﾄﾘに移動させるｺﾏﾝﾄﾞは",
          "mv test1.text dir1/test2.text",
          "66_23/94.02-04.ﾌｧｲﾙ操作_mv=Move(ﾑｰﾌﾞ)。移動と名称変更。ﾃﾞｨﾚｸﾄﾘも同じﾙｰﾙ。複数のﾌｧｲﾙをﾃﾞｨﾚｸﾄﾘに移動させるならmv test1.text test2.text dir(ﾃﾞｨﾚｸﾄﾘ名)。元ﾌｧｲﾙを残したいならcpｺﾏﾝﾄﾞ"];

qa[65] = ["Linuxｺﾏﾝﾄﾞmv ﾃﾞｨﾚｸﾄﾘb ﾃﾞｨﾚｸﾄﾘc で移動先にﾃﾞｨﾚｸﾄﾘcがある場合は",
         "ﾃﾞｨﾚｸﾄﾘcの中にﾃﾞｨﾚｸﾄﾘbが移動する",
         "65_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[63] = ["Linuxのｺﾏﾝﾄﾞmv tmp/c workspace/tmpで移動先ﾃﾞｨﾚｸﾄﾘがworkspace/tmpの場合は",
         "ﾃﾞｨﾚｸﾄﾘworkspace/tmpの中にﾃﾞｨﾚｸﾄﾘcが移動する",
         "63_23/94.02-04.ﾌｧｲﾙ操作_"];

qa[62] = ["Vagrantfileの説明は",
         "vagrantのｺﾝﾌｨｸﾞﾌｧｲﾙ(設定ﾌｧｲﾙ)",
         "62_23/94.02-04.ファイル操作_Vagrantを起動する際に必要なものでRubyにより作られている。"];

qa[61] = ["ｺﾝﾋﾟｭｰﾀで作業台にあたるのは",
          "ﾒﾓﾘ",
          "61_22/94.02-03.ｺﾝﾋﾟｭｰﾀの構成要素_"];

qa[60] = ["Linuxの特徴で間違っているのは",
          "WindowsやmacOSと異なり、ﾏｳｽは使えずｺﾏﾝﾄﾞでしか操作できない",
          "60_21/94.02-02.LinuxというOS_"];

qa[59] = ["ｺﾝｿｰﾙなどの文字だけによるﾕｰｻﾞｰｲﾝﾀﾌｪｰｽの名称は",
          "CLI(ｼｰｴﾙｱｲ)=Command Line Interface（ｺﾏﾝﾄﾞﾗｲﾝｲﾝﾀｰﾌｪｰｽ）",
          "59_21/94.02-02.LinuxというOS_対照的なものはGUI(ｼﾞｰﾕｰｱｲ)=Graphical User Interface(ｸﾞﾗﾌｨｶﾙ ﾕｰｻﾞｰｲﾝﾀﾌｪｰｽ)。ちなみに、ｲﾝﾀﾌｪｰｽは境界。ﾕｰｻﾞｰｲﾝﾀﾌｪｰｽは利用者側からの入力画面。"];
  
qa[58] = ["ｼｽﾃﾑ全体を管理するｿﾌﾄｳｪｱの名称は",
          "OS=Operating System(ｵﾍﾟﾚｰﾃｨﾝｸﾞ･ｼｽﾃﾑ)",
          "58_21/94.02-02.LinuxというOS_"];
    
qa[57] = ["OSの中核部分のことを指す言葉は",
          "Linux Kernel(ﾘﾅｯｸｽ ｶｰﾈﾙ)",
          "57_21/94.02-02.LinuxというOS_車の部品で言えばｴﾝｼﾞﾝ｡ｶｰﾈﾙはとても重要な部分だが、それだけでは実用的なOSとして動かないため、ｿﾌﾄｳｪｱの組合せが必要になる"];
    
qa[56] = ["Linux Kernel(ﾘﾅｯｸｽｶｰﾈﾙ)と各種ｿﾌﾄｳｪｱの「おすすめｾｯﾄ」は",
          "Linuxﾃﾞｨｽﾄﾘﾋﾞｭｰｼｮﾝ",
          "56_21/94.02-02.LinuxというOS_"];
    
qa[55] = ["ｻｰﾊﾞｰ向けLinuxﾃﾞｨｽﾄﾘﾋﾞｭｰｼｮﾝは",
          "Ubuntu(ｳﾌﾞﾝﾄｩ)",
          "55_21/94.02-02.LinuxというOS_"];
                
qa[54] = ["英語で管理者は",
          "Administrator(ｱﾄﾞﾐﾆｽﾄﾚｰﾀｰ)",
          "54_21/94.02-02.LinuxというOS_"];
    
qa[53] = ["ｺﾏﾝﾄﾞや他のｱﾌﾟﾘｹｰｼｮﾝを呼び出すことができる特別な環境は",
          "ｺﾝｿｰﾙ",
          "53_21/94.02-02.LinuxというOS_"];
    
qa[52] = ["ﾕｰｻﾞのﾎｰﾑﾃﾞｨﾚｸﾄﾘを示す記号は",
          "~(ﾁﾙﾀﾞ)",
          "52_21/94.02-02.LinuxというOS_"];
    
qa[51] = ["現在開いているﾃﾞｨﾚｸﾄﾘは",
          "Current Directory(ｶﾚﾝﾄﾃﾞｨﾚｸﾄﾘ)",
          "51_21/94.02-02.LinuxというOS_"];
    
qa[50] = ["仮想環境(仮想ﾏｼﾝ)は",
          "VM=Virtual Machine(ｳﾞｧｰﾁｬﾙﾏｼｰﾝ)",
          "50_21/94.02-02.LinuxというOS_"];
    
qa[49] = ["最新版ではなく特定のﾊﾞｰｼﾞｮﾝを指定してｲﾝｽﾄｰﾙしたり、複数のﾊﾞｰｼﾞｮﾝを同時に使い分けたりする面倒なことを簡単に実行してくれるﾂｰﾙは",
          "ﾊﾟｯｹｰｼﾞﾏﾈｰｼﾞｬ",
          "49_21/94.02-02.LinuxというOS_"];
    
qa[48] = ["ﾊﾟｯｹｰｼﾞﾏﾈｰｼﾞｬは",
          "Chocolatey(ﾁｮｺﾗﾃｨｰ)",
          "48_21/94.02-02.LinuxというOS_Windowsでは Chocolatey(ﾁｮｺﾗﾃｨｰ)、macOSではHomebrew(ﾎｰﾑﾌﾞﾘｭｰ)"];
     
qa[47] = ["仮想環境を構築するためのｿﾌﾄは",
          "VirtualBox(ﾊﾞｰﾁｬﾙﾎﾞｯｸｽ)",
          "47_21/94.02-02.LinuxというOS_今使っているPC上にもう1つのPCを仮想的に作り上げるしくみ"];
    
qa[46] = ["VirtualBox(ﾊﾞｰﾁｬﾙﾎﾞｯｸｽ)の操作を簡単にしてくれるﾂｰﾙは",
          "Vagrant(ﾍﾞｲｸﾞﾗﾝﾄ)",
          "46_21/94.02-02.LinuxというOS_"];
    
qa[45] = ["仮想ﾏｼﾝを起動させるVagrantへのｺﾏﾝﾄﾞは",
          "vagrant up",
          "45_21/94.02-02.LinuxというOS_Windowsの場合、PowerShellを通じてVagrantが命令を受けると、VirtualBoxにさらに詳細な命令を行いVirtualBoxを起動させる"];
        
qa[44] = ["仮想ﾏｼﾝを閉じるVagrantへのｺﾏﾝﾄﾞは",
          "Vagrant halt",
          "44_21/94.02-02.LinuxというOS_Windowsの場合、PowerShellを通じてVagrantが命令を受けると、VirtualBoxにさらに詳細な命令を行いVirtualBoxを終了させる"];
    
qa[43] = ["Linux を操作する通信ﾌﾟﾛﾄｺﾙの名称は",
          "SSH(ｴｽ･ｴｽ･ｴｲﾁ)=Secure Shell",
          "43_21/94.02-02.LinuxというOS_暗号や認証の技術を利用して安全に、外部のｺﾝﾋﾟｭｰﾀと通信する仕組み"];

qa[42] = ["ｶﾞｰﾄﾞ句は",
          "if(userName.length === 0){retren:}",
          "42_17/94.1-17.診断機能の組込み_"];

qa[41] = ["ｱﾛｰ関数の記述は",
          "= () =>{ }",
          "41_17/94.1-17.診断機能の組込み"];

qa[40] = ["bodyﾀｸﾞの色を変更するcssのｺｰﾄﾞは",
          "body{color:#ffffff;}",
          "40_13/94.1-13.はじめてのCSS_ｾﾚｸﾀ(例_body)波ｶｯｺ({),ﾌﾟﾛﾊﾟﾃｨ(例_color),ｺﾛﾝ(:)で区切り,値(例_#ffffff),値の後にｾﾐｺﾛﾝ(;)で最後に波ｶｯｺ(})で閉じます。この書き方は JavaScript のｵﾌﾞｼﾞｪｸﾄに似ていますが、 ﾌﾟﾛﾊﾟﾃｨの値のあとにｶﾝﾏではなくｾﾐｺﾛﾝが必要です。"];

qa[39] = ["ｵﾌﾞｼﾞｪｸﾄ、test={array:[11,22,33]};の22を呼び出すｺｰﾄﾞは",
           "test.array[1];",
           "39_12/94.1-12.JavaScriptのｵﾌﾞｼﾞｪｸﾄ_ｵﾌﾞｼﾞｪｸﾄの中に配列を入れることも可能。ｵﾌﾞｼﾞｪｸﾄ名(例_test)、ﾄﾞｯﾄ(.)、ﾌﾟﾛﾊﾟﾃｨ名(例_array)、値の添字をｶｷﾞｶｯｺ([])で指定。"];

qa[38] = ["ｵﾌﾞｼﾞｪｸﾄ、test={array:[11,22,33]};の22を呼び出すｺｰﾄﾞは",
           "test.array[1];",
           "38_12/94.1-12.JavaScriptのｵﾌﾞｼﾞｪｸﾄ_ｵﾌﾞｼﾞｪｸﾄの中に配列を入れることも可能。ｵﾌﾞｼﾞｪｸﾄ名(例_test)、ﾄﾞｯﾄ(.)、ﾌﾟﾛﾊﾟﾃｨ名(例_array)、値の添字をｶｷﾞｶｯｺ([])で指定。"];

qa[37] = ["JavaScriptのｵﾌﾞｼﾞｪｸﾄlet age ={namber:5};のnamberの値を10に変更するｺｰﾄﾞは",
           "age.namber=10;",
           "37_12/94.1-12.JavaScriptのｵﾌﾞｼﾞｪｸﾄ_ｵﾌﾞｼﾞｪｸﾄ名(例_age)＋ﾄﾞｯﾄ(.)＋ﾌﾟﾛﾊﾟﾃｨ名(例_namber)にｲｺｰﾙ(=)で代入できる"];

qa[36] = ["JavaScriptのｵﾌﾞｼﾞｪｸﾄlet age ={namber:5};をｺﾝｿｰﾙﾛｸﾞに表示させるｺｰﾄﾞは",
           "console.log(age.namber);",
           "36_12/94.1-12.JavaScriptのｵﾌﾞｼﾞｪｸﾄ_左ｶｯｺ(＋ｵﾌﾞｼﾞｪｸﾄ名(例_age)＋ﾄﾞｯﾄ(.)＋ﾌﾟﾛﾊﾟﾃｨ名(例_namber)＋右ｶｯｺ)でくくる"];

qa[35] = ["JavaScriptのｵﾌﾞｼﾞｪｸﾄで値を省略できる前提は",
           "ﾌﾟﾛﾊﾟﾃｨ名と同じ変数が存在する",
           "35_12/94.1-12.JavaScriptのｵﾌﾞｼﾞｪｸﾄ_ﾌﾟﾛﾊﾟﾃｨ名(例_age)と同じ名前の変数が先に定義されているためｵﾌﾞｼﾞｪｸﾄのﾌﾟﾛﾊﾟﾃｨageの値は30となる。<br>let age = 30;<br> let student = {name:'hiro',age};"];

qa[34] = ["名前と値をｾｯﾄでもてる値の名称は",
           "ｵﾌﾞｼﾞｪｸﾄ=object",
           "34_12/94.1-12.JavaScriptのｵﾌﾞｼﾞｪｸﾄ_\u4f8b_let student = {name:'hiro',age:20};\u3000\u6ce2\uff76\uff6f\uff7a({)\u3067\u59cb\u307e\u308a\u3001\uff8c\uff9f\uff9b\uff8a\uff9f\uff83\uff68\u540d(\u4f8b_name)\u306e\u6b21\u306b\uff7a\uff9b\uff9d(:)\u3001\u5024(\u4f8b_'hiro')\u3002\uff76\uff9d\uff8f(,)\u3067\u533a\u5207\u3063\u3066\u5897\u3084\u3059\u3002\u6700\u5f8c\u306b\u6ce2\uff76\uff6f\uff7a(})\u3067\u304f\u304f\u308b"];

qa[33] = ["function test(r) {return r*r};のｺｰﾄﾞの保守性を上げる記述は",
           "function test(r) {les anser = r*r; return anser; };",
           "33_11/94.1-11.JavaScriptの関数_どんな意味の値が戻り値になるのかを明確にした方が読みやすく,ﾐｽ防止のためにも、戻り値に変数を宣言する癖を付けておくほうが望ましい"];

qa[32] = ["ﾃﾝﾌﾟﾚｰﾄﾘﾃﾗﾙは",
           "`\u751f\u307e\u308c\u3066\u304b\u3089${seconds}\u79d2\u7d4c\u904e\u3002`;",
           "32_11/94.1-11.JavaScriptの関数_ﾊﾞｯｸｺｰﾄ(`)で文字列を囲むことでﾄﾞﾙ記号($)と波ｶｯｺ({)を使って変数を埋め込むことができます。使わないものは、'\u751f\u307e\u308c\u3066\u304b\u3089' + seconds + '\u79d2\u7d4c\u904e\u3002';"];

qa[31] = ["JavaScriptで関数に渡すことができる値の名称は",
           "引数",
           "31_11/94.1-11.JavaScriptの関数_関数名()のかっこの中のことです"];

qa[30] = ["JavaScriptの関数の戻り値の記述は",
           "return",
           "30_11/94.1-11.JavaScriptの関数_"];

qa[29] = ["ｺﾝｿｰﾙでｿｰｽを改行するには",
           "shift＋Enter",
           "29_11/94.1-11.JavaScriptの関数_実行はEnterです"];

qa[28] = ["最初からﾌﾞﾗｳｻﾞで使える関数は",
           "組込み関数",
           "28_11/94.1-11.JavaScriptの関数_alert、 log、 write、などなど"];

qa[27] = ["htmlにarray=[11,22]を pタグで表示するJavaScriptの記述は",
           "document.write(&#039;&lt;p&gt;&#039; + array + &#039;&lt;/p&gt;&#039;);",
           "27_10/94.1-10.JavaScriptのｺﾚｸｼｮﾝ_ｼﾝｸﾞﾙｺｰﾃｰｼｮﾝでpﾀｸﾞを囲み、+ array + で繋げる。HTMLに表示されるのは11,22となる"];

qa[26] = ["let array=[11]で要素22を配列に追加する記述は",
          "array.push(22);",
          "26_10/94.1-10.JavaScriptのｺﾚｸｼｮﾝ_配列名.push();で追加します。array=[11,22]となる"];

qa[25] = ["let array=[11]で配列0を呼び出す記述は",
          "array[0];",
          "25_10/94.1-10.JavaScriptのｺﾚｸｼｮﾝ_実行結果は11。配列名[]で呼び出します"];

qa[24] = ["値などの要素の集まりは",
          "ｺﾚｸｼｮﾝ",
          "24_10/94.1-10.JavaScriptのｺﾚｸｼｮﾝ_JavaScript における基本的なｺﾚｸｼｮﾝが配列=Array(ｱﾚｲ)です"];

qa[23] = ["JavaScriptのfor文の記述は",
          "for(var i=0; i <= 10; i++){aleat(i);}",
          "23_09/94.01-09.JavaScriptのﾙｰﾌﾟ_for(初期化式(例_var i=0)、ｾﾐｺﾛﾝ(;)、条件式(例_i <= 10)、ｾﾐｺﾛﾝ(;)、変化式(例_i++))に波ｶｯｺで{繰り返したい処理(例_aleat(i);)}。最後にｾﾐｺﾛﾝ(;)はいらない"];

qa[22] = ["論理において、AまたはBで、AかつBでないものは",
          "排他的論理和",
          "22_08/94.1-08.JavaScriptで論理を扱う_英語ではXOR(ｴｯｸｽｵｱ)。論理和から論理積を引いたもの。例：ﾋﾞｰﾌorﾁｷﾝで両方は選べません"];

qa[21] = ["論理において、AかつBの名称は",
          "論理積",
          "21_08/94.1-08.JavaScriptで論理を扱う_英語ではAND(ｱﾝﾄﾞ)。論理演算子は「&&」。日本語で他の表現は「で」。例：会員かつ20才以上。会員で20才以上(20>=年齢 && 会員)"];

qa[20] = ["論理において、AまたはBの名称は", 
          "論理和",
          "20_08/94.1-08.JavaScriptで論理を扱う_英語ではOR(ｵｱ)。論理演算子は「｜｜」。例：黒又は青のﾍﾟﾝで書いて下さい(黒||青)"];

qa[19] = ["値と値を比較することで真偽値にできる演算子は",
          "比較演算子", 
          "19_08/94.1-08.JavaScriptで論理を扱う_真偽値は、true(ﾄｩﾙｰ) or false(ﾌｫﾙｽ)のこと。大(>)小(<)に加え、等しい(===)、異なる(!==)、以下(<=)、以上(>=)。ｲｺｰﾙは右側に注意。"];

qa[18] = ["JavaScriptでｺﾒﾝﾄにする記号は",
          "//",
          "18_07/94.01-07.JavaScriptでの計算_無視される特性を利用してｺﾒﾝﾄｱｳﾄに使われる。数行にわたるｺﾒﾝﾄは /** */ でも可能です"];

qa[17] = ["JavaScriptで変数の定義は",
          "var 変数名",
          "17_07/94.01-07.JavaScriptでの計算_var x = 10; 参考_var=variable(ﾊﾞﾘｱﾌﾞﾙ=変数)の略です。変数にはどんな値も代入可能。一文字である必要ないが、基本は英語が望ましい。"];

qa[16] = ["1/3など割り切れない値の名称は",
          "浮動小数点数",
          "16_07/94.01-07.JavaScriptでの計算_ﾌﾟﾛｸﾞﾗﾑ上、誤差が生まれる。多くのﾌﾟﾛｸﾞﾗﾑで、IEEE754という規格に従い定まっている。名前の由来は、小数点の位置が定まらないこと"];

qa[15] = ["JavaScriptでhtmlｺｰﾄﾞを文字列にする記号の名称は",
          "ｴｽｹｰﾌﾟｼｰｹﾝｽ",
          "15_07/94.01-07.JavaScriptでの計算_JavaScriptでは&#12288;&#47;&#12288;(ﾊﾞｯｸｽﾗｯｼｭ)。日本語環境のASCII(ｱｽｷｰ)の文字ｺｰﾄﾞが同じ92番目の記号となる￥ﾏｰｸとなるﾒｰｶｰもある"];

qa[14] = ["HTMLの中で実行手順を考慮して&lt;script src=&quot;test.js&quot;&gt;&lt;/script&gt;の記述を行うのに最適な場所は",
          "&lt;body&gt;&lt;/body&gt;の一番最後",
          "14_07/94.1-07.JavaScriptでの計算_JavaScriptは手続き型ﾌﾟﾛｸﾞﾗﾐﾝｸﾞ言語。上から順にｺｰﾄﾞを読むため、定義されていないHTMLのIDやJavaScriptの変数を定義前に使うとｴﾗｰとなる"];

qa[13] = ["HTMLの中でtest.jsを呼び出すｺｰﾄﾞは",
          "&lt;script src=&quot;test.js&quot;&gt; &lt;/script&gt;",
          "13_06/94.1-06.はじめてのJavaScript_"];

qa[12] = ["JavaScriptで●●●参照ｴﾗｰのﾒｯｾｰｼﾞは",
          "Uncaught ReferenceError: ●●● is not defined   test.js:1",
          "12_06/94.01-06.はじめてのJavaScript_uncaught(ｱﾝｺｳﾄ=捉えられない)。referenceError(ﾘﾌｧﾚﾝｽｴﾗｰ=参照ｴﾗｰ)。define(ﾃﾞｨﾌｧｲﾝ=定義する)"];

qa[11] = ["JavaScriptでｴﾗｰが表示される場所は",
          "Chromeのﾃﾞﾍﾞﾛｯﾊﾟｰﾂｰﾙのconsoleﾀﾌﾞ",
          "11_06/94.01-06.はじめてのJavaScript_"];

qa[10] = ["HTMLでJavaScriptを使うﾀｸﾞは",
          "&lt;script src=&quot; &quot;&gt; &lt;/script&gt;",
          "10_06/94.01-06.はじめてのJavaScript_src属性=source(ｿｰｽ=出典・由来)"];

qa[9] = ["HTMLでYouTube動画の埋め込みに使われるﾀｸﾞは",
          "iframeﾀｸﾞ（ｱｲﾌﾚｰﾑ）",
          "9_05/94.01-05.HTMLで作る自己紹介ﾍﾟｰｼﾞ_"];

qa[8] = ["JavaScriptで文字列表示の記号は",
          "ｼﾝｸﾞﾙｺｰﾃｰｼｮﾝ(&#039;)",
          "8_04/94.01-04.さまざまなHTMLﾀｸﾞ_ﾀﾞﾌﾞﾙｺｰﾃｰｼｮﾝ(&quot;)も同様に使えます。ただ、HTML内で利用されることが多いので、干渉を避けるためJavaScript 内ではｼﾝｸﾞﾙｺｰﾃｰｼｮﾝ(&#039;)を利用すること"];

qa[7] = ["VScodeでulﾀｸﾞにliﾀｸﾞを6個入れるTabｷｰ入力は",
          "ul>li*6",
          "7_04/94.01-04.さまざまなHTMLﾀｸﾞ_ul>(li>ul>li*2)*2 など。まとめてﾘｽﾄを作成することができます。"];

qa[6] = ["HTMLのﾘｽﾄﾀｸﾞは",
          "ulﾀｸﾞ=unordered list(ｱﾝｵｰﾀﾞｰﾄﾞ･ﾘｽﾄ)、olﾀｸﾞ=ordered list（ｵｰﾀﾞｰﾄﾞ･ﾘｽﾄ）",
          "6_04/94.01-04.さまざまなHTMLﾀｸﾞ_&lt;ul&gt; &lt;li&gt; &lt;/li&gt; &lt;/ul&gt;&nbsp; 参考_li(ｴﾙｱｲ)=list item(ﾘｽﾄｱｲﾃﾑ=項目)。liﾀｸﾞはulﾀｸﾞやolﾀｸﾞの子要素にしなければならない。"];

qa[5] = ["HTMLの画像ﾀｸﾞは",
          "imgﾀｸﾞ=image(ｲﾒｰｼﾞ)",
          "5_04/94.01-04.さまざまなHTMLﾀｸﾞ_&lt;img src=&rdquo;https:～～ &rdquo; alt=&rdquo; &rdquo; /&gt;。参考_src属性=source(ｿｰｽ=出典・由来)  alt属性=alternate(ｵﾙﾀﾈｰﾄ=代替)"];

qa[77] = ["&lt;a href=&quot;https:～～ &quot;&gt; &lt;/a&gt;の要素と属性は",
          "aタグ=要素 href=属性",
          "77_04/94.01-04.さまざまなHTMLﾀｸﾞ_href(ｴｲﾁﾚﾌ)属性は、ﾊｲﾊﾟｰﾘﾝｸのﾘﾝｸ先をaﾀｸﾞ要素に情報を与えることができます。<br>なお、href属性はｳｪﾌﾞｻｲﾄへﾘﾝｸ。src属性はﾌｧｲﾙの場所を指定します"];

qa[76] = ["HTMLのﾘﾝｸﾀｸﾞは",
          "aﾀｸﾞ=anchor(ｱﾝｶｰ=船のいかり)",
          "76_04/94.01-04.さまざまなHTMLﾀｸﾞ_&lt;a href=&quot;https:～～&quot; &gt; &lt;/a&gt; 参考_href(ｴｲﾁﾚﾌ)=hypertext reference(ﾊｲﾊﾟｰﾃｷｽﾄﾘﾌｧﾚﾝｽ=ﾊｲﾊﾟｰﾃｷｽﾄの参照)"];

qa[4] = ["HTMLの段落ﾀｸﾞは",
          "pﾀｸﾞ=paragraph(ﾊﾟﾗｸﾞﾗﾌ=段落)",
          "4_04/94.01-04.さまざまなHTMLﾀｸﾞ_&lt;p&gt;&nbsp;&lt;/p&gt; 参考_&lt;br&gt;ﾀｸﾞを文面に入れることで改行できます。br=break(ﾌﾞﾚｰｸ=改行)"];

qa[2] = ["HTMLの正式名称は",
          "Hyper Text Markup Language(ﾊｲﾊﾟｰﾃｷｽﾄﾏｰｸｱｯﾌﾟﾗﾝｹﾞｰｼﾞ)",
          "2_03/94.01-03.はじめてのHTML_文字や画像などを組み合わせ、文書を表示するための言語(ﾏｰｸｱｯﾌﾟﾗﾝｹﾞｰｼﾞ)の一種。なお、ﾏｰｸｱｯﾌﾟとは機械が読めるように目印をつけることです"];

qa[1] = ["VSCodeのﾌﾟﾛｼﾞｪｸﾄﾌｫﾙﾀﾞごとに開く機能を使うための階層としてｽﾑｰｽﾞなものは",
          "C:\Users\名前\workspace\js-grammar",
          "1_02/94.01-02.ﾌﾟﾛｸﾞﾗﾐﾝｸﾞ体験をしてみよう_VScodeで「ﾌｫﾙﾀﾞｰを開く」から上記を指定して「ﾌｫﾙﾀﾞｰの選択」すると左側に「ｴｸｽﾌﾟﾛｰﾗｰ」が出てくる"];

qa[0] = ["ﾕｰｻﾞｰﾌｫﾙﾀﾞを指定するｱﾄﾞﾚｽﾊﾞｰの入力は",
          "C:\Users",
          "0_02/94.01-02.ﾌﾟﾛｸﾞﾗﾐﾝｸﾞ体験をしてみよう_"];
