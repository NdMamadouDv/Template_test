import React from "react";
import EditorView from "./Editor.view";
import useEditor from "@/hooks/useEditor";

const EditorContainer = () => {
	const datas: any = useEditor();

	console.log(datas);

	return <EditorView />;
};

export default EditorContainer;
