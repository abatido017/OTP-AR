function _0xda13(_0x532577,_0x14c92b){const _0x43f91c=_0x43f9();return _0xda13=function(_0xda1390,_0x454576){_0xda1390=_0xda1390-0x16b;let _0x59486f=_0x43f91c[_0xda1390];return _0x59486f;},_0xda13(_0x532577,_0x14c92b);}function _0x43f9(){const _0x1490c0=['SELECT\x20*\x20FROM\x20users\x20WHERE\x20userid\x20\x20=\x20?','./db/data.db','delete','permissions','exports','22666GvpIxI','\x20is\x20not\x20in\x20the\x20database.\x20He\x20can\x27t\x20use\x20the\x20bot\x20or\x20any\x20command.','remove','UPDATE\x20users\x20SET\x20permissions\x20=\x20?\x20WHERE\x20userid\x20=\x20?','Upgrade\x20succesfully','37564xrdVcb','**.\x20He\x20can\x20use\x20the\x20bot.','125HcJwle','verbose','27frjxHF','10cOMpxl','DELETE\x20FROM\x20users\x20WHERE\x20userid\x20=\x20?','733424HSTthH','info','add','botuser_rolename','cache','You\x20can\x27t\x20add\x20someone\x20in\x20your\x20database\x20if\x20he\x27s\x20already\x20in.','60gzZIeX','You\x20need\x20to\x20give\x202\x20argument,\x20example\x20:\x20**!user\x20add\x20@example**','59595LphCUJ','member','No\x20information','\x20is\x20not\x20on\x20your\x20server.\x20Or\x20wasn\x27t\x20found.','a\x20normal\x20user','length','365486CgTNoY','command','get','Not\x20possible','Database','admin_rolename','admin','now','run','\x20has\x20been\x20added\x20to\x20the\x20database.','roles','name','User\x20been\x20added','error','You\x20can\x27t\x20delete\x20someone\x20from\x20your\x20database\x20if\x20he\x27s\x20not\x20in.','catch','user','625846QdAPVF','Informations\x20about\x20','101818bCGGCT','Already\x20delete','setadmin','log','find','Bad\x20first\x20argument','args','You\x20didn\x27t\x20mentionned\x20the\x20user,\x20example\x20:\x20**!user\x20add\x20@user**','discriminator','SELECT\x20userid\x20FROM\x20users\x20WHERE\x20userid\x20=\x20?','Need\x20more\x20arguments','24sXjYqE','guild','\x20has\x20been\x20deleted\x20from\x20the\x20database.','\x20is\x20now\x20Admin.\x20He\x20can\x20use\x20the\x20bot\x20as\x20an\x20Admin.\x20If\x20you\x20want\x20to\x20delete\x20him\x20as\x20admin,\x0a\x20type\x20:\x20**!user\x20delete\x20@username**','Already\x20user','4KgbxgX','message','first'];_0x43f9=function(){return _0x1490c0;};return _0x43f9();}const _0x45ea35=_0xda13;(function(_0x49ced5,_0x43ae50){const _0x56221b=_0xda13,_0x4ad201=_0x49ced5();while(!![]){try{const _0x4567e2=-parseInt(_0x56221b(0x16e))/0x1*(parseInt(_0x56221b(0x1a3))/0x2)+parseInt(_0x56221b(0x18a))/0x3+parseInt(_0x56221b(0x17b))/0x4*(parseInt(_0x56221b(0x17d))/0x5)+parseInt(_0x56221b(0x188))/0x6*(-parseInt(_0x56221b(0x176))/0x7)+parseInt(_0x56221b(0x182))/0x8*(parseInt(_0x56221b(0x17f))/0x9)+-parseInt(_0x56221b(0x180))/0xa*(parseInt(_0x56221b(0x190))/0xb)+-parseInt(_0x56221b(0x1ae))/0xc*(parseInt(_0x56221b(0x1a1))/0xd);if(_0x4567e2===_0x43ae50)break;else _0x4ad201['push'](_0x4ad201['shift']());}catch(_0x581705){_0x4ad201['push'](_0x4ad201['shift']());}}}(_0x43f9,0x28134),module[_0x45ea35(0x175)]=function(_0x5b0e59){const _0x4cfc93=_0x45ea35,_0x26773b=require('sqlite3')[_0x4cfc93(0x17e)](),_0x6aa0cd=new _0x26773b[(_0x4cfc93(0x194))](_0x4cfc93(0x172)),_0x4ee2a7=require('../embed'),_0x36cf47=require('../config');if(_0x5b0e59[_0x4cfc93(0x191)]!==_0x4cfc93(0x1a0))return![];if(_0x5b0e59[_0x4cfc93(0x1a9)][_0x4cfc93(0x18f)]!=0x2)return _0x4ee2a7(_0x5b0e59[_0x4cfc93(0x16f)],_0x4cfc93(0x1ad),0xe74c3c,_0x4cfc93(0x189),_0x5b0e59['user']);var _0x207979=_0x5b0e59['args'][0x0];if(_0x207979!='add'&&_0x207979!='delete'&&_0x207979!=_0x4cfc93(0x183)&&_0x207979!=_0x4cfc93(0x1a5))return _0x4ee2a7(_0x5b0e59[_0x4cfc93(0x16f)],_0x4cfc93(0x1a8),0xe74c3c,'The\x20first\x20argument\x20needs\x20to\x20be\x20add/delete/info/setadmin,\x20example\x20:\x20**!user\x20add\x20@example**',_0x5b0e59[_0x4cfc93(0x1a0)]);const _0x17705c=_0x5b0e59['message']['mentions']['users'][_0x4cfc93(0x170)]();if(!_0x17705c)return _0x4ee2a7(_0x5b0e59[_0x4cfc93(0x16f)],'Mention',0xe74c3c,_0x4cfc93(0x1aa),_0x5b0e59['user']);const _0x279772=_0x5b0e59[_0x4cfc93(0x16f)][_0x4cfc93(0x1af)][_0x4cfc93(0x18b)](_0x17705c);if(!_0x279772)return _0x4ee2a7(_0x5b0e59[_0x4cfc93(0x16f)],_0x4cfc93(0x193),0xe74c3c,'@'+_0x17b95c+_0x4cfc93(0x18d),_0x5b0e59[_0x4cfc93(0x1a0)]);const _0x5e0e3b=_0x279772[_0x4cfc93(0x1a0)]['id'],_0x17b95c=_0x279772[_0x4cfc93(0x1a0)]['username'],_0x2c1dd3=_0x279772[_0x4cfc93(0x1a0)][_0x4cfc93(0x1ab)],_0xfa353=Date[_0x4cfc93(0x197)]();_0x6aa0cd[_0x4cfc93(0x192)](_0x4cfc93(0x1ac),[_0x5e0e3b],(_0x5f0fe8,_0x480b34)=>{const _0x53c27a=_0x4cfc93;if(_0x5f0fe8)return console[_0x53c27a(0x19d)](_0x5f0fe8[_0x53c27a(0x16f)]);switch(_0x207979){case _0x53c27a(0x184):if(_0x480b34!=undefined)return _0x4ee2a7(_0x5b0e59[_0x53c27a(0x16f)],_0x53c27a(0x16d),0xe74c3c,_0x53c27a(0x187),_0x5b0e59[_0x53c27a(0x1a0)]);let _0x57cf41=_0x5b0e59[_0x53c27a(0x16f)][_0x53c27a(0x1af)][_0x53c27a(0x19a)][_0x53c27a(0x186)][_0x53c27a(0x1a7)](_0x3a3783=>_0x3a3783[_0x53c27a(0x19b)]===_0x36cf47[_0x53c27a(0x185)]);_0x279772[_0x53c27a(0x19a)][_0x53c27a(0x184)](_0x57cf41)[_0x53c27a(0x19f)](console[_0x53c27a(0x19d)]),_0x6aa0cd['run']('INSERT\x20INTO\x20users(userid,\x20username,\x20discriminator,\x20date,\x20permissions)\x20VALUES(?,\x20?,\x20?,\x20?,\x20?)',[_0x5e0e3b,_0x17b95c,_0x2c1dd3,_0xfa353,0x1],function(_0x2db61d){const _0x3ac379=_0x53c27a;if(_0x2db61d)return console[_0x3ac379(0x1a6)](_0x2db61d[_0x3ac379(0x16f)]);return _0x4ee2a7(_0x5b0e59[_0x3ac379(0x16f)],_0x3ac379(0x19c),0x2ecc71,'@'+_0x17b95c+_0x3ac379(0x199),_0x5b0e59[_0x3ac379(0x1a0)]);});break;case _0x53c27a(0x173):if(_0x480b34==undefined)return _0x4ee2a7(_0x5b0e59['message'],_0x53c27a(0x1a4),0xe74c3c,_0x53c27a(0x19e),_0x5b0e59['user']);let _0x160fd7=_0x5b0e59[_0x53c27a(0x16f)][_0x53c27a(0x1af)][_0x53c27a(0x19a)][_0x53c27a(0x186)][_0x53c27a(0x1a7)](_0x1197c5=>_0x1197c5[_0x53c27a(0x19b)]===_0x36cf47[_0x53c27a(0x185)]);_0x279772['roles']['remove'](_0x160fd7)['catch'](console['error']);let _0x3eaa57=_0x5b0e59[_0x53c27a(0x16f)][_0x53c27a(0x1af)]['roles'][_0x53c27a(0x186)]['find'](_0x4b8e47=>_0x4b8e47['name']===_0x36cf47[_0x53c27a(0x195)]);_0x279772[_0x53c27a(0x19a)]['remove'](_0x3eaa57)[_0x53c27a(0x19f)](console[_0x53c27a(0x19d)]),_0x6aa0cd['run'](_0x53c27a(0x181),[_0x5e0e3b],function(_0x5df953){const _0x508c04=_0x53c27a;if(_0x5df953)return console[_0x508c04(0x1a6)](_0x5df953[_0x508c04(0x16f)]);return _0x4ee2a7(_0x5b0e59[_0x508c04(0x16f)],'User\x20been\x20deleted',0x2ecc71,'@'+_0x17b95c+_0x508c04(0x16b),_0x5b0e59[_0x508c04(0x1a0)]);});break;case'info':_0x6aa0cd[_0x53c27a(0x192)](_0x53c27a(0x171),[_0x5e0e3b],(_0x242c38,_0x54978b)=>{const _0x3bda4f=_0x53c27a;if(_0x242c38)return console['error'](_0x242c38[_0x3bda4f(0x16f)]);if(_0x54978b==undefined)return _0x4ee2a7(_0x5b0e59[_0x3bda4f(0x16f)],_0x3bda4f(0x18c),0xe74c3c,'@'+_0x17b95c+_0x3bda4f(0x177),_0x5b0e59[_0x3bda4f(0x1a0)]);return rank=_0x54978b[_0x3bda4f(0x174)]==0x0?_0x3bda4f(0x196):_0x3bda4f(0x18e),_0x4ee2a7(_0x5b0e59[_0x3bda4f(0x16f)],_0x3bda4f(0x1a2)+_0x17b95c,0x2ecc71,'@'+_0x17b95c+'\x20is\x20**'+rank+_0x3bda4f(0x17c),_0x5b0e59[_0x3bda4f(0x1a0)]);});break;case _0x53c27a(0x1a5):_0x6aa0cd[_0x53c27a(0x192)](_0x53c27a(0x171),[_0x5e0e3b],(_0x13ffdc,_0x361a30)=>{const _0x4298f0=_0x53c27a;if(_0x13ffdc)return console[_0x4298f0(0x19d)](_0x13ffdc[_0x4298f0(0x16f)]);let _0x113224=_0x5b0e59['message']['guild'][_0x4298f0(0x19a)][_0x4298f0(0x186)][_0x4298f0(0x1a7)](_0x3b617f=>_0x3b617f[_0x4298f0(0x19b)]===_0x36cf47['botuser_rolename']);_0x279772['roles'][_0x4298f0(0x178)](_0x113224)['catch'](console[_0x4298f0(0x19d)]);let _0x4411e2=_0x5b0e59[_0x4298f0(0x16f)]['guild'][_0x4298f0(0x19a)][_0x4298f0(0x186)][_0x4298f0(0x1a7)](_0x2ebcf2=>_0x2ebcf2[_0x4298f0(0x19b)]===_0x36cf47['admin_rolename']);_0x279772['roles'][_0x4298f0(0x184)](_0x4411e2)[_0x4298f0(0x19f)](console[_0x4298f0(0x19d)]);if(_0x361a30==undefined)_0x6aa0cd[_0x4298f0(0x198)]('INSERT\x20INTO\x20users(userid,\x20username,\x20discriminator,\x20date,\x20permissions)\x20VALUES(?,\x20?,\x20?,\x20?,\x20?)',[_0x5e0e3b,_0x17b95c,_0x2c1dd3,_0xfa353,0x0],function(_0x59b3c0){const _0x711a49=_0x4298f0;if(_0x59b3c0)return console[_0x711a49(0x1a6)](_0x59b3c0[_0x711a49(0x16f)]);return _0x4ee2a7(_0x5b0e59['message'],'User\x20been\x20added',0x2ecc71,'@'+_0x17b95c+'\x20has\x20been\x20added\x20to\x20the\x20database.',_0x5b0e59[_0x711a49(0x1a0)]);});else{if(_0x361a30[_0x4298f0(0x174)]==0x0)return _0x4ee2a7(_0x5b0e59[_0x4298f0(0x16f)],'Already\x20Admin',0xe74c3c,'@'+_0x17b95c+'\x20is\x20already\x20Admin.\x20If\x20you\x20want\x20to\x20delete\x20him\x20as\x20admin,\x0a\x20type\x20:\x20**!user\x20delete\x20@username**',_0x5b0e59[_0x4298f0(0x1a0)]);else _0x6aa0cd[_0x4298f0(0x198)](_0x4298f0(0x179),[0x0,_0x5e0e3b],function(_0x330779){const _0xd6950b=_0x4298f0;if(_0x330779)return console[_0xd6950b(0x1a6)](_0x330779[_0xd6950b(0x16f)]);return _0x4ee2a7(_0x5b0e59['message'],_0xd6950b(0x17a),0x2ecc71,'@'+_0x17b95c+_0xd6950b(0x16c),_0x5b0e59[_0xd6950b(0x1a0)]);});}});break;default:break;}});});