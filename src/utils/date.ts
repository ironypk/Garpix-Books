export const formatDate = (date:Date):string =>{
    const y = date.getFullYear();
    const m = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth() + 1
    const d = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate()
    return `${y}-${m}-${d}`
}