//IE不适配 20230911
//window.onload = function() {
//    window.banlist = [144,145,146,150,151,201,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,638,639,640,641,642,643,644,645,646,647,648,649,716,717,718,719,720,721];
//}
//适配IE
function banlist(pmid){var banpm=false;switch(pmid){case 144:banpm=true;break;case 145:banpm=true;break;case 146:banpm=true;break;case 150:banpm=true;break;case 151:banpm=true;break;case 201:banpm=true;break;case 243:banpm=true;break;case 244:banpm=true;break;case 245:banpm=true;break;case 249:banpm=true;break;case 250:banpm=true;break;case 251:banpm=true;break;case 377:banpm=true;break;case 378:banpm=true;break;case 379:banpm=true;break;case 380:banpm=true;break;case 381:banpm=true;break;case 382:banpm=true;break;case 383:banpm=true;break;case 384:banpm=true;break;case 385:banpm=true;break;case 386:banpm=true;break;case 480:banpm=true;break;case 481:banpm=true;break;case 482:banpm=true;break;case 483:banpm=true;break;case 484:banpm=true;break;case 485:banpm=true;break;case 486:banpm=true;break;case 487:banpm=true;break;case 488:banpm=true;break;case 489:banpm=true;break;case 490:banpm=true;break;case 491:banpm=true;break;case 492:banpm=true;break;case 493:banpm=true;break;case 494:banpm=true;break;case 638:banpm=true;break;case 639:banpm=true;break;case 640:banpm=true;break;case 641:banpm=true;break;case 642:banpm=true;break;case 643:banpm=true;break;case 644:banpm=true;break;case 645:banpm=true;break;case 646:banpm=true;break;case 647:banpm=true;break;case 648:banpm=true;break;case 649:banpm=true;break;case 716:banpm=true;break;case 717:banpm=true;break;case 718:banpm=true;break;case 719:banpm=true;break;case 720:banpm=true;break;case 721:banpm=true;break}return banpm}
function runids() {
    window.pokemonName = null
    window.pokemonNumber = null
    var pmid = parseInt(document.getElementById("pmid").value);

// Ban精灵：神兽

// IE不适配 20230911
// if (window.banlist.includes(pmid)) {
// 适配IE工程：20230911
if (banlist(pmid) == true) {
    document.getElementById("result").innerHTML = "您提供的精灵序号为限制级宝可梦，请重试";
} else if (pmid > 784) {
    document.getElementById("result").innerHTML = "输入的精灵大于日月普通精灵的精灵序号，请重试";
} else {
    window.pokemonNumber = pmid
    prpl(pmid);
}
}

function rands(){
    window.pokemonName = ""
    window.pokemonNumber = 0
var pmid = parseInt(Math.random() * 784 + 1);

// Ban精灵：神兽

    
// IE不适配 20230911
// if (window.banlist.includes(pmid)) {
// 适配IE工程：20230911
if (banlist(pmid) == true) {
rands();
} else {
window.pokemonNumber = pmid
prpl(pmid);
}
}

