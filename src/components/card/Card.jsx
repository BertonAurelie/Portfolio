import {data} from '../../data/data'
import ModalCard from '../modalcard/ModalCard'

function Card() {
    return (
        <>
            {
                data.map((item) => <ModalCard item={item} key={item.id}/>)
            }                
        </>
    )
}
export default Card