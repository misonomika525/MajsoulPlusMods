// 修改一姬语音台词以及人物简介
requestAnimationFrame(function autoRun() {
  try {
    const arrBackup = cfg.voice.sound.groups_
    if (!arrBackup || arrBackup.length === 0) {
      throw new Error();
    }
    console.log('Hacked语音文本');
    Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
      if (soundID == 1) {
        const changeMap = {
		  "终局一位语音": {
           "words": '大家全都安睡吧。'
          },
          "获得语音": {
            "words": '太好了,还好Master没有忘记希儿。',
          },
          "登录语音普通": {
            "words": '希儿稍微有些寂寞。'
          },
          "登录语音满羁绊": {
            "words": 'Master，早餐要吃什么呢？'
          },
          "大厅交互语音1": {
            "words": 'Master，一起来玩吧。（指麻将）'
          },
          "大厅交互语音2": {
            "words": '不要总摸头了,会..会长不高的...'
          },
          "大厅交互语音3": {
            "words": '有新的朋友过来了,会是布洛妮娅姐姐吗？（然而并没有）'
          },
          "大厅交互语音4": {
            "words": '今天也不要忘记补充能量哟。'
          },
          "大厅交互语音5": {
            "words": '再不起床的话就要被吃掉了哟。阿勒，我是不是说了什么奇怪的话？'
          },
          "大厅交互语音6": {
            "words": 'Master，下午茶感觉怎么样？'
          },
          "大厅交互语音7": {
			  "words": '把喜欢的东西吃掉，这就是恋爱吗？'
          },
          "大厅交互语音8": {
            "words": '那个..希儿的身体的摸起来舒服吗?'
          },
          "送礼物语音普通": {
            "words": '这个..是什么?'
          },
          "送礼物语音喜好": {
            "words": '感觉很厉害的样子。'
          },
          "好感度升级语音1": {
            "words": '似乎在梦里见过的样子呢。'
          },
          "好感度升级语音2": {
            "words": '希儿，不会再害怕了。'
          },
          "好感度升级语音3": {
            "words": '诶嘿嘿...Master真的很温柔呢。'
          },
          "好感度升级语音4": {
            "words": 'Master的手，暖暖的。'
          },
          "好感度升级语音5": {
            "words": '（待补）'
          },
          "契约语音": {
            "words": '（待补）'
          },
          "特殊语音 - 连续打出多张相同牌": {
            "words": '（待补）'
          },
          "特殊语音 - 打出宝牌": {
            "words": '（待补）'
          },
          "特殊语音 - 余牌少于10": {
            "words": '（待补）'
          },
          "特殊语音 - 役满听牌": {
            "words": '（待补）'
          },
          "特殊语音 - 倍满/三倍满听牌": {
            "words": '（待补）'
          }
        };
        soundGroup.forEach(soundObject => {
          soundObject.level_limit = 0;
          if (changeMap.hasOwnProperty(soundObject.name_chs)) {
            for (let [key, val] of Object.entries(changeMap[soundObject.name_chs])) {
              ['_chs', '_en', '_jp'].forEach(suffix => soundObject[key + suffix] = val)
            }
          }
        });
      }
    });
    console.log('Hacked简介文本');
    cfg.item_definition.character.rows_.forEach(chr => {
      const helper = (key, val) => {
        ['', '_chs', '_en', '_jp'].forEach(suffix => chr[key + suffix] = val)
      };
      switch (chr.id) {
        case 200001:
          chr.name = '希儿·芙乐艾';
          chr.name_chs = '希儿·芙乐艾';
          chr.name_en = 'Seele Vollerei';
          chr.name_jp = 'ゼーレ・フェレライ';
          helper('desc_cv', '中原麻衣');
          helper('desc', '希儿性格文弱、安静，害怕暴力行为，感到恐惧的时候经常会流眼泪。');
          helper('desc_age', '14岁');
          helper('desc_birth', '10月18日');
          helper('desc_bloodtype', '未知');
          helper('desc_hobby', '布洛妮娅');
          helper('desc_stature', '149cm');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
