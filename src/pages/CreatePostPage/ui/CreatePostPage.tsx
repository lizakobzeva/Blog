import CreatePostForm from "features/PostsOperations/ui/CreatePostForm/CreatePostForm";
import style from "./CreatePostPage.module.scss";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";

const CreatePostPage = () => {
  const { authData } = useSelector(getAuthData);
  return (
    <div className={`section ${style.CreatePostPage}`}>
      {authData?.id ? (
        <CreatePostForm></CreatePostForm>
      ) : (
        <h2>Log in to your account</h2>
      )}
    </div>
  );
};

export default CreatePostPage;
