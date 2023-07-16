import { Puff } from "react-loader-spinner";
import { StyleLoader } from "./Loader.styled";

export const Loader = () =>{
    return(
        <StyleLoader>
            <Puff
              height="80"
              width="80"
              radius={1}
              color="#3f51b5"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
        </StyleLoader>


    )
}
