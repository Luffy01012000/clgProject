interface Test{
    statusCode:number;
    data:any;
    message: string;
    success: boolean;
}
class ApiResponse implements Test{
    statusCode: number;
    data: any;
    message: string;
    success: boolean;
constructor(
    statusCode:number,
    data:any,
    message="Success",
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 //we will send statuscode lower than 400 because it is response.Above it will be apierror

    }
}

export default ApiResponse;
// export {ApiResponse};