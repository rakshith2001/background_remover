import Header from "@/components/shared/Header"
const AddTransformationTypePage = ({params}:any) =>{
    console.log(params.type)
    return (
        <div>
            {params.type}
        </div>
    )
}
export default AddTransformationTypePage