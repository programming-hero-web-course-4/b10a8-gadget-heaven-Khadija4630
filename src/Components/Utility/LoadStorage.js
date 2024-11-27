const addToCart = () =>{
    const storedListCart =localStorage.getItem('gadget-list');
        if(storedListCart){
            const storedList=JSON.parse(storedListCart);
            return storedList;
        }
        else{
            return[];
        }
}

const addStoredGadgets = (id) =>{
    const storedList=addToCart();
    if (storedList.includes(id)){
        console.log(id,'already exists')
    }
    else{
        storedList.push(id);
        const storedListCart =JSON.stringify(storedList);
        localStorage.setItem('gadget-list',storedListCart);
    }
}

export  {addToCart,addStoredGadgets};
