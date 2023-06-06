/* ========= redux toolkit ========= */
import { configureStore } from "@reduxjs/toolkit";
/* ========= feature(s) ========= */
import { editor } from "./features/slice.editor";

/* ========= Store ========= */
export default configureStore({
	reducer: {
		editor,
	},
});
