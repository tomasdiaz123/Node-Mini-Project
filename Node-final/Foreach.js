Array.prototype.asyncForEach = async function (myFunction) {
    for (i = 0; i < this.length; i++) {
        await myFunction(this[i])
    }
}
/*(textoS)=>{console.log("<h2>"+{texto}+"</h2>")*/