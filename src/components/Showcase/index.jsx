import Cart from '../cart'
import CartProduts from '../CartProduts'
import styles from './style.module.css'
export default function Showcase({children, cartProduts, setCartProduts}){
    return (
        <div className={styles.container}>
            <main className={styles.containerVitrine}>
                <div>
                    <ul className={styles.ul}>
                        {children}
                    </ul>
                </div>
            </main>
            <section>
                <div className={styles.cartText}>
                    <h2>Carrinho de compras</h2>
                </div>
                {cartProduts.length === 0 ? <Cart/>:<CartProduts cartProduts={cartProduts} setCartProduts={setCartProduts}/>}
            </section>
        </div>
    )
}