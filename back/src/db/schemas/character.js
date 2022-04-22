// import * as characters from "./characters.json";

const charactersMock = {
  admiral: {
    id: "admiral",
    special: false,
    name_en: "Admiral",
    name_ko: "일섭",
    image_icon: "https://acnhcdn.com/latest/NpcIcon/brd06.png",
    image_photo: "https://acnhcdn.com/latest/NpcBromide/NpcNmlBrd06.png",
    image_house:
      "https://acnhcdn.com/drivesync/render/houses/brd06_39_Admiral.png",
    species: "Bird",
    gender: "Male",
    gender_asia: "Male",
    personality: "Cranky",
    personality_subtype: "A",
    hobby: "Nature",
    birthday: "01-27",
    birthday_month: 1,
    birthday_day: 27,
    catchphrase: "aye aye",
    favorite_song: "Steep Hill",
    favorite_saying: "Only quitters give up.",
    styles: ["Cool"],
    colors: ["Black", "Blue"],
  },
  cyrus: {
    id: "cyrus",
    special: true,
    name_en: "Cyrus",
    name_ko: "리포",
    image_icon: "https://acnhcdn.com/latest/NpcIcon/alp.png",
    image_photo: "https://acnhcdn.com/latest/NpcPoster/NpcSpAlp.png",
    gender: "Male",
    gender_asia: "Male",
    birthday: "01-26",
    birthday_month: 1,
    birthday_day: 26,
  },
};

const characterNamesMock = {
  admiral: "일섭",
  cyrus: "리포",
};

const characters = Object.freeze(charactersMock);
const characterNames = Object.freeze(characterNamesMock);

export { characters, characterNames };
