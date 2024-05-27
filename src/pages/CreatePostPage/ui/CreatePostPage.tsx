import CreatePostForm from "features/PostsOperations/ui/CreatePostForm/CreatePostForm";
import style from "./CreatePostPage.module.scss";

const CreatePostPage = () => {
  return (
    <div className={`section ${style.CreatePostPage}`}>
      <CreatePostForm></CreatePostForm>
    </div>
  );
};

export default CreatePostPage;
