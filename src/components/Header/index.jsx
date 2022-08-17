import styles from './style.module.css'
export default function Header ({setFilter}){
    
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <strong>Burguer</strong>
                <p>Kenzie</p>
            </div>
                <div className={styles.filter}>
                    <div className={styles.sobreposicion}>
                        <input type="text" placeholder='Digitar Pesquisa' onChange={(event)=>setFilter(event.target.value)}/>
                        <button>Pesquisar</button>
                    </div>
                </div>
        </div>
    )
}