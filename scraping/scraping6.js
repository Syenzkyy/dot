function _0x44d1(_0xbc176b,_0xaa8121){const _0x238ef8=_0x238e();return _0x44d1=function(_0x44d1bf,_0x380236){_0x44d1bf=_0x44d1bf-0xc9;let _0x583fd4=_0x238ef8[_0x44d1bf];return _0x583fd4;},_0x44d1(_0xbc176b,_0xaa8121);}function _0x238e(){const _0x177b6b=['videoDetails','front\x20cover','node-youtube-music','3017prrOtw','7173351oAyMvl','end','qualityLabel','lengthSeconds','504980dGRoSM','stdout','label','title','videos','toFormat','\x20-\x20','url','libmp3lame','write','album','duration','save','audioBitrate','isYTUrl','error','response','downloadMusic','10irrKqX','contentLength','.mp3','audioChannels','publishDate','Image','Artist','19484916uPAfNW','log','size','author','jpeg','https://youtu.be/','statSync','mp3','minutes','Title','./XeonMedia/audio/','chooseFormat','test','cursorTo','audioCodec','WriteTags','slice','youtubeId','334267qGVAkI','toFixed','getVideoID','is\x20not\x20YouTube\x20URL','search','fluent-ffmpeg','2MJCphX','moveCursor','toString','https://www.youtube.com/watch?v=','name','978951FpQMFz','mp4','audioQuality','audioonly','w120-h120','image','minutes\x20','artists','Cover\x20of\x20','once','getInfo','keys','now','push','MB)\x0a','thumbnails','join','map','audioFrequency','artist','split','hex','MB\x20of\x20','crypto','running\x20for:\x20','totalSeconds','36rbVlok','2740932GXSrYS','3704unhZcT','exports','buffer','videoandaudio','Video\x20ID\x20or\x20YouTube\x20Url\x20is\x20required'];_0x238e=function(){return _0x177b6b;};return _0x238e();}const _0x3f481c=_0x44d1;(function(_0x166337,_0x19dbae){const _0x18bf51=_0x44d1,_0x52a204=_0x166337();while(!![]){try{const _0x243bd2=-parseInt(_0x18bf51(0x107))/0x1+parseInt(_0x18bf51(0x10d))/0x2*(-parseInt(_0x18bf51(0x112))/0x3)+-parseInt(_0x18bf51(0xce))/0x4+-parseInt(_0x18bf51(0xdc))/0x5*(parseInt(_0x18bf51(0xcd))/0x6)+-parseInt(_0x18bf51(0xd7))/0x7*(parseInt(_0x18bf51(0xcf))/0x8)+parseInt(_0x18bf51(0xd8))/0x9*(parseInt(_0x18bf51(0xee))/0xa)+parseInt(_0x18bf51(0xf5))/0xb;if(_0x243bd2===_0x19dbae)break;else _0x52a204['push'](_0x52a204['shift']());}catch(_0x2c5020){_0x52a204['push'](_0x52a204['shift']());}}}(_0x238e,0x65d19));const ytdl=require('youtubedl-core'),yts=require('youtube-yts'),readline=require('readline'),ffmpeg=require(_0x3f481c(0x10c)),NodeID3=require('node-id3'),fs=require('fs'),{fetchBuffer}=require('./myfunc2'),ytM=require(_0x3f481c(0xd6)),{randomBytes}=require(_0x3f481c(0xca)),ytIdRegex=/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;class YT{constructor(){}static ['isYTUrl']=_0xe9e85f=>{const _0x12bb1d=_0x3f481c;return ytIdRegex[_0x12bb1d(0x101)](_0xe9e85f);};static [_0x3f481c(0x109)]=_0x37b0bb=>{const _0x1195e4=_0x3f481c;if(!this['isYTUrl'](_0x37b0bb))throw new Error(_0x1195e4(0x10a));return ytIdRegex['exec'](_0x37b0bb)[0x1];};static ['WriteTags']=async(_0x4b3dd5,_0x376dac)=>{const _0x5819bd=_0x3f481c;NodeID3[_0x5819bd(0xe5)]({'title':_0x376dac[_0x5819bd(0xfe)],'artist':_0x376dac[_0x5819bd(0xf4)],'originalArtist':_0x376dac[_0x5819bd(0xf4)],'image':{'mime':_0x5819bd(0xf9),'type':{'id':0x3,'name':_0x5819bd(0xd5)},'imageBuffer':(await fetchBuffer(_0x376dac[_0x5819bd(0xf3)]))[_0x5819bd(0xd1)],'description':_0x5819bd(0x11a)+_0x376dac[_0x5819bd(0xfe)]},'album':_0x376dac['Album'],'year':_0x376dac['Year']||''},_0x4b3dd5);};static ['search']=async(_0x7023f4,_0xc6146d={})=>{const _0x4d6d82=_0x3f481c,_0x2371e7=await yts[_0x4d6d82(0x10b)]({'query':_0x7023f4,'hl':'id','gl':'ID',..._0xc6146d});return _0x2371e7[_0x4d6d82(0xe0)];};static ['searchTrack']=_0x21f388=>{return new Promise(async(_0x1c1a98,_0x445d33)=>{const _0x50c5a5=_0x44d1;try{let _0x9fb23e=await ytM['searchMusics'](_0x21f388),_0x455c3a=[];for(let _0x44f479=0x0;_0x44f479<_0x9fb23e['length'];_0x44f479++){_0x455c3a[_0x50c5a5(0x11f)]({'isYtMusic':!![],'title':_0x9fb23e[_0x44f479][_0x50c5a5(0xdf)]+_0x50c5a5(0xe2)+_0x9fb23e[_0x44f479][_0x50c5a5(0x119)][_0x50c5a5(0x123)](_0x430ad7=>_0x430ad7['name'])[_0x50c5a5(0x122)]('\x20'),'artist':_0x9fb23e[_0x44f479][_0x50c5a5(0x119)]['map'](_0x214c0f=>_0x214c0f['name'])['join']('\x20'),'id':_0x9fb23e[_0x44f479]['youtubeId'],'url':_0x50c5a5(0xfa)+_0x9fb23e[_0x44f479][_0x50c5a5(0x106)],'album':_0x9fb23e[_0x44f479][_0x50c5a5(0xe6)],'duration':{'seconds':_0x9fb23e[_0x44f479]['duration'][_0x50c5a5(0xcc)],'label':_0x9fb23e[_0x44f479][_0x50c5a5(0xe7)][_0x50c5a5(0xde)]},'image':_0x9fb23e[_0x44f479]['thumbnailUrl']['replace'](_0x50c5a5(0x116),'w600-h600')});}_0x1c1a98(_0x455c3a);}catch(_0x16610a){_0x445d33(_0x16610a);}});};static [_0x3f481c(0xed)]=async _0xc87fdc=>{const _0x394963=_0x3f481c;try{const _0x1af797=Array['isArray'](_0xc87fdc)?_0xc87fdc:await this['searchTrack'](_0xc87fdc),_0x50e5fa=_0x1af797[0x0],_0x560a86=await ytdl[_0x394963(0x11c)](_0x394963(0x110)+_0x50e5fa['id'],{'lang':'id'});let _0x56d4e0=ytdl(_0x50e5fa['id'],{'filter':_0x394963(0x115),'quality':0x8c}),_0x4d310e=_0x394963(0xff)+randomBytes(0x3)[_0x394963(0x10f)](_0x394963(0x127))+_0x394963(0xf0);_0x56d4e0['on'](_0x394963(0xeb),_0x125835=>console[_0x394963(0xf6)](_0x125835));const _0x15ad3d=await new Promise(_0x57f9a4=>{const _0x5a536e=_0x394963;ffmpeg(_0x56d4e0)[_0x5a536e(0x124)](0xac44)['audioChannels'](0x2)[_0x5a536e(0xe9)](0x80)[_0x5a536e(0x103)](_0x5a536e(0xe4))[_0x5a536e(0x114)](0x5)[_0x5a536e(0xe1)](_0x5a536e(0xfc))[_0x5a536e(0xe8)](_0x4d310e)['on'](_0x5a536e(0xd9),()=>_0x57f9a4(_0x4d310e));});return await this[_0x394963(0x104)](_0x15ad3d,{'Title':_0x50e5fa[_0x394963(0xdf)],'Artist':_0x50e5fa[_0x394963(0x125)],'Image':_0x50e5fa[_0x394963(0x117)],'Album':_0x50e5fa[_0x394963(0xe6)],'Year':_0x560a86[_0x394963(0xd4)][_0x394963(0xf2)][_0x394963(0x126)]('-')[0x0]}),{'meta':_0x50e5fa,'path':_0x15ad3d,'size':fs[_0x394963(0xfb)](_0x4d310e)[_0x394963(0xf7)]};}catch(_0x20893b){throw new Error(_0x20893b);}};static [_0x3f481c(0x113)]=async(_0x3e2fa9,_0x45b67d=0x86)=>{const _0x1fec82=_0x3f481c;try{if(!_0x3e2fa9)throw new Error(_0x1fec82(0xd3));const _0x348fff=this[_0x1fec82(0xea)](_0x3e2fa9)?this['getVideoID'](_0x3e2fa9):_0x3e2fa9,_0x26b151=await ytdl['getInfo'](_0x1fec82(0x110)+_0x348fff,{'lang':'id'}),_0x130b8d=ytdl[_0x1fec82(0x100)](_0x26b151['formats'],{'format':_0x45b67d,'filter':_0x1fec82(0xd2)});return{'title':_0x26b151['videoDetails'][_0x1fec82(0xdf)],'thumb':_0x26b151['videoDetails'][_0x1fec82(0x121)]['slice'](-0x1)[0x0],'date':_0x26b151[_0x1fec82(0xd4)][_0x1fec82(0xf2)],'duration':_0x26b151[_0x1fec82(0xd4)][_0x1fec82(0xdb)],'channel':_0x26b151[_0x1fec82(0xd4)]['ownerChannelName'],'quality':_0x130b8d[_0x1fec82(0xda)],'contentLength':_0x130b8d[_0x1fec82(0xef)],'description':_0x26b151[_0x1fec82(0xd4)]['description'],'videoUrl':_0x130b8d['url']};}catch(_0x397502){throw _0x397502;}};static [_0x3f481c(0xfc)]=async(_0x50da8a,_0x25ea51={},_0x167bcb=![])=>{const _0x501116=_0x3f481c;try{if(!_0x50da8a)throw new Error(_0x501116(0xd3));_0x50da8a=this[_0x501116(0xea)](_0x50da8a)?_0x501116(0x110)+this[_0x501116(0x109)](_0x50da8a):_0x50da8a;const {videoDetails:_0x5f454f}=await ytdl['getInfo'](_0x50da8a,{'lang':'id'});let _0x177a56=ytdl(_0x50da8a,{'filter':'audioonly','quality':0x8c}),_0x528d26='./---/audio/'+randomBytes(0x3)[_0x501116(0x10f)]('hex')+_0x501116(0xf0),_0x85b31d;_0x177a56[_0x501116(0x11b)](_0x501116(0xec),()=>{const _0x18ec9d=_0x501116;_0x85b31d=Date[_0x18ec9d(0x11e)]();}),_0x177a56['on']('progress',(_0x5aa4a8,_0x165956,_0x311d75)=>{const _0x547224=_0x501116,_0x5e94b6=_0x165956/_0x311d75,_0xcffc07=(Date[_0x547224(0x11e)]()-_0x85b31d)/0x3e8/0x3c,_0x4c457a=_0xcffc07/_0x5e94b6-_0xcffc07;readline[_0x547224(0x102)](process[_0x547224(0xdd)],0x0),process[_0x547224(0xdd)]['write']((_0x5e94b6*0x64)[_0x547224(0x108)](0x2)+'%\x20downloaded\x20'),process[_0x547224(0xdd)][_0x547224(0xe5)]('('+(_0x165956/0x400/0x400)[_0x547224(0x108)](0x2)+_0x547224(0xc9)+(_0x311d75/0x400/0x400)[_0x547224(0x108)](0x2)+_0x547224(0x120)),process[_0x547224(0xdd)][_0x547224(0xe5)](_0x547224(0xcb)+_0xcffc07[_0x547224(0x108)](0x2)+_0x547224(0xfd)),process[_0x547224(0xdd)][_0x547224(0xe5)](',\x20estimated\x20time\x20left:\x20'+_0x4c457a[_0x547224(0x108)](0x2)+_0x547224(0x118)),readline[_0x547224(0x10e)](process[_0x547224(0xdd)],0x0,-0x1);}),_0x177a56['on'](_0x501116(0xd9),()=>process[_0x501116(0xdd)][_0x501116(0xe5)]('\x0a\x0a')),_0x177a56['on'](_0x501116(0xeb),_0x4d07cc=>console[_0x501116(0xf6)](_0x4d07cc));const _0x5bb021=await new Promise(_0x1e286b=>{const _0x183dc1=_0x501116;ffmpeg(_0x177a56)['audioFrequency'](0xac44)[_0x183dc1(0xf1)](0x2)[_0x183dc1(0xe9)](0x80)[_0x183dc1(0x103)](_0x183dc1(0xe4))[_0x183dc1(0x114)](0x5)[_0x183dc1(0xe1)]('mp3')[_0x183dc1(0xe8)](_0x528d26)['on'](_0x183dc1(0xd9),()=>{_0x1e286b(_0x528d26);});});return Object[_0x501116(0x11d)](_0x25ea51)['length']!==0x0&&await this['WriteTags'](_0x5bb021,_0x25ea51),_0x167bcb&&await this[_0x501116(0x104)](_0x5bb021,{'Title':_0x5f454f[_0x501116(0xdf)],'Album':_0x5f454f[_0x501116(0xf8)][_0x501116(0x111)],'Year':_0x5f454f['publishDate'][_0x501116(0x126)]('-')[0x0],'Image':_0x5f454f[_0x501116(0x121)][_0x501116(0x105)](-0x1)[0x0]['url']}),{'meta':{'title':_0x5f454f[_0x501116(0xdf)],'channel':_0x5f454f[_0x501116(0xf8)][_0x501116(0x111)],'seconds':_0x5f454f[_0x501116(0xdb)],'image':_0x5f454f[_0x501116(0x121)][_0x501116(0x105)](-0x1)[0x0][_0x501116(0xe3)]},'path':_0x5bb021,'size':fs[_0x501116(0xfb)](_0x528d26)[_0x501116(0xf7)]};}catch(_0x38bb66){throw _0x38bb66;}};}module[_0x3f481c(0xd0)]=YT;