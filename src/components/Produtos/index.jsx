import styles from "./style.module.css"
export default function Produts ({produtsList, setCartProduts, cartProduts}) {  
    function addCartProduts (item){
        const test = cartProduts.find((element)=> element.id === item.id);
        if (test === undefined)
        setCartProduts([...cartProduts,item])
    }
    return (
        <>
            {produtsList.map((element)=>
                <li key={element.id} className={styles.card}>
                    <figure>
                        <img src={element.img} alt={element.name}/>
                    </figure>
                    <main>
                        <h3>{element.name}</h3>
                        <p>{element.category}</p>
                        <strong>R${element.price}</strong>
                        <button onClick={()=> addCartProduts({
                        id      : element.id,
                        name    : element.name,
                        price   : element.price,
                        image   : element.img,
                        category: element.category})}>Adicionar</button>
                    </main>
                </li>
            )}
        </>
    )
}