import { SCPostSetting } from "./PostSetting.styled";

type TOPostSetting = {
    onEditClick:()=>void
    onDeleteClick:()=>void
}


export const PostSetting = ({onDeleteClick,onEditClick}:TOPostSetting) => {
    return (
        <SCPostSetting>
            <span onClick={onEditClick}>Изменить</span>
            <span onClick={onDeleteClick}>Удалить</span>
        </SCPostSetting>
    );
};

