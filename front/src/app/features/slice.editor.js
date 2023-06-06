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

export const sliceEditor = createSlice({
	name: "editor",
	initialState,
	reducers: {
		setNavigation: (state, action) => {
			state.navigation = action.payload;
		},
	},
});

export const { setNavigation } = sliceEditor.actions;

export default sliceEditor.reducer;
