
import { useParams } from "react-router-dom";
import { useLazyGetPostByIdQuery } from "../../store/Api/postApi";
import { Post } from "../../components/UI/Post/Post";
import { useEffect } from "react";


export const PostPage = () => {
    const [fetchGetPostTrigger, { data, isError, isLoading }] =
        useLazyGetPostByIdQuery();

    const { postId } = useParams();

    useEffect(() => {
        if (postId) {
            fetchGetPostTrigger(postId)
        }
    }, [postId]);

    return (<>

        {isError && <h1> Произошла ошибка...</h1>}
        {isLoading && <h1> Идёт загрузка...</h1>}
        {data && <Post
            mainText={data.message.main_text}
            regDate={data.message.reg_date}
            userName={data.message.user_fk.name}
        />}
    </>

    );
};
