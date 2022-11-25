import { numWord } from "@/components/utils/numWord";
import { Row, Col } from "antd";
import { FC } from "react";

interface ICountItem{number?:number, title:string}

const CountItem:FC<ICountItem>=({number,title})=>{
    return(
        <Col span={4}>
            <b>{number || 0}</b>
            <div>{numWord(number || 0,[title])}</div>
        </Col>
    )
}
export default CountItem;