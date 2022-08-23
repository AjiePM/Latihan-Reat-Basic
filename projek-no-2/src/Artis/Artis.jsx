import { useParams } from "react-router-dom";

const Artis= () =>{

    let nama_artis= useParams ()

    return (
        <>
            Masuk ke Post {nama_artis}
        </>
    )
    
}
export default Artis