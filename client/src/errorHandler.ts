import { Response} from "express"
const errorCode = 200;
export const errorHandler = (response:Response)=>{
    if(response.statusCode! == errorCode)
    {
        alert('hello')
    }
}