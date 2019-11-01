import React,{useState,useEffect} from 'react'
import 'isomorphic-fetch'
import Layout from '@components/Layout/Layout'
import styles from './product.scss'


const Product = ({product})=>{

    const addToCart = async e => {
        console.log('addTOCart')
        console.log(product)

 /*       
        if (!styleId || !quantity) {
            setModalContent({
                content: '請選擇顏色數量',
                cancelText: null,
                onClose: () => setModalContent(null)
            })
            console.log('addtocart=======')
            //return
        }
    */  
   /*  
        console.log('after styleId')

        const result = await fetch('/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                goodId: product.goodId,
                
            })
        })
        const { isSuccess, errorMsg } = await result.json()
        console.log('-----------------------------++++=++')
        console.log(result.json())
        console.log(isSuccess)
        console.log(errorMsg)
*/
        location.href = '/cart'
        
        if (isSuccess) {
            location.href = '/cart'
        } else {
            setModalContent({
                content: errorMsg,
                cancelText: null
            })
        }
    }


    return (
        <Layout>
            <div className={styles.productDetail}>
            <img src={product.product.image} />
            </div>

            <div className={styles.footerBar}>
            
            <button className={styles.checkoutBtn} onClick={addToCart}>
                立即購買
            </button>
        </div>
        </Layout>

        
    )
}

Product.getInitialProps = async ({ req, query }) => {
    console.log('query: ', query);
    const res = await fetch(`https://flask-shopping.herokuapp.com/api/v1/product/${query.productId}`)
    const json = await res.json()
    console.log('json: ', json);
    return { product: json }
}
export default Product 