import { useParams } from "react-router-dom";


const Artis= () =>{

    let nama_artis= useParams ()

    return (
        <>
            {nama_artis.nama_artis}
        </>
    )
    
}
export default Artis