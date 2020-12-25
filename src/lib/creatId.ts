let id: number = parseInt(window.localStorage.getItem('_idMax') || "0")||0;
function creatId() {
    id++
    return id
}
export default creatId