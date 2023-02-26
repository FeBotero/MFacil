import * as S from "./styles"
import { Link } from "react-router-dom";




export function Header(){
    return(
        <S.Container>
            <Link to="/"><S.Logo>MFacil</S.Logo></Link>
            
            <Link to="/login"><button >Login</button></Link>
            
        </S.Container>
    )
}