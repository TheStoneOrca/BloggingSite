import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faCode,
  faHeader,
  faItalic,
} from "@fortawesome/free-solid-svg-icons";

export default function BlogButtons({ editor }: any) {
  return (
    <div>
      <div className="flex w-[600px]">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={editor.isActive("heading", { level: 1 }) ? "mr-2" : "mr-2"}
          type="button"
        >
          <FontAwesomeIcon icon={faHeader} />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editor.isActive("heading", { level: 2 }) ? "mr-2" : "mr-2"}
          type="button"
        >
          h2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("code") ? "mr-2" : "mr-2"}
          type="button"
        >
          <FontAwesomeIcon icon={faCode} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className="mr-2"
          type="button"
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          type="button"
          className="mr-1"
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
      </div>
    </div>
  );
}