function prpl(pmid){
    var PmName="待确认精灵"
    
    // 0906 : 更新软件后门 - 调试模式可以查询802之后的

    window.pokemonNumber = pmid

    // 0906更新结束

    
   switch(pmid){case 1:PmName="妙蛙花";break;case 2:PmName="妙蛙花";break;case 3:PmName="妙蛙花";break;case 4:PmName="喷火龙";break;case 5:PmName="喷火龙";break;case 6:PmName="喷火龙";break;case 7:PmName="水箭龟";break;case 8:PmName="水箭龟";break;case 9:PmName="水箭龟";break;case 10:PmName="巴大蝶";break;case 11:PmName="巴大蝶";break;case 12:PmName="巴大蝶";break;case 13:PmName="大针蜂";break;case 14:PmName="大针蜂";break;case 15:PmName="大针蜂";break;case 16:PmName="大比鸟";break;case 17:PmName="大比鸟";break;case 18:PmName="大比鸟";break;case 19:PmName="拉达";break;case 20:PmName="拉达";break;case 21:PmName="大嘴雀";break;case 22:PmName="大嘴雀";break;case 23:PmName="阿柏怪";break;case 24:PmName="阿柏怪";break;case 25:PmName="雷丘";break;case 26:PmName="雷丘";break;case 27:PmName="穿山王";break;case 28:PmName="穿山王";break;case 29:PmName="尼多后";break;case 30:PmName="尼多后";break;case 31:PmName="尼多后";break;case 32:PmName="尼多王";break;case 33:PmName="尼多王";break;case 34:PmName="尼多王";break;case 35:PmName="皮可西";break;case 36:PmName="皮可西";break;case 37:PmName="九尾";break;case 38:PmName="九尾";break;case 39:PmName="胖可丁";break;case 40:PmName="胖可丁";break;case 41:PmName="叉子蝠";break;case 42:PmName="叉子蝠";break;case 43:PmName="臭臭花";break;case 44:PmName="臭臭花";break;case 45:PmName="美丽花";break;case 46:PmName="派拉斯特";break;case 47:PmName="派拉斯特";break;case 48:PmName="摩鲁蛾";break;case 49:PmName="摩鲁蛾";break;case 50:PmName="三地鼠";break;case 51:PmName="三地鼠";break;case 52:PmName="猫老大";break;case 53:PmName="猫老大";break;case 54:PmName="哥达鸭";break;case 55:PmName="哥达鸭";break;case 56:PmName="火暴猴";break;case 57:PmName="火暴猴";break;case 58:PmName="风速狗";break;case 59:PmName="风速狗";break;case 60:PmName="蚊香君";break;case 61:PmName="蚊香君";break;case 62:PmName="蚊香泳士";break;case 63:PmName="胡地";break;case 64:PmName="胡地";break;case 65:PmName="胡地";break;case 66:PmName="怪力";break;case 67:PmName="怪力";break;case 68:PmName="怪力";break;case 69:PmName="大食花";break;case 70:PmName="大食花";break;case 71:PmName="大食花";break;case 72:PmName="毒刺水母";break;case 73:PmName="毒刺水母";break;case 74:PmName="隆隆岩";break;case 75:PmName="隆隆岩";break;case 76:PmName="隆隆岩";break;case 77:PmName="烈焰马";break;case 78:PmName="烈焰马";break;case 79:PmName="呆壳兽";break;case 80:PmName="呆壳兽";break;case 81:PmName="自爆磁怪";break;case 82:PmName="自爆磁怪";break;case 83:PmName="大葱鸭";break;case 84:PmName="嘟嘟利";break;case 85:PmName="嘟嘟利";break;case 86:PmName="白海狮";break;case 87:PmName="白海狮";break;case 88:PmName="臭臭泥";break;case 89:PmName="臭臭泥";break;case 90:PmName="刺甲贝";break;case 91:PmName="刺甲贝";break;case 92:PmName="耿鬼";break;case 93:PmName="耿鬼";break;case 94:PmName="耿鬼";break;case 95:PmName="大钢蛇";break;case 96:PmName="引梦貘人";break;case 97:PmName="引梦貘人";break;case 98:PmName="巨钳蟹";break;case 99:PmName="巨钳蟹";break;case 100:PmName="顽皮雷弹";break;case 101:PmName="顽皮雷弹";break;case 102:PmName="椰蛋树";break;case 103:PmName="椰蛋树";break;case 104:PmName="嘎啦嘎啦";break;case 105:PmName="嘎啦嘎啦";break;case 106:PmName="飞腿郎";break;case 107:PmName="快拳郎";break;case 108:PmName="大舌舔";break;case 109:PmName="双弹瓦斯";break;case 110:PmName="双弹瓦斯";break;case 111:PmName="超甲狂犀";break;case 112:PmName="超甲狂犀";break;case 113:PmName="幸福蛋";break;case 114:PmName="巨蔓藤";break;case 115:PmName="袋兽";break;case 116:PmName="刺龙王";break;case 117:PmName="刺龙王";break;case 118:PmName="金鱼王";break;case 119:PmName="金鱼王";break;case 120:PmName="宝石海星";break;case 121:PmName="宝石海星";break;case 122:PmName="魔墙人偶";break;case 123:PmName="巨钳螳螂";break;case 124:PmName="迷唇姐";break;case 125:PmName="电击魔兽";break;case 126:PmName="鸭嘴炎兽";break;case 127:PmName="凯罗斯";break;case 128:PmName="肯泰罗";break;case 129:PmName="暴鲤龙";break;case 130:PmName="暴鲤龙";break;case 131:PmName="拉普拉斯";break;case 132:PmName="百变怪";break;case 133:PmName="伊布";break;case 134:PmName="水伊布";break;case 135:PmName="雷伊布";break;case 136:PmName="火伊布";break;case 137:PmName="多边兽乙型";break;case 138:PmName="多刺菊石兽";break;case 139:PmName="多刺菊石兽";break;case 140:PmName="镰刀盔";break;case 141:PmName="镰刀盔";break;case 142:PmName="化石翼龙";break;case 143:PmName="卡比兽";break;case 144:PmName="急冻鸟";break;case 145:PmName="闪电鸟";break;case 146:PmName="火焰鸟";break;case 147:PmName="快龙";break;case 148:PmName="快龙";break;case 149:PmName="快龙";break;case 150:PmName="超梦";break;case 151:PmName="梦幻";break;case 152:PmName="大竺葵";break;case 153:PmName="大竺葵";break;case 154:PmName="大竺葵";break;case 155:PmName="火暴兽";break;case 156:PmName="火暴兽";break;case 157:PmName="火暴兽";break;case 158:PmName="大力鳄";break;case 159:PmName="大力鳄";break;case 160:PmName="大力鳄";break;case 161:PmName="大尾立";break;case 162:PmName="大尾立";break;case 163:PmName="猫头夜鹰";break;case 164:PmName="猫头夜鹰";break;case 165:PmName="安瓢虫";break;case 166:PmName="安瓢虫";break;case 167:PmName="阿利多斯";break;case 168:PmName="阿利多斯";break;case 169:PmName="叉字蝠";break;case 170:PmName="电灯怪";break;case 171:PmName="电灯怪";break;case 172:PmName="皮卡丘";break;case 173:PmName="皮可西";break;case 174:PmName="胖丁";break;case 175:PmName="波克基斯";break;case 176:PmName="波克基斯";break;case 177:PmName="天然鸟";break;case 178:PmName="天然鸟";break;case 179:PmName="电龙";break;case 180:PmName="电龙";break;case 181:PmName="电龙";break;case 182:PmName="美丽花";break;case 183:PmName="玛力露丽";break;case 184:PmName="玛力露丽";break;case 185:PmName="树才怪";break;case 186:PmName="蚊香蛙皇";break;case 187:PmName="毽子棉";break;case 188:PmName="毽子棉";break;case 189:PmName="毽子棉";break;case 190:PmName="双尾怪手";break;case 191:PmName="向日花怪";break;case 192:PmName="向日花怪";break;case 193:PmName="远古巨蜓";break;case 194:PmName="沼王";break;case 195:PmName="沼王";break;case 196:PmName="太阳伊布";break;case 197:PmName="月亮伊布";break;case 198:PmName="乌鸦头头";break;case 199:PmName="呆呆王";break;case 200:PmName="梦妖魔";break;case 201:PmName="未知图腾";break;case 202:PmName="果然翁";break;case 203:PmName="麒麟奇";break;case 204:PmName="榛果球";break;case 205:PmName="佛烈托斯";break;case 206:PmName="土龙弟弟";break;case 207:PmName="天蝎王";break;case 208:PmName="大钢蛇";break;case 209:PmName="布鲁皇";break;case 210:PmName="布鲁皇";break;case 211:PmName="千针鱼";break;case 212:PmName="巨钳螳螂";break;case 213:PmName="壶壶";break;case 214:PmName="赫拉克罗斯";break;case 215:PmName="玛狃拉";break;case 216:PmName="圈圈熊";break;case 217:PmName="圈圈熊";break;case 218:PmName="熔岩蜗牛";break;case 219:PmName="熔岩蜗牛";break;case 220:PmName="长毛猪";break;case 221:PmName="长毛猪";break;case 222:PmName="太阳珊瑚";break;case 223:PmName="章鱼桶";break;case 224:PmName="章鱼桶";break;case 225:PmName="信使鸟";break;case 226:PmName="巨翅飞鱼";break;case 227:PmName="盔甲鸟";break;case 228:PmName="黑鲁加";break;case 229:PmName="黑鲁加";break;case 230:PmName="刺龙王";break;case 231:PmName="顿甲";break;case 232:PmName="顿甲";break;case 233:PmName="多边兽乙型";break;case 234:PmName="惊角鹿";break;case 235:PmName="图图犬";break;case 236:PmName="无畏小子";break;case 237:PmName="战舞郎";break;case 238:PmName="迷唇姐";break;case 239:PmName="电击魔兽";break;case 240:PmName="鸭嘴炎兽";break;case 241:PmName="大奶罐";break;case 242:PmName="幸福蛋";break;case 243:PmName="雷公";break;case 244:PmName="炎帝";break;case 245:PmName="水君";break;case 246:PmName="班基拉斯";break;case 247:PmName="班基拉斯";break;case 248:PmName="班基拉斯";break;case 249:PmName="洛奇亚";break;case 250:PmName="凤王";break;case 251:PmName="时拉比";break;case 252:PmName="蜥蜴王";break;case 253:PmName="蜥蜴王";break;case 254:PmName="蜥蜴王";break;case 255:PmName="火焰鸡";break;case 256:PmName="火焰鸡";break;case 257:PmName="火焰鸡";break;case 258:PmName="巨沼怪";break;case 259:PmName="巨沼怪";break;case 260:PmName="巨沼怪";break;case 261:PmName="大狼犬";break;case 262:PmName="大狼犬";break;case 263:PmName="直冲熊";break;case 264:PmName="直冲熊";break;case 265:PmName="刺尾虫";break;case 266:PmName="狩猎凤蝶";break;case 267:PmName="狩猎凤蝶";break;case 268:PmName="毒粉蛾";break;case 269:PmName="毒粉蛾";break;case 270:PmName="乐天河童";break;case 271:PmName="乐天河童";break;case 272:PmName="乐天河童";break;case 273:PmName="狡猾天狗";break;case 274:PmName="狡猾天狗";break;case 275:PmName="狡猾天狗";break;case 276:PmName="大王燕";break;case 277:PmName="大王燕";break;case 278:PmName="大嘴鸥";break;case 279:PmName="大嘴鸥";break;case 280:PmName="奇鲁莉安";break;case 281:PmName="奇鲁莉安";break;case 282:PmName="沙奈朵";break;case 283:PmName="雨翅蛾";break;case 284:PmName="雨翅蛾";break;case 285:PmName="斗笠菇";break;case 286:PmName="斗笠菇";break;case 287:PmName="请假王";break;case 288:PmName="请假王";break;case 289:PmName="请假王";break;case 290:PmName="土居忍士";break;case 291:PmName="铁面忍者";break;case 292:PmName="脱壳忍者";break;case 293:PmName="爆音怪";break;case 294:PmName="爆音怪";break;case 295:PmName="爆音怪";break;case 296:PmName="铁掌力士";break;case 297:PmName="铁掌力士";break;case 298:PmName="露力丽";break;case 299:PmName="大朝北鼻";break;case 300:PmName="优雅猫";break;case 301:PmName="优雅猫";break;case 302:PmName="勾魂眼";break;case 303:PmName="大嘴娃";break;case 304:PmName="波士可多拉";break;case 305:PmName="波士可多拉";break;case 306:PmName="波士可多拉";break;case 307:PmName="恰雷姆";break;case 308:PmName="恰雷姆";break;case 309:PmName="雷电兽";break;case 310:PmName="雷电兽";break;case 311:PmName="正电拍拍";break;case 312:PmName="负电拍拍";break;case 313:PmName="电萤虫";break;case 314:PmName="甜甜萤";break;case 315:PmName="罗丝雷朵";break;case 316:PmName="吞食兽";break;case 317:PmName="吞食兽";break;case 318:PmName="巨牙鲨";break;case 319:PmName="巨牙鲨";break;case 320:PmName="吼鲸王";break;case 321:PmName="吼鲸王";break;case 322:PmName="喷火驼";break;case 323:PmName="喷火驼";break;case 324:PmName="煤炭龟";break;case 325:PmName="噗噗猪";break;case 326:PmName="噗噗猪";break;case 327:PmName="晃晃斑";break;case 328:PmName="沙漠蜻蜓";break;case 329:PmName="沙漠蜻蜓";break;case 330:PmName="沙漠蜻蜓";break;case 331:PmName="梦歌仙人掌";break;case 332:PmName="梦歌仙人掌";break;case 333:PmName="七夕青鸟";break;case 334:PmName="七夕青鸟";break;case 335:PmName="猫鼬斩";break;case 336:PmName="饭匙蛇";break;case 337:PmName="月石";break;case 338:PmName="太阳岩";break;case 339:PmName="鲶鱼王";break;case 340:PmName="鲶鱼王";break;case 341:PmName="铁螯龙虾";break;case 342:PmName="铁螯龙虾";break;case 343:PmName="念力土偶";break;case 344:PmName="念力土偶";break;case 345:PmName="摇篮百合";break;case 346:PmName="摇篮百合";break;case 347:PmName="太古盔甲";break;case 348:PmName="太古盔甲";break;case 349:PmName="美纳斯";break;case 350:PmName="美纳斯";break;case 351:PmName="飘浮泡泡";break;case 352:PmName="变隐龙";break;case 353:PmName="诅咒娃娃";break;case 354:PmName="诅咒娃娃";break;case 355:PmName="彷徨夜灵";break;case 356:PmName="彷徨夜灵";break;case 357:PmName="热带龙";break;case 358:PmName="风铃铃";break;case 359:PmName="阿勃梭鲁";break;case 360:PmName="果然翁";break;case 361:PmName="雪童子";break;case 362:PmName="冰鬼护";break;case 363:PmName="帝牙海狮";break;case 364:PmName="帝牙海狮";break;case 365:PmName="帝牙海狮";break;case 366:PmName="珍珠贝";break;case 367:PmName="猎斑鱼";break;case 368:PmName="樱花鱼";break;case 369:PmName="古空棘鱼";break;case 370:PmName="爱心鱼";break;case 371:PmName="暴飞龙";break;case 372:PmName="暴飞龙";break;case 373:PmName="暴飞龙";break;case 374:PmName="巨金怪";break;case 375:PmName="巨金怪";break;case 376:PmName="巨金怪";break;case 377:PmName="雷吉洛克";break;case 378:PmName="雷吉艾斯";break;case 379:PmName="雷吉斯奇鲁";break;case 380:PmName="拉帝亚斯";break;case 381:PmName="拉帝欧斯";break;case 382:PmName="盖欧卡";break;case 383:PmName="固拉多";break;case 384:PmName="烈空坐";break;case 385:PmName="基拉祈";break;case 386:PmName="代欧奇希斯";break;case 387:PmName="土台龟";break;case 388:PmName="土台龟";break;case 389:PmName="土台龟";break;case 390:PmName="烈焰猴";break;case 391:PmName="烈焰猴";break;case 392:PmName="烈焰猴";break;case 393:PmName="帝王拿波";break;case 394:PmName="帝王拿波";break;case 395:PmName="帝王拿波";break;case 396:PmName="姆克鹰";break;case 397:PmName="姆克鹰";break;case 398:PmName="姆克鹰";break;case 399:PmName="大尾狸";break;case 400:PmName="大尾狸";break;case 401:PmName="音箱蟀";break;case 402:PmName="音箱蟀";break;case 403:PmName="伦琴猫";break;case 404:PmName="伦琴猫";break;case 405:PmName="伦琴猫";break;case 406:PmName="罗丝雷朵";break;case 407:PmName="罗丝雷朵";break;case 408:PmName="战槌龙";break;case 409:PmName="战槌龙";break;case 410:PmName="护城龙";break;case 411:PmName="护城龙";break;case 412:PmName="结草儿";break;case 413:PmName="结草贵妇";break;case 414:PmName="绅士蛾";break;case 415:PmName="蜂女王";break;case 416:PmName="蜂女王";break;case 417:PmName="帕奇利兹";break;case 418:PmName="浮潜鼬";break;case 419:PmName="浮潜鼬";break;case 420:PmName="樱花儿";break;case 421:PmName="樱花儿";break;case 422:PmName="海兔兽";break;case 423:PmName="海兔兽";break;case 424:PmName="双尾怪手";break;case 425:PmName="随风球";break;case 426:PmName="随风球";break;case 427:PmName="长耳兔";break;case 428:PmName="长耳兔";break;case 429:PmName="梦妖魔";break;case 430:PmName="乌鸦头头";break;case 431:PmName="东施喵";break;case 432:PmName="东施喵";break;case 433:PmName="铃铛响";break;case 434:PmName="坦克臭鼬";break;case 435:PmName="坦克臭鼬";break;case 436:PmName="青铜钟";break;case 437:PmName="青铜钟";break;case 438:PmName="树才怪";break;case 439:PmName="魔墙人偶";break;case 440:PmName="幸福蛋";break;case 441:PmName="聒噪鸟";break;case 442:PmName="花岩怪";break;case 443:PmName="烈咬陆鲨";break;case 444:PmName="烈咬陆鲨";break;case 445:PmName="烈咬陆鲨";break;case 446:PmName="卡比兽";break;case 447:PmName="路卡利欧";break;case 448:PmName="路卡利欧";break;case 449:PmName="河马兽";break;case 450:PmName="河马兽";break;case 451:PmName="龙王蝎";break;case 452:PmName="龙王蝎";break;case 453:PmName="毒骷蛙";break;case 454:PmName="毒骷蛙";break;case 455:PmName="尖牙笼";break;case 456:PmName="霓虹鱼";break;case 457:PmName="霓虹鱼";break;case 458:PmName="巨翅飞鱼";break;case 459:PmName="暴雪王";break;case 460:PmName="暴雪王";break;case 461:PmName="玛狃拉";break;case 462:PmName="自爆磁怪";break;case 463:PmName="大舌舔";break;case 464:PmName="超甲狂犀";break;case 465:PmName="巨蔓藤";break;case 466:PmName="电击魔兽";break;case 467:PmName="鸭嘴炎兽";break;case 468:PmName="波克基斯";break;case 469:PmName="远古巨蜓";break;case 470:PmName="叶伊布";break;case 471:PmName="冰伊布";break;case 472:PmName="天蝎王";break;case 473:PmName="象牙猪";break;case 474:PmName="多边兽乙型";break;case 475:PmName="艾路雷朵";break;case 476:PmName="大朝北鼻";break;case 477:PmName="黑夜魔灵";break;case 478:PmName="雪妖女";break;case 479:PmName="洛托姆";break;case 480:PmName="由克希";break;case 481:PmName="艾姆利多";break;case 482:PmName="亚克诺姆";break;case 483:PmName="帝牙卢卡";break;case 484:PmName="帕路奇亚";break;case 485:PmName="席多蓝恩";break;case 486:PmName="雷吉奇卡斯";break;case 487:PmName="骑拉帝纳";break;case 488:PmName="克雷色利亚";break;case 489:PmName="霏欧纳";break;case 490:PmName="玛纳霏";break;case 491:PmName="达克莱伊";break;case 492:PmName="谢米";break;case 493:PmName="阿尔宙斯";break;case 494:PmName="比克提尼";break;case 495:PmName="君主蛇";break;case 496:PmName="君主蛇";break;case 497:PmName="君主蛇";break;case 498:PmName="炎武王";break;case 499:PmName="炎武王";break;case 500:PmName="炎武王";break;case 501:PmName="大剑鬼";break;case 502:PmName="大剑鬼";break;case 503:PmName="大剑鬼";break;case 504:PmName="步哨鼠";break;case 505:PmName="步哨鼠";break;case 506:PmName="长毛狗";break;case 507:PmName="长毛狗";break;case 508:PmName="长毛狗";break;case 509:PmName="酷豹";break;case 510:PmName="酷豹";break;case 511:PmName="花椰猴";break;case 512:PmName="花椰猿";break;case 513:PmName="爆香猴";break;case 514:PmName="爆香猿";break;case 515:PmName="冷水猴";break;case 516:PmName="冷水猿";break;case 517:PmName="梦梦蚀";break;case 518:PmName="梦梦蚀";break;case 519:PmName="高傲雉鸡";break;case 520:PmName="高傲雉鸡";break;case 521:PmName="高傲雉鸡";break;case 522:PmName="雷电斑马";break;case 523:PmName="雷电斑马";break;case 524:PmName="庞岩怪";break;case 525:PmName="庞岩怪";break;case 526:PmName="庞岩怪";break;case 527:PmName="心蝙蝠";break;case 528:PmName="心蝙蝠";break;case 529:PmName="龙头地鼠";break;case 530:PmName="龙头地鼠";break;case 531:PmName="差不多娃娃";break;case 532:PmName="修建老匠";break;case 533:PmName="修建老匠";break;case 534:PmName="修建老匠";break;case 535:PmName="蟾蜍王";break;case 536:PmName="蟾蜍王";break;case 537:PmName="蟾蜍王";break;case 538:PmName="投摔鬼";break;case 539:PmName="打击鬼";break;case 540:PmName="保姆虫";break;case 541:PmName="保姆虫";break;case 542:PmName="保姆虫";break;case 543:PmName="蜈蚣王";break;case 544:PmName="蜈蚣王";break;case 545:PmName="蜈蚣王";break;case 546:PmName="风妖精";break;case 547:PmName="风妖精";break;case 548:PmName="裙儿小姐";break;case 549:PmName="裙儿小姐";break;case 550:PmName="野蛮鲈鱼";break;case 551:PmName="流氓鳄";break;case 552:PmName="流氓鳄";break;case 553:PmName="流氓鳄";break;case 554:PmName="达摩狒狒";break;case 555:PmName="达摩狒狒";break;case 556:PmName="沙铃仙人掌";break;case 557:PmName="岩殿居蟹";break;case 558:PmName="岩殿居蟹";break;case 559:PmName="头巾混混";break;case 560:PmName="头巾混混";break;case 561:PmName="象征鸟";break;case 562:PmName="迭失棺";break;case 563:PmName="迭失棺";break;case 564:PmName="肋骨海龟";break;case 565:PmName="肋骨海龟";break;case 566:PmName="始祖大鸟";break;case 567:PmName="始祖大鸟";break;case 568:PmName="灰尘山";break;case 569:PmName="灰尘山";break;case 570:PmName="索罗亚克";break;case 571:PmName="索罗亚克";break;case 572:PmName="奇诺栗鼠";break;case 573:PmName="奇诺栗鼠";break;case 574:PmName="哥德小姐";break;case 575:PmName="哥德小姐";break;case 576:PmName="哥德小姐";break;case 577:PmName="人造细胞卵";break;case 578:PmName="人造细胞卵";break;case 579:PmName="人造细胞卵";break;case 580:PmName="舞天鹅";break;case 581:PmName="舞天鹅";break;case 582:PmName="双倍多多冰";break;case 583:PmName="双倍多多冰";break;case 584:PmName="双倍多多冰";break;case 585:PmName="萌芽鹿";break;case 586:PmName="萌芽鹿";break;case 587:PmName="电飞鼠";break;case 588:PmName="骑士蜗牛";break;case 589:PmName="骑士蜗牛";break;case 590:PmName="败露球菇";break;case 591:PmName="败露球菇";break;case 592:PmName="胖嘟嘟";break;case 593:PmName="胖嘟嘟";break;case 594:PmName="保姆曼波";break;case 595:PmName="电蜘蛛";break;case 596:PmName="电蜘蛛";break;case 597:PmName="坚果哑铃";break;case 598:PmName="坚果哑铃";break;case 599:PmName="齿轮怪";break;case 600:PmName="齿轮怪";break;case 601:PmName="齿轮怪";break;case 602:PmName="麻麻鳗鱼王";break;case 603:PmName="麻麻鳗鱼王";break;case 604:PmName="麻麻鳗鱼王";break;case 605:PmName="大宇怪";break;case 606:PmName="大宇怪";break;case 607:PmName="水晶灯火灵";break;case 608:PmName="水晶灯火灵";break;case 609:PmName="水晶灯火灵";break;case 610:PmName="双斧战龙";break;case 611:PmName="双斧战龙";break;case 612:PmName="双斧战龙";break;case 613:PmName="冻原熊";break;case 614:PmName="冻原熊";break;case 615:PmName="几何雪花";break;case 616:PmName="敏捷虫";break;case 617:PmName="敏捷虫";break;case 618:PmName="泥巴鱼";break;case 619:PmName="师父鼬";break;case 620:PmName="师父鼬";break;case 621:PmName="赤面龙";break;case 622:PmName="泥偶巨人";break;case 623:PmName="泥偶巨人";break;case 624:PmName="劈斩司令";break;case 625:PmName="劈斩司令";break;case 626:PmName="爆炸头水牛";break;case 627:PmName="勇士雄鹰";break;case 628:PmName="勇士雄鹰";break;case 629:PmName="秃鹰娜";break;case 630:PmName="秃鹰娜";break;case 631:PmName="熔蚁兽";break;case 632:PmName="铁蚁";break;case 633:PmName="三首恶龙";break;case 634:PmName="三首恶龙";break;case 635:PmName="三首恶龙";break;case 636:PmName="火神蛾";break;case 637:PmName="火神蛾";break;case 638:PmName="勾帕路翁";break;case 639:PmName="代拉基翁";break;case 640:PmName="毕力吉翁";break;case 641:PmName="龙卷云";break;case 642:PmName="雷电云";break;case 643:PmName="莱希拉姆";break;case 644:PmName="捷克罗姆";break;case 645:PmName="土地云";break;case 646:PmName="酋雷姆";break;case 647:PmName="凯路迪欧";break;case 648:PmName="美洛耶塔";break;case 649:PmName="盖诺赛克特";break;case 650:PmName="布里卡隆";break;case 651:PmName="布里卡隆";break;case 652:PmName="布里卡隆";break;case 653:PmName="妖火红狐";break;case 654:PmName="妖火红狐";break;case 655:PmName="妖火红狐";break;case 656:PmName="甲贺忍蛙";break;case 657:PmName="甲贺忍蛙";break;case 658:PmName="甲贺忍蛙";break;case 659:PmName="掘地兔";break;case 660:PmName="掘地兔";break;case 661:PmName="烈箭鹰";break;case 662:PmName="烈箭鹰";break;case 663:PmName="烈箭鹰";break;case 664:PmName="彩粉蝶";break;case 665:PmName="彩粉蝶";break;case 666:PmName="彩粉蝶";break;case 667:PmName="火炎狮";break;case 668:PmName="火炎狮";break;case 669:PmName="花洁夫人";break;case 670:PmName="花洁夫人";break;case 671:PmName="花洁夫人";break;case 672:PmName="坐骑山羊";break;case 673:PmName="坐骑山羊";break;case 674:PmName="霸道熊猫";break;case 675:PmName="霸道熊猫";break;case 676:PmName="多丽米亚";break;case 677:PmName="超能妙喵";break;case 678:PmName="超能妙喵";break;case 679:PmName="坚盾剑怪";break;case 680:PmName="坚盾剑怪";break;case 681:PmName="坚盾剑怪";break;case 682:PmName="芳香精";break;case 683:PmName="芳香精";break;case 684:PmName="胖甜妮";break;case 685:PmName="胖甜妮";break;case 686:PmName="乌贼王";break;case 687:PmName="乌贼王";break;case 688:PmName="龟足巨铠";break;case 689:PmName="龟足巨铠";break;case 690:PmName="毒藻龙";break;case 691:PmName="毒藻龙";break;case 692:PmName="钢炮臂虾";break;case 693:PmName="钢炮臂虾";break;case 694:PmName="光电伞蜥";break;case 695:PmName="光电伞蜥";break;case 696:PmName="怪颚龙";break;case 697:PmName="怪颚龙";break;case 698:PmName="冰雪巨龙";break;case 699:PmName="冰雪巨龙";break;case 700:PmName="仙子伊布";break;case 701:PmName="摔角鹰人";break;case 702:PmName="咚咚鼠";break;case 703:PmName="小碎钻";break;case 704:PmName="黏美龙";break;case 705:PmName="黏美龙";break;case 706:PmName="黏美龙";break;case 707:PmName="钥圈儿";break;case 708:PmName="朽木妖";break;case 709:PmName="朽木妖";break;case 710:PmName="南瓜怪人";break;case 711:PmName="南瓜怪人";break;case 712:PmName="冰岩怪";break;case 713:PmName="冰岩怪";break;case 714:PmName="音波龙";break;case 715:PmName="音波龙";break;case 716:PmName="哲尔尼亚斯";break;case 717:PmName="伊裴尔塔尔";break;case 718:PmName="基格尔德";break;case 719:PmName="蒂安希";break;case 720:PmName="胡帕";break;case 721:PmName="波尔凯尼恩";break;case 722:PmName="狙射树枭";break;case 723:PmName="狙射树枭";break;case 724:PmName="狙射树枭";break;case 725:PmName="炽焰咆哮虎";break;case 726:PmName="炽焰咆哮虎";break;case 727:PmName="炽焰咆哮虎";break;case 728:PmName="西狮海壬";break;case 729:PmName="西狮海壬";break;case 730:PmName="西狮海壬";break;case 731:PmName="铳嘴大鸟";break;case 732:PmName="铳嘴大鸟";break;case 733:PmName="铳嘴大鸟";break;case 734:PmName="猫鼬探长";break;case 735:PmName="猫鼬探长";break;case 736:PmName="锹农炮虫";break;case 737:PmName="锹农炮虫";break;case 738:PmName="锹农炮虫";break;case 739:PmName="好胜毛蟹";break;case 740:PmName="好胜毛蟹";break;case 741:PmName="花舞鸟";break;case 742:PmName="蝶结萌虻";break;case 743:PmName="蝶结萌虻";break;case 744:PmName="鬃岩狼人";break;case 745:PmName="鬃岩狼人";break;case 746:PmName="弱丁鱼";break;case 747:PmName="超坏星";break;case 748:PmName="超坏星";break;case 749:PmName="重泥挽马";break;case 750:PmName="重泥挽马";break;case 751:PmName="滴蛛霸";break;case 752:PmName="滴蛛霸";break;case 753:PmName="兰螳花";break;case 754:PmName="兰螳花";break;case 755:PmName="灯罩夜菇";break;case 756:PmName="灯罩夜菇";break;case 757:PmName="焰后蜥";break;case 758:PmName="焰后蜥";break;case 759:PmName="穿着熊";break;case 760:PmName="穿着熊";break;case 761:PmName="甜冷美后";break;case 762:PmName="甜冷美后";break;case 763:PmName="甜冷美后";break;case 764:PmName="花疗环环";break;case 765:PmName="智挥猩";break;case 766:PmName="投掷猴";break;case 767:PmName="具甲武者";break;case 768:PmName="具甲武者";break;case 769:PmName="噬沙堡爷";break;case 770:PmName="噬沙堡爷";break;case 771:PmName="拳海参";break;case 772:PmName="银伴战兽";break;case 773:PmName="银伴战兽";break;case 774:PmName="小陨星";break;case 775:PmName="树枕尾熊";break;case 776:PmName="爆焰龟兽";break;case 777:PmName="托戈德玛尔";break;case 778:PmName="谜拟丘";break;case 779:PmName="磨牙彩皮鱼";break;case 780:PmName="老翁龙";break;case 781:PmName="破破舵轮";break;case 782:PmName="杖尾鳞甲龙";break;case 783:PmName="杖尾鳞甲龙";break;case 784:PmName="杖尾鳞甲龙";break;case 785:PmName="卡璞・鸣鸣";break;case 786:PmName="卡璞・蝶蝶";break;case 787:PmName="卡璞・哞哞";break;case 788:PmName="卡璞・鳍鳍";break;case 789:PmName="科斯莫姆";break;case 790:PmName="科斯莫姆";break;case 791:PmName="索尔迦雷欧";break;case 792:PmName="露奈雅拉";break;case 793:PmName="虚吾伊德";break;case 794:PmName="爆肌蚊";break;case 795:PmName="费洛美螂";break;case 796:PmName="电束木";break;case 797:PmName="铁火辉夜";break;case 798:PmName="纸御剑";break;case 799:PmName="恶食大王";break;case 800:PmName="奈克洛兹玛";break;case 801:PmName="玛机雅娜";break;case 802:PmName="玛夏多";break;case 803:PmName="毒贝比";break;case 804:PmName="四颚针龙";break;case 805:PmName="垒磊石";break;case 806:PmName="砰头小丑";break;case 807:PmName="捷拉奥拉";break;case 808:PmName="美录坦";break;case 809:PmName="美录梅塔";break;case 810:PmName="敲音猴";break;case 811:PmName="啪咚猴";break;case 812:PmName="轰擂金刚猩";break;case 813:PmName="炎兔儿";break;case 814:PmName="腾蹴小将";break;case 815:PmName="闪焰王牌";break;case 816:PmName="泪眼蜥";break;case 817:PmName="变涩蜥";break;case 818:PmName="千面避役";break;case 819:PmName="贪心栗鼠";break;case 820:PmName="藏饱栗鼠";break;case 821:PmName="稚山雀";break;case 822:PmName="蓝鸦";break;case 823:PmName="钢铠鸦";break;case 824:PmName="索侦虫";break;case 825:PmName="天罩虫";break;case 826:PmName="以欧路普";break;case 827:PmName="狡小狐";break;case 828:PmName="猾大狐";break;case 829:PmName="幼棉棉";break;case 830:PmName="白蓬蓬";break;case 831:PmName="毛辫羊";break;case 832:PmName="毛毛角羊";break;case 833:PmName="咬咬龟";break;case 834:PmName="暴噬龟";break;case 835:PmName="来电汪";break;case 836:PmName="逐电犬";break;case 837:PmName="小炭仔";break;case 838:PmName="大炭车";break;case 839:PmName="巨炭山";break;case 840:PmName="啃果虫";break;case 841:PmName="苹裹龙";break;case 842:PmName="丰蜜龙";break;case 843:PmName="沙包蛇";break;case 844:PmName="沙螺蟒";break;case 845:PmName="古月鸟";break;case 846:PmName="刺梭鱼";break;case 847:PmName="戽斗尖梭";break;case 848:PmName="电音婴";break;case 849:PmName="颤弦蝾螈";break;case 850:PmName="烧火蚣";break;case 851:PmName="焚焰蚣";break;case 852:PmName="拳拳蛸";break;case 853:PmName="八爪武师";break;case 854:PmName="来悲茶";break;case 855:PmName="怖思壶";break;case 856:PmName="迷布莉姆";break;case 857:PmName="提布莉姆";break;case 858:PmName="布莉姆温";break;case 859:PmName="捣蛋小妖";break;case 860:PmName="诈唬魔";break;case 861:PmName="长毛巨魔";break;case 862:PmName="堵拦熊";break;case 863:PmName="喵头目";break;case 864:PmName="魔灵珊瑚";break;case 865:PmName="葱游兵";break;case 866:PmName="踏冰人偶";break;case 867:PmName="迭失板";break;case 868:PmName="小仙奶";break;case 869:PmName="霜奶仙";break;case 870:PmName="列阵兵";break;case 871:PmName="啪嚓海胆";break;case 872:PmName="雪吞虫";break;case 873:PmName="雪绒蛾";break;case 874:PmName="巨石丁";break;case 875:PmName="冰砌鹅";break;case 876:PmName="爱管侍";break;case 877:PmName="莫鲁贝可";break;case 878:PmName="铜象";break;case 879:PmName="大王铜象";break;case 880:PmName="雷鸟龙";break;case 881:PmName="雷鸟海兽";break;case 882:PmName="鳃鱼龙";break;case 883:PmName="鳃鱼海兽";break;case 884:PmName="铝钢龙";break;case 885:PmName="多龙梅西亚";break;case 886:PmName="多龙奇";break;case 887:PmName="多龙巴鲁托";break;case 888:PmName="苍响";break;case 889:PmName="藏玛然特";break;case 890:PmName="无极汰那";break;case 891:PmName="熊徒弟";break;case 892:PmName="武道熊师";break;case 893:PmName="萨戮德";break;case 894:PmName="雷吉艾勒奇";break;case 895:PmName="雷吉铎拉戈";break;case 896:PmName="雪暴马";break;case 897:PmName="灵幽马";break;case 898:PmName="蕾冠王";break;case 899:PmName="诡角鹿";break;case 900:PmName="劈斧螳螂";break;case 901:PmName="月月熊";break;case 902:PmName="幽尾玄鱼";break;case 903:PmName="大狃拉";break;case 904:PmName="万针鱼";break;case 905:PmName="眷恋云";break;case 906:PmName="新叶喵";break;case 907:PmName="蒂蕾喵";break;case 908:PmName="魔幻假面喵";break;case 909:PmName="呆火鳄";break;case 910:PmName="炙烫鳄";break;case 911:PmName="骨纹巨声鳄";break;case 912:PmName="润水鸭";break;case 913:PmName="涌跃鸭";break;case 914:PmName="狂欢浪舞鸭";break;case 915:PmName="爱吃豚";break;case 916:PmName="飘香豚";break;case 917:PmName="团珠蛛";break;case 918:PmName="操陷蛛";break;case 919:PmName="豆蟋蟀";break;case 920:PmName="烈腿蝗";break;case 921:PmName="布拨";break;case 922:PmName="布土拨";break;case 923:PmName="巴布土拨";break;case 924:PmName="一对鼠";break;case 925:PmName="一家鼠";break;case 926:PmName="狗仔包";break;case 927:PmName="麻花犬";break;case 928:PmName="迷你芙";break;case 929:PmName="奥利纽";break;case 930:PmName="奥利瓦";break;case 931:PmName="怒鹦哥";break;case 932:PmName="盐石宝";break;case 933:PmName="盐石垒";break;case 934:PmName="盐石巨灵";break;case 935:PmName="炭小侍";break;case 936:PmName="红莲铠骑";break;case 937:PmName="苍炎刃鬼";break;case 938:PmName="光蚪仔";break;case 939:PmName="电肚蛙";break;case 940:PmName="电海燕";break;case 941:PmName="大电海燕";break;case 942:PmName="偶叫獒";break;case 943:PmName="獒教父";break;case 944:PmName="滋汁鼹";break;case 945:PmName="涂标客";break;case 946:PmName="纳噬草";break;case 947:PmName="怖纳噬草";break;case 948:PmName="原野水母";break;case 949:PmName="陆地水母";break;case 950:PmName="毛崖蟹";break;case 951:PmName="热辣娃";break;case 952:PmName="狠辣椒";break;case 953:PmName="虫滚泥";break;case 954:PmName="虫甲圣";break;case 955:PmName="飘飘雏";break;case 956:PmName="超能艳鸵";break;case 957:PmName="小锻匠";break;case 958:PmName="巧锻匠";break;case 959:PmName="巨锻匠";break;case 960:PmName="海地鼠";break;case 961:PmName="三海地鼠";break;case 962:PmName="下石鸟";break;case 963:PmName="波普海豚";break;case 964:PmName="海豚侠";break;case 965:PmName="噗隆隆";break;case 966:PmName="普隆隆姆";break;case 967:PmName="摩托蜥";break;case 968:PmName="拖拖蚓";break;case 969:PmName="晶光芽";break;case 970:PmName="晶光花";break;case 971:PmName="墓仔狗";break;case 972:PmName="墓扬犬";break;case 973:PmName="缠红鹤";break;case 974:PmName="走鲸";break;case 975:PmName="浩大鲸";break;case 976:PmName="轻身鳕";break;case 977:PmName="吃吼霸";break;case 978:PmName="米立龙";break;case 979:PmName="弃世猴";break;case 980:PmName="土王";break;case 981:PmName="奇麒麟";break;case 982:PmName="土龙节节";break;case 983:PmName="仆刀将军";break;case 984:PmName="雄伟牙";break;case 985:PmName="吼叫尾";break;case 986:PmName="猛恶菇";break;case 987:PmName="振翼发";break;case 988:PmName="爬地翅";break;case 989:PmName="沙铁皮";break;case 990:PmName="铁辙迹";break;case 991:PmName="铁包袱";break;case 992:PmName="铁臂膀";break;case 993:PmName="铁脖颈";break;case 994:PmName="铁毒蛾";break;case 995:PmName="铁荆棘";break;case 996:PmName="凉脊龙";break;case 997:PmName="冻脊龙";break;case 998:PmName="戟脊龙";break;case 999:PmName="索财灵";break;case 1000:PmName="赛富豪";break;case 1001:PmName="古简蜗";break;case 1002:PmName="古剑豹";break;case 1003:PmName="古鼎鹿";break;case 1004:PmName="古玉鱼";break;case 1005:PmName="轰鸣月";break;case 1006:PmName="铁武者";break;case 1007:PmName="故勒顿";break;case 1008:PmName="密勒顿";break;case 1009:PmName="波荡水";break;case 1010:PmName="铁斑叶";break;default:PmName="未知精灵";break}
   window.pokemonName = PmName;
   document.getElementById("result").innerHTML = "随机的精灵为：" + window.pokemonName +",随机序号为：" + window.pokemonNumber;
   document.getElementById("pmid").value = "";
    //0909调试显示
   console.log("debug log - lilyoffice:随机的精灵为：" + window.pokemonName +",随机序号为：" + window.pokemonNumber);
   
}
function runurl(){
var url = "https://wiki.52poke.com/wiki/" + window.pokemonName
window.location.href = url;

}
