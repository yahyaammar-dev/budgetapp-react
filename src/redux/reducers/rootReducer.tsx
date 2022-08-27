const arr:any= []
export const reducer = (state=[], action:any)=>{
  switch (action.type){
    case 'ITEMS':
      arr.push(action.items)
      return {arr};
  }
}