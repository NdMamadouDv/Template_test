import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	navigation: {
		logo: "",
		isLogo: true,
		name: "",
		isName: true,
	},
	hero: {
		h1Title: "",
		h2Title: "",
		isH2Title: true,
		description: "",
	},
	firstSection: {},
	secondSection: {},
	thirdSection: {},
	footer: {
		h2: "",
		description: "",
		linkFacebook: "",
		linkInstagram: "",
		linkLinkedIn: "",
		linkTwitter: "",
		linkTiktok: "",
		linkLinktree: "",
		linkSnapchat: "",
		linkYoutube: "",
		linkTelegram: "",
		linkPinterest: "",
		linkReddit: "",
		linkDiscord: "",
		linkTwitch: "",
	},
};

export const editor = createSlice({
	name: "editior",
	initialState,
	reducers: {
		setNavigation: (state, action) => {
			state.navigation = action.payload;
		},
	},
});

export const { setPicturesData } = editor.actions;

export default editor.reducer;
