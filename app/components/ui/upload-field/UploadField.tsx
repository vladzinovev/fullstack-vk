import { FC } from "react"
import { IUploadField } from "./upload-field.interface";
import styles from './UploadField.module.scss';
import { useUploadFile } from "./useUploadFile";

const UploadField:FC<IUploadField>=({Button, onChange, folder})=>{
    const {uploadFile}=useUploadFile(onChange, folder)
    return(
        <div className={styles.file}>
            <label>
                {Button}
                <input type="file" onChange={uploadFile}/>
            </label>
        </div>
    )
}

export default UploadField;