import { useSelector } from "react-redux";

const useEditor = () => {
	return useSelector((state) => state.editor);
};

export default useEditor;
