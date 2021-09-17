export const wait = (ms:number,msg:string = 'Успех') => new Promise(res => {
    setTimeout(()=>{
        res(console.log(msg))
    },ms)
})