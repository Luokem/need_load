//引入express中间件
var express = require('express');
var apiServer = express();

var bodyParser = require('body-parser')
apiServer.use(bodyParser.urlencoded({extended: false}))
apiServer.use(bodyParser.json())

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
apiServer.use(express.static('./'));


apiServer.use(function(req, res,next){
res.header("Access-Control-Allow-Origin", req.headers.origin || '*');//指定可以http://localhost:8080,不能单单是*
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header('Access-Control-Allow-Credentials','true')
if(req.method == 'OPTIONS') {

//让options请求快速返回

res.sendStatus(200);

} else {

next();

}
}) 


var categoryDatas1 = [
                {
                    text: '中西药品/感冒用药',
                    key:  '0001',
                    code: '0001'
                },
                {
                    text: '中西药品/呼吸系统',
                    key:  '0001',
                    code: '0001'
                },
                {
                    text: '中西药品/心脑血管',
                    key:  '0001',
                    code: '0001'
                },
                {
                    text: '中西药品/儿科用药/感冒',
                    key:  '0001',
                    code: '0001'
                },
                {
                    text: '中西药品/中西药品/感冒用药',
                    key:  '0001',
                    code: '0001'
                },
                {
                    text: '营养保健/中西药品/感冒用药',
                    key:  '00020',
                    code: '0002'
                },
                {
                    text: '营养保健/中西药品/感冒用药',
                    key:  '00021',
                    code: '0002'
                },
                {
                    text: '营养保健/中西药品/感冒用药',
                    key:  '00022',
                    code: '0002'
                },
                {
                    text: '生物制药/中西药品',
                    key:  '00030',
                    code: '0003'
                },
                {
                    text: '生物制药/中西药品/感冒用药',
                    key:  '00031',
                    code: '0003'
                },
                {
                    text: '生物制药/中西药品/感冒用药2',
                    key:  '00032',
                    code: '0003'
                },
                {
                    text: '医疗器械/中西药品/感冒用药1',
                    key:  '00040',
                    code: '0004'
                },
                {
                    text: '医疗器械/中西药品/感冒用药2',
                    key:  '00041',
                    code: '0004'
                },
                {
                    text: '医疗器械/中西药品/感冒用药2',
                    key:  '00042',
                    code: '0004'
                },
                {
                    text: '医疗器械/中西药品/感冒用药2',
                    key:  '00043',
                    code: '0004'
                }

            ];
        var categoryDatas2 = [
            {
                text: '中西药品/感冒用药222',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/呼吸系统222',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/心脑血管2222',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/儿科用药/感冒222',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/中西药品/感冒用药222',
                key:  '0001',
                code: '0001'
            },
            {
                text: '营养保健/中西药品/感冒用药222',
                key:  '00020',
                code: '0002'
            },
            {
                text: '营养保健/中西药品/感冒用药222',
                key:  '00021',
                code: '0002'
            },
            {
                text: '营养保健/中西药品/感冒用药222',
                key:  '00022',
                code: '0002'
            },
            {
                text: '生物制药/中西药品222',
                key:  '00030',
                code: '0003'
            },
            {
                text: '生物制药/中西药品/感冒用药222',
                key:  '00031',
                code: '0003'
            },
            {
                text: '生物制药/中西药品/感冒用药2222',
                key:  '00032',
                code: '0003'
            },
            {
                text: '医疗器械/中西药品/感冒用药1222',
                key:  '00040',
                code: '0004'
            },
            {
                text: '医疗器械/中西药品/感冒用药222',
                key:  '00041',
                code: '0004'
            },
            {
                text: '医疗器械/中西药品/感冒用药222',
                key:  '00042',
                code: '0004'
            },
            {
                text: '医疗器械/中西药品/感冒用药2222',
                key:  '00043',
                code: '0004'
            }

        ]; 
        var categoryDatas3 = [
            {
                text: '中西药品/感冒用药22233',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/呼吸系统222333',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/心脑血管222233',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/儿科用药/感冒22233',
                key:  '0001',
                code: '0001'
            },
            {
                text: '中西药品/中西药品/感冒用药22233',
                key:  '0001',
                code: '0001'
            },
            {
                text: '营养保健/中西药品/感冒用药222',
                key:  '00020',
                code: '0002'
            },
            {
                text: '营养保健/中西药品/感冒用药222',
                key:  '00021',
                code: '0002'
            },
            {
                text: '营养保健/中西药品/感冒用药222',
                key:  '00022',
                code: '0002'
            },
            {
                text: '生物制药/中西药品222',
                key:  '00030',
                code: '0003'
            },
            {
                text: '生物制药/中西药品/感冒用药222',
                key:  '00031',
                code: '0003'
            },
            {
                text: '生物制药/中西药品/感冒用药2222',
                key:  '00032',
                code: '0003'
            },
            {
                text: '医疗器械/中西药品/感冒用药1222',
                key:  '00040',
                code: '0004'
            },
            {
                text: '医疗器械/中西药品/感冒用药222',
                key:  '00041',
                code: '0004'
            },
            {
                text: '医疗器械/中西药品/感冒用药222',
                key:  '00042',
                code: '0004'
            },
            {
                text: '医疗器械/中西药品/感冒用药2222',
                key:  '00043',
                code: '0004'
            }

        ]; 
var one = 1;
apiServer.route('/categoryData')
.post((req,res) => {
	console.log("api server")
    if(one ==1) {
        one++;
        res.json({err: 0, data: categoryDatas1,page:0})
    } 
   else if(one ==2) {
        one++;
        res.json({err: 0,data: categoryDatas2,page:1})
    }else if(one ==3){
        one++;
        res.json({err: 0,data: categoryDatas3,page:2})
    }
    else {
      res.json({err: 0, data: []})  
    }
    
})


//监听端口为3000
var server = apiServer.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});