let a = process.argv.slice(2).reduce((sum , item) => {
    return sum = Number(sum)+(Number(item))
})
console.log(a)