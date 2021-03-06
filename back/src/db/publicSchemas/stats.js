export const statList = [
  {
    groupName: "gender",
    colName: ["여성", "남성"],
    value: [208, 244],
    comment: `\
동물의 숲에서 남녀 성비는 게이머가 보기에는 대체로 비슷한 편이지만
성비를 실제로 계산해 보면 117.3으로 상당한 남초 마을입니다.\
`,
  },
  {
    groupName: "species",
    colName: [
      "개",
      "개구리",
      "개미핥기",
      "고릴라",
      "고양이",
      "곰",
      "꼬마곰",
      "늑대",
      "다람쥐",
      "닭",
      "독수리",
      "돼지",
      "말",
      "문어",
      "사슴",
      "사자",
      "새",
      "수소",
      "악어",
      "암소",
      "양",
      "염소",
      "오리",
      "원숭이",
      "쥐",
      "캥거루",
      "코끼리",
      "코뿔소",
      "코알라",
      "타조",
      "토끼",
      "펭귄",
      "하마",
      "햄스터",
      "호랑이",
    ],
    value: [
      16, 18, 7, 9, 23, 15, 16, 11, 18, 9, 9, 15, 15, 3, 10, 7, 13, 6, 7, 4, 13,
      8, 17, 8, 15, 8, 11, 6, 9, 10, 20, 13, 7, 8, 7,
    ],
    comment: `\
동물의 숲에는 정말 다양한 동물들이 사는데, 있을것 같은 동물은 대체로 있고,
없을 것 같은 동물도 좀 있고, 대체 저게 왜 다른 동물인지 모르겠는 것도 있습니다.
숫자는 동물의 인기와 개발 상황에 따라 그냥 제멋대로입니다.
동물의 최소존속가능집단(Minimum Viable Population)은 종마다 다르지만
가장 많은 동물인 고양이가 겨우 23마리인 것으로 보아 마을이 고립되면
멸망하거나 고양이, 개구리, 다람쥐 정도만 남을 것으로 보입니다.\
`,
  },
  {
    groupName: "personality",
    colName: [
      "느끼함",
      "무뚝뚝",
      "운동광",
      "먹보",
      "단순 활발",
      "아이돌",
      "성숙함",
      "친절함",
    ],
    value: [34, 55, 55, 60, 24, 49, 55, 59],
    comment: `\
동물의 숲에서는 성별마다 성격이 따로 있습니다.
남성은 느끼함, 먹보, 무뚝뚝, 운동광 중 하나입니다.
여성은 단순 활발, 성숙함, 아이돌, 친절함 중 하나입니다.\
`,
  },
  {
    groupName: "personality-by-gender",
    data: [
      { name: "느끼함", 여성: 0, 남성: 34, z: 0 },
      { name: "먹보", 여성: 0, 남성: 60, z: 0 },
      { name: "무뚝뚝", 여성: 0, 남성: 55, z: 0 },
      { name: "운동광", 여성: 0, 남성: 55, z: 0 },
      { name: "단순 활발", 여성: 24, 남성: 0, z: 0 },
      { name: "성숙함", 여성: 55, 남성: 0, z: 0 },
      { name: "아이돌", 여성: 49, 남성: 0, z: 0 },
      { name: "친절함", 여성: 59, 남성: 0, z: 0 },
    ],
    colName: [
      "느끼함",
      "먹보",
      "무뚝뚝",
      "운동광",
      "단순 활발",
      "성숙함",
      "아이돌",
      "친절함",
    ],
    value: [34, 60, 55, 55, 24, 55, 49, 59],
    female: [0, 0, 0, 0, 24, 55, 49, 59],
    male: [34, 60, 55, 55, 0, 0, 0, 0],
    comment: `\
동물의 숲에서는 성별마다 성격이 따로 있습니다.
남성은 느끼함, 먹보, 무뚝뚝, 운동광 중 하나입니다.
여성은 단순 활발, 성숙함, 아이돌, 친절함 중 하나입니다.\
`,
  },
  {
    groupName: "hobby",
    data: [
      { name: "교육", 여성: 32, 남성: 32 },
      { name: "놀이", 여성: 16, 남성: 49 },
      { name: "운동", 여성: 12, 남성: 54 },
      { name: "음악", 여성: 34, 남성: 30 },
      { name: "자연", 여성: 27, 남성: 39 },
      { name: "패션", 여성: 66, 남성: 0 },
    ],
    colName: ["교육", "놀이", "운동", "음악", "자연", "패션"],
    value: [64, 65, 66, 64, 66, 66],
    female: [32, 16, 12, 34, 27, 66],
    male: [32, 49, 54, 30, 39, 0],
    comment: `\
취미는 작정하고 나눠서 만든 듯 숫자가 딱 맞아 보이지만,
사실 성별 등으로 구분해서 살펴보면 보이는 것처럼 균일하지는 않습니다.\
`,
  },
  {
    groupName: "hobby-by-personality-느끼함",
    colName: ["음악", "교육", "자연", "운동", "놀이", "패션"],
    value: [14, 11, 5, 4, 0, 0],
    comment: `느끼한 캐릭터는 정적인 취미인 음악이나 교육을 좋아합니다.`,
  },
  {
    groupName: "hobby-by-personality-먹보",
    colName: ["놀이", "자연", "운동", "교육", "음악", "패션"],
    value: [32, 23, 4, 1, 0, 0],
    comment: `
먹보는 놀이를 즐기고 자연에 감사하는 단순하고 순수한 성격입니다.
그리고 무슨 말을 하면 비슷한 음식 이름으로 잘못 알아듣는 멍청한 녀석들이기도 합니다.\
`,
  },
  {
    groupName: "hobby-by-personality-무뚝뚝",
    colName: ["교육", "음악", "자연", "운동", "놀이", "패션"],
    value: [19, 13, 11, 10, 2, 0],
    comment: `
무뚝뚝은 특정 취미를 선호하는 경향은 강하지 않습니다. 그냥 아저씨들입니다.
다른 남성용 성격들과 마찬가지로 옷은 잘 입을 줄 모르나봅니다.\
`,
  },
  {
    groupName: "hobby-by-personality-운동광",
    colName: ["운동", "놀이", "음악", "교육", "자연", "패션"],
    value: [36, 15, 3, 1, 0, 0],
    comment: `\
운동광 캐릭터들은 성격에 맞게 다들 운동하거나 노는 것을 좋아합니다.
사실 게임에서 운동광 캐릭터들은 모든 것을 운동과 연결시켜서 이해하는 등 지능이 걱정되는 수준입니다.\
`,
  },
  {
    groupName: "hobby-by-personality-단순 활발",
    colName: ["음악", "놀이", "운동", "교육", "자연", "패션"],
    value: [11, 7, 6, 0, 0, 0],
    comment: `\
단순 활발한 캐릭터들은 복잡한 취미는 좋아하지 않습니다.
...라고 생각했는데 동물의 세계에서는 음악이 별로 복잡한 취미가 아닌가 봅니다.\
`,
  },
  {
    groupName: "hobby-by-personality-성숙함",
    colName: ["패션", "교육", "음악", "운동", "자연", "놀이"],
    value: [32, 10, 8, 3, 2, 0],
    comment: `성숙함 성격은 다른 말로는 패션광입니다.`,
  },
  {
    groupName: "hobby-by-personality-아이돌",
    colName: ["패션", "놀이", "음악", "운동", "자연", "교육"],
    value: [31, 9, 5, 3, 1, 0],
    comment: `\
아이돌이니까 역시 패션에 관심이 많은 것 같습니다.
나이가 어려서 그런가 노는 것도 좋아합니다.
그런데 음악에 별 관심이 없는 걸 보면 동물 아이돌은 전부 립싱크를 하는가 봅니다.
음악에 관심이 없어도 자기 노래는 들을까요?
물론 아이돌은 성격 이름일 뿐 아이돌 캐릭터들이 실제로 아이돌인 것은 아닙니다.
`,
  },
  {
    groupName: "style",
    colName: ["고져스", "액티브", "엘레강스", "큐트", "쿨", "심플"],
    value: [38, 50, 54, 63, 68, 118],
  },
  {
    groupName: "popularity-by-species",
    xLabels: [
      "문어",
      "사슴",
      "고양이",
      "꼬마곰",
      "늑대",
      "코뿔소",
      "양",
      "개",
      "염소",
      "오리",
      "다람쥐",
      "독수리",
      "타조",
      "펭귄",
      "말",
      "개구리",
      "토끼",
      "햄스터",
      "코알라",
      "코끼리",
      "호랑이",
      "악어",
      "곰",
      "사자",
      "원숭이",
      "돼지",
      "쥐",
      "암소",
      "닭",
      "개미핥기",
      "캥거루",
      "수소",
      "하마",
      "새",
      "고릴라",
    ],
    yLabels: [1, 2, 3, 4, 5, 6],
    // data: [
    //   [66.67, 0.0, 33.33, 0.0, 0.0, 0.0],
    //   [10.0, 30.0, 30.0, 30.0, 0.0, 0.0],
    //   [8.7, 26.09, 17.39, 17.39, 21.74, 8.7],
    //   [18.75, 6.25, 6.25, 12.5, 31.25, 25.0],
    //   [0.0, 18.18, 36.36, 27.27, 18.18, 0.0],
    //   [16.67, 0.0, 0.0, 16.67, 50.0, 16.67],
    //   [0.0, 15.38, 0.0, 7.69, 38.46, 38.46],
    //   [0.0, 12.5, 18.75, 25.0, 25.0, 18.75],
    //   [12.5, 0.0, 25.0, 25.0, 0.0, 37.5],
    //   [0.0, 11.76, 0.0, 17.65, 17.65, 52.94],
    //   [5.56, 5.56, 11.11, 22.22, 33.33, 22.22],
    //   [0.0, 11.11, 0.0, 0.0, 33.33, 55.56],
    //   [0.0, 10.0, 0.0, 20.0, 40.0, 30.0],
    //   [0.0, 7.69, 0.0, 30.77, 30.77, 30.77],
    //   [0.0, 6.67, 6.67, 6.67, 26.67, 53.33],
    //   [0.0, 5.56, 5.56, 5.56, 44.44, 38.89],
    //   [5.0, 0.0, 10.0, 15.0, 50.0, 20.0],
    //   [0.0, 0.0, 37.5, 12.5, 25.0, 25.0],
    //   [0.0, 0.0, 11.11, 33.33, 55.56, 0.0],
    //   [0.0, 0.0, 9.09, 18.18, 27.27, 45.45],
    //   [0.0, 0.0, 0.0, 28.57, 28.57, 42.86],
    //   [0.0, 0.0, 0.0, 28.57, 14.29, 57.14],
    //   [0.0, 0.0, 0.0, 20.0, 20.0, 60.0],
    //   [0.0, 0.0, 0.0, 14.29, 14.29, 71.43],
    //   [0.0, 0.0, 0.0, 12.5, 50.0, 37.5],
    //   [0.0, 0.0, 0.0, 7.14, 7.14, 85.71],
    //   [0.0, 0.0, 0.0, 6.67, 26.67, 66.67],
    //   [0.0, 0.0, 0.0, 0.0, 75.0, 25.0],
    //   [0.0, 0.0, 0.0, 0.0, 44.44, 55.56],
    //   [0.0, 0.0, 0.0, 0.0, 42.86, 57.14],
    //   [0.0, 0.0, 0.0, 0.0, 37.5, 62.5],
    //   [0.0, 0.0, 0.0, 0.0, 33.33, 66.67],
    //   [0.0, 0.0, 0.0, 0.0, 28.57, 71.43],
    //   [0.0, 0.0, 0.0, 0.0, 23.08, 76.92],
    //   [0.0, 0.0, 0.0, 0.0, 11.11, 88.89],
    // ],
    data: [
      [
        66.67, 10.0, 8.7, 18.75, 0.0, 16.67, 0.0, 0.0, 12.5, 0.0, 5.56, 0.0,
        0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        0.0, 30.0, 26.09, 6.25, 18.18, 0.0, 15.38, 12.5, 0.0, 11.76, 5.56,
        11.11, 10.0, 7.69, 6.67, 5.56, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        33.33, 30.0, 17.39, 6.25, 36.36, 0.0, 0.0, 18.75, 25.0, 0.0, 11.11, 0.0,
        0.0, 0.0, 6.67, 5.56, 10.0, 37.5, 11.11, 9.09, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        0.0, 30.0, 17.39, 12.5, 27.27, 16.67, 7.69, 25.0, 25.0, 17.65, 22.22,
        0.0, 20.0, 30.77, 6.67, 5.56, 15.0, 12.5, 33.33, 18.18, 28.57, 28.57,
        20.0, 14.29, 12.5, 7.14, 6.67, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [
        0.0, 0.0, 21.74, 31.25, 18.18, 50.0, 38.46, 25.0, 0.0, 17.65, 33.33,
        33.33, 40.0, 30.77, 26.67, 44.44, 50.0, 25.0, 55.56, 27.27, 28.57,
        14.29, 20.0, 14.29, 50.0, 7.14, 26.67, 75.0, 44.44, 42.86, 37.5, 33.33,
        28.57, 23.08, 11.11,
      ],
      [
        0.0, 0.0, 8.7, 25.0, 0.0, 16.67, 38.46, 18.75, 37.5, 52.94, 22.22,
        55.56, 30.0, 30.77, 53.33, 38.89, 20.0, 25.0, 0.0, 45.45, 42.86, 57.14,
        60.0, 71.43, 37.5, 85.71, 66.67, 25.0, 55.56, 57.14, 62.5, 66.67, 71.43,
        76.92, 88.89,
      ],
    ],
    comment: `\
대체로 귀엽거나 친숙한 동물일수록 인기가 많은 경향이 미약하게 있습니다.
하지만 일반적으로 귀엽다고 여겨지는 동물이더라도 게임에서의 종족 디자인이나
개별 캐릭터의 디자인에 따라 생김새가 천차만별이기 때문에
일반화하기에는 무리가 있습니다.
`,
  },
  {
    groupName: "popularity-by-gender",
    colName: [1, 2, 3, 4, 5, 6],
    female: [3.2, 7.5, 9.7, 16, 31, 32.6],
    male: [2.9, 4.9, 5.4, 12.3, 27.2, 47.3],
    comment: `\
각 인기도 티어에 속한 여성/남성 주민의 비율을 도표화한 자료입니다.
여성 캐릭터가 인기가 많은 경향이 뚜렷합니다. 여성 캐릭터들이 귀엽기 때문입니다.
성격이나 취미는 인기도와 전혀 관련이 없었습니다.
이로써 인기도 투표는 더러운 외모지상주의가 점령했다는 사실을 알 수 있습니다.
여러분은 동물의 숲에서 남자로 태어나지 마세요.\
`,
  },
];
