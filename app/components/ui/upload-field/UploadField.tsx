import { FC } from "react"
import { IUploadField } from "./upload-field.interface";
import styles from './UploadField.module.scss';
import { useUploadFile } from "./useUploadFile";

const UploadField:FC<IUploadField>=({title, onChange, folder,setValue,setIsChosen})=>{
    const {uploadFile}=useUploadFile(onChange, folder,setValue,setIsChosen)
    return(
        <div className={styles.file}>
            {title && <h1>{title}</h1>}
            <label className="block">
                <span className="sr-only">Choose File</span>
                <input type="file"/>
            </label>
        </div>
    )
}

export default UploadField;